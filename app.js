/* ============================================
   DATA
   ============================================ */
const countries = [
    { iso: 'ht', name: 'Haití', start: 1791, end: 1804, desc: 'Primera nación independiente de América Latina, liderada por esclavos libertos.', map: 'assets/maps/ht.svg' },
    { iso: 'ec', name: 'Ecuador', start: 1809, end: 1822, desc: 'Dio el Primer Grito de Independencia en Quito. Selló su libertad en la Batalla de Pichincha.', map: 'assets/maps/ec.svg' },
    { iso: 'bo', name: 'Bolivia', start: 1809, end: 1825, desc: 'Inició con las revoluciones de Chuquisaca y La Paz. Concluyó tras las campañas de Bolívar y Sucre.', map: 'assets/maps/bo.svg' },
    { iso: 'co', name: 'Colombia', start: 1810, end: 1819, desc: 'Comenzó en Bogotá y se consolidó militarmente de forma decisiva en la Batalla de Boyacá.', map: 'assets/maps/co.svg' },
    { iso: 'ar', name: 'Argentina', start: 1810, end: 1816, desc: 'Arrancó con la Revolución de Mayo y declaró formalmente su independencia en Tucumán.', map: 'assets/maps/ar.svg' },
    { iso: 'cl', name: 'Chile', start: 1810, end: 1818, desc: 'Inició con la Primera Junta de Gobierno y aseguró su emancipación en la Batalla de Maipú.', map: 'assets/maps/cl.svg' },
    { iso: 'mx', name: 'México', start: 1810, end: 1821, desc: 'Iniciado por el Grito de Dolores de Miguel Hidalgo y consumado por el Ejército Trigarante.', map: 'assets/maps/mx.svg' },
    { iso: 'py', name: 'Paraguay', start: 1811, end: 1811, desc: 'Logró su independencia política de España de forma temprana y sin gran derramamiento de sangre.', map: 'assets/maps/py.svg' },
    { iso: 've', name: 'Venezuela', start: 1811, end: 1823, desc: 'Firmó su acta en 1811 y libró una dura guerra, culminando en la Batalla naval del Lago de Maracaibo.', map: 'assets/maps/ve.svg' },
    { iso: 'pe', name: 'Perú', start: 1811, end: 1824, desc: 'Proclamada por San Martín en 1821, garantizada finalmente en la decisiva Batalla de Ayacucho.', map: 'assets/maps/pe.svg' },
    { iso: 'sv', name: 'El Salvador', start: 1811, end: 1821, desc: 'Sede del Primer Grito de Independencia de Centroamérica.', map: 'assets/maps/sv.svg' },
    { iso: 'uy', name: 'Uruguay', start: 1811, end: 1828, desc: 'Inició con el Grito de Asencio y se consolidó internacionalmente en la Convención Preliminar de Paz.', map: 'assets/maps/uy.svg' },
    { iso: 'ni', name: 'Nicaragua', start: 1811, end: 1821, desc: 'Se independizó de España pacíficamente como parte de la Capitanía General de Guatemala.', map: 'assets/maps/ni.svg' },
    { iso: 'hn', name: 'Honduras', start: 1821, end: 1821, desc: 'Se emancipó pacíficamente firmando el Acta de Independencia de América Central.', map: 'assets/maps/hn.svg' },
    { iso: 'gt', name: 'Guatemala', start: 1821, end: 1821, desc: 'Como centro político regional, lideró la firma del acta que independizó a Centroamérica.', map: 'assets/maps/gt.svg' },
    { iso: 'cr', name: 'Costa Rica', start: 1821, end: 1821, desc: 'Redactó el Pacto de Concordia para definir su autogobierno al recibir la noticia regional.', map: 'assets/maps/cr.svg' },
    { iso: 'pa', name: 'Panamá', start: 1821, end: 1821, desc: 'Declaró su independencia de España y decidió unirse voluntariamente a la Gran Colombia.', map: 'assets/maps/pa.svg' },
    { iso: 'br', name: 'Brasil', start: 1822, end: 1822, desc: 'El príncipe Pedro pronunció el Grito de Ipiranga, separándose de Portugal para formar el Imperio.', map: 'assets/maps/br.svg' },
    { iso: 'do', name: 'República Dominicana', start: 1844, end: 1865, desc: 'Se independizó de Haití en 1844 y libró la Guerra de Restauración contra España.', map: 'assets/maps/do.svg' },
    { iso: 'cu', name: 'Cuba', start: 1868, end: 1898, desc: 'Tras tres guerras que iniciaron en Yara, logró su independencia de España.', map: 'assets/maps/cu.svg' },
    { iso: 'gf', name: 'Guayana Francesa', start: 1604, end: null, desc: 'Territorio de ultramar de Francia desde 1604. Nunca se independizó; actualmente es una región francesa de pleno derecho.', map: 'assets/maps/gf.svg' }
];

const MAP_FALLBACK = `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#e5e7eb"/><stop offset="100%" stop-color="#d1d5db"/></linearGradient></defs><rect width="1200" height="700" fill="url(#g)"/><rect x="34" y="34" width="1132" height="632" rx="28" fill="#f9fafb" stroke="#6b7280" stroke-width="4"/><text x="600" y="330" text-anchor="middle" font-family="Outfit, Arial, sans-serif" font-size="52" font-weight="800" fill="#111827">Mapa no disponible</text><text x="600" y="392" text-anchor="middle" font-family="Outfit, Arial, sans-serif" font-size="30" fill="#475569">Reintenta con conexión estable</text></svg>')}`;

const EVENT_IMG_FALLBACK = `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="#f1f5f9"/><text x="300" y="190" text-anchor="middle" font-family="Outfit, Arial, sans-serif" font-size="24" font-weight="700" fill="#94a3b8">Imagen no disponible</text><text x="300" y="225" text-anchor="middle" font-family="Outfit, Arial, sans-serif" font-size="16" fill="#94a3b8">Revisa tu conexión</text></svg>')}`;

const GOSSIP_IMAGE_FALLBACK = `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700"><defs><linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="1200" height="700" fill="url(#bg)"/><rect x="50" y="50" width="1100" height="600" rx="24" fill="#f8fafc"/><text x="600" y="320" text-anchor="middle" font-family="Outfit, Arial, sans-serif" font-size="52" font-weight="800" fill="#0f172a">Imagen histórica no disponible</text><text x="600" y="380" text-anchor="middle" font-family="Outfit, Arial, sans-serif" font-size="28" fill="#334155">Revisa conexión a internet y recarga la página</text></svg>')}`;

const processDetails = {
    ht: {
        leaders: 'Toussaint Louverture, Jean-Jacques Dessalines y población esclavizada afrodescendiente organizada.',
        social: 'Abolió la esclavitud y transformó el orden racial colonial, aunque enfrentó aislamiento internacional y crisis económica.',
        conquest: 'Colonizada por España (1492) y luego por Francia (1625–1804).',
        eventImg: 'assets/events/ht.jpg',
        eventCaption: 'Revolución haitiana: rebelión de esclavos que llevó a la independencia.'
    },
    ec: {
        leaders: 'Criollos quiteños, intelectuales locales y ejército independentista de Sucre.',
        social: 'Fortaleció instituciones republicanas, pero se mantuvieron desigualdades para población indígena y rural.',
        conquest: 'Conquistado por España (1534–1822). Parte del Virreinato de Nueva Granada.',
        eventImg: 'assets/events/ec.jpg',
        eventCaption: 'Batalla de Pichincha (1822), victoria decisiva para la libertad ecuatoriana.'
    },
    bo: {
        leaders: 'Juntas de Chuquisaca y La Paz, guerrillas locales y campañas de Bolívar y Sucre.',
        social: 'Se rompió el control colonial y surgió el nuevo Estado, aunque la estructura social jerárquica cambió lentamente.',
        conquest: 'Conquistado por España (1538–1825). Parte del Virreinato del Perú y luego del Río de la Plata.',
        eventImg: 'assets/events/bo.jpg',
        eventCaption: 'Antonio José de Sucre, libertador de Bolivia en las campañas andinas.'
    },
    co: {
        leaders: 'Cabildos criollos, Simón Bolívar, Francisco de Paula Santander y ejércitos patriotas.',
        social: 'Amplió la ciudadanía política formal, pero persistieron brechas entre élites y sectores populares.',
        conquest: 'Conquistado por España (1525–1819). Sede del Virreinato de Nueva Granada.',
        eventImg: 'assets/events/co.jpg',
        eventCaption: 'Batalla de Boyacá (1819), momento clave de la independencia colombiana.'
    },
    ar: {
        leaders: 'Junta de Mayo, Manuel Belgrano, José de San Martín y sectores criollos urbanos.',
        social: 'Consolidó un proyecto nacional y reformas estatales, aunque la distribución del poder siguió concentrada.',
        conquest: 'Conquistado por España (1536–1816). Capital del Virreinato del Río de la Plata.',
        eventImg: 'assets/events/ar.jpg',
        eventCaption: 'Cabildo Abierto del 22 de mayo de 1810, inicio de la Revolución de Mayo.'
    },
    cl: {
        leaders: 'Primera Junta de Gobierno, Bernardo O\u2019Higgins, José de San Martín y milicias patriotas.',
        social: 'Impulsó modernización institucional y educativa, pero con continuidad de desigualdades sociales en el campo.',
        conquest: 'Conquistado por España (1541–1818). Capitanía General de Chile.',
        eventImg: 'assets/events/cl.jpg',
        eventCaption: 'Batalla de Maipú (1818), victoria que aseguró la independencia chilena.'
    },
    mx: {
        leaders: 'Miguel Hidalgo, José María Morelos, Vicente Guerrero y sectores campesinos, indígenas y mestizos.',
        social: 'Eliminó el régimen virreinal y castas legales, aunque muchas desigualdades económicas persistieron.',
        conquest: 'Conquistado por España (1521–1821). Virreinato de Nueva España.',
        eventImg: 'assets/events/mx.jpg',
        eventCaption: 'Grito de Dolores (1810), inicio de la guerra de independencia de México.'
    },
    py: {
        leaders: 'Fulgencio Yegros, Pedro Juan Caballero y élites criollas locales apoyadas por milicias.',
        social: 'Aumentó la autonomía política temprana y fortaleció identidad nacional, con cambios sociales graduales.',
        conquest: 'Conquistado por España (1537–1811). Parte del Virreinato del Río de la Plata.',
        eventImg: 'assets/events/py.jpg',
        eventCaption: 'Casa de la Independencia en Asunción, donde se gestó la emancipación paraguaya.'
    },
    ve: {
        leaders: 'Francisco de Miranda, Simón Bolívar, llaneros y diversos sectores patriotas.',
        social: 'Abrió paso al Estado republicano, pero la guerra prolongada dejó crisis social y económica.',
        conquest: 'Conquistado por España (1522–1823). Capitanía General de Venezuela.',
        eventImg: 'assets/events/ve.jpg',
        eventCaption: 'Firma del Acta de Independencia de Venezuela (1811).'
    },
    pe: {
        leaders: 'José de San Martín, Simón Bolívar, Antonio José de Sucre y redes patriotas locales.',
        social: 'Terminó el dominio español en el núcleo virreinal; los cambios en inclusión social fueron lentos.',
        conquest: 'Conquistado por España (1533–1824). Sede del Virreinato del Perú.',
        eventImg: 'assets/events/pe.png',
        eventCaption: 'San Martín proclamando la independencia del Perú (1821).'
    },
    sv: {
        leaders: 'José Matías Delgado, Manuel José Arce y sectores criollos y urbanos centroamericanos.',
        social: 'Fortaleció la autonomía regional, pero continuaron desigualdades en propiedad y participación política.',
        conquest: 'Conquistado por España (1524–1821). Parte de la Capitanía General de Guatemala.',
        eventImg: 'assets/events/sv.jpg',
        eventCaption: 'Primer Grito de Independencia de Centroamérica en San Salvador (1811).'
    },
    uy: {
        leaders: 'José Gervasio Artigas, caudillos locales y milicias orientales.',
        social: 'Consolidó soberanía estatal y pactos políticos, aunque persistieron tensiones entre élites y sectores rurales.',
        conquest: 'Disputado entre España y Portugal (1680–1828). Banda Oriental.',
        eventImg: 'assets/events/uy.jpg',
        eventCaption: 'Jura de la Constitución del Uruguay, consolidación de la independencia.'
    },
    ni: {
        leaders: 'Autoridades municipales, élites criollas y redes políticas de la Capitanía de Guatemala.',
        social: 'Hubo cambio de soberanía política, mientras la estructura social heredada varió de forma paulatina.',
        conquest: 'Conquistado por España (1524–1821). Parte de la Capitanía General de Guatemala.',
        eventImg: null,
        eventCaption: ''
    },
    hn: {
        leaders: 'Firmantes del Acta Centroamericana y élites locales vinculadas a cabildos.',
        social: 'Permitió autogobierno formal, pero la participación social amplia se desarrolló con el tiempo.',
        conquest: 'Conquistado por España (1524–1821). Parte de la Capitanía General de Guatemala.',
        eventImg: null,
        eventCaption: ''
    },
    gt: {
        leaders: 'José Cecilio del Valle, Gabino Gaínza y grupos criollos del centro político regional.',
        social: 'Dirigió la transición institucional centroamericana, manteniendo inicialmente estructuras sociales coloniales.',
        conquest: 'Conquistado por España (1524–1821). Sede de la Capitanía General de Guatemala.',
        eventImg: 'assets/events/gt.png',
        eventCaption: 'Firma del Acta de Independencia de Centroamérica en la Ciudad de Guatemala.'
    },
    cr: {
        leaders: 'Ayuntamientos locales, firmantes del Pacto de Concordia y sectores civiles de la provincia.',
        social: 'Estableció bases de organización republicana y consenso político temprano, con reformas sociales progresivas.',
        conquest: 'Conquistado por España (1524–1821). Parte de la Capitanía General de Guatemala.',
        eventImg: 'assets/events/cr.jpg',
        eventCaption: 'Pacto de Concordia, primer documento constitucional de Costa Rica.'
    },
    pa: {
        leaders: 'José de Fábrega, élites istmeñas y cabildo de Panamá.',
        social: 'Redefinió su integración política regional, aunque los cambios sociales estructurales fueron graduales.',
        conquest: 'Conquistado por España (1501–1821). Parte del Virreinato de Nueva Granada.',
        eventImg: 'assets/events/pa.jpg',
        eventCaption: 'Acta de Independencia de Panamá del dominio español (1821).'
    },
    br: {
        leaders: 'Pedro I, élites brasileñas y sectores militares favorables a la separación de Portugal.',
        social: 'Mantuvo continuidad monárquica inicial; la esclavitud persistió por décadas pese a la independencia política.',
        conquest: 'Colonizado por Portugal (1500–1822). Virreinato y luego Reino Unido de Portugal, Brasil y Algarve.',
        eventImg: 'assets/events/br.jpg',
        eventCaption: 'Grito de Ipiranga (1822), momento simbólico de la independencia brasileña.'
    },
    do: {
        leaders: 'Juan Pablo Duarte, La Trinitaria, Ramón Matías Mella y Francisco del Rosario Sánchez.',
        social: 'Consolidó identidad nacional dominicana y soberanía, tras conflictos prolongados por estabilidad política.',
        conquest: 'Colonizado por España (1492–1795), Francia (1795–1809), España (1809–1821) y Haití (1822–1844).',
        eventImg: 'assets/events/do.jpg',
        eventCaption: 'Padres de la Patria dominicana: Duarte, Sánchez y Mella.'
    },
    cu: {
        leaders: 'Carlos Manuel de Céspedes, José Martí, Antonio Maceo y movimientos independentistas civiles y militares.',
        social: 'La independencia aceleró cambios políticos y nacionales, pero con fuerte influencia externa posterior.',
        conquest: 'Colonizado por España (1492–1898). Capitanía General de Cuba.',
        eventImg: 'assets/events/cu.jpg',
        eventCaption: 'José Martí, héroe nacional y líder intelectual de la independencia cubana.'
    },
    gf: {
        leaders: 'Sin movimiento independentista. Administrada como colonia y luego departamento francés de ultramar.',
        social: 'Al no independizarse, su estructura social evolucionó dentro del marco institucional francés. Obtuvo estatus de departamento en 1946.',
        conquest: 'Colonizada por Francia desde 1604 hasta la actualidad. Territorio de ultramar de la Unión Europea.',
        eventImg: 'assets/events/gf.jpg',
        eventCaption: 'Kourou, Guayana Francesa — territorio francés de ultramar.'
    }
};

/* ============================================
   DOM REFERENCES (cached once)
   ============================================ */
const $ = (id) => document.getElementById(id);
const grid = $('timeline-grid');
const wrapper = $('timeline-wrapper');
const lassoPath = $('lasso-path');
const overlay = $('overlay');
const panel = $('detail-panel');
const closeButton = $('btn-close');
const startScreen = $('start-screen');
const timelineView = $('timeline-view');
const gossipView = $('gossip-view');
const siteNav = $('site-nav');
const siteFooter = document.querySelector('.site-footer');

const btnGoGossip = $('btn-go-gossip');
const btnGoTimeline = $('btn-go-timeline');
const btnHomeTimeline = $('btn-home-timeline');
const btnOpenFinalQuestion = $('btn-open-final-question');
const btnCloseFinalQuestion = $('btn-close-final-question');
const btnCloseFinalQuestionBottom = $('btn-close-final-question-bottom');
const btnPanelOpenFinalQuestion = $('btn-panel-open-final-question');
const btnIntroBegin = $('btn-intro-begin');
const btnOpenRubric = $('btn-open-rubric');
const btnCloseRubric = $('btn-close-rubric');
const gossipPrev = $('gossip-prev');
const gossipNext = $('gossip-next');
const gossipStepLabel = $('gossip-step-label');
const gossipSlides = Array.from(document.querySelectorAll('.gossip-slide'));
const gossipDots = Array.from(document.querySelectorAll('.gossip-dot'));
const gossipMediaImages = Array.from(document.querySelectorAll('.gossip-media-image'));

const finalQuestionPanel = $('final-question-modal');
const finalQuestionOverlay = $('final-question-overlay');
const panelFinalQuestionCtaWrap = $('panel-final-question-cta-wrap');

const introModal = $('intro-modal');
const introOverlay = $('intro-overlay');
const rubricModal = $('rubric-modal');
const rubricOverlay = $('rubric-overlay');

const panelTitle = $('panel-title');
const panelDates = $('panel-dates');
const panelDesc = $('panel-desc');
const panelLeaders = $('panel-leaders');
const panelFlag = $('panel-flag');
const panelMap = $('panel-map');
const panelEventImg = $('panel-event-img');
const panelEventCaption = $('panel-event-caption');

const statCountries = $('stat-countries');
const statRange = $('stat-range');
const statProgress = $('stat-progress');

/* ============================================
   STATE
   ============================================ */
let pathLength = 0;
let nodePathStops = [];
let lineStep = 0;
let lastOpenedIndex = null;
let panelCloseTimeoutId = null;
let lineAdvanceTimeoutId = null;
let panelRevealTimeoutId = null;
let currentColumns = 0;
let resizeRafId = null;
let scrollLockPreviousPaddingRight = '';
let panelTransitionToken = 0;
let gossipStepIndex = 0;
let gossipIsAnimating = false;
let timelineInitialized = false;
let autoOpenTimeoutId = null;

const gossipStepTitles = ['¿Quién?', '¿Por qué?', '¿Para qué?', '¿Dónde?', '¿Cuándo?', '¿Cómo?'];

/* ============================================
   UTILITY HELPERS
   ============================================ */
function setupGossipImageFallbacks() {
    gossipMediaImages.forEach((image) => {
        image.onerror = () => {
            image.onerror = null;
            image.src = GOSSIP_IMAGE_FALLBACK;
        };
    });
}

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

/* ============================================
   VIEW MANAGEMENT
   ============================================ */
function showStartScreen() {
    startScreen.classList.remove('hidden');
    timelineView.classList.add('hidden');
    gossipView.classList.add('hidden');
    siteNav.classList.add('hidden');
    siteFooter.classList.add('hidden');
    closeFinalQuestion();
    closeIntroModal();
    closeRubric();
    closePanel();
    if (autoOpenTimeoutId !== null) {
        clearTimeout(autoOpenTimeoutId);
        autoOpenTimeoutId = null;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showTimelineView() {
    startScreen.classList.add('hidden');
    timelineView.classList.remove('hidden');
    gossipView.classList.add('hidden');
    siteNav.classList.remove('hidden');
    siteFooter.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!timelineInitialized) {
        timelineInitialized = true;
        requestAnimationFrame(() => {
            ensureTimelineLayout(true);
            applyLineProgress();
        });

        // Show intro modal instead of auto-opening Haiti
        if (lastOpenedIndex === null) {
            setTimeout(() => showIntroModal(), 600);
        }
    } else {
        requestAnimationFrame(() => {
            ensureTimelineLayout();
            applyLineProgress();
        });
    }
}

function showGossipView() {
    startScreen.classList.add('hidden');
    timelineView.classList.add('hidden');
    gossipView.classList.remove('hidden');
    siteNav.classList.remove('hidden');
    siteFooter.classList.add('hidden');
    closePanel();
    resetGossipPresentation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openFinalQuestion() {
    finalQuestionOverlay.classList.add('active');
    finalQuestionPanel.classList.add('active');
    lockBodyScroll();
}

function closeFinalQuestion() {
    finalQuestionOverlay.classList.remove('active');
    finalQuestionPanel.classList.remove('active');
    unlockBodyScroll();
}

function openFinalQuestionFromPanel() {
    const delay = panel.classList.contains('active') ? 680 : 0;
    closePanel();
    setTimeout(() => openFinalQuestion(), delay);
}

/* ============================================
   INTRO MODAL
   ============================================ */
function showIntroModal() {
    introOverlay.classList.add('active');
    introModal.classList.add('active');
    lockBodyScroll();
}

function closeIntroModal() {
    introOverlay.classList.remove('active');
    introModal.classList.remove('active');
    unlockBodyScroll();
}

function beginFromIntro() {
    closeIntroModal();
    setTimeout(() => openPanel(countries[0], 0), 400);
}

/* ============================================
   RUBRIC MODAL
   ============================================ */
function openRubric() {
    rubricOverlay.classList.add('active');
    rubricModal.classList.add('active');
    lockBodyScroll();
}

function closeRubric() {
    rubricOverlay.classList.remove('active');
    rubricModal.classList.remove('active');
    unlockBodyScroll();
}

/* ============================================
   STATS
   ============================================ */
function updateStats() {
    const minYear = Math.min(...countries.map((c) => c.start));
    const maxYear = Math.max(...countries.filter((c) => c.end !== null).map((c) => c.end));
    statCountries.textContent = `${countries.length} países`;
    statRange.textContent = `${minYear} - ${maxYear}`;
    statProgress.textContent = `0/${countries.length} hitos`;
}

function updateProgressLabel() {
    statProgress.textContent = `${lineStep}/${countries.length} hitos`;
}

/* ============================================
   TIMELINE LINE PROGRESS
   ============================================ */
function setNodeVisualState() {
    for (let i = 0; i < countries.length; i++) {
        const node = $(`node-${countries[i].iso}`);
        if (!node) continue;
        if (i < lineStep) {
            node.classList.add('active', 'lit');
        } else {
            node.classList.remove('active', 'lit', 'shock');
        }
    }
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

function setLineTransitionDuration(sec) {
    lassoPath.style.setProperty('--line-progress-duration', `${sec}s`);
}

function triggerNodeShock(nodeIndex) {
    const country = countries[nodeIndex];
    if (!country) return;
    const node = $(`node-${country.iso}`);
    if (!node) return;

    node.classList.add('lit');
    node.classList.remove('shock');
    void node.offsetWidth; // force reflow
    node.classList.add('shock');
    setTimeout(() => node.classList.remove('shock'), 760);
}

function clearMotionTimers() {
    panelTransitionToken += 1;
    if (lineAdvanceTimeoutId !== null) { clearTimeout(lineAdvanceTimeoutId); lineAdvanceTimeoutId = null; }
    if (panelRevealTimeoutId !== null) { clearTimeout(panelRevealTimeoutId); panelRevealTimeoutId = null; }
}

/* ============================================
   PANEL CONTENT
   ============================================ */
function fillPanelContent(country, countryIndex) {
    panelTitle.textContent = country.name;
    const endLabel = country.end ?? 'Presente';
    panelDates.textContent = `Proceso: ${country.start} - ${endLabel}`;
    panelDesc.textContent = country.desc;

    const detail = processDetails[country.iso];
    panelLeaders.textContent = detail?.leaders ?? 'Liderazgo y participación social en revisión.';

    // Conquest period
    const conquestBlock = document.getElementById('panel-conquest');
    if (conquestBlock) {
        conquestBlock.textContent = detail?.conquest ?? '';
        conquestBlock.closest('.panel-block').classList.toggle('hidden', !detail?.conquest);
    }

    // Social impact
    const socialBlock = document.getElementById('panel-social');
    if (socialBlock) {
        socialBlock.textContent = detail?.social ?? '';
        socialBlock.closest('.panel-block').classList.toggle('hidden', !detail?.social);
    }

    panelFinalQuestionCtaWrap.classList.toggle('hidden', countryIndex !== countries.length - 1);

    // Flag
    panelFlag.src = `assets/flags/${country.iso}.png`;
    panelFlag.alt = `Bandera de ${country.name}`;

    // Event image (beside text)
    if (panelEventImg) {
        const hasEventImg = detail?.eventImg;
        const imgCol = panelEventImg.closest('.panel-img-col');
        if (hasEventImg) {
            if (imgCol) imgCol.classList.remove('hidden');
            panelEventImg.onerror = () => {
                panelEventImg.onerror = null;
                panelEventImg.src = EVENT_IMG_FALLBACK;
            };
            panelEventImg.src = hasEventImg;
            panelEventImg.alt = detail?.eventCaption ?? `Imagen histórica de ${country.name}`;
        } else {
            if (imgCol) imgCol.classList.add('hidden');
            panelEventImg.src = '';
        }
    }
    if (panelEventCaption) {
        panelEventCaption.textContent = detail?.eventCaption ?? '';
    }

    // Map
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
    if (panelEventImg) panelEventImg.src = '';
    unlockBodyScroll();

    if (panelCloseTimeoutId !== null) {
        clearTimeout(panelCloseTimeoutId);
        panelCloseTimeoutId = null;
    }
}

/* ============================================
   TIMELINE LAYOUT
   ============================================ */
function getColumns() {
    const w = window.innerWidth;
    if (w < 440) return 2;
    if (w < 640) return 2;
    if (w < 860) return 3;
    if (w < 1160) return 4;
    return 5;
}

function ensureTimelineLayout(force = false) {
    const columns = getColumns();
    if (force || columns !== currentColumns || grid.children.length === 0) {
        currentColumns = columns;
        buildLayout(columns);
        return;
    }
    requestAnimationFrame(drawRibbon);
}

function buildLayout(columns) {
    grid.innerHTML = '';
    const rows = [];
    for (let i = 0; i < countries.length; i += columns) {
        rows.push(countries.slice(i, i + columns));
    }

    const fragment = document.createDocumentFragment();

    rows.forEach((row, rowIndex) => {
        const rowEl = document.createElement('div');
        rowEl.className = 'timeline-row';
        if (rowIndex % 2 !== 0) rowEl.classList.add('reverse');

        row.forEach((country, colIndex) => {
            const countryIndex = rowIndex * columns + colIndex;
            const node = document.createElement('button');
            node.type = 'button';
            node.className = 'node';
            node.id = `node-${country.iso}`;
            node.dataset.countryIndex = String(countryIndex);
            node.setAttribute('aria-label', `${country.name}, ${country.start} a ${country.end ?? 'Presente'}`);
            const yearLabel = country.end ? `${country.start} - ${country.end}` : `${country.start} - Presente`;
            node.innerHTML = `
                <div class="node-circle" id="circle-${country.iso}">${countryIndex + 1}</div>
                <img class="node-flag" src="assets/flags/${country.iso}.png" alt="Bandera de ${country.name}" loading="lazy">
                <div class="node-info">
                    <h3 class="node-country">${country.name}</h3>
                    <div class="node-year">${yearLabel}</div>
                </div>
            `;
            rowEl.appendChild(node);
        });

        fragment.appendChild(rowEl);
    });

    grid.appendChild(fragment);
    requestAnimationFrame(drawRibbon);
}

function drawRibbon() {
    const wrapperRect = wrapper.getBoundingClientRect();
    let pathData = '';
    const centers = [];

    for (let i = 0; i < countries.length; i++) {
        const circle = $(`circle-${countries[i].iso}`);
        if (!circle) continue;

        const rect = circle.getBoundingClientRect();
        const x = rect.left + rect.width / 2 - wrapperRect.left;
        const y = rect.top + rect.height / 2 - wrapperRect.top;
        centers.push({ x, y });

        if (i === 0) {
            pathData += `M ${x} ${y} `;
            continue;
        }

        const prev = centers[i - 1];
        if (Math.abs(prev.y - y) < 10) {
            pathData += `L ${x} ${y} `;
            continue;
        }

        const bulge = prev.x > wrapperRect.width / 2 ? 92 : -92;
        pathData += `C ${prev.x + bulge} ${prev.y}, ${x + bulge} ${y}, ${x} ${y} `;
    }

    lassoPath.setAttribute('d', pathData);
    pathLength = lassoPath.getTotalLength();
    lassoPath.style.strokeDasharray = pathLength;
    nodePathStops = calculateNodeStops(centers);
    applyLineProgress();
}

function calculateNodeStops(centers) {
    if (pathLength <= 0) return [];

    const coarseStep = 40;
    const fineStep = 4;

    return centers.map((center) => {
        let closestLength = 0;
        let minDist = Infinity;

        for (let len = 0; len <= pathLength; len += coarseStep) {
            const pt = lassoPath.getPointAtLength(len);
            const d = (pt.x - center.x) ** 2 + (pt.y - center.y) ** 2;
            if (d < minDist) { minDist = d; closestLength = len; }
        }

        const fStart = Math.max(0, closestLength - coarseStep);
        const fEnd = Math.min(pathLength, closestLength + coarseStep);
        for (let len = fStart; len <= fEnd; len += fineStep) {
            const pt = lassoPath.getPointAtLength(len);
            const d = (pt.x - center.x) ** 2 + (pt.y - center.y) ** 2;
            if (d < minDist) { minDist = d; closestLength = len; }
        }

        return closestLength;
    });
}

/* ============================================
   OPEN / CLOSE PANEL
   ============================================ */
function openPanel(country, countryIndex) {
    lastOpenedIndex = countryIndex;
    clearMotionTimers();
    closePanelImmediate();
    const token = panelTransitionToken;

    const targetStep = countryIndex + 1;
    const delta = Math.abs(targetStep - lineStep);
    const travelMs = Math.min(2200, 700 + delta * 140);

    setLineTransitionDuration(travelMs / 1000);
    setLineStep(targetStep);

    const targetNode = $(`node-${country.iso}`);
    if (targetNode) targetNode.classList.remove('lit');

    lineAdvanceTimeoutId = setTimeout(() => {
        if (token !== panelTransitionToken) return;
        triggerNodeShock(countryIndex);
        setLineTransitionDuration(0.95);
        lineAdvanceTimeoutId = null;

        panelRevealTimeoutId = setTimeout(() => {
            if (token !== panelTransitionToken) return;
            fillPanelContent(country, countryIndex);
            panel.classList.remove('closing', 'content-visible');
            overlay.classList.add('active');
            panel.classList.add('active');
            requestAnimationFrame(() => panel.classList.add('content-visible'));
            lockBodyScroll();
            panelRevealTimeoutId = null;
        }, 1000);
    }, travelMs);
}

function closePanel() {
    clearMotionTimers();
    if (!panel.classList.contains('active')) return;

    panel.classList.remove('content-visible');
    overlay.classList.remove('active');
    panel.classList.remove('active');
    panel.classList.add('closing');

    panelCloseTimeoutId = setTimeout(() => {
        panel.classList.remove('closing');
        panelMap.src = '';
        if (panelEventImg) panelEventImg.src = '';
        unlockBodyScroll();
        panelCloseTimeoutId = null;
    }, 620);
}

/* ============================================
   GOSSIP SLIDES
   ============================================ */
function syncGossipUi() {
    if (!gossipSlides.length) return;

    gossipDots.forEach((dot, i) => dot.classList.toggle('active', i === gossipStepIndex));

    if (gossipStepLabel) {
        const title = gossipStepTitles[gossipStepIndex] ?? `Punto ${gossipStepIndex + 1}`;
        gossipStepLabel.textContent = `${gossipStepIndex + 1}/${gossipSlides.length} · ${title}`;
    }

    if (gossipPrev) gossipPrev.disabled = gossipStepIndex === 0;
    if (gossipNext) gossipNext.disabled = gossipStepIndex === gossipSlides.length - 1;
}

function resetGossipPresentation() {
    if (!gossipSlides.length) return;
    gossipIsAnimating = false;
    gossipStepIndex = 0;
    gossipSlides.forEach((slide, i) => slide.classList.toggle('active', i === 0));
    syncGossipUi();
}

function moveGossipStep(direction) {
    if (!gossipSlides.length || gossipIsAnimating) return;
    const next = gossipStepIndex + direction;
    if (next < 0 || next >= gossipSlides.length) return;

    gossipIsAnimating = true;
    gossipSlides[gossipStepIndex].classList.remove('active');
    gossipSlides[next].classList.add('active');
    gossipStepIndex = next;
    syncGossipUi();
    setTimeout(() => { gossipIsAnimating = false; }, 400);
}

/* ============================================
   NAVIGATION HELPERS
   ============================================ */
function openAdjacentCountry(direction) {
    if (autoOpenTimeoutId !== null) {
        clearTimeout(autoOpenTimeoutId);
        autoOpenTimeoutId = null;
    }

    let base = lastOpenedIndex;
    if (base === null) base = direction > 0 ? -1 : countries.length;

    const next = base + direction;
    if (next < 0 || next >= countries.length) return;
    openPanel(countries[next], next);
}

/* ============================================
   EVENT LISTENERS
   ============================================ */
function handleKeydown(e) {
    if (e.key === 'Escape') {
        closePanel();
        closeFinalQuestion();
        closeIntroModal();
        closeRubric();
        return;
    }

    // Gossip view arrow nav
    if (!gossipView.classList.contains('hidden')) {
        if (e.key === 'ArrowRight' || e.key === '>') { e.preventDefault(); moveGossipStep(1); return; }
        if (e.key === 'ArrowLeft' || e.key === '<') { e.preventDefault(); moveGossipStep(-1); return; }
    }

    if (e.key === 'ArrowRight' || e.key === '>') { e.preventDefault(); openAdjacentCountry(1); }
    if (e.key === 'ArrowLeft' || e.key === '<') { e.preventDefault(); openAdjacentCountry(-1); }
}

// Debounced resize using rAF for smooth reflow
window.addEventListener('resize', () => {
    if (resizeRafId !== null) cancelAnimationFrame(resizeRafId);
    resizeRafId = requestAnimationFrame(() => {
        ensureTimelineLayout();
        resizeRafId = null;
    });
});

window.addEventListener('keydown', handleKeydown);
overlay.addEventListener('click', closePanel);
closeButton.addEventListener('click', closePanel);

grid.addEventListener('click', (e) => {
    const node = e.target.closest('.node');
    if (!node) return;
    const idx = Number(node.dataset.countryIndex);
    if (Number.isNaN(idx) || !countries[idx]) return;
    openPanel(countries[idx], idx);
});

btnGoTimeline.addEventListener('click', showTimelineView);
btnGoGossip.addEventListener('click', showGossipView);
btnHomeTimeline.addEventListener('click', showStartScreen);
btnOpenFinalQuestion.addEventListener('click', openFinalQuestion);
btnCloseFinalQuestion.addEventListener('click', closeFinalQuestion);
if (btnCloseFinalQuestionBottom) btnCloseFinalQuestionBottom.addEventListener('click', closeFinalQuestion);
btnPanelOpenFinalQuestion.addEventListener('click', openFinalQuestionFromPanel);
finalQuestionOverlay.addEventListener('click', closeFinalQuestion);

// Intro modal
btnIntroBegin.addEventListener('click', beginFromIntro);
introOverlay.addEventListener('click', () => { closeIntroModal(); });

// Rubric modal
btnOpenRubric.addEventListener('click', openRubric);
btnCloseRubric.addEventListener('click', closeRubric);
rubricOverlay.addEventListener('click', closeRubric);

if (gossipPrev) gossipPrev.addEventListener('click', () => moveGossipStep(-1));
if (gossipNext) gossipNext.addEventListener('click', () => moveGossipStep(1));

/* ============================================
   TOUCH SWIPE (Gossip)
   ============================================ */
(function initGossipSwipe() {
    const stage = $('gossip-stage');
    if (!stage) return;

    let startX = 0;
    let startY = 0;
    let swiping = false;

    stage.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        swiping = true;
    }, { passive: true });

    stage.addEventListener('touchmove', (e) => {
        if (!swiping) return;
        if (Math.abs(e.touches[0].clientY - startY) > Math.abs(e.touches[0].clientX - startX)) {
            swiping = false;
        }
    }, { passive: true });

    stage.addEventListener('touchend', (e) => {
        if (!swiping) return;
        swiping = false;
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) < 50) return;
        moveGossipStep(diff > 0 ? 1 : -1);
    }, { passive: true });
})();

/* ============================================
   INIT
   ============================================ */
updateStats();
setupGossipImageFallbacks();
resetGossipPresentation();
showStartScreen();


