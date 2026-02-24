$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$appPath = Join-Path $root 'app.js'
$htmlPath = Join-Path $root 'Historia.html'

$dirs = @('assets/maps', 'assets/events', 'assets/gossip', 'assets/flags')
foreach ($d in $dirs) {
    $abs = Join-Path $root $d
    if (-not (Test-Path $abs)) {
        New-Item -Path $abs -ItemType Directory | Out-Null
    }
}

function Get-Ext([string]$url) {
    $path = ([uri]$url).AbsolutePath
    $ext = [System.IO.Path]::GetExtension($path)
    if ([string]::IsNullOrWhiteSpace($ext)) { return '.img' }
    return $ext.ToLowerInvariant()
}

function Download-IfNeeded([string]$url, [string]$relativePath) {
    $dest = Join-Path $root $relativePath
    if (Test-Path $dest) { return $true }
    try {
        Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing -TimeoutSec 60
        return $true
    }
    catch {
        Write-Host "FAILED: $relativePath <= $url"
        return $false
    }
}

$app = Get-Content -Path $appPath -Raw -Encoding UTF8
$html = Get-Content -Path $htmlPath -Raw -Encoding UTF8

$countryMatches = [regex]::Matches($app, "\{\s*iso:\s*'(?<iso>[^']+)'[\s\S]*?map:\s*'(?<url>https://[^']+)'\s*\}")
$mapReplacements = @{}
foreach ($m in $countryMatches) {
    $iso = $m.Groups['iso'].Value
    $url = $m.Groups['url'].Value
    $ext = Get-Ext $url
    $rel = "assets/maps/$iso$ext"
    [void](Download-IfNeeded $url $rel)
    $mapReplacements[$url] = $rel
}

$eventMatches = [regex]::Matches($app, "(?ms)^\s*(?<iso>[a-z]{2}):\s*\{[\s\S]*?eventImg:\s*'(?<url>https://[^']+)'")
$eventReplacements = @{}
foreach ($m in $eventMatches) {
    $iso = $m.Groups['iso'].Value
    $url = $m.Groups['url'].Value
    $ext = Get-Ext $url
    $rel = "assets/events/$iso$ext"
    [void](Download-IfNeeded $url $rel)
    $eventReplacements[$url] = $rel
}

$gossipMatches = [regex]::Matches($html, 'gossip-media-image"\s+src="(?<url>https://[^"]+)"')
$gossipReplacements = @{}
$gIdx = 1
foreach ($m in $gossipMatches) {
    $url = $m.Groups['url'].Value
    if ($gossipReplacements.ContainsKey($url)) { continue }
    $ext = Get-Ext $url
    $rel = "assets/gossip/gossip-$gIdx$ext"
    $gIdx++
    [void](Download-IfNeeded $url $rel)
    $gossipReplacements[$url] = $rel
}

$isoMatches = [regex]::Matches($app, "iso:\s*'(?<iso>[a-z]{2})'")
$isoSet = New-Object 'System.Collections.Generic.HashSet[string]'
foreach ($m in $isoMatches) {
    [void]$isoSet.Add($m.Groups['iso'].Value)
}
foreach ($iso in $isoSet) {
    $flagUrl = "https://flagcdn.com/w160/$iso.png"
    $flagRel = "assets/flags/$iso.png"
    [void](Download-IfNeeded $flagUrl $flagRel)
}

foreach ($url in $mapReplacements.Keys) {
    $app = $app -replace [regex]::Escape($url), $mapReplacements[$url]
}
foreach ($url in $eventReplacements.Keys) {
    $app = $app -replace [regex]::Escape($url), $eventReplacements[$url]
}

$app = $app -replace [regex]::Escape('https://flagcdn.com/w160/${country.iso}.png'), 'assets/flags/${country.iso}.png'

foreach ($url in $gossipReplacements.Keys) {
    $html = $html -replace [regex]::Escape($url), $gossipReplacements[$url]
}

Set-Content -Path $appPath -Value $app -Encoding UTF8
Set-Content -Path $htmlPath -Value $html -Encoding UTF8

Write-Host "Mapas: $($mapReplacements.Count)"
Write-Host "Eventos: $($eventReplacements.Count)"
Write-Host "Gossip: $($gossipReplacements.Count)"
Write-Host "Banderas: $($isoSet.Count)"
Write-Host 'DONE'
