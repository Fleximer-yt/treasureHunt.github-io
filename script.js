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
};

// ──────────────────────────────────────────────
//  STEPS DATA
//  bonus[] – each item can be:
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
        num: 1, name: "Statuia lui Shakespeare", image: "images/step1.jpg",
        text: "Ai ajuns la statuia lui William Shakespeare! Acesta este un renumit scriitor englez cunoscut pentru opere precum Romeo si Julieta, Hamlet si Macbeth, dar si pentru sonetele sale. El este considerat cel mai mare dramaturg al limbii engleze si unul dintre cei mai mari scriitori ai lumii.",
        hint: "Mare personalitate! Din Anglia, a trait in sec. 19 si a fost un renumit scriitor.",
        bonus: [
            { type: "photo", label: "O poza cu statuia completa SI UN MEMBRU AL ECHIPEI", description: "Scriitorul este..." },
            { type: "text_text", label: "Scriitorul este...", question: "Scriitorul este...", valid: "William Shakespeare" },
            { type: "quiz", label: "Quiz", question: "In ce an s-a nascut scriitorul", options: ["1564", "1616", "1584", "1600"], valid: "1564" },
        ]
    },
    {
        num: 2, name: "Cofetaria Minerva", image: "images/step2.jpg",
        text: "Ai ajuns la Cofetaria Minerva! Aceasta este o cofetarie traditionala din Craiova, infiintata in anul 1903. Este una dintre cele mai vechi si cunoscute cofetarii din Romania, renumita pentru prajiturile sale delicioase si atmosfera sa boema.",
        hint: "Am arcade maure și parfum de epocă, în inima orașului, pe-o stradă aproape. Lumea bună-n trecut la mine se strângea, Amza, Farago, de Gaulle pe-aici trecea. Tort și ecler, mousse și cremă fină, din 1902 te cheamă-o vitrină. Dacă vrei dulceață cu farmec regal, ce loc din Craiova e unic și special?",
        bonus: [
            { type: "photo", label: "O poza cu cofetaria cu statuia completa SI UN MEMBRU AL ECHIPEI", description: "Cofetaria Minerva..." },
            { type: "quiz", label: "Quiz", question: "De cati ani functioneaza cofetaria Minerva?", options: ["126", "124", "123", "120"], valid: "123" },
            { type: "image_text", image: "images/ViteazuCifer.png", label: "Mesajul transmis de imagine va duce la urmatoarea etapa", question: "Simbolurile se traduc ca...", valid: "A fost in timpul sau viteaz" },
        ]
    },
    {
        num: 3, name: "Statuia lui Mihai Viteazu", image: "images/step3.jpg",
        text: "Ai ajuns la Statuia lui Mihai Viteazu! Mihai Viteazu a fost un domnitor roman care a unit pentru scurt timp Tarile Romane in anul 1600. Este considerat unul dintre cei mai mari eroi nationali ai Romaniei, simbolizand unitatea si independenta poporului roman.",
        hint: "Mesajul este transmis in bonusurile anterioare! + Uitate sub!",
        bonus: [
            { type: "photo", label: "O poza cu statuie cu Mihai Viteazu SI UN MEMBRU AL ECHIPEI", description: "Statuia lui Mihai Viteazu..." },
            { type: "quiz", label: "Quiz", question: "In ce an s-a nascut Mihai Viteazu?", options: ["1552", "1558", "1562", "1568"], valid: "1552" },
            { type: "quiz", label: "Quiz", question: "In ce an a facut Mihai Viteazu prima sa unire a Tarilor Romane?", options: ["1599", "1600", "1601", "1602"], valid: "1600" },
        ]
    },
    {
        num: 4, name: "Caracterul Zita din O noapte furtunoasa", image: "images/step4.jpg",
        text: "Această lucrare din bronz o reprezintă pe Zița, un personaj celebru din piesa de teatru O noapte furtunoasă, scrisă de Ion Luca Caragiale. Statuia a fost instalată în zona pietonală (aproape de strada Lipscani) ca parte a unui proiect de revitalizare a centrului istoric prin artă stradală",
        hint: "In centrul vechi, un personaj razboinic feminin te asteapta!",
        bonus: [
            { type: "photo", label: "O poza cu statuie cu Zita din O noapte furtunoasa SI UN MEMBRU AL ECHIPEI", description: "Statuia lui Zita din O noapte furtunoasa..." },
            { type: "quiz", label: "Quiz", question: "In ce an s-a nascut Ion Luca Caragiale?", options: ["1852", "1858", "1862", "1868"], valid: "1852" },
            { type: "text_text", label: "Tine foaia data de coordonator cu tine, o sa ai nevoie de ea mai tarziu", question: "Raspunde cu DA daca ai inteles ce ai de facut", valid: "DA" },
        ] // pe foaie scrie GNXPJZLF XKFTSF YWJNJR -- cifru caesar in fata + 5
    },
    {
        num: 5, name: "Biserica Sfânta Treime", image: "images/step5.jpg",
        text: "Biserica Sfânta Treime din Craiova este un monument istoric și de arhitectură religioasă, situat în centrul istoric al orașului. Construită în stil neobizantin, biserica impresionează prin picturile murale interioare. Este un important lăcaș de cult și un simbol al spiritualității locale.",
        hint: "Pe acea foaie este un cifru Caesar cu cifra intre 4 si 6, descopera care este mesajul si adauga YWJNJR la final in acelas cifru.",
        bonus: [
            { type: "photo", label: "O poza cu Biserica Sfânta Treime SI UN MEMBRU AL ECHIPEI", description: "Biserica Sfânta Treime..." },
            { type: "quiz", label: "Quiz", question: "In ce stil arhitectural este construita Biserica Sfânta Treime?", options: ["Neobizantin", "Neoclasic", "Gotic", "Baroc"], valid: "Neobizantin" },
            { type: "quiz", label: "Quiz", question: "Cati turle are Biserica Sfânta Treime?", options: ["1", "2", "3", "4"], valid: "1" },
            { type: "qr", label: "QR", description: "Scaneaza codul QR de pe foaia coordonatorului gasit langa biserica!", code: "Esti un maestru la asta!" },
        ]
    },
    {
        num: 6, name: "English Park", image: "images/step6.jpg",
        text: "English Park este un parc modern situat în Craiova, renumit pentru arhitectura sa peisagistică și spațiile dedicate relaxării. Este un loc popular pentru plimbări și activități în aer liber, oferind o oază de verdeață în mijlocul orașului.",
        hint: "Hintul se afla in codul qr scanat!",
        bonus: [
            { type: "photo", label: "O poza cu English Park SI UN MEMBRU AL ECHIPEI", description: "English Park..." },
            { type: "quiz", label: "Quiz", question: "In ce an s-a deschis English Park?", options: ["1932", "1940", "1920", "1930"], valid: "1932" },
            { type: "text_text", label: "Cauta si gaseste", question: "Pe unele banci din English Park sunt ascunse foi cu coduri HEX. Introdu sirul compus aici", valid: "4D45524355522D455433" },
            { type: "text_text", label: "Codul tau trebuie tradus!", question: "Tradu codul pe orice site hex to letter si introdu aici solutia: ", valid: "MERCUR-ET3" },
        ]
    },
    {
        num: 7, name: "Locatia Finala", image: "images/win.jpg",
        text: "Ai reusit! Ai descoperit Locatia Finala a Treasure Hunt CNNT. Aceasta calatorie a testat cunoasterea ta, perseverenta si spiritul de aventura. Tine minte acest moment — esti un adevarat Treasure Hunter!",
        hint: "Ai completat toate etapele! Acum trebuie sa gasesti si sa scanezi codul QR final pentru a-ti revendica victoria.",
        bonus: [
            { type: "photo", label: "O poza de grup cu toti membrii echipei", description: "Felicitari!" },
        ]
    }
];

const lastNum = 7;

const CONFETTI_COLORS = [
    "#f0c94a", "#d4a017", "#e05555", "#4caf7d", "#5b9bd5",
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
        const showFinal = isFinal && allTenComplete();
        if (isFinal && !showFinal) return;

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
    if (num === lastNum && isUnlocked(num)) {
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

    const typeIcon = { photo: "📷", qr: "🔳", image_text: "🖼️", quiz: "❓" }[item.type] || "🎯";
    const typeLabel = { photo: "Foto", qr: "Cod QR", image_text: "Imagine + Text", quiz: "Quiz" }[item.type] || "Bonus";

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
        setTimeout(() => showBonusAllDone(num), 900);
    }
}

function showBonusAllDone(num) {
    const step = STEPS[num - 1];
    const content = document.getElementById("bonusContent");
    if (!content) return;

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
            <span class="bonus-all-done-icon">🎉</span>
            <h3 class="bonus-all-done-title">Activități complete!</h3>
            <p class="bonus-all-done-sub">Ai finalizat toate activitățile bonus pentru <strong>${step.name}</strong>.</p>
            <button class="bonus-submit-btn" id="bonusReviewBtn">Revezi activitățile →</button>
        </div>
    `;

    document.getElementById("bonusReviewBtn")?.addEventListener("click", () => {
        renderBonusItem(num, 0);
    });
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
    });

    ["stepModal", "hintModal", "bonusModal"].forEach(id => {
        document.getElementById(id).addEventListener("click", e => {
            if (e.target !== e.currentTarget) return;
            if (id === "bonusModal") { stopBonusScanner(); stopPhotoStream(); }
            closeModal(id);
            if (id === "stepModal" && pendingCelebration) { pendingCelebration = false; showCelebration(); }
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
