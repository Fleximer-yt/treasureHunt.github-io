// ──────────────────────────────────────────────
//  STEP CODES  (QR content → unlocks that step)
// ──────────────────────────────────────────────
const CODES = {
    step1: "1__A3!G7@B2C",
    step2: "2__H2#J4K$5L",
    step3: "3__M8^N1O!3P",
    step4: "4__Q6%R2S@9T",
    step5: "5__U1V3^W7X$",
    step6: "6__Y2Z4!A5B#",
    step7: "7__C7D1E@2F%",
    step8: "8__B^CR&*A)H"
};

// ──────────────────────────────────────────────
//  STEPS DATA
//  bonus[] – each item can be:
//    { type:"info",       label, text }  (text informativ/instrucțiuni)
//    { type:"photo",      label, description }
//    { type:"qr",         label, description, code }  ← code is optional; if set, validates
//    { type:"image_text", label, description, image, placeholder }
//    { type:"quiz",       label, question, options:[4], valid:"OptionText" }
//    { type:"text_text",  label, question, valid:"Text" }
//                         ↑ valid is optional; if present the correct option must be chosen
//                           to allow scanning the NEXT step's QR
// ──────────────────────────────────────────────
const STEPS = [
    {
        num: 1,
        name: "Statuia lui William Shakespeare",
        image: "images/step1.jpg",
        text: "Statuia lui William Shakespeare din Craiova se află în fața Teatrului Național 'Marin Sorescu', una dintre cele mai vechi scene dramatice din România, fondată în 1850. Craiova este singurul oraș din lume (în afara Angliei) care găzduiește un Festival Internațional Shakespeare dedicat exclusiv marelui dramaturg englez — un eveniment de renume mondial ce atrage trupe din zeci de țări. Shakespeare (1564–1616) a revoluționat literatura universală prin opere ca Hamlet, Macbeth, Regele Lear și Romeo și Julieta, explorând condiția umană cu o profunzime fără egal.",
        hint: "Un scriitor celebru te așteaptă aproape de teatru.",
        bonus: [
            { type: "info", label: "Informații", text: "" },
            { type: "photo", label: "Poză de grup", description: "Faceți o poză cu toată echipa lângă statuie." },
            { type: "quiz", label: "Quiz", question: "Ce distincție unică are Craiova în legătură cu Shakespeare, față de orice alt oraș din afara Angliei?", options: ["Are cea mai mare statuie a sa", "Organizează singurul Festival Internațional Shakespeare", "A tradus primul operele sale", "A construit primul teatru shakespearian"], valid: "Organizează singurul Festival Internațional Shakespeare" },
            { type: "quiz", label: "Quiz", question: "În ce an a fost fondat Teatrul Național din Craiova, în fața căruia se află această statuie?", options: ["1820", "1850", "1877", "1900"], valid: "1850" },
            { type: "text_text", label: "Ghicitoare", question: "A fost reședința Banilor de odinioară, un centru de putere. Azi e recunoscută pentru un parc întins și o universitate prestigioasă. Care este numele ei?", valid: "Craiova" }
        ]
    },

    {
        num: 2,
        name: "Statuia lui Mihai I",
        image: "images/step2.jpg",
        text: "Mihai I (1921–2017) a fost ultimul rege al României, urcând pe tron la doar 6 ani (1927–1930), apoi din nou în 1940. Pe 23 august 1944 a dat dovadă de un curaj excepțional: l-a arestat pe Ion Antonescu și a scos România din alianța cu Germania nazistă, scurtând astfel Al Doilea Război Mondial cu cel puțin un an, conform analiștilor militari. Forțat să abdice de regimul comunist pe 30 decembrie 1947, a trăit zeci de ani în exil. Regele Mihai este considerat un simbol al demnității, rezistenței și al valorilor democratice ale României.",
        hint: "Caută statuia ultimului rege al României.",
        bonus: [
            { type: "photo", label: "Poză de grup", description: "Poză cu echipa lângă statuie." },
            { type: "quiz", label: "Quiz", question: "Ce act de curaj a realizat Regele Mihai I pe 23 august 1944, schimbând cursul istoriei?", options: ["A semnat Constituția regală", "L-a arestat pe Antonescu și a scos România din război alături de Germania", "A declarat independența față de URSS", "A abdicat în favoarea unui guvern democratic"], valid: "L-a arestat pe Antonescu și a scos România din război alături de Germania" },
            { type: "quiz", label: "Quiz", question: "La ce vârstă a urcat prima dată pe tron Regele Mihai I al României?", options: ["4 ani", "6 ani", "10 ani", "18 ani"], valid: "6 ani" },
            { type: "text_text", label: "Ghicitoare", question: "A face nevăzut un lucru de preț, a-l păstra departe de privirile celorlalți, acțiune la timpul prezent, persoana a treia singular. Ce face?", valid: "ascunde" }
        ]
    },

    {
        num: 3,
        name: "Cofetăria Minerva",
        image: "images/step3.jpg",
        text: "Clădirea Minerva, ridicată la începutul secolului XX, este un simbol arhitectural al Craiovei Belle Époque. Stilul neo-maur (hispano-maur) se remarcă prin arcadele în potcoavă, ornamentele geometrice arabe și mozaicurile colorate — elemente preluate din arhitectura Andaluziei medievale. A funcționat ca hotel de lux, restaurant și cofetărie, devenind punctul de întâlnire predilect al elitei comerciale și culturale a orașului. Craiova era, la acea vreme, cel mai prosper oraș din sudul Carpaților, cu o viață culturală efervescentă, rivalizând cu Bucureștiul în eleganță și modernitate.",
        hint: "Clădire elegantă unde mănânci, te îndulcești și te poți odihni.",
        bonus: [
            { type: "photo", label: "Poză de grup", description: "Poză cu echipa în fața clădirii." },
            { type: "quiz", label: "Quiz", question: "Din ce regiune a lumii provine stilul arhitectural neo-maur al clădirii Minerva?", options: ["Orientul Îndepărtat", "Andaluzia medievală hispanică", "Imperiul Otoman", "Africa de Nord berberă"], valid: "Andaluzia medievală hispanică" },
            { type: "quiz", label: "Quiz", question: "Ce element arhitectural definitoriu al stilului maur este vizibil la fațada clădirii Minerva?", options: ["Coloane ionice", "Turle bizantine", "Arcuri în formă de potcoavă", "Contraforturi gotice"], valid: "Arcuri în formă de potcoavă" },
            { type: "text_text", label: "Ghicitoare", question: "Nu sunt doar din aur, pot fi de artă. Pirații le îngroapă, iar voi le căutați chiar acum. (substantiv plural, nearticulat)", valid: "comori" }
        ]
    },

    {
        num: 4,
        name: "Statuia lui Mihai Viteazu",
        image: "images/step4.jpg",
        text: "Mihai Viteazu (1558–1601) este considerat primul unificator al celor trei Țări Române — Muntenia, Moldova și Transilvania — realizând, efemer, unirea lor în 1600. Oltenia a jucat un rol strategic esențial în campaniile sale militare. Domnitorul a câștigat bătălia de la Călugăreni (1595) împotriva otomanilor și bătălia de la Șelimbăr (1599), care i-a deschis drumul spre Alba Iulia. Asasinat în câmpia de la Turda în 1601, a rămas cel mai venerat erou militar al românilor. Statuia din Craiova îl înfățișează cu sabia ridicată, ca simbol al curajului și al unității naționale.",
        hint: "Caută statuia unui domnitor care a unit Țările Române.",
        bonus: [
            { type: "photo", label: "Poză de grup", description: "Poză cu echipa lângă statuie." },
            { type: "quiz", label: "Quiz", question: "Unde a fost asasinat Mihai Viteazu, în 1601, la scurt timp după ce realizase unirea?", options: ["Câmpia de la Turda", "Câmpia de la Rovine", "Defileul Jiului", "Câmpia de la Călugăreni"], valid: "Câmpia de la Turda" },
            { type: "quiz", label: "Quiz", question: "Ce bătălie decisivă din 1599 i-a deschis lui Mihai Viteazu drumul spre Alba Iulia și unirea Transilvaniei?", options: ["Bătălia de la Vaslui", "Bătălia de la Călugăreni", "Bătălia de la Șelimbăr", "Bătălia de la Posada"], valid: "Bătălia de la Șelimbăr" },
            { type: "text_text", label: "Ghicitoare", question: "Ce sunt lucrurile care au trecut proba secolelor și au o istorie lungă de povestit? (adjectiv, masculin plural)", valid: "vechi" }
        ]
    },

    {
        num: 5,
        name: "Statuia Zița",
        image: "images/step5.jpg",
        text: "Zița este personajul central din 'O noapte furtunoasă' (1879), capodopera dramaturgului Ion Luca Caragiale. Piesa satirizează cu umor acid moravurile burgheziei române de la sfârşitul secolului XIX — ipocrizia, infidelitatea conjugală și goana după parvenire socială. Caragiale (1852–1912) a vizitat Craiova de mai multe ori și a întreținut relații cu lumea culturală olteană. Statuia Ziței, amplasată în centrul vechi al orașului, conectează Craiova de marile tradiții teatrale românești și celebrează identitatea culturală a urbei. Teatrul Național din Craiova pune periodic în scenă piesele lui Caragiale.",
        hint: "În centrul vechi găsești un personaj de teatru.",
        bonus: [
            { type: "photo", label: "Poză de grup", description: "Poză cu echipa lângă statuie." },
            { type: "quiz", label: "Quiz", question: "Ce critică socială centrală face Caragiale în piesa 'O noapte furtunoasă'?", options: ["Exploatarea țăranilor de boieri", "Ipocrizia și moravurile burgheziei române", "Corupția administrației imperiale", "Decăderea moralei aristocratice"], valid: "Ipocrizia și moravurile burgheziei române" },
            { type: "quiz", label: "Quiz", question: "În ce an a scris Ion Luca Caragiale piesa 'O noapte furtunoasă' în care apare personajul Zița?", options: ["1865", "1879", "1893", "1907"], valid: "1879" },
            { type: "text_text", label: "Ghicitoare", question: "Prepoziție simplă din trei litere care indică proveniența sau originea (de exemplu: un dar _ _ _ suflet).", valid: "din" }
        ]
    },

    {
        num: 6,
        name: "Statuia lui Barbu Dimitrie Știrbei",
        image: "images/step6.jpg",
        text: "Barbu Dimitrie Știrbei (1799–1869) a domnit peste Țara Românească între 1849 și 1856, fiind unul dintre cei mai reformatori conducători ai epocii premoderne. A reorganizat sistemul de învățământ, redeschizând școli și înființând primele licee publice. A modernizat infrastructura, a construit drumuri și poduri și a stabilizat finanțele dezorganizate după Revoluția de la 1848. A gestionat cu abilitate diplomatică relațiile cu Imperiul Otoman, Imperiul Rus și Imperiul Austro-Ungar în contextul Războiului Crimeei. Craiova — cel mai important centru comercial al Olteniei — a beneficiat direct de reformele sale.",
        hint: "Caută statuia unui domnitor care a reorganizat armata si infrastructura tarii.",
        bonus: [
            { type: "photo", label: "Poză de grup", description: "Poză cu echipa lângă statuie." },
            { type: "quiz", label: "Quiz", question: "Între ce ani a guvernat Barbu Dimitrie Știrbei ca domn al Țării Românești?", options: ["1821–1828", "1834–1842", "1849–1856", "1859–1866"], valid: "1849–1856" },
            { type: "quiz", label: "Quiz", question: "Ce conflict european major a gestionat diplomatic Știrbei, menținând autonomia Țării Românești?", options: ["Războiul Franco-Prusac", "Războiul Crimeei", "Revoluția Franceză", "Congresul de la Viena"], valid: "Războiul Crimeei" },
            { type: "text_text", label: "Ghicitoare", question: "Bate neîncetat pentru a da viață, iar atunci când vorbim de un oraș sau regiune, reprezintă însăși centrul ei. Ce este? (substantiv, formă articulată)", valid: "inima" }
        ]
    },

    {
        num: 7,
        name: "Biblioteca Aman – Grigore Vieru",
        image: "images/step7.jpg",
        text: "Statuia lui Grigore Vieru (1935–2009) se află în fața Bibliotecii Județene 'Alexandru și Aristia Aman', două personalități emblematice reunite într-un singur spațiu cultural. Grigore Vieru — poet basarabean de excepție — a dedicat versuri memorabile mamei, limbii române și dorului de unitate națională, devenind un simbol al identității culturale de dincolo de Prut. Biblioteca Aman, fondată în 1893 datorită donației pictorului craiovean Theodor Aman (cel care a dat și numele Ateneului Român și a fondat Școala de Belle Arte din București), adăpostește sute de mii de volume, manuscrise rare și colecții de artă inestimabilă.",
        hint: "Caută un poet care a scris despre mamă și neam, în apropierea unei biblioteci importante din centrul orașului.",
        bonus: [
            { type: "photo", label: "Poză de grup", description: "Poză cu echipa lângă statuie." },
            { type: "quiz", label: "Quiz", question: "Cine a donat fondurile pentru înființarea Bibliotecii Aman din Craiova, în 1893?", options: ["Grigore Vieru", "Theodor Aman", "Barbu Știrbei", "Alexandru Ioan Cuza"], valid: "Theodor Aman" },
            { type: "quiz", label: "Quiz", question: "De unde provenea poetul Grigore Vieru, cunoscut pentru versurile despre mamă și identitatea românească?", options: ["Oltenia", "Basarabia", "Ardeal", "Bucovina"], valid: "Basarabia" },
            { type: "text_text", label: "Ghicitoare", question: "Ținutul Jiului și al Oltului, pământ de panduri și de legendă. Cum i se spune acestui ținut la cazul genitiv?", valid: "Olteniei" }
        ]
    },

    {
        num: 8,
        name: "Alexandru Ioan Cuza – English Park",
        image: "images/step8.jpg",
        text: "Alexandru Ioan Cuza (1820–1873) a fost primul domnitor al Principatelor Unite, ales dublu — în Moldova (5 ianuarie 1859) și în Muntenia (24 ianuarie 1859) — realizând unirea de facto a celor două principate, premisă a României moderne. A realizat reforma agrară din 1864, prin care peste 400.000 de familii de țărani au primit pământ, și a secularizat averile mănăstirești. Statuia sa se află în English Park, realizat în perioada interbelică și este amenajat în stilul tradițional al grădinilor din Regatul Unit, cu alei frumos pavate, arbuști ornamentali, bănci pentru relaxare și o fântână arteziană în centru.",
        hint: "Caută domnitorul care a realizat Unirea Principatelor într-un parc ce amintește de grădinile londoneze.",
        bonus: [
            { type: "photo", label: "Poză finală", description: "Poză finală cu toată echipa." },
            { type: "quiz", label: "Quiz", question: "Cine a proiectat English Park din Craiova (Grădina Unirii)?", options: ["Édouard Redont", "Ion Mincu", "Constantin Iotzu", "Gustave Eiffel"], valid: "Constantin Iotzu" },
            { type: "text_text", label: "Marea Descoperire", question: "Propoziția formată alăturând răspunsurile corecte obținute la pașii precedenți este: (utilizează un singur spațiu între cuvinte)", valid: "Craiova ascunde comori vechi din inima Olteniei" }
        ]
    }
];

const lastNum = 8;

const CONFETTI_COLORS = [
    "#f0c94a", "#d4a017", "#e05555", "#ceffe7ff", "#5b9bd5",
    "#c97fe5", "#ff7f50", "#fff", "#f9c74f", "#90e0ef"
];

// ──────────────────────────────────────────────
//  STATE
//  During the hunt → sessionStorage (ephemeral)
//  On win + close  → also persisted in localStorage
// ──────────────────────────────────────────────
const SS = sessionStorage;
const LS = localStorage;

// Load: prefer localStorage (finished game), then sessionStorage (in-progress)
function _load(key) {
    const lsVal = LS.getItem(key);
    if (lsVal !== null) return JSON.parse(lsVal);
    const ssVal = SS.getItem(key);
    return ssVal !== null ? JSON.parse(ssVal) : null;
}

let progress = _load("progress") || {};
let bonusProgress = _load("bonusProgress") || {};
let scanLog = _load("scanLog") || [];
let finalized = (LS.getItem("finalized") || SS.getItem("finalized")) === "true";
let pendingCelebration = false;

// During game – write only to sessionStorage
function saveProgress() {
    SS.setItem("progress", JSON.stringify(progress));
    SS.setItem("bonusProgress", JSON.stringify(bonusProgress));
    SS.setItem("scanLog", JSON.stringify(scanLog));
    if (finalized) {
        LS.setItem("progress", JSON.stringify(progress));
        LS.setItem("bonusProgress", JSON.stringify(bonusProgress));
        LS.setItem("scanLog", JSON.stringify(scanLog));
    }
}

// On win – persist everything to localStorage too
function persistToLocalStorage() {
    LS.setItem("progress", JSON.stringify(progress));
    LS.setItem("bonusProgress", JSON.stringify(bonusProgress));
    LS.setItem("scanLog", JSON.stringify(scanLog));
    LS.setItem("finalized", "true");
}

// ──────────────────────────────────────────────
//  HELPERS
// ──────────────────────────────────────────────
function isUnlocked(n) { return progress[`step${n}`] === true; }
function isAvailable(n) { return n === 1 || isUnlocked(n - 1); }

function getBonusArr(n) {
    return bonusProgress[`step${n}`] || [];
}
function isBonusItemDone(n, idx) {
    return getBonusArr(n)[idx] === true;
}
function allBonusDone(n) {
    const step = STEPS[n - 1];
    if (!step.bonus || step.bonus.length === 0) return true;
    const arr = getBonusArr(n);
    return step.bonus.every((_, i) => arr[i] === true);
}

// Returns true if step n has a blocking item (quiz/image_text/text_text with valid)
// that has NOT been answered correctly yet
function hasBlockingQuiz(n) {
    const step = STEPS[n - 1];
    if (!step || !step.bonus) return false;
    return step.bonus.some((item, idx) => {
        if (!item.valid) return false;
        if (item.type !== "quiz" && item.type !== "image_text" && item.type !== "text_text") return false;
        return !isBonusItemDone(n, idx);
    });
}

function allTenComplete() {
    return Array.from({ length: lastNum - 1 }, (_, i) => i + 1).every(n => isUnlocked(n));
}

function lockScroll() { document.body.classList.add("modal-open"); }
function unlockScroll() { document.body.classList.remove("modal-open"); }

function calculateScore() {
    let steps = 0, quizzes = 0;
    for (let i = 1; i <= lastNum - 1; i++) {
        if (isUnlocked(i)) steps++;
        const step = STEPS[i - 1];
        if (step.bonus) {
            step.bonus.forEach((item, idx) => {
                if (item.type === "quiz" && isBonusItemDone(i, idx)) {
                    const logEntry = scanLog.slice().reverse().find(e => e.stepNum === i && e.bonusIndex === idx);
                    if (logEntry && logEntry.data && logEntry.data.correct) {
                        quizzes++;
                    }
                }
            });
        }
    }
    return { steps, quizzes, total: steps + quizzes };
}

// ──────────────────────────────────────────────
//  ROADMAP
// ──────────────────────────────────────────────
function buildRoadmap() {
    const container = document.getElementById("stepsContainer");
    container.innerHTML = "";

    STEPS.forEach((step) => {
        const isFinal = step.num === lastNum;

        const unlocked = isUnlocked(step.num);
        const available = isAvailable(step.num);
        const bonusDoneAll = allBonusDone(step.num);

        const wrapper = document.createElement("div");
        wrapper.className = `step-wrapper${isFinal ? " step-final" : ""}`;

        const badge = document.createElement("div");
        badge.className = `step-node-badge ${unlocked ? "unlocked" : available ? "available locked" : "locked"}`;
        badge.dataset.step = step.num;

        // Quiz-done badge
        if (unlocked && step.bonus) {
            const doneQuizzes = step.bonus.filter((b, i) => b.type === "quiz" && isBonusItemDone(step.num, i)).length;
            const totalQuizzes = step.bonus.filter(b => b.type === "quiz").length;
            if (totalQuizzes > 0 && doneQuizzes === totalQuizzes) {
                const sb = document.createElement("span");
                sb.className = "score-badge";
                sb.textContent = "✓ Quiz";
                badge.appendChild(sb);
            }
        }

        if (isFinal) {
            const crown = document.createElement("span");
            crown.className = "final-crown";
            crown.textContent = unlocked ? "👑" : "⭐";
            badge.appendChild(crown);
        } else {
            const numSpan = document.createElement("span");
            numSpan.className = "badge-num";
            numSpan.textContent = step.num;
            badge.appendChild(numSpan);
        }

        if (!unlocked) {
            const lockSpan = document.createElement("span");
            lockSpan.className = "badge-lock";
            lockSpan.textContent = "🔒";
            badge.appendChild(lockSpan);
        }

        badge.addEventListener("click", () => onNodeClick(step.num));

        const card = document.createElement("div");
        card.className = `step-card ${unlocked ? "unlocked" : "locked"}`;
        card.dataset.step = step.num;
        card.addEventListener("click", () => onNodeClick(step.num));

        const imgWrap = document.createElement("div");
        imgWrap.className = "step-card-image";
        if (unlocked) {
            const img = document.createElement("img");
            img.src = step.image;
            img.alt = step.name;
            img.onerror = function () {
                this.parentElement.innerHTML = `<div class="modal-img-placeholder">${isFinal ? "🏆" : "🗺️"}</div>`;
            };
            imgWrap.appendChild(img);
        } else {
            imgWrap.innerHTML = `
                <div class="img-lock-overlay">
                    <span class="lock-emoji">${isFinal ? "⭐" : "🔒"}</span>
                    <span class="lock-text">${isFinal ? "Final" : "Blocat"}</span>
                </div>
                <div class="img-shimmer"></div>
            `;
        }

        const body = document.createElement("div");
        body.className = "step-card-body";

        const label = document.createElement("div");
        label.className = "step-card-label";
        label.textContent = isFinal ? "✦ Final ✦" : `Etapa ${step.num}`;

        const name = document.createElement("div");
        name.className = `step-card-name ${unlocked ? "" : "mystery"}`;
        name.textContent = unlocked ? step.name : "???";

        const meta = document.createElement("div");
        meta.className = "step-card-meta";

        const status = document.createElement("div");
        status.className = `step-card-status ${unlocked ? "status-unlocked" : "status-locked"}`;
        status.textContent = unlocked ? "✓ Deblocat" : (available ? "🔍 Scan QR" : "🔒 Blocat");
        meta.appendChild(status);

        if (unlocked && step.bonus && step.bonus.length > 0) {
            const doneCount = step.bonus.filter((_, i) => isBonusItemDone(step.num, i)).length;
            const bb = document.createElement("div");
            bb.className = "step-card-status";
            if (bonusDoneAll) {
                bb.style.cssText = "background:rgba(91,155,213,0.12);color:var(--blue-info);border:1px solid rgba(91,155,213,0.3)";
                bb.textContent = "🎁 Bonus complet";
            } else {
                bb.style.cssText = "background:rgba(212,160,23,0.08);color:var(--gold);border:1px solid rgba(212,160,23,0.2)";
                bb.textContent = `🎁 Bonus ${doneCount}/${step.bonus.length}`;
            }
            meta.appendChild(bb);
        }

        body.appendChild(label);
        body.appendChild(name);
        body.appendChild(meta);

        if (unlocked) {
            const tap = document.createElement("div");
            tap.className = "step-card-tap";
            tap.textContent = "↗ Atinge pentru detalii";
            body.appendChild(tap);
        }

        card.appendChild(imgWrap);
        card.appendChild(body);
        wrapper.appendChild(badge);
        wrapper.appendChild(card);

        if (!isFinal) {
            const conn = document.createElement("div");
            conn.className = "step-connector";
            wrapper.appendChild(conn);
        }

        container.appendChild(wrapper);
    });

    if (allTenComplete()) {
        const xMark = document.createElement("div");
        xMark.className = "pirate-x-marker";
        xMark.innerHTML = `
            <div class="pirate-x-lines">
                <div class="pirate-x-line pirate-x-line-1"></div>
                <div class="pirate-x-line pirate-x-line-2"></div>
            </div>
            <p class="pirate-x-text">X marks the spot!</p>
        `;
        container.appendChild(xMark);
    }

    if (finalized) {
        document.getElementById("qrCodeButton").classList.add("qr-btn-finalized");
    }
}

// ──────────────────────────────────────────────
//  NODE CLICK
// ──────────────────────────────────────────────
function onNodeClick(num) {
    if (isUnlocked(num)) showStepModal(num);
    else if (isAvailable(num)) showHintModal(num);
}

// ──────────────────────────────────────────────
//  MODALS
// ──────────────────────────────────────────────
function openModal(id) { document.getElementById(id).classList.remove("hidden"); lockScroll(); }
function closeModal(id) { document.getElementById(id).classList.add("hidden"); unlockScroll(); }

function showStepModal(num) {
    const step = STEPS[num - 1];
    const hasBonus = step.bonus && step.bonus.length > 0;
    const bonusDoneAll = allBonusDone(num);
    const doneCount = hasBonus ? step.bonus.filter((_, i) => isBonusItemDone(num, i)).length : 0;
    const content = document.getElementById("modalContent");

    let bonusBtnHTML = "";
    if (hasBonus) {
        bonusBtnHTML = `
            <button class="modal-bonus-btn" id="openBonusScan" data-step="${num}">
                <div class="modal-bonus-btn-left">
                    <span class="modal-bonus-btn-icon">${bonusDoneAll ? "🧩" : "📷"}</span>
                    <div class="modal-bonus-btn-text">
                        <strong>${bonusDoneAll ? "Revezi bonus-urile" : "Activități bonus"}</strong>
                        <span>${bonusDoneAll ? `Toate completate (${doneCount}/${step.bonus.length})` : `${doneCount}/${step.bonus.length} completate`}</span>
                    </div>
                </div>
                <span class="modal-bonus-btn-arrow">→</span>
            </button>
        `;
    }

    let scoreHTML = "";
    if (num === lastNum && isUnlocked(num) && (finalized || allBonusDone(num))) {
        const score = calculateScore();
        const maxScore = (lastNum - 1) + STEPS.filter(s => s.bonus).reduce((acc, s) => acc + (s.bonus?.filter(b => b.type === "quiz").length || 0), 0);

        scoreHTML = `
            <div class="modal-scorecard" style="margin-top:20px; text-align:center; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 12px; border: 1px solid var(--border);">
                <div style="font-size: 2.2rem; margin-bottom: 5px;">🏆</div>
                <h3 style="margin: 0 0 10px 0; color: var(--gold); font-size: 1.2rem;">Scorul Tău</h3>
                <p style="font-size: 0.95rem; margin: 0 0 5px 0;">Etape descoperite: <strong style="color:white">${score.steps} / ${lastNum - 1}</strong></p>
                <p style="font-size: 0.95rem; margin: 0 0 10px 0;">Răspunsuri corecte la quiz: <strong style="color:white">${score.quizzes}</strong></p>
                <div style="font-size: 1.3rem; font-weight: bold; color: var(--gold); background: rgba(212,160,23,0.1); display:inline-block; padding: 4px 12px; border-radius: 20px;">Total: ${score.total} / ${maxScore}</div>
            </div>
        `;
    }

    content.innerHTML = `
        <div class="modal-img-wrap" id="modalImgWrap">
            <img src="${step.image}" alt="${step.name}"
                onerror="document.getElementById('modalImgWrap').innerHTML='<div class=\\'modal-img-placeholder\\'>${num === lastNum ? "🏆" : "🗺️"}</div>'">
            <div class="modal-img-badge">${num === lastNum ? "✦ Final ✦" : `Etapa ${num}`}</div>
        </div>
        <div class="modal-body">
            <div class="modal-step-label">${num === lastNum ? "Locatia Finala" : `Etapa ${num} din ${lastNum - 1}`}</div>
            <h2 class="modal-title">${step.name}</h2>
            <div class="modal-divider"></div>
            <p class="modal-text">${step.text}</p>
            ${bonusBtnHTML}
            ${scoreHTML}
        </div>
    `;

    const bonusBtn = document.getElementById("openBonusScan");
    if (bonusBtn && !bonusBtn.disabled) {
        bonusBtn.addEventListener("click", () => {
            closeModal("stepModal");
            openBonusPanel(num);
        });
    }

    openModal("stepModal");
}

function showHintModal(num) {
    const step = STEPS[num - 1];
    document.getElementById("hintContent").innerHTML = `
        <div class="hint-body">
            <div class="hint-icon-wrap"><span>${num === lastNum ? "⭐" : "🔍"}</span></div>
            <div class="hint-step-label">${num === lastNum ? "Etapa Finala" : `Etapa ${num} din ${lastNum - 1}`}</div>
            <h3 class="hint-title">${num === lastNum ? "Locatia Finala" : "Locatie necunoscuta"}</h3>
            <div class="hint-divider"></div>
            <p class="hint-text">${step.hint}</p>
        </div>
    `;
    openModal("hintModal");
}

// ──────────────────────────────────────────────
//  BONUS PANEL
// ──────────────────────────────────────────────
let bonusQrCode = null;
let bonusScanning = false;
let currentBonusNum = null;
let currentBonusIdx = null;
// For photo capture
let photoCaptureStream = null;

function openBonusPanel(num) {
    currentBonusNum = num;
    const step = STEPS[num - 1];
    if (!step.bonus || step.bonus.length === 0) return;

    // Find first incomplete item (or show last if all done)
    let idx = step.bonus.findIndex((_, i) => !isBonusItemDone(num, i));
    if (idx === -1) idx = 0; // all done → show first for review

    currentBonusIdx = idx;
    renderBonusItem(num, idx);
    openModal("bonusModal");
}

function renderBonusItem(num, idx) {
    stopBonusScanner();
    stopPhotoStream();

    const step = STEPS[num - 1];
    const item = step.bonus[idx];
    const done = isBonusItemDone(num, idx);
    const totalItems = step.bonus.length;
    const content = document.getElementById("bonusContent");

    const progressDots = step.bonus.map((_, i) => {
        const cl = i === idx ? "bonus-dot active" : (isBonusItemDone(num, i) ? "bonus-dot done" : "bonus-dot");
        return `<span class="${cl}"></span>`;
    }).join("");

    const typeIcon = { photo: "📷", qr: "🔳", image_text: "🖼️", quiz: "❓", info: "ℹ️" }[item.type] || "🎯";
    const typeLabel = { photo: "Foto", qr: "Cod QR", image_text: "Imagine + Text", quiz: "Quiz", info: "Informație" }[item.type] || "Bonus";

    let innerHTML = "";

    if (item.type === "photo") {
        innerHTML = buildPhotoUI(num, idx, done);
    } else if (item.type === "qr") {
        innerHTML = buildQrUI(num, idx, done, item);
    } else if (item.type === "image_text") {
        innerHTML = buildImageTextUI(num, idx, done, item);
    } else if (item.type === "text_text") {
        innerHTML = buildTextTextUI(num, idx, done, item);
    } else if (item.type === "quiz") {
        innerHTML = buildQuizUI(num, idx, done, item);
    } else if (item.type === "info") {
        innerHTML = buildInfoUI(num, idx, done, item);
    }

    content.innerHTML = `
        <div class="bonus-panel-header">
            <div class="bonus-breadcrumb">
                <span class="bonus-type-badge">${typeIcon} ${typeLabel}</span>
                <div class="bonus-dots">${progressDots}</div>
                <span class="bonus-counter">${idx + 1} / ${totalItems}</span>
            </div>
            <h3 class="bonus-item-title">${item.label}</h3>
            ${item.description ? `<p class="bonus-item-desc">${item.description}</p>` : ""}
        </div>
        <div class="bonus-item-content">
            ${innerHTML}
        </div>
        <div class="bonus-nav-row">
            ${idx > 0 ? `<button class="bonus-nav-btn" id="bonusPrev">← Anterior</button>` : `<span></span>`}
            ${idx < totalItems - 1 ? `<button class="bonus-nav-btn bonus-nav-next" id="bonusNext" ${!done ? "disabled" : ""}>Următor →</button>` : `<span></span>`}
        </div>
    `;

    // Nav listeners
    document.getElementById("bonusPrev")?.addEventListener("click", () => {
        stopBonusScanner(); stopPhotoStream();
        currentBonusIdx = idx - 1;
        renderBonusItem(num, idx - 1);
    });
    document.getElementById("bonusNext")?.addEventListener("click", () => {
        stopBonusScanner(); stopPhotoStream();
        currentBonusIdx = idx + 1;
        renderBonusItem(num, idx + 1);
    });

    // Start async UIs
    if (item.type === "photo" && !done) startPhotoCapture(num, idx);
    if (item.type === "photo" && done) {
        document.getElementById("retakePhotoBtn")?.addEventListener("click", () => undoBonusItem(num, idx));
    }
    if (item.type === "qr" && !done) setTimeout(() => startBonusScanner(num, idx, item.code), 350);
    if (item.type === "quiz") attachQuizListeners(num, idx, item, done);
    if (item.type === "image_text") attachImageTextListeners(num, idx, item, done);
    if (item.type === "text_text") attachTextTextListeners(num, idx, item, done);
    if (item.type === "qr") attachManualCodeListener(num, idx, item.code);
    if (item.type === "info" && !done) {
        document.getElementById("infoSubmit")?.addEventListener("click", () => {
            completeBonusItem(num, idx, "info", { read: true });
        });
    }
}

// ── Info ──
function buildInfoUI(num, idx, done, item) {
    return `
        <div class="info-wrap" style="text-align:center; padding: 20px 0;">
            <p style="font-size: 1.05rem; color: var(--text-light); line-height: 1.5; margin-bottom: 20px;">
                ${item.text || "Acesta este un text informativ."}
            </p>
            ${!done
            ? '<button class="bonus-submit-btn" id="infoSubmit" style="width: 100%;">Am înțeles</button>'
            : '<div class="bonus-feedback success">✓ Bifă pusă</div>'
        }
        </div>
    `;
}

// ── Photo ──
function buildPhotoUI(num, idx, done) {
    const logEntry = scanLog.slice().reverse().find(e => e.stepNum === num && e.bonusIndex === idx);
    if (done && logEntry && logEntry.data?.photo) {
        return `
            <div class="photo-preview-wrap">
                <img src="${logEntry.data.photo}" class="photo-preview-img" alt="Poza capturata">
                <div class="photo-done-label">✓ Fotografie salvată</div>
                <button class="bonus-submit-btn" id="retakePhotoBtn" style="margin-top: 15px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);">Refă poza</button>
            </div>
        `;
    }
    return `
        <div class="photo-capture-wrap">
            <video id="photoCaptureVideo" autoplay playsinline muted class="photo-video"></video>
            <canvas id="photoCaptureCanvas" style="display:none"></canvas>
            <button class="capture-btn" id="capturePhotoBtn">📸 Fă poza</button>
            <div id="photoFeedback" class="bonus-feedback"></div>
        </div>
    `;
}

async function startPhotoCapture(num, idx) {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        photoCaptureStream = stream;
        const video = document.getElementById("photoCaptureVideo");
        if (!video) { stream.getTracks().forEach(t => t.stop()); return; }
        video.srcObject = stream;

        document.getElementById("capturePhotoBtn")?.addEventListener("click", () => {
            const canvas = document.getElementById("photoCaptureCanvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext("2d").drawImage(video, 0, 0);
            const dataUrl = canvas.toDataURL("image/jpeg", 0.7);
            stopPhotoStream();
            completeBonusItem(num, idx, "photo", { photo: dataUrl });
        });
    } catch {
        const fb = document.getElementById("photoFeedback");
        if (fb) { fb.className = "bonus-feedback error"; fb.textContent = "Camera indisponibilă."; }
    }
}

function stopPhotoStream() {
    if (photoCaptureStream) {
        photoCaptureStream.getTracks().forEach(t => t.stop());
        photoCaptureStream = null;
    }
}

// ── QR / Code ──
function buildQrUI(num, idx, done, item) {
    const logEntry = scanLog.slice().reverse().find(e => e.stepNum === num && e.bonusIndex === idx);
    if (done && logEntry) {
        return `<div class="qr-done-wrap"><span class="qr-done-icon">✓</span><p class="qr-done-text">Cod acceptat: <strong>${logEntry.data?.code || "—"}</strong></p></div>`;
    }
    return `
        <div class="bonus-qr-wrap">
            <div id="bonusReader"></div>
            <div id="bonusFeedback" class="bonus-feedback"></div>
            <div class="manual-code-row">
                <span class="manual-code-label">sau introdu codul manual:</span>
                <div class="manual-input-row">
                    <input type="text" id="manualCodeInput" class="manual-code-input" placeholder="Scrie codul QR..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
                    <button class="manual-code-btn" id="manualCodeSubmit">OK</button>
                </div>
            </div>
        </div>
    `;
}

function startBonusScanner(num, idx, expectedCode) {
    const readerEl = document.getElementById("bonusReader");
    if (!readerEl) return;
    bonusQrCode = new Html5Qrcode("bonusReader");
    bonusScanning = true;
    bonusQrCode.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 200 },
        (decoded) => onBonusCodeReceived(decoded.trim(), num, idx, expectedCode)
    ).catch(() => {
        const fb = document.getElementById("bonusFeedback");
        if (fb) { fb.className = "bonus-feedback error"; fb.textContent = "Camera indisponibilă."; }
    });
}

function stopBonusScanner() {
    if (bonusQrCode && bonusScanning) {
        bonusQrCode.stop().then(() => bonusQrCode.clear()).catch(() => { });
        bonusScanning = false;
        bonusQrCode = null;
    }
}

function attachManualCodeListener(num, idx, expectedCode) {
    const submitBtn = document.getElementById("manualCodeSubmit");
    const input = document.getElementById("manualCodeInput");
    if (!submitBtn || !input) return;

    const tryCode = () => {
        const val = input.value.trim();
        if (!val) return;
        onBonusCodeReceived(val, num, idx, expectedCode);
    };
    submitBtn.addEventListener("click", tryCode);
    input.addEventListener("keydown", e => { if (e.key === "Enter") tryCode(); });
}

function onBonusCodeReceived(code, num, idx, expectedCode) {
    const fb = document.getElementById("bonusFeedback");
    if (expectedCode && code !== expectedCode) {
        if (fb) { fb.className = "bonus-feedback error"; fb.textContent = "❌ Cod incorect."; }
        return;
    }
    stopBonusScanner();
    completeBonusItem(num, idx, "qr", { code });
}

// ── Image + Text ──
function buildImageTextUI(num, idx, done, item) {
    const logEntry = scanLog.slice().reverse().find(e => e.stepNum === num && e.bonusIndex === idx);
    const savedText = logEntry?.data?.text || "";
    const hasValid = !!item.valid;
    return `
        <div class="image-text-wrap">
            <div class="image-text-img-wrap">
                <img src="${item.image}" alt="Imagine" class="image-text-img"
                    onerror="this.parentElement.innerHTML='<div class=\\'modal-img-placeholder\\'>🖼️</div>'">
            </div>
            <textarea
                id="imageTextInput"
                class="image-text-area"
                placeholder="${item.placeholder || 'Răspunsul tău...'}"
                autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                ${done ? "disabled" : ""}
            >${savedText}</textarea>
            ${!done ? `<button class="bonus-submit-btn" id="imageTextSubmit">Salvează răspunsul</button>` : `<div class="bonus-feedback success">✓ Răspuns salvat</div>`}
            <div id="imageTextFeedback" class="bonus-feedback"></div>
            ${hasValid && !done ? `<p class="quiz-valid-hint" style="margin-top:8px">⚠️ Răspunsul corect este necesar pentru a continua</p>` : ""}
        </div>
    `;
}

function attachImageTextListeners(num, idx, item, done) {
    if (done) return;
    document.getElementById("imageTextSubmit")?.addEventListener("click", () => {
        const val = document.getElementById("imageTextInput")?.value.trim();
        const fb = document.getElementById("imageTextFeedback");
        if (!val) {
            if (fb) { fb.className = "bonus-feedback error"; fb.textContent = "Completează câmpul."; }
            return;
        }
        // If a valid answer is required, check it (case-insensitive)
        if (item.valid) {
            const correct = val.toLowerCase() === item.valid.toLowerCase();
            if (!correct) {
                if (fb) { fb.className = "bonus-feedback error"; fb.textContent = "❌ Răspuns incorect. Mai încearcă."; }
                return;
            }
        }
        completeBonusItem(num, idx, "image_text", { text: val });
    });
}

// ── Text + Text (riddle / prompt with mandatory text input) ──
function buildTextTextUI(num, idx, done, item) {
    const logEntry = scanLog.slice().reverse().find(e => e.stepNum === num && e.bonusIndex === idx);
    const savedText = logEntry?.data?.text || "";
    const hasValid = !!item.valid;
    return `
        <div class="text-text-wrap">
            <div class="text-text-prompt">${item.question || ""}</div>
            <input
                type="text"
                id="textTextInput"
                class="text-text-input"
                placeholder="${item.placeholder || "Răspunsul tău..."}"
                value="${savedText}"
                autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                ${done ? "disabled" : ""}
            />
            ${!done
            ? `<button class="bonus-submit-btn" id="textTextSubmit">Confirmă răspunsul</button>
                   <div id="textTextFeedback" class="bonus-feedback"></div>`
            : `<div class="bonus-feedback success">✓ Răspuns salvat: <strong>${savedText}</strong></div>`
        }
            ${hasValid && !done ? `<p class="quiz-valid-hint" style="margin-top:8px">⚠️ Răspunsul corect este necesar pentru a continua</p>` : ""}
        </div>
    `;
}

function attachTextTextListeners(num, idx, item, done) {
    if (done) return;
    const submit = document.getElementById("textTextSubmit");
    const input = document.getElementById("textTextInput");
    const fb = document.getElementById("textTextFeedback");
    if (!submit || !input) return;

    const tryAnswer = () => {
        const val = input.value.trim();
        if (!val) {
            if (fb) { fb.className = "bonus-feedback error"; fb.textContent = "Completează câmpul."; }
            return;
        }
        if (item.valid) {
            const correct = val.toLowerCase() === item.valid.toLowerCase();
            if (!correct) {
                if (fb) { fb.className = "bonus-feedback error"; fb.textContent = "❌ Răspuns incorect. Mai încearcă!"; }
                return;
            }
        }
        completeBonusItem(num, idx, "text_text", { text: val });
    };
    submit.addEventListener("click", tryAnswer);
    input.addEventListener("keydown", e => { if (e.key === "Enter") tryAnswer(); });
}

// ── Quiz ──
// valid can be: string (single answer) or array of strings (multi-select)
function buildQuizUI(num, idx, done, item) {
    const letters = ["A", "B", "C", "D"];
    const hasValid = !!item.valid;
    const multiValid = Array.isArray(item.valid);
    const correctSet = multiValid ? new Set(item.valid) : null;

    const logEntry = scanLog.find(e => e.stepNum === num && e.bonusIndex === idx);
    const wasCorrect = logEntry?.data?.correct;
    const chosenArr = logEntry?.data?.chosen  // may be array or string
        ? (Array.isArray(logEntry.data.chosen) ? logEntry.data.chosen : [logEntry.data.chosen])
        : [];

    const optsHTML = item.options.map((opt, i) => {
        let cls = "";
        if (done && hasValid) {
            const isCorrectOpt = multiValid ? correctSet.has(opt) : opt === item.valid;
            cls = isCorrectOpt ? "correct" : "wrong";
        }
        const isMulti = multiValid && !done;
        return `
            <button class="quiz-option ${cls}${isMulti ? " quiz-option-multi" : ""}" data-index="${i}" data-value="${opt}" ${done ? "disabled" : ""}>
                <span class="quiz-opt-letter">${letters[i]}</span>
                ${opt}
                ${isMulti ? `<span class="quiz-check-icon">○</span>` : ""}
            </button>
        `;
    }).join("");

    const confirmBtn = multiValid && !done
        ? `<button class="quiz-confirm-btn" id="quizConfirmBtn">Confirmă răspunsul</button>` : "";
    const multiHint = multiValid && !done
        ? `<p class="quiz-multi-hint">Selectează toate răspunsurile corecte</p>` : "";

    return `
        <div class="quiz-body-inner">
            ${hasValid ? `<p class="quiz-valid-hint">⚠️ Răspundeți pentru a putea continua</p>` : `<p class="quiz-info-hint">ℹ️ Quiz informațional</p>`}
            ${multiHint}
            <div class="quiz-question">${item.question}</div>
            <div class="quiz-options" id="quizOptions">${optsHTML}</div>
            ${confirmBtn}
            ${done ? `<div class="quiz-feedback ${wasCorrect ? "win" : hasValid ? "fail" : "win"}">${wasCorrect ? "🎉 Răspuns corect!" : hasValid ? "❌ Răspuns greșit." : "✓ Răspuns salvat."}</div>` : ""}
        </div>
    `;
}

function attachQuizListeners(num, idx, item, done) {
    if (done) return;
    const multiValid = Array.isArray(item.valid);

    if (multiValid) {
        const selected = new Set();
        document.querySelectorAll(".quiz-option").forEach(btn => {
            btn.addEventListener("click", () => {
                const opt = btn.dataset.value;
                if (selected.has(opt)) {
                    selected.delete(opt);
                    btn.classList.remove("selected");
                    btn.querySelector(".quiz-check-icon").textContent = "○";
                } else {
                    selected.add(opt);
                    btn.classList.add("selected");
                    btn.querySelector(".quiz-check-icon").textContent = "●";
                }
            });
        });
        const confirmBtn = document.getElementById("quizConfirmBtn");
        if (confirmBtn) {
            confirmBtn.addEventListener("click", () => {
                if (selected.size === 0) return;
                const correctSet = new Set(item.valid);
                const correct = selected.size === correctSet.size &&
                    [...selected].every(o => correctSet.has(o));
                completeBonusItem(num, idx, "quiz", { chosen: [...selected], correct });
            });
        }
    } else {
        document.querySelectorAll(".quiz-option").forEach(btn => {
            btn.addEventListener("click", () => {
                const chosen = btn.dataset.value;
                const correct = !item.valid || chosen === item.valid;
                completeBonusItem(num, idx, "quiz", { chosen, correct });
            });
        });
    }
}

// ──────────────────────────────────────────────
//  COMPLETE / UNDO BONUS ITEM
// ──────────────────────────────────────────────
function undoBonusItem(num, idx) {
    if (bonusProgress[`step${num}`]) {
        bonusProgress[`step${num}`][idx] = false;
    }
    // Nu ștergem din scanLog pentru a păstra istoricul încercărilor
    saveProgress();
    buildRoadmap();
    renderHistory();
    renderBonusItem(num, idx);
}

function completeBonusItem(num, idx, type, data) {
    const step = STEPS[num - 1];
    if (!bonusProgress[`step${num}`]) bonusProgress[`step${num}`] = [];
    bonusProgress[`step${num}`][idx] = true;

    // Save to scan log
    scanLog.push({
        stepNum: num,
        stepName: step.name,
        bonusIndex: idx,
        type,
        label: step.bonus[idx].label,
        data,
        timestamp: new Date().toISOString()
    });

    saveProgress();
    buildRoadmap();
    renderHistory();

    const totalItems = step.bonus.length;
    // Re-render current item to show its done/result state, then advance
    renderBonusItem(num, idx);
    if (idx < totalItems - 1) {
        // Auto-advance to next item after a short delay
        setTimeout(() => renderBonusItem(num, idx + 1), 900);
    } else {
        // All bonus items completed — show completion screen
        if (num === lastNum && isUnlocked(num) && allBonusDone(num)) {
            pendingCelebration = true;
        }
        setTimeout(() => showBonusAllDone(num), 900);
    }
}

function showBonusAllDone(num) {
    const step = STEPS[num - 1];
    const content = document.getElementById("bonusContent");
    if (!content) return;

    const isLastStep = num === lastNum && allBonusDone(num);

    const progressDots = step.bonus.map((_, i) => {
        return `<span class="bonus-dot done"></span>`;
    }).join("");

    content.innerHTML = `
        <div class="bonus-panel-header">
            <div class="bonus-breadcrumb">
                <span class="bonus-type-badge">✅ Complet</span>
                <div class="bonus-dots">${progressDots}</div>
                <span class="bonus-counter">${step.bonus.length} / ${step.bonus.length}</span>
            </div>
        </div>
        <div class="bonus-all-done-wrap">
            <span class="bonus-all-done-icon">${isLastStep ? "🏆" : "🎉"}</span>
            <h3 class="bonus-all-done-title">${isLastStep ? "Aventura s-a încheiat!" : "Activități complete!"}</h3>
            <p class="bonus-all-done-sub">${isLastStep
            ? "Felicitări! Ai finalizat toate etapele și bonusurile. Pregătește-te pentru ceremonia de premiere! 🎊"
            : `Ai finalizat toate activitățile bonus pentru <strong>${step.name}</strong>.`
        }</p>
            ${!isLastStep ? `<button class="bonus-submit-btn" id="bonusReviewBtn">Revezi activitățile →</button>` : ""}
        </div>
    `;

    document.getElementById("bonusReviewBtn")?.addEventListener("click", () => {
        renderBonusItem(num, 0);
    });

    // For the last step: auto-close bonus modal and launch celebration after 2.5s
    if (isLastStep) {
        setTimeout(() => {
            if (!pendingCelebration) return; // already handled by manual close
            pendingCelebration = false;
            stopBonusScanner();
            stopPhotoStream();
            closeModal("bonusModal");
            unlockScroll();
            showCelebration();
        }, 2500);
    }
}

// ──────────────────────────────────────────────
//  HISTORY PANEL
// ──────────────────────────────────────────────
function renderHistory() {
    const container = document.getElementById("historyContent");
    if (!container) return;

    if (scanLog.length === 0) {
        container.innerHTML = `
            <div class="history-empty">
                <span class="history-empty-icon">📋</span>
                <p>Nu ai scanat nimic încă.</p>
                <p class="history-empty-sub">Activitățile tale vor apărea aici.</p>
            </div>
        `;
        return;
    }

    // Group by step
    const byStep = {};
    scanLog.forEach(entry => {
        const key = entry.stepNum;
        if (!byStep[key]) byStep[key] = [];
        byStep[key].push(entry);
    });

    const typeIcon = { photo: "📷", qr: "🔳", image_text: "🖼️", quiz: "❓", text_text: "📝" };
    const typeLabel = { photo: "Fotografie", qr: "Cod QR", image_text: "Imagine + Text", quiz: "Quiz", text_text: "Întrebare Text" };

    const html = Object.keys(byStep).sort((a, b) => a - b).map(stepNum => {
        const entries = byStep[stepNum];
        const stepName = entries[0].stepName;
        const entriesHTML = entries.map(e => {
            const ts = new Date(e.timestamp);
            const formatted = ts.toLocaleString("ro-RO", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
            let preview = "";
            if (e.type === "photo" && e.data?.photo) {
                preview = `<img src="${e.data.photo}" class="history-photo-thumb" alt="foto">`;
            } else if (e.type === "qr") {
                preview = `<span class="history-code-preview">${e.data?.code || "—"}</span>`;
            } else if (e.type === "image_text" || e.type === "text_text") {
                preview = `<span class="history-text-preview">"${e.data?.text || "—"}"</span>`;
            } else if (e.type === "quiz") {
                const correct = e.data?.correct;
                preview = `<span class="history-quiz-result ${correct ? "correct" : "wrong"}">${correct ? "✓ Corect" : "✗ Greșit"}: ${e.data?.chosen || "—"}</span>`;
            }

            return `
                <div class="history-entry">
                    <div class="history-entry-header">
                        <span class="history-type-icon">${typeIcon[e.type] || "📌"}</span>
                        <div class="history-entry-meta">
                            <span class="history-entry-label">${e.label || typeLabel[e.type]}</span>
                            <span class="history-entry-time">${formatted}</span>
                        </div>
                    </div>
                    ${preview ? `<div class="history-entry-preview">${preview}</div>` : ""}
                </div>
            `;
        }).join("");

        return `
            <div class="history-step-group">
                <div class="history-step-header">
                    <span class="history-step-num">Etapa ${stepNum}</span>
                    <span class="history-step-name">${stepName}</span>
                    <span class="history-step-count">${entries.length} activit${entries.length === 1 ? "ate" : "ăți"}</span>
                </div>
                ${entriesHTML}
            </div>
        `;
    }).join("");

    container.innerHTML = html;
}

function openHistoryPanel() {
    renderHistory();
    document.getElementById("historyPanel").classList.add("open");
    document.getElementById("historyOverlay").classList.add("active");
    lockScroll();
}

function closeHistoryPanel() {
    document.getElementById("historyPanel").classList.remove("open");
    document.getElementById("historyOverlay").classList.remove("active");
    unlockScroll();
}

// ──────────────────────────────────────────────
//  CELEBRATION
// ──────────────────────────────────────────────
function showCelebration() {
    const { steps, quizzes, total } = calculateScore();
    const maxScore = (lastNum - 1) + STEPS.filter(s => s.bonus).reduce((acc, s) => acc + (s.bonus?.filter(b => b.type === "quiz").length || 0), 0);
    const pct = total / maxScore;
    const circ = 2 * Math.PI * 55;

    document.getElementById("scoreNum").textContent = total;
    document.getElementById("stepsScore").textContent = steps;
    document.getElementById("quizScore").textContent = quizzes;
    document.getElementById("scoreTotal").textContent = maxScore;
    document.getElementById("scoreLabel").textContent =
        pct >= 0.9 ? "Extraordinar! 🌟" :
            pct >= 0.7 ? "Foarte bine! 🎯" :
                pct >= 0.5 ? "Bine! 👍" : "Continua sa explorezi!";

    const ring = document.getElementById("scoreRingFill");
    ring.style.strokeDashoffset = circ;
    document.getElementById("celebrationOverlay").classList.remove("hidden");
    lockScroll();
    launchConfetti();
    setTimeout(() => { ring.style.strokeDashoffset = circ * (1 - pct); }, 200);
}

function launchConfetti() {
    const container = document.getElementById("confettiContainer");
    container.classList.remove("hidden");
    container.innerHTML = "";
    for (let i = 0; i < 120; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        const size = 8 + Math.random() * 8;
        const left = Math.random() * 100;
        const delay = Math.random() * 1.8;
        const dur = 2.5 + Math.random() * 2;
        const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
        piece.style.cssText = `left:${left}%;width:${size}px;height:${size}px;background:${color};border-radius:${Math.random() > 0.5 ? "50%" : "2px"};animation-duration:${dur}s;animation-delay:${delay}s;`;
        container.appendChild(piece);
    }
    setTimeout(() => { container.classList.add("hidden"); container.innerHTML = ""; }, 5500);
}

// ──────────────────────────────────────────────
//  QR SCANNER (main – unlocks steps)
// ──────────────────────────────────────────────
let html5QrCode = null;
let readerStarted = false;

function openQrPanel() {
    if (finalized) return;
    document.getElementById("qrPanel").classList.add("open");
    document.getElementById("qrOverlay").classList.add("active");
    lockScroll();
    if (!readerStarted) {
        readerStarted = true;
        setTimeout(SetUpQrReader, 350);
    }
}

function closeQrPanel() {
    document.getElementById("qrPanel").classList.remove("open");
    document.getElementById("qrOverlay").classList.remove("active");
    StopQrReader();
    readerStarted = false;
    unlockScroll();
}

function SetUpQrReader() {
    html5QrCode = new Html5Qrcode("reader");
    html5QrCode.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 240 },
        onQrScanSuccess
    ).catch(() => showFeedback("Camera indisponibilă", "feedback-error"));
}

function StopQrReader() {
    if (html5QrCode && html5QrCode.isScanning) {
        html5QrCode.stop().then(() => html5QrCode.clear()).catch(() => { });
    }
}

function onQrScanSuccess(decoded) {
    const text = decoded.trim();
    if (text === "ERASELOCALSTORAGE") {
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload();
        return;
    }

    const stepKey = Object.keys(CODES).find(k => CODES[k] === text);
    if (!stepKey) { showFeedback("❌ Cod QR necunoscut.", "feedback-error"); return; }

    const stepNum = parseInt(stepKey.replace("step", ""));

    if (progress[stepKey]) { showFeedback(`✅ Etapa ${stepNum} deja deblocată!`, "feedback-info"); return; }

    // Check if PREVIOUS step's blocking quizzes are done
    if (stepNum > 1 && hasBlockingQuiz(stepNum - 1)) {
        showFeedback(`⚠️ Completează quiz-ul de la etapa ${stepNum - 1} înainte!`, "feedback-error");
        return;
    }

    if (stepNum > 1 && !progress[`step${stepNum - 1}`]) {
        showFeedback(`⚠️ Deblochează mai întâi etapa ${stepNum - 1}!`, "feedback-error");
        return;
    }

    progress[stepKey] = true;
    saveProgress();
    showFeedback(`🎉 Etapa ${stepNum} deblocată!`, "feedback-success");
    buildRoadmap();

    if (stepNum === lastNum) pendingCelebration = true;

    setTimeout(() => { closeQrPanel(); showStepModal(stepNum); }, 1600);
}

// Manual QR entry in main panel
function setupManualMainEntry() {
    const btn = document.getElementById("mainManualSubmit");
    const input = document.getElementById("mainManualInput");
    if (!btn || !input) return;
    const tryCode = () => {
        const val = input.value.trim();
        if (!val) return;
        input.value = "";
        onQrScanSuccess(val);
    };
    btn.addEventListener("click", tryCode);
    input.addEventListener("keydown", e => { if (e.key === "Enter") tryCode(); });
}

function showFeedback(msg, cls) {
    const el = document.getElementById("qrFeedback");
    el.className = cls;
    el.textContent = msg;
    setTimeout(() => { el.textContent = ""; el.className = ""; }, 4500);
}

// ──────────────────────────────────────────────
//  SETUP
// ──────────────────────────────────────────────
function setupModals() {
    document.getElementById("modalClose").addEventListener("click", () => {
        closeModal("stepModal");
        if (pendingCelebration) { pendingCelebration = false; showCelebration(); }
    });
    document.getElementById("hintClose").addEventListener("click", () => closeModal("hintModal"));
    document.getElementById("bonusClose").addEventListener("click", () => {
        stopBonusScanner(); stopPhotoStream();
        closeModal("bonusModal");
        if (pendingCelebration) { pendingCelebration = false; showCelebration(); }
    });

    ["stepModal", "hintModal", "bonusModal"].forEach(id => {
        document.getElementById(id).addEventListener("click", e => {
            if (e.target !== e.currentTarget) return;
            if (id === "bonusModal") { stopBonusScanner(); stopPhotoStream(); }
            closeModal(id);
            if ((id === "stepModal" || id === "bonusModal") && pendingCelebration) {
                pendingCelebration = false;
                setTimeout(() => showCelebration(), 300);
            }
        });
    });

    document.getElementById("celebrationClose").addEventListener("click", () => {
        document.getElementById("celebrationOverlay").classList.add("hidden");
        document.getElementById("confettiContainer").classList.add("hidden");
        unlockScroll();
        finalized = true;
        // Persist everything to localStorage when the game is won and closed
        persistToLocalStorage();
        buildRoadmap();
    });
}

function setupQrButton() {
    document.getElementById("qrCodeButton").addEventListener("click", openQrPanel);
    document.getElementById("qrPanelClose").addEventListener("click", closeQrPanel);
    document.getElementById("qrOverlay").addEventListener("click", closeQrPanel);
}

function setupHistoryButton() {
    document.getElementById("historyButton").addEventListener("click", openHistoryPanel);
    document.getElementById("historyPanelClose").addEventListener("click", closeHistoryPanel);
    document.getElementById("historyOverlay").addEventListener("click", closeHistoryPanel);
}

function setupTheme() {
    const html = document.documentElement;
    const btn = document.getElementById("themeToggle");
    const saved = localStorage.getItem("theme") || "dark";
    html.setAttribute("data-theme", saved);
    btn.addEventListener("click", () => {
        const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
        html.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupTheme();
    buildRoadmap();
    setupModals();
    setupQrButton();
    setupHistoryButton();
    setupManualMainEntry();
});
