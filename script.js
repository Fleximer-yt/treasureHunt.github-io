const CODES = {
    step1: "1__A3!G7@B2C",
    step2: "2__H2#J4K$5L",
    step3: "3__M8^N1O!3P",
    step4: "4__Q6%R2S@9T",
    step5: "5__U1V3^W7X$",
    step6: "6__Y2Z4!A5B#",
    step7: "7__C7D1E@2F%",
    step8: "8__G3H5I$8J^",
    step9: "9__K6L9M!2N@",
    step10: "10__O1P3Q#5R%",
    step11: "11__FINAL!Z7K"
};

const BONUS_CODES = {
    step1: "BONUS1__X9Y2Z",
    step2: "BONUS2__A4B7C",
    step3: "BONUS3__D1E5F",
    step4: "BONUS4__G8H3I",
    step5: "BONUS5__J2K6L",
    step6: "BONUS6__M9N1O",
    step7: "BONUS7__P4Q7R",
    step8: "BONUS8__S3T8U",
    step9: "BONUS9__V5W2X",
    step10: "BONUS10__Y7Z4A"
};

const STEPS = [
    {
        num: 1, name: "Turnul Vechi", image: "images/step1.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        hint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cauta un loc inalt, cu vedere panoramica. Umbra sa cade spre vest la amiaza.",
        bonus: {
            info: "Turnul Vechi dateaza din secolul al XIV-lea. A servit ca punct de observatie si adapost in vremuri de razboi.",
            quiz: { question: "In ce secol a fost construit Turnul Vechi?", options: ["Secolul XII", "Secolul XIV", "Secolul XVI", "Secolul XVIII"], correct: [1] }
        }
    },
    {
        num: 2, name: "Poarta Secreta", image: "images/step2.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        hint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. O poarta veche ascunde secretul. Numara treptele si inmulteste cu doi.",
        bonus: {
            info: "Poarta Secreta a fost folosita de calugari pentru a intra in manastire fara a fi vazuti.",
            quiz: { question: "Cine folosea Poarta Secreta in mod traditional?", options: ["Soldatii", "Calugarii", "Comerciantii", "Nobilii"], correct: [1] }
        }
    },
    {
        num: 3, name: "Fantana Dorintelor", image: "images/step3.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        hint: "Lorem ipsum dolor sit amet. Apa curge dinspre nord. Urmareste sunetul izvorului prin padure.",
        bonus: {
            info: "Fantana Dorintelor are o adancime de 18 metri. Se spune ca apa sa a vindecat boli.",
            quiz: { question: "Care este adancimea Fantanei Dorintelor?", options: ["12 metri", "15 metri", "18 metri", "24 metri"], correct: [2] }
        }
    },
    {
        num: 4, name: "Crucea de Piatra", image: "images/step4.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        hint: "Lorem ipsum dolor sit amet. O cruce veche de piatra pazeste taina. Priveste inspre rasarit la rasaritul soarelui.",
        bonus: {
            info: "Crucea de Piatra a fost ridicata in memoria unui cavaler. Inscriptia de pe baza este scrisa in latina.",
            quiz: { question: "In ce limba este scrisa inscriptia de pe Crucea de Piatra?", options: ["Romana", "Greaca", "Latina", "Slavona"], correct: [2] }
        }
    },
    {
        num: 5, name: "Podul Ferecatilor", image: "images/step5.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut labore et dolore magnam aliquam quaerat voluptatem.",
        hint: "Lorem ipsum dolor sit amet. Sub pod, acolo unde pietrele sunt umede, vei gasi o caseta mica de metal.",
        bonus: {
            info: "Podul Ferecatilor si-a primit numele de la mestesugarul care l-a construit si a fost feracat pana la terminarea lucrarii.",
            quiz: { question: "De ce se numeste 'Podul Ferecatilor'?", options: ["Din cauza lanturilor decorative", "Mestesugaroul a fost feracat", "Podul era blocat cu incuietori", "Era pazit de gardieni"], correct: [1] }
        }
    },
    {
        num: 6, name: "Padurea Neagra", image: "images/step6.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit.",
        hint: "Lorem ipsum dolor sit amet. Intra in padure pe poteca din dreapta. La al treilea copac bifurcat, uita-te sus.",
        bonus: {
            info: "Padurea Neagra contine copaci cu varsta de peste 400 de ani. Localnicii evita sa intre noaptea.",
            quiz: { question: "Ce varsta au unii copaci din Padurea Neagra?", options: ["200 de ani", "300 de ani", "400 de ani", "500 de ani"], correct: [2] }
        }
    },
    {
        num: 7, name: "Ruinele Cetatii", image: "images/step7.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Temporibus autem quibusdam et aut officiis debitis.",
        hint: "Lorem ipsum dolor sit amet. Ruinele ascund mai mult decat pare. Intre al doilea si al treilea zid.",
        bonus: {
            info: "Cetatea a fost asediata de 3 ori si niciodata cucerita prin forta. A cazut din cauza unui tradat.",
            quiz: { question: "De cate ori a fost asediata cetatea?", options: ["O data", "De doua ori", "De trei ori", "De cinci ori"], correct: [2] }
        }
    },
    {
        num: 8, name: "Lacul Oglinzilor", image: "images/step8.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque earum rerum hic tenetur a sapiente delectus.",
        hint: "Lorem ipsum dolor sit amet. La malul lacului, acolo unde stuful este mai des, vei vedea o barca verde rasturnata.",
        bonus: {
            info: "Lacul Oglinzilor reflecta muntii cu claritate fotografica. Pe fundul sau se afla ramasitele unui sat inundat in 1962.",
            quiz: { question: "Ce se afla pe fundul Lacului Oglinzilor?", options: ["Comori medievale", "Un vas scufundat", "Un sat inundat", "Statui antice"], correct: [2] }
        }
    },
    {
        num: 9, name: "Pestera Echourilor", image: "images/step9.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero tempore, cum soluta nobis est eligendi optio.",
        hint: "Lorem ipsum dolor sit amet. Vorbeste la intrarea pesterii si asculta ecoul. De unde vine ultimul ecou, cauta.",
        bonus: {
            info: "Pestera Echourilor are o lungime de 2.3 km. Picturi rupestre au fost descoperite in 1978.",
            quiz: { question: "Cand au fost descoperite picturile rupestre?", options: ["1965", "1972", "1978", "1985"], correct: [2] }
        }
    },
    {
        num: 10, name: "Comoara Finala", image: "images/step10.jpg",
        text: "Felicitari! Ai parcurs un drum lung si ai descoperit toate secretele acestui loc. Scaneza codul QR de mai jos pentru a debloca etapa finala!",
        hint: "Lorem ipsum dolor sit amet. Esti atat de aproape! Cauta acolo unde ai inceput totul — cercul se inchide.",
        bonus: {
            info: "Aceasta este a zecea si ultima etapa numerotata. Inca un pas si vei descoperi secretul final.",
            quiz: { question: "Cate etape numerotate are aceasta aventura?", options: ["8", "9", "10", "11"], correct: [2] }
        }
    },
    {
        num: 11, name: "Locatia Finala", image: "images/step11.jpg",
        text: "Ai reusit! Ai descoperit Locatia Finala a Treasure Hunt CNNT. Aceasta calatorie a testat cunoasterea ta, perseverenta si spiritul de aventura. Tine minte acest moment — esti un adevarat Treasure Hunter!",
        hint: "Ai completat toate etapele! Acum trebuie sa gasesti si sa scanezi codul QR final pentru a-ti revendica victoria."
    }
];

const CONFETTI_COLORS = [
    "#f0c94a", "#d4a017", "#e05555", "#4caf7d", "#5b9bd5",
    "#c97fe5", "#ff7f50", "#fff", "#f9c74f", "#90e0ef"
];

let progress = JSON.parse(sessionStorage.getItem("progress")) || {
    step1: false, step2: false, step3: false, step4: false, step5: false,
    step6: false, step7: false, step8: false, step9: false, step10: false,
    step11: false
};

let bonusProgress = JSON.parse(sessionStorage.getItem("bonusProgress")) || {
    step1: false, step2: false, step3: false, step4: false, step5: false,
    step6: false, step7: false, step8: false, step9: false, step10: false
};

let quizScores    = JSON.parse(sessionStorage.getItem("quizScores"))    || {};
let finalized     = sessionStorage.getItem("finalized") === "true";

let pendingCelebration = false;

function saveProgress() {
    sessionStorage.setItem("progress",      JSON.stringify(progress));
    sessionStorage.setItem("bonusProgress", JSON.stringify(bonusProgress));
    sessionStorage.setItem("quizScores",    JSON.stringify(quizScores));
}

function isUnlocked(n)    { return progress[`step${n}`] === true; }
function isAvailable(n)   { return n === 1 || isUnlocked(n - 1); }
function hasBonusDone(n)  { return bonusProgress[`step${n}`] === true; }
function allTenComplete() { return Array.from({ length: 10 }, (_, i) => i + 1).every(n => isUnlocked(n)); }

function lockScroll()   { document.body.classList.add("modal-open"); }
function unlockScroll() { document.body.classList.remove("modal-open"); }

function calculateScore() {
    let steps = 0, quizzes = 0;
    for (let i = 1; i <= 10; i++) {
        if (isUnlocked(i)) steps++;
        if (quizScores[`step${i}`] === true) quizzes++;
    }
    return { steps, quizzes, total: steps + quizzes };
}

function buildRoadmap() {
    const container = document.getElementById("stepsContainer");
    container.innerHTML = "";

    STEPS.forEach((step, idx) => {
        const isFinal = step.num === 11;
        const show11  = isFinal && allTenComplete();
        if (isFinal && !show11) return;

        const unlocked  = isUnlocked(step.num);
        const available = isAvailable(step.num);
        const bonusDone = hasBonusDone(step.num);

        const wrapper = document.createElement("div");
        wrapper.className = `step-wrapper${isFinal ? " step-final" : ""}`;

        const badge = document.createElement("div");
        badge.className = `step-node-badge ${unlocked ? "unlocked" : available ? "available locked" : "locked"}`;
        badge.dataset.step = step.num;

        if (unlocked && quizScores[`step${step.num}`] === true) {
            const sb = document.createElement("span");
            sb.className = "score-badge";
            sb.textContent = "✓ Quiz";
            badge.appendChild(sb);
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

        if (unlocked && bonusDone) {
            const bb = document.createElement("div");
            bb.className = "step-card-status";
            bb.style.cssText = "background:rgba(91,155,213,0.12);color:var(--blue-info);border:1px solid rgba(91,155,213,0.3)";
            bb.textContent = "🎁 Bonus scan";
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
        const qrBtn = document.getElementById("qrCodeButton");
        qrBtn.classList.add("qr-btn-finalized");
        qrBtn.title = "Aventura s-a terminat!";
    }
}

function onNodeClick(num) {
    if (isUnlocked(num)) {
        showStepModal(num);
    } else if (isAvailable(num)) {
        showHintModal(num);
    }
}

function openModal(id)  { document.getElementById(id).classList.remove("hidden"); lockScroll(); }
function closeModal(id) { document.getElementById(id).classList.add("hidden"); unlockScroll(); }

function showStepModal(num) {
    const step      = STEPS[num - 1];
    const bonusDone = hasBonusDone(num);
    const hasBonus  = !!step.bonus;
    const content   = document.getElementById("modalContent");

    let bonusBtnHTML = "";
    if (hasBonus) {
        const quizLabel = quizScores[`step${num}`] !== undefined
            ? (quizScores[`step${num}`] ? "✓ Quiz completat" : "Quiz completat")
            : "Info bonus + quiz despre acest loc";
        bonusBtnHTML = `
            <button class="modal-bonus-btn" id="openBonusScan" data-step="${num}" ${finalized && !bonusDone ? "disabled style='opacity:0.45;cursor:default'" : ""}>
                <div class="modal-bonus-btn-left">
                    <span class="modal-bonus-btn-icon">${bonusDone ? "🧩" : "📷"}</span>
                    <div class="modal-bonus-btn-text">
                        <strong>${bonusDone ? "Revezi informatii bonus" : (finalized ? "Bonus indisponibil" : "Scanează pentru mai multe")}</strong>
                        <span>${bonusDone ? quizLabel : (finalized ? "Aventura s-a finalizat" : "Scanează codul de bare al locației")}</span>
                    </div>
                </div>
                <span class="modal-bonus-btn-arrow">→</span>
            </button>
        `;
    }

    content.innerHTML = `
        <div class="modal-img-wrap" id="modalImgWrap">
            <img src="${step.image}" alt="${step.name}"
                onerror="document.getElementById('modalImgWrap').innerHTML='<div class=\\'modal-img-placeholder\\'>${num === 11 ? "🏆" : "🗺️"}</div>'">
            <div class="modal-img-badge">${num === 11 ? "✦ Final ✦" : `Etapa ${num}`}</div>
        </div>
        <div class="modal-body">
            <div class="modal-step-label">${num === 11 ? "Locatia Finala" : `Etapa ${num} din 10`}</div>
            <h2 class="modal-title">${step.name}</h2>
            <div class="modal-divider"></div>
            <p class="modal-text">${step.text}</p>
            ${bonusBtnHTML}
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
            <div class="hint-icon-wrap"><span>${num === 11 ? "⭐" : "🔍"}</span></div>
            <div class="hint-step-label">${num === 11 ? "Etapa Finala" : `Etapa ${num} din 10`}</div>
            <h3 class="hint-title">${num === 11 ? "Locatia Finala" : "Locatie necunoscuta"}</h3>
            <div class="hint-divider"></div>
            <p class="hint-text">${step.hint}</p>
        </div>
    `;
    openModal("hintModal");
}

let bonusQrCode   = null;
let bonusScanning = false;

function openBonusPanel(num) {
    const step      = STEPS[num - 1];
    const bonusDone = hasBonusDone(num);
    const content   = document.getElementById("bonusContent");

    if (bonusDone || finalized) {
        if (bonusDone) {
            content.innerHTML = buildBonusResult(num);
            attachQuizListeners(num);
        } else {
            content.innerHTML = `<div class="hint-body"><div class="hint-icon-wrap"><span>🔒</span></div><p class="hint-text" style="padding:20px">Aventura s-a finalizat. Bonus-ul nu mai poate fi scanat.</p></div>`;
        }
        openModal("bonusModal");
        return;
    }

    content.innerHTML = `
        <div class="bonus-scanner-wrap">
            <h3>📷 Scan Bonus — ${step.name}</h3>
            <p>Scanează codul de bare de pe plăcuța informativă a locației</p>
            <div id="bonusReader"></div>
            <div id="bonusFeedback"></div>
        </div>
    `;

    openModal("bonusModal");
    setTimeout(() => startBonusScanner(num), 350);
}

function startBonusScanner(num) {
    bonusQrCode   = new Html5Qrcode("bonusReader");
    bonusScanning = true;
    bonusQrCode.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 220 },
        (decoded) => onBonusScan(decoded, num)
    ).catch(() => {
        const fb = document.getElementById("bonusFeedback");
        if (fb) { fb.className = "feedback-error"; fb.textContent = "Camera indisponibilă."; }
    });
}

function stopBonusScanner() {
    if (bonusQrCode && bonusScanning) {
        bonusQrCode.stop().then(() => bonusQrCode.clear()).catch(() => { });
        bonusScanning = false;
    }
}

function onBonusScan(decoded, num) {
    if (decoded.trim() !== BONUS_CODES[`step${num}`]) {
        const fb = document.getElementById("bonusFeedback");
        if (fb) { fb.className = "feedback-error"; fb.textContent = "❌ Cod incorect pentru aceasta etapa."; }
        return;
    }
    stopBonusScanner();
    bonusProgress[`step${num}`] = true;
    saveProgress();
    buildRoadmap();

    const content = document.getElementById("bonusContent");
    content.innerHTML = buildBonusResult(num);
    attachQuizListeners(num);
}

function buildBonusResult(num) {
    const step    = STEPS[num - 1];
    const quiz    = step.bonus.quiz;
    const done    = quizScores[`step${num}`] !== undefined;
    const won     = quizScores[`step${num}`] === true;
    const letters = ["A", "B", "C", "D"];
    const multi   = quiz.correct.length > 1;
    const isLocked = finalized && !done;

    const optsHTML = quiz.options.map((opt, i) => {
        let cls = "";
        if (done || isLocked) {
            if (quiz.correct.includes(i)) cls = "correct";
            else cls = "wrong";
        }
        return `
            <button class="quiz-option ${cls} ${multi && !done && !isLocked ? "quiz-option-multi" : ""}"
                data-index="${i}" ${(done || isLocked) ? "disabled" : ""}>
                <span class="quiz-opt-letter">${letters[i]}</span>
                ${opt}
                ${multi && !done && !isLocked ? `<span class="quiz-check-icon">○</span>` : ""}
            </button>
        `;
    }).join("");

    const confirmBtn = multi && !done && !isLocked
        ? `<button class="quiz-confirm-btn" id="quizConfirmBtn">Confirmă răspunsul</button>`
        : "";

    const hintText = multi && !done && !isLocked
        ? `<p class="quiz-multi-hint">Selectează toate răspunsurile corecte</p>` : "";

    return `
        <div class="quiz-body">
            <div class="quiz-header">
                <span class="quiz-icon">🏛️</span>
                <div class="quiz-header-text">
                    <h3>${step.name}</h3>
                    <p>Informatii bonus + quiz</p>
                </div>
            </div>
            <div class="bonus-result">
                <div class="bonus-result-title">📖 Știai că...?</div>
                <p class="bonus-result-text">${step.bonus.info}</p>
            </div>
            <div style="height:1px;background:var(--border);margin:0 20px 20px"></div>
            <div class="quiz-body" style="padding-top:0">
                ${hintText}
                <div class="quiz-question">${quiz.question}</div>
                <div class="quiz-options" id="quizOptions">${optsHTML}</div>
                ${confirmBtn}
                <div class="quiz-feedback ${done ? (won ? "win" : "fail") : (isLocked ? "fail" : "")}" id="quizFeedback">
                    ${done ? (won ? "🎉 Răspuns corect! Bravo!" : "❌ Răspuns greșit.")
                          : isLocked ? "❌ Aventura s-a finalizat — quiz indisponibil." : ""}
                </div>
            </div>
        </div>
    `;
}

function attachQuizListeners(num) {
    const done = quizScores[`step${num}`] !== undefined;
    if (done || finalized) return;

    const quiz  = STEPS[num - 1].bonus.quiz;
    const multi = quiz.correct.length > 1;

    if (multi) {
        const selected = new Set();

        document.querySelectorAll(".quiz-option").forEach(btn => {
            btn.addEventListener("click", () => {
                const idx = parseInt(btn.dataset.index);
                if (selected.has(idx)) {
                    selected.delete(idx);
                    btn.classList.remove("selected");
                    btn.querySelector(".quiz-check-icon").textContent = "○";
                } else {
                    selected.add(idx);
                    btn.classList.add("selected");
                    btn.querySelector(".quiz-check-icon").textContent = "●";
                }
            });
        });

        const confirmBtn = document.getElementById("quizConfirmBtn");
        if (confirmBtn) {
            confirmBtn.addEventListener("click", () => {
                if (selected.size === 0) return;
                const correctSet = new Set(quiz.correct);
                const isCorrect  = selected.size === correctSet.size &&
                    [...selected].every(i => correctSet.has(i));
                submitQuiz(num, isCorrect);
            });
        }
    } else {
        document.querySelectorAll(".quiz-option").forEach(btn => {
            btn.addEventListener("click", () => {
                const chosen  = parseInt(btn.dataset.index);
                const correct = quiz.correct.includes(chosen);
                submitQuiz(num, correct);
            });
        });
    }
}

function submitQuiz(num, correct) {
    const quiz = STEPS[num - 1].bonus.quiz;
    quizScores[`step${num}`] = correct;
    saveProgress();
    buildRoadmap();

    document.querySelectorAll(".quiz-option").forEach((btn, i) => {
        btn.disabled = true;
        btn.classList.remove("selected");
        if (quiz.correct.includes(i)) btn.classList.add("correct");
        else btn.classList.add("wrong");
        const icon = btn.querySelector(".quiz-check-icon");
        if (icon) icon.remove();
    });

    const confirmBtn = document.getElementById("quizConfirmBtn");
    if (confirmBtn) confirmBtn.remove();

    const fb = document.getElementById("quizFeedback");
    fb.className = `quiz-feedback ${correct ? "win" : "fail"}`;
    fb.textContent = correct ? "🎉 Răspuns corect! Bravo!" : "❌ Răspuns greșit.";
}

function setupModals() {
    document.getElementById("modalClose").addEventListener("click", () => {
        closeModal("stepModal");
        if (pendingCelebration) { pendingCelebration = false; showCelebration(); }
    });
    document.getElementById("hintClose").addEventListener("click",  () => closeModal("hintModal"));
    document.getElementById("bonusClose").addEventListener("click", () => {
        stopBonusScanner();
        closeModal("bonusModal");
    });
    document.getElementById("quizClose").addEventListener("click", () => closeModal("quizModal"));

    ["stepModal", "hintModal", "bonusModal", "quizModal"].forEach(id => {
        document.getElementById(id).addEventListener("click", e => {
            if (e.target !== e.currentTarget) return;
            if (id === "bonusModal") stopBonusScanner();
            closeModal(id);
            if (id === "stepModal" && pendingCelebration) { pendingCelebration = false; showCelebration(); }
        });
    });

    document.getElementById("celebrationClose").addEventListener("click", () => {
        document.getElementById("celebrationOverlay").classList.add("hidden");
        document.getElementById("confettiContainer").classList.add("hidden");
        unlockScroll();
        finalized = true;
        sessionStorage.setItem("finalized", "true");
        buildRoadmap();
    });
}

function showCelebration() {
    const { steps, quizzes, total } = calculateScore();
    const pct  = total / 20;
    const circ = 2 * Math.PI * 55;

    document.getElementById("scoreNum").textContent    = total;
    document.getElementById("stepsScore").textContent  = steps;
    document.getElementById("quizScore").textContent   = quizzes;
    document.getElementById("scoreLabel").textContent  =
        total >= 18 ? "Extraordinar! 🌟" :
            total >= 14 ? "Foarte bine! 🎯" :
                total >= 10 ? "Bine! 👍" : "Continua sa explorezi!";

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
        const piece    = document.createElement("div");
        piece.className = "confetti-piece";
        const size     = 8 + Math.random() * 8;
        const left     = Math.random() * 100;
        const delay    = Math.random() * 1.8;
        const dur      = 2.5 + Math.random() * 2;
        const color    = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
        piece.style.cssText = `
            left: ${left}%;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: ${Math.random() > 0.5 ? "50%" : "2px"};
            animation-duration: ${dur}s;
            animation-delay: ${delay}s;
        `;
        container.appendChild(piece);
    }
    setTimeout(() => { container.classList.add("hidden"); container.innerHTML = ""; }, 5500);
}

let html5QrCode   = null;
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
    const stepKey = Object.keys(CODES).find(k => CODES[k] === decoded.trim());
    if (!stepKey) { showFeedback("❌ Cod QR necunoscut.", "feedback-error"); return; }

    const stepNum = parseInt(stepKey.replace("step", ""));

    if (progress[stepKey]) { showFeedback(`✅ Etapa ${stepNum} deja deblocată!`, "feedback-info"); return; }
    if (stepNum > 1 && !progress[`step${stepNum - 1}`]) {
        showFeedback(`⚠️ Deblochează mai întâi etapa ${stepNum - 1}!`, "feedback-error");
        return;
    }

    progress[stepKey] = true;
    saveProgress();
    showFeedback(`🎉 Etapa ${stepNum} deblocată!`, "feedback-success");
    buildRoadmap();

    if (stepNum === 11) pendingCelebration = true;

    setTimeout(() => { closeQrPanel(); showStepModal(stepNum); }, 1600);
}

function showFeedback(msg, cls) {
    const el = document.getElementById("qrFeedback");
    el.className   = cls;
    el.textContent = msg;
    setTimeout(() => { el.textContent = ""; el.className = ""; }, 4500);
}

function setupQrButton() {
    document.getElementById("qrCodeButton").addEventListener("click", openQrPanel);
    document.getElementById("qrPanelClose").addEventListener("click", closeQrPanel);
    document.getElementById("qrOverlay").addEventListener("click", closeQrPanel);
}

function setupTheme() {
    const html  = document.documentElement;
    const btn   = document.getElementById("themeToggle");
    const saved = sessionStorage.getItem("theme") || "dark";
    html.setAttribute("data-theme", saved);
    btn.addEventListener("click", () => {
        const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
        html.setAttribute("data-theme", next);
        sessionStorage.setItem("theme", next);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupTheme();
    buildRoadmap();
    setupModals();
    setupQrButton();
});
