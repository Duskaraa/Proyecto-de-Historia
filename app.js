const countries = [
    { iso: 'ht', name: 'Haití', start: 1791, end: 1804, desc: 'Primera nación independiente de América Latina, liderada por esclavos libertos.', map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Haiti%20in%20its%20region.svg' },
    { iso: 'ec', name: 'Ecuador', start: 1809, end: 1822, desc: 'Dio el Primer Grito de Independencia en Quito. Selló su libertad en la Batalla de Pichincha.', map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ecuador%20in%20its%20region.svg' },
    { iso: 'bo', name: 'Bolivia', start: 1809, end: 1825, desc: 'Inició con las revoluciones de Chuquisaca y La Paz. Concluyó tras las campañas de Bolívar y Sucre.', map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bolivia%20in%20its%20region.svg' },
    { iso: 'co', name: 'Colombia', start: 1810, end: 1819, desc: 'Comenzó en Bogotá y se consolidó militarmente de forma decisiva en la Batalla de Boyacá.', map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Colombia%20in%20its%20region.svg' },
    { iso: 'ar', name: 'Argentina', start: 1810, end: 1816, desc: 'Arrancó con la Revolución de Mayo y declaró formalmente su independencia en Tucumán.', map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Argentina%20in%20its%20region.svg' },
    { iso: 'cl', name: 'Chile', start: 1810, end: 1818, desc: 'Inició con la Primera Junta de Gobierno y aseguró su emancipación en la Batalla de Maipú.', map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chile%20in%20its%20region.svg' },
    { iso: 'mx', name: 'México', start: 1810, end: 1821, desc: 'Iniciado por el Grito de Dolores de Miguel Hidalgo y consumado por el Ejército Trigarante.', map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mexico%20in%20its%20region.svg' },
    { iso: 'py', name: 'Paraguay', start: 1811, end: 1811, desc: 'Logró su independencia política de España de forma temprana y sin gran derramamiento de sangre.', map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Paraguay%20in%20its%20region.svg' },
    { iso: 've', name: 'Venezuela', start: 1811, end: 1823, desc: 'Firmó su acta en 1811 y libró una dura guerra, culminando en la Batalla naval del Lago de Maracaibo.', map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Venezuela%20in%20its%20region.svg' },
    { iso: 'pe', name: 'Perú', start: 1811, end: 1824, desc: 'Proclamada por San Martín en 1821, garantizada finalmente en la decisiva Batalla de Ayacucho.', map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Peru%20in%20its%20region.svg' },
    { iso: 'sv', name: 'El Salvador', start: 1811, end: 1821, desc: 'Sede del Primer Grito de Independencia de Centroamérica.', map: 'https://commons.wikimedia.org/wiki/Special:FilePath/El%20Salvador%20in%20its%20region.svg' },
    { iso: 'uy', name: 'Uruguay', start: 1811, end: 1828, desc: 'Inició con el Grito de Asencio y se consolidó internacionalmente en la Convención Preliminar de Paz.', map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Uruguay%20in%20its%20region.svg' },
    { iso: 'ni', name: 'Nicaragua', start: 1811, end: 1821, desc: 'Se independizó de España pacíficamente como parte de la Capitanía General de Guatemala.', map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nicaragua%20in%20its%20region.svg' },
    { iso: 'hn', name: 'Honduras', start: 1821, end: 1821, desc: 'Se emancipó pacíficamente firmando el Acta de Independencia de América Central.', map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Honduras%20in%20its%20region.svg' },
    { iso: 'gt', name: 'Guatemala', start: 1821, end: 1821, desc: 'Como centro político regional, lideró la firma del acta que independizó a Centroamérica.', map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Guatemala%20in%20its%20region.svg' },
    { iso: 'cr', name: 'Costa Rica', start: 1821, end: 1821, desc: 'Redactó el Pacto de Concordia para definir su autogobierno al recibir la noticia regional.', map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Costa%20Rica%20in%20its%20region.svg' },
    { iso: 'pa', name: 'Panamá', start: 1821, end: 1821, desc: 'Declaró su independencia de España y decidió unirse voluntariamente a la Gran Colombia.', map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Panama%20in%20its%20region.svg' },
    { iso: 'br', name: 'Brasil', start: 1822, end: 1822, desc: 'El príncipe Pedro pronunció el Grito de Ipiranga, separándose de Portugal para formar el Imperio.', map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Brazil%20in%20its%20region.svg' },
    { iso: 'do', name: 'República Dominicana', start: 1844, end: 1865, desc: 'Se independizó de Haití en 1844 y libró la Guerra de Restauración contra España.', map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dominican%20Republic%20in%20its%20region.svg' },
    { iso: 'cu', name: 'Cuba', start: 1868, end: 1898, desc: 'Tras tres guerras que iniciaron en Yara, logró su independencia de España.', map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cuba%20in%20its%20region.svg' }
];

const MAP_FALLBACK = `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#e2e8f0"/><stop offset="100%" stop-color="#cbd5e1"/></linearGradient></defs><rect width="1200" height="700" fill="url(#g)"/><rect x="34" y="34" width="1132" height="632" rx="28" fill="#f8fafc" stroke="#94a3b8" stroke-width="4"/><text x="600" y="330" text-anchor="middle" font-family="Outfit, Arial, sans-serif" font-size="52" font-weight="800" fill="#0f172a">Mapa no disponible</text><text x="600" y="392" text-anchor="middle" font-family="Outfit, Arial, sans-serif" font-size="30" fill="#334155">Reintenta con conexión estable</text></svg>')}`;

const processDetails = {
    ht: { leaders: 'Toussaint Louverture, Jean-Jacques Dessalines y población esclavizada afrodescendiente organizada.', social: 'Abolió la esclavitud y transformó el orden racial colonial, aunque enfrentó aislamiento internacional y crisis económica.' },
    ec: { leaders: 'Criollos quiteños, intelectuales locales y ejército independentista de Sucre.', social: 'Fortaleció instituciones republicanas, pero se mantuvieron desigualdades para población indígena y rural.' },
    bo: { leaders: 'Juntas de Chuquisaca y La Paz, guerrillas locales y campañas de Bolívar y Sucre.', social: 'Se rompió el control colonial y surgió el nuevo Estado, aunque la estructura social jerárquica cambió lentamente.' },
    co: { leaders: 'Cabildos criollos, Simón Bolívar, Francisco de Paula Santander y ejércitos patriotas.', social: 'Amplió la ciudadanía política formal, pero persistieron brechas entre élites y sectores populares.' },
    ar: { leaders: 'Junta de Mayo, Manuel Belgrano, José de San Martín y sectores criollos urbanos.', social: 'Consolidó un proyecto nacional y reformas estatales, aunque la distribución del poder siguió concentrada.' },
    cl: { leaders: 'Primera Junta de Gobierno, Bernardo O’Higgins, José de San Martín y milicias patriotas.', social: 'Impulsó modernización institucional y educativa, pero con continuidad de desigualdades sociales en el campo.' },
    mx: { leaders: 'Miguel Hidalgo, José María Morelos, Vicente Guerrero y sectores campesinos, indígenas y mestizos.', social: 'Eliminó el régimen virreinal y castas legales, aunque muchas desigualdades económicas persistieron.' },
    py: { leaders: 'Fulgencio Yegros, Pedro Juan Caballero y élites criollas locales apoyadas por milicias.', social: 'Aumentó la autonomía política temprana y fortaleció identidad nacional, con cambios sociales graduales.' },
    ve: { leaders: 'Francisco de Miranda, Simón Bolívar, llaneros y diversos sectores patriotas.', social: 'Abrió paso al Estado republicano, pero la guerra prolongada dejó crisis social y económica.' },
    pe: { leaders: 'José de San Martín, Simón Bolívar, Antonio José de Sucre y redes patriotas locales.', social: 'Terminó el dominio español en el núcleo virreinal; los cambios en inclusión social fueron lentos.' },
    sv: { leaders: 'José Matías Delgado, Manuel José Arce y sectores criollos y urbanos centroamericanos.', social: 'Fortaleció la autonomía regional, pero continuaron desigualdades en propiedad y participación política.' },
    uy: { leaders: 'José Gervasio Artigas, caudillos locales y milicias orientales.', social: 'Consolidó soberanía estatal y pactos políticos, aunque persistieron tensiones entre élites y sectores rurales.' },
    ni: { leaders: 'Autoridades municipales, élites criollas y redes políticas de la Capitanía de Guatemala.', social: 'Hubo cambio de soberanía política, mientras la estructura social heredada varió de forma paulatina.' },
    hn: { leaders: 'Firmantes del Acta Centroamericana y élites locales vinculadas a cabildos.', social: 'Permitió autogobierno formal, pero la participación social amplia se desarrolló con el tiempo.' },
    gt: { leaders: 'José Cecilio del Valle, Gabino Gaínza y grupos criollos del centro político regional.', social: 'Dirigió la transición institucional centroamericana, manteniendo inicialmente estructuras sociales coloniales.' },
    cr: { leaders: 'Ayuntamientos locales, firmantes del Pacto de Concordia y sectores civiles de la provincia.', social: 'Estableció bases de organización republicana y consenso político temprano, con reformas sociales progresivas.' },
    pa: { leaders: 'José de Fábrega, élites istmeñas y cabildo de Panamá.', social: 'Redefinió su integración política regional, aunque los cambios sociales estructurales fueron graduales.' },
    br: { leaders: 'Pedro I, élites brasileñas y sectores militares favorables a la separación de Portugal.', social: 'Mantuvo continuidad monárquica inicial; la esclavitud persistió por décadas pese a la independencia política.' },
    do: { leaders: 'Juan Pablo Duarte, La Trinitaria, Ramón Matías Mella y Francisco del Rosario Sánchez.', social: 'Consolidó identidad nacional dominicana y soberanía, tras conflictos prolongados por estabilidad política.' },
    cu: { leaders: 'Carlos Manuel de Céspedes, José Martí, Antonio Maceo y movimientos independentistas civiles y militares.', social: 'La independencia aceleró cambios políticos y nacionales, pero con fuerte influencia externa posterior.' }
};

const grid = document.getElementById('timeline-grid');
const wrapper = document.getElementById('timeline-wrapper');
const lassoPath = document.getElementById('lasso-path');
const overlay = document.getElementById('overlay');
const panel = document.getElementById('detail-panel');
const closeButton = document.getElementById('btn-close');
const startScreen = document.getElementById('start-screen');
const timelineView = document.getElementById('timeline-view');
const gossipView = document.getElementById('gossip-view');
const siteNav = document.getElementById('site-nav');
const siteFooter = document.querySelector('.site-footer');

const btnGoGossip = document.getElementById('btn-go-gossip');
const btnGoTimeline = document.getElementById('btn-go-timeline');
const btnGoTimelineFromGossip = document.getElementById('btn-go-timeline-from-gossip');
const btnBackHome = document.getElementById('btn-back-home');
const btnHomeTimeline = document.getElementById('btn-home-timeline');
const btnOpenFinalQuestion = document.getElementById('btn-open-final-question');
const btnCloseFinalQuestion = document.getElementById('btn-close-final-question');
const btnPanelOpenFinalQuestion = document.getElementById('btn-panel-open-final-question');

const finalQuestionPanel = document.getElementById('final-question-panel');
const panelFinalQuestionCtaWrap = document.getElementById('panel-final-question-cta-wrap');

const panelTitle = document.getElementById('panel-title');
const panelDates = document.getElementById('panel-dates');
const panelDesc = document.getElementById('panel-desc');
const panelLeaders = document.getElementById('panel-leaders');
const panelSocial = document.getElementById('panel-social');
const panelFlag = document.getElementById('panel-flag');
const panelMap = document.getElementById('panel-map');

const statCountries = document.getElementById('stat-countries');
const statRange = document.getElementById('stat-range');
const statProgress = document.getElementById('stat-progress');

let pathLength = 0;
let nodePathStops = [];
let lineStep = 0;
let lastOpenedIndex = null;
let panelCloseTimeoutId = null;
let lineAdvanceTimeoutId = null;
let panelRevealTimeoutId = null;
let currentColumns = 0;
let resizeTimerId = null;
let scrollLockPreviousPaddingRight = '';
let panelTransitionToken = 0;

function lockBodyScroll() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    scrollLockPreviousPaddingRight = document.body.style.paddingRight;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
}

function unlockBodyScroll() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = scrollLockPreviousPaddingRight;
}

function showStartScreen() {
    startScreen.classList.remove('hidden');
    timelineView.classList.add('hidden');
    gossipView.classList.add('hidden');
    siteNav.classList.add('hidden');
    siteFooter.classList.add('hidden');
    finalQuestionPanel.classList.add('hidden');
    closePanel();
}

function showTimelineView() {
    startScreen.classList.add('hidden');
    timelineView.classList.remove('hidden');
    gossipView.classList.add('hidden');
    siteNav.classList.remove('hidden');
    siteFooter.classList.remove('hidden');

    window.requestAnimationFrame(() => {
        ensureTimelineLayout();
        applyLineProgress();
    });
}

function showGossipView() {
    startScreen.classList.add('hidden');
    timelineView.classList.add('hidden');
    gossipView.classList.remove('hidden');
    siteNav.classList.remove('hidden');
    siteFooter.classList.remove('hidden');
    closePanel();
}

function openFinalQuestion() {
    finalQuestionPanel.classList.remove('hidden');
    finalQuestionPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closeFinalQuestion() {
    finalQuestionPanel.classList.add('hidden');
}

function openFinalQuestionFromPanel() {
    const delay = panel.classList.contains('active') ? 680 : 0;
    closePanel();
    window.setTimeout(() => openFinalQuestion(), delay);
}

function updateStats() {
    const minYear = Math.min(...countries.map((item) => item.start));
    const maxYear = Math.max(...countries.map((item) => item.end));
    statCountries.textContent = `${countries.length} países`;
    statRange.textContent = `${minYear} - ${maxYear}`;
    statProgress.textContent = `0/${countries.length} hitos`;
}

function updateProgressLabel() {
    statProgress.textContent = `${lineStep}/${countries.length} hitos`;
}

function setNodeVisualState() {
    countries.forEach((country, index) => {
        const node = document.getElementById(`node-${country.iso}`);
        if (!node) return;

        if (index < lineStep) {
            node.classList.add('active', 'lit');
        } else {
            node.classList.remove('active', 'lit', 'shock');
        }
    });
}

function applyLineProgress() {
    if (pathLength <= 0) return;

    let drawLength = 0;
    if (lineStep > 0) {
        const stopIndex = Math.min(lineStep - 1, nodePathStops.length - 1);
        drawLength = nodePathStops[stopIndex] ?? 0;
    }

    lassoPath.style.strokeDashoffset = Math.max(0, pathLength - drawLength);
    setNodeVisualState();
    updateProgressLabel();
}

function setLineStep(nextStep) {
    lineStep = Math.max(0, Math.min(countries.length, nextStep));
    applyLineProgress();
}

function setLineTransitionDuration(durationSeconds) {
    lassoPath.style.setProperty('--line-progress-duration', `${durationSeconds}s`);
}

function triggerNodeShock(nodeIndex) {
    const country = countries[nodeIndex];
    if (!country) return;

    const node = document.getElementById(`node-${country.iso}`);
    if (!node) return;

    node.classList.add('lit');
    node.classList.remove('shock');
    void node.offsetWidth;
    node.classList.add('shock');

    window.setTimeout(() => {
        node.classList.remove('shock');
    }, 760);
}

function clearMotionTimers() {
    panelTransitionToken += 1;

    if (lineAdvanceTimeoutId !== null) {
        clearTimeout(lineAdvanceTimeoutId);
        lineAdvanceTimeoutId = null;
    }
    if (panelRevealTimeoutId !== null) {
        clearTimeout(panelRevealTimeoutId);
        panelRevealTimeoutId = null;
    }
}

function fillPanelContent(country, countryIndex) {
    panelTitle.textContent = country.name;
    panelDates.textContent = `Proceso: ${country.start} - ${country.end}`;
    panelDesc.textContent = country.desc;

    const detail = processDetails[country.iso];
    panelLeaders.textContent = detail?.leaders ?? 'Liderazgo y participación social en revisión.';
    panelSocial.textContent = detail?.social ?? 'Impacto social en revisión.';

    panelFinalQuestionCtaWrap.classList.toggle('hidden', countryIndex !== countries.length - 1);
    panelFlag.src = `https://flagcdn.com/w160/${country.iso}.png`;
    panelFlag.alt = `Bandera de ${country.name}`;

    panelMap.onerror = () => {
        panelMap.onerror = null;
        panelMap.src = MAP_FALLBACK;
    };
    panelMap.src = country.map;
    panelMap.alt = `Mapa histórico de ${country.name}`;

}

function closePanelImmediate() {
    overlay.classList.remove('active');
    panel.classList.remove('active', 'closing', 'content-visible');
    panelMap.src = '';
    unlockBodyScroll();

    if (panelCloseTimeoutId !== null) {
        clearTimeout(panelCloseTimeoutId);
        panelCloseTimeoutId = null;
    }
}

function getColumns() {
    const width = window.innerWidth;
    if (width < 540) return 2;
    if (width < 860) return 3;
    if (width < 1160) return 4;
    return 5;
}

function ensureTimelineLayout(force = false) {
    const columns = getColumns();
    if (force || columns !== currentColumns || grid.children.length === 0) {
        currentColumns = columns;
        buildLayout(columns);
        return;
    }
    window.requestAnimationFrame(drawRibbon);
}

function buildLayout(columns) {
    grid.innerHTML = '';

    const rows = [];
    for (let index = 0; index < countries.length; index += columns) {
        rows.push(countries.slice(index, index + columns));
    }

    const fragment = document.createDocumentFragment();

    rows.forEach((row, rowIndex) => {
        const rowElement = document.createElement('div');
        rowElement.className = 'timeline-row';
        if (rowIndex % 2 !== 0) {
            rowElement.classList.add('reverse');
        }

        row.forEach((country, columnIndex) => {
            const countryIndex = rowIndex * columns + columnIndex;
            const node = document.createElement('button');
            node.type = 'button';
            node.className = 'node';
            node.id = `node-${country.iso}`;
            node.dataset.countryIndex = String(countryIndex);
            node.setAttribute('aria-label', `${country.name}, ${country.start} a ${country.end}`);

            node.innerHTML = `
                <div class="node-circle" id="circle-${country.iso}">${countryIndex + 1}</div>
                <img class="node-flag" src="https://flagcdn.com/w160/${country.iso}.png" alt="Bandera de ${country.name}" loading="lazy">
                <div class="node-info">
                    <h3 class="node-country">${country.name}</h3>
                    <div class="node-year">${country.start} - ${country.end}</div>
                </div>
            `;

            rowElement.appendChild(node);
        });

        fragment.appendChild(rowElement);
    });

    grid.appendChild(fragment);
    window.requestAnimationFrame(drawRibbon);
}

function drawRibbon() {
    const wrapperRect = wrapper.getBoundingClientRect();
    let pathData = '';
    const centers = [];

    countries.forEach((country, index) => {
        const circle = document.getElementById(`circle-${country.iso}`);
        if (!circle) return;

        const rect = circle.getBoundingClientRect();
        const x = rect.left + rect.width / 2 - wrapperRect.left;
        const y = rect.top + rect.height / 2 - wrapperRect.top;
        centers.push({ x, y });

        if (index === 0) {
            pathData += `M ${x} ${y} `;
            return;
        }

        const previousCenter = centers[index - 1];
        const previousX = previousCenter.x;
        const previousY = previousCenter.y;

        if (Math.abs(previousY - y) < 10) {
            pathData += `L ${x} ${y} `;
            return;
        }

        const bulge = previousX > wrapperRect.width / 2 ? 92 : -92;
        pathData += `C ${previousX + bulge} ${previousY}, ${x + bulge} ${y}, ${x} ${y} `;
    });

    lassoPath.setAttribute('d', pathData);
    pathLength = lassoPath.getTotalLength();
    lassoPath.style.strokeDasharray = pathLength;
    nodePathStops = calculateNodeStops(centers);
    applyLineProgress();
}

function calculateNodeStops(centers) {
    if (pathLength <= 0) return [];

    const sampleStep = 6;
    return centers.map((center) => {
        let closestLength = 0;
        let minDistance = Number.POSITIVE_INFINITY;

        for (let length = 0; length <= pathLength; length += sampleStep) {
            const point = lassoPath.getPointAtLength(length);
            const dx = point.x - center.x;
            const dy = point.y - center.y;
            const distance = dx * dx + dy * dy;
            if (distance < minDistance) {
                minDistance = distance;
                closestLength = length;
            }
        }

        return closestLength;
    });
}

function openPanel(country, countryIndex) {
    lastOpenedIndex = countryIndex;
    clearMotionTimers();
    closePanelImmediate();
    const transitionToken = panelTransitionToken;

    const targetStep = countryIndex + 1;
    const delta = Math.abs(targetStep - lineStep);
    const travelMs = Math.min(2200, 700 + delta * 140);

    setLineTransitionDuration(travelMs / 1000);
    setLineStep(targetStep);

    const targetNode = document.getElementById(`node-${country.iso}`);
    if (targetNode) {
        targetNode.classList.remove('lit');
    }

    lineAdvanceTimeoutId = window.setTimeout(() => {
        if (transitionToken !== panelTransitionToken) {
            return;
        }

        triggerNodeShock(countryIndex);
        setLineTransitionDuration(0.95);
        lineAdvanceTimeoutId = null;

        panelRevealTimeoutId = window.setTimeout(() => {
            if (transitionToken !== panelTransitionToken) {
                return;
            }

            fillPanelContent(country, countryIndex);
            panel.classList.remove('closing', 'content-visible');
            overlay.classList.add('active');
            panel.classList.add('active');
            window.requestAnimationFrame(() => {
                panel.classList.add('content-visible');
            });
            lockBodyScroll();
            panelRevealTimeoutId = null;
        }, 1000);
    }, travelMs);
}

function closePanel() {
    clearMotionTimers();

    if (!panel.classList.contains('active')) {
        return;
    }

    panel.classList.remove('content-visible');
    overlay.classList.remove('active');
    panel.classList.remove('active');
    panel.classList.add('closing');

    panelCloseTimeoutId = window.setTimeout(() => {
        panel.classList.remove('closing');
        panelMap.src = '';
        unlockBodyScroll();
        panelCloseTimeoutId = null;
    }, 620);
}

function openAdjacentCountry(direction) {
    if (!panel.classList.contains('active')) {
        return;
    }

    if (lastOpenedIndex === null) {
        return;
    }

    const nextIndex = lastOpenedIndex + direction;
    if (nextIndex < 0 || nextIndex >= countries.length) {
        return;
    }

    openPanel(countries[nextIndex], nextIndex);
}

function handleKeydown(event) {
    if (event.key === 'Escape') {
        closePanel();
        return;
    }

    if (event.key === 'ArrowRight' || event.key === '>') {
        event.preventDefault();
        openAdjacentCountry(1);
    }
}

window.addEventListener('resize', () => {
    if (resizeTimerId !== null) {
        clearTimeout(resizeTimerId);
    }

    resizeTimerId = window.setTimeout(() => {
        ensureTimelineLayout();
        resizeTimerId = null;
    }, 120);
});

window.addEventListener('keydown', handleKeydown);
overlay.addEventListener('click', closePanel);
closeButton.addEventListener('click', closePanel);

grid.addEventListener('click', (event) => {
    const node = event.target.closest('.node');
    if (!node) return;

    const indexValue = Number(node.dataset.countryIndex);
    if (Number.isNaN(indexValue) || !countries[indexValue]) return;

    openPanel(countries[indexValue], indexValue);
});

btnGoTimeline.addEventListener('click', showTimelineView);
btnGoGossip.addEventListener('click', showGossipView);
btnGoTimelineFromGossip.addEventListener('click', showTimelineView);
btnBackHome.addEventListener('click', showStartScreen);
btnHomeTimeline.addEventListener('click', showStartScreen);
btnOpenFinalQuestion.addEventListener('click', openFinalQuestion);
btnCloseFinalQuestion.addEventListener('click', closeFinalQuestion);
btnPanelOpenFinalQuestion.addEventListener('click', openFinalQuestionFromPanel);

updateStats();
ensureTimelineLayout(true);
showStartScreen();
