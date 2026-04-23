const APP_VERSION = "20260423-french3";
const HIGH_SCORE_KEY = "frenchGameHighScore";

const rounds = [
  { prompt: "bonjour", answer: "hello" },
  { prompt: "bonsoir", answer: "good evening" },
  { prompt: "bonne nuit", answer: "good night" },
  { prompt: "au revoir", answer: "goodbye" },
  { prompt: "a bientot", answer: "see you soon" },
  { prompt: "a demain", answer: "see you tomorrow" },
  { prompt: "a tout a l'heure", answer: "see you later" },
  { prompt: "a tout de suite", answer: "see you in a moment" },
  { prompt: "a la prochaine", answer: "see you next time" },
  { prompt: "merci", answer: "thank you" },
  { prompt: "s'il vous plait", answer: "please" },
  { prompt: "oui", answer: "yes" },
  { prompt: "non", answer: "no" },
  { prompt: "excusez-moi", answer: "excuse me" },
  { prompt: "pardon", answer: "sorry" },
  { prompt: "comment ca va", answer: "how are you" },
  { prompt: "ca va", answer: "i'm fine" },
  { prompt: "je m'appelle", answer: "my name is" },
  { prompt: "je suis", answer: "i am" },
  { prompt: "tu t'appelles comment", answer: "what's your name" },
  { prompt: "j'ai faim", answer: "i am hungry" },
  { prompt: "j'ai soif", answer: "i am thirsty" },
  { prompt: "je suis fatigue", answer: "i am tired" },
  { prompt: "je suis content", answer: "i am happy" },
  { prompt: "je suis triste", answer: "i am sad" },
  { prompt: "je suis perdu", answer: "i am lost" },
  { prompt: "aide-moi", answer: "help me" },
  { prompt: "bien sur", answer: "of course" },
  { prompt: "peut-etre", answer: "maybe" },
  { prompt: "d'accord", answer: "okay" },
  { prompt: "bon appetit", answer: "enjoy your meal" },
  { prompt: "ou habites-tu", answer: "where do you live" },
  { prompt: "j'habite a londres", answer: "i live in london" },
  { prompt: "quelle heure est-il", answer: "what time is it" },
  { prompt: "il est midi", answer: "it is noon" },
  { prompt: "il est une heure", answer: "it is one o'clock" },
  { prompt: "combien ca coute", answer: "how much does it cost" },
  { prompt: "je ne comprends pas", answer: "i don't understand" },
  { prompt: "parlez-vous anglais", answer: "do you speak english" },
  { prompt: "comment dit-on", answer: "how do you say" },
  { prompt: "je voudrais", answer: "i would like" },
  { prompt: "un cafe s'il vous plait", answer: "a coffee please" },
  { prompt: "de l'eau", answer: "water" },
  { prompt: "le pain", answer: "bread" },
  { prompt: "le fromage", answer: "cheese" },
  { prompt: "la pomme", answer: "apple" },
  { prompt: "le chien", answer: "dog" },
  { prompt: "le chat", answer: "cat" },
  { prompt: "la maison", answer: "house" },
  { prompt: "l'ecole", answer: "school" },
  { prompt: "le livre", answer: "book" },
  { prompt: "la voiture", answer: "car" },
  { prompt: "le soleil", answer: "sun" },
  { prompt: "la lune", answer: "moon" },
  { prompt: "aujourd'hui", answer: "today" },
  { prompt: "demain", answer: "tomorrow" },
  { prompt: "hier", answer: "yesterday" },
  { prompt: "maintenant", answer: "now" },
  { prompt: "toujours", answer: "always" },
  { prompt: "jamais", answer: "never" },
  { prompt: "souvent", answer: "often" },
  { prompt: "parfois", answer: "sometimes" },
  { prompt: "ici", answer: "here" },
  { prompt: "la-bas", answer: "there" },
  { prompt: "gauche", answer: "left" },
  { prompt: "droite", answer: "right" },
  { prompt: "tout droit", answer: "straight ahead" },
  { prompt: "ouvrez le livre", answer: "open the book" },
  { prompt: "fermez la porte", answer: "close the door" },
  { prompt: "ecoutez", answer: "listen" },
  { prompt: "regardez", answer: "look" },
  { prompt: "asseyez-vous", answer: "sit down" },
  { prompt: "levez-vous", answer: "stand up" },
  { prompt: "j'aime", answer: "i like" },
  { prompt: "je n'aime pas", answer: "i don't like" },
  { prompt: "c'est bon", answer: "it's good" },
  { prompt: "c'est mauvais", answer: "it's bad" },
  { prompt: "il fait chaud", answer: "it is hot" },
  { prompt: "il fait froid", answer: "it is cold" },
  { prompt: "il pleut", answer: "it is raining" },
  { prompt: "il neige", answer: "it is snowing" },
  { prompt: "ou est la gare", answer: "where is the station" },
  { prompt: "ou sont les toilettes", answer: "where is the toilet" },
  { prompt: "viens ici", answer: "come here" },
  { prompt: "attends une minute", answer: "wait a minute" },
  { prompt: "bon anniversaire", answer: "happy birthday" },
  { prompt: "joyeux noel", answer: "merry christmas" },
  { prompt: "bonne annee", answer: "happy new year" },
  { prompt: "a tes souhaits", answer: "bless you" },
  { prompt: "je peux entrer", answer: "may i come in" }
];

const translationPool = [...new Set(rounds.map((round) => round.answer))];

const promptTextEl = document.getElementById("prompt-text");
const optionsGridEl = document.getElementById("options-grid");
const scoreEl = document.getElementById("score");
const scoreContextEl = document.getElementById("score-context");
const pointsScoreEl = document.getElementById("points-score");
const roundTimerEl = document.getElementById("round-timer");
const highScoreEl = document.getElementById("high-score");
const newGameButtonEl = document.getElementById("new-game-button");
const bonusToastEl = document.getElementById("bonus-toast");
const celebrationEl = document.getElementById("celebration");
const celebrationKickerEl = document.getElementById("celebration-kicker");
const celebrationTitleEl = document.getElementById("celebration-title");
const celebrationCopyEl = document.getElementById("celebration-copy");
const celebrationButtonEl = document.getElementById("celebration-button");

const state = {
  deck: [],
  currentRound: null,
  points: 0,
  highScore: 0,
  correct: 0,
  presented: 0,
  correctStreak: 0,
  timerId: null,
  timerSegmentStartedAt: 0,
  streakElapsedMs: 0,
  resetTimerOnNextRound: false,
  isLocked: false,
  isComplete: false,
  feedbackTimer: null,
  feedbackReadyAt: 0,
  bonusTimer: null
};

registerServiceWorker();
renderPoints();
resetGame();
newGameButtonEl.addEventListener("click", resetGame);
celebrationButtonEl.addEventListener("click", () => {
  if (Date.now() < state.feedbackReadyAt) {
    return;
  }

  hideCelebration();
  if (!state.isComplete) {
    startRound();
  }
});

window.addEventListener("resize", () => {
  window.requestAnimationFrame(() => {
    fitOptionText();
    fitPromptText();
    fitScoreText();
  });
});

function resetGame() {
  stopRoundTimer();
  state.deck = shuffleList(rounds);
  state.currentRound = null;
  state.points = 0;
  state.correct = 0;
  state.presented = 0;
  state.correctStreak = 0;
  state.streakElapsedMs = 0;
  state.timerSegmentStartedAt = 0;
  state.resetTimerOnNextRound = false;
  state.isLocked = false;
  state.isComplete = false;
  state.highScore = readHighScore();
  renderScore();
  renderPoints();
  renderTimer(0);
  scoreContextEl.textContent = `of ${rounds.length} phrases`;
  fitScoreText();
  startRound();
}

function startRound() {
  if (state.deck.length === 0) {
    finishGame();
    return;
  }

  state.currentRound = state.deck.pop();
  state.isLocked = false;
  promptTextEl.textContent = state.currentRound.prompt;
  renderOptions(buildOptions(state.currentRound));
  fitPromptText();
  startRoundTimer();
}

function buildOptions(round) {
  const options = new Set([round.answer]);
  const distractors = shuffleList(translationPool.filter((entry) => entry !== round.answer));
  for (const distractor of distractors) {
    if (options.size >= 20) {
      break;
    }
    options.add(distractor);
  }
  return shuffleList([...options]);
}

function renderOptions(options) {
  optionsGridEl.innerHTML = "";
  options.forEach((translation) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.textContent = translation;
    bindPress(button, () => chooseAnswer(translation, button));
    optionsGridEl.appendChild(button);
  });

  window.requestAnimationFrame(fitOptionText);
}

function chooseAnswer(translation, button) {
  if (state.isLocked) {
    return;
  }

  state.isLocked = true;
  const roundMs = stopRoundTimer();
  const isCorrect = translation === state.currentRound.answer;
  state.presented += 1;
  if (isCorrect) {
    state.correct += 1;
  }

  applyScoring(isCorrect, 10, roundMs);

  [...optionsGridEl.querySelectorAll(".option-button")].forEach((optionButton) => {
    optionButton.disabled = true;
    if (optionButton.textContent === state.currentRound.answer) {
      optionButton.classList.add("correct");
    }
  });

  if (!isCorrect) {
    button.classList.add("incorrect");
  }

  renderScore();
  showRoundResult(isCorrect);
}

function showRoundResult(isCorrect) {
  celebrationEl.classList.toggle("wrong", !isCorrect);
  celebrationKickerEl.textContent = isCorrect ? "Correct" : "Answer";
  celebrationTitleEl.textContent = state.currentRound.answer;
  celebrationCopyEl.textContent = "";
  showFeedback();
}

function finishGame() {
  state.isLocked = true;
  state.isComplete = true;
  stopRoundTimer();
  promptTextEl.textContent = "Finished";
  optionsGridEl.innerHTML = "";
  celebrationEl.classList.remove("wrong");
  celebrationKickerEl.textContent = "Complete";
  celebrationTitleEl.textContent = "Full Set Done";
  celebrationCopyEl.textContent = "";
  showFeedback();
}

function showFeedback() {
  window.clearTimeout(state.feedbackTimer);
  state.feedbackReadyAt = Date.now() + 400;
  celebrationButtonEl.disabled = true;
  celebrationEl.classList.add("show");
  celebrationEl.setAttribute("aria-hidden", "false");
  state.feedbackTimer = window.setTimeout(() => {
    celebrationButtonEl.disabled = false;
  }, 400);
}

function hideCelebration() {
  window.clearTimeout(state.feedbackTimer);
  celebrationButtonEl.disabled = false;
  celebrationEl.classList.remove("show");
  celebrationEl.setAttribute("aria-hidden", "true");
}

function renderScore() {
  scoreEl.textContent = `${state.correct} / ${state.presented}`;
}

function startRoundTimer() {
  stopRoundTimer();
  if (state.resetTimerOnNextRound) {
    state.streakElapsedMs = 0;
    state.resetTimerOnNextRound = false;
  }

  state.timerSegmentStartedAt = performance.now();
  renderTimer(state.streakElapsedMs);
  state.timerId = window.setInterval(() => {
    renderTimer(state.streakElapsedMs + performance.now() - state.timerSegmentStartedAt);
  }, 100);
}

function stopRoundTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }

  if (!state.timerSegmentStartedAt) {
    return state.streakElapsedMs || 0;
  }

  state.streakElapsedMs += performance.now() - state.timerSegmentStartedAt;
  state.timerSegmentStartedAt = 0;
  renderTimer(state.streakElapsedMs);
  return state.streakElapsedMs;
}

function renderTimer(milliseconds) {
  const secondsText = (milliseconds / 1000).toFixed(1).padStart(5, "0");
  roundTimerEl.textContent = `${secondsText}s`;
}

function applyScoring(isCorrect, basePoints, roundMs) {
  const bonusMessages = [];

  if (isCorrect) {
    state.points += basePoints;
    state.correctStreak += 1;

    if (state.correctStreak % 10 === 0) {
      state.points += 100;
      bonusMessages.push("+100 streak bonus");

      const streakSeconds = roundMs / 1000;
      if (streakSeconds <= 10) {
        state.points += 400;
        bonusMessages.push("+400 10-in-10 bonus");
      } else if (streakSeconds <= 20) {
        state.points += 200;
        bonusMessages.push("+200 10-in-20 bonus");
      }
    }
  } else {
    state.correctStreak = 0;
    state.resetTimerOnNextRound = true;
  }

  updateHighScore();
  renderPoints();

  if (bonusMessages.length > 0) {
    showBonusToast(bonusMessages.join(" / "));
  }
}

function renderPoints() {
  pointsScoreEl.textContent = state.points;
  highScoreEl.textContent = state.highScore;
}

function updateHighScore() {
  if (state.points <= state.highScore) {
    return;
  }

  state.highScore = state.points;
  try {
    localStorage.setItem(HIGH_SCORE_KEY, String(state.highScore));
  } catch {
    // Ignore localStorage issues.
  }
}

function readHighScore() {
  try {
    const storedScore = Number(localStorage.getItem(HIGH_SCORE_KEY));
    return Number.isFinite(storedScore) && storedScore > 0 ? storedScore : 0;
  } catch {
    return 0;
  }
}

function showBonusToast(message) {
  window.clearTimeout(state.bonusTimer);
  bonusToastEl.textContent = message;
  bonusToastEl.classList.add("show");
  bonusToastEl.setAttribute("aria-hidden", "false");
  state.bonusTimer = window.setTimeout(() => {
    bonusToastEl.classList.remove("show");
    bonusToastEl.setAttribute("aria-hidden", "true");
  }, 1400);
}

function fitOptionText() {
  [...optionsGridEl.querySelectorAll(".option-button")].forEach((button) => {
    fitTextToBox(button, { minSize: 10, step: 0.5 });
  });
}

function fitPromptText() {
  fitTextToBox(promptTextEl, { minSize: 22, step: 1 });
}

function fitScoreText() {
  fitTextToBox(scoreContextEl, { minSize: 9, step: 0.5 });
}

function fitTextToBox(element, options = {}) {
  const minSize = options.minSize || 10;
  const step = options.step || 1;
  element.style.fontSize = "";
  let fontSize = parseFloat(window.getComputedStyle(element).fontSize);

  while (fontSize > minSize && doesTextOverflow(element)) {
    fontSize -= step;
    element.style.fontSize = `${fontSize}px`;
  }
}

function doesTextOverflow(element) {
  return element.scrollWidth > element.clientWidth + 1 || element.scrollHeight > element.clientHeight + 1;
}

function shuffleList(items) {
  const copy = items.slice();
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function bindPress(button, onChoose) {
  button.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    button.classList.add("pressing");
    onChoose();
  });
  button.addEventListener("pointerup", () => {
    button.classList.remove("pressing");
  });
  button.addEventListener("pointercancel", () => {
    button.classList.remove("pressing");
  });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register(`./sw.js?v=${APP_VERSION}`).catch(() => {});
  });
}
