const APP_VERSION = "20260423-french10";
const HIGH_SCORE_KEY = "frenchGameHighScore";

const rounds = [
  { prompt: "bonjour", answer: "hello" },
  { prompt: "salut", answer: "hi" },
  { prompt: "bonsoir", answer: "good evening" },
  { prompt: "bonne nuit", answer: "good night" },
  { prompt: "au revoir", answer: "goodbye" },
  { prompt: "à bientôt", answer: "see you soon" },
  { prompt: "à demain", answer: "see you tomorrow" },
  { prompt: "à plus tard", answer: "see you later" },
  { prompt: "à tout de suite", answer: "see you right away" },
  { prompt: "à la prochaine", answer: "until next time" },
  { prompt: "merci", answer: "thank you" },
  { prompt: "merci beaucoup", answer: "thank you very much" },
  { prompt: "de rien", answer: "you're welcome" },
  { prompt: "s'il vous plaît", answer: "please" },
  { prompt: "oui", answer: "yes" },
  { prompt: "non", answer: "no" },
  { prompt: "peut-être", answer: "maybe" },
  { prompt: "bien sûr", answer: "of course" },
  { prompt: "d'accord", answer: "all right" },
  { prompt: "excusez-moi", answer: "excuse me" },
  { prompt: "pardon", answer: "sorry" },
  { prompt: "comment ça va ?", answer: "how are you" },
  { prompt: "ça va", answer: "it's going well" },
  { prompt: "je vais bien", answer: "I'm fine" },
  { prompt: "comme ci, comme ça", answer: "so-so" },
  { prompt: "je m'appelle", answer: "my name is" },
  { prompt: "comment tu t'appelles ?", answer: "what's your name" },
  { prompt: "enchanté", answer: "nice to meet you" },
  { prompt: "je suis", answer: "i am" },
  { prompt: "tu es", answer: "you are" },
  { prompt: "nous sommes", answer: "we are" },
  { prompt: "j'ai", answer: "i have" },
  { prompt: "j'ai faim", answer: "i am hungry" },
  { prompt: "j'ai soif", answer: "i am thirsty" },
  { prompt: "j'ai chaud", answer: "i am hot" },
  { prompt: "j'ai froid", answer: "i am cold" },
  { prompt: "j'ai sommeil", answer: "i am sleepy" },
  { prompt: "je suis fatigué", answer: "i am tired" },
  { prompt: "je suis content", answer: "i am happy" },
  { prompt: "je suis triste", answer: "i am sad" },
  { prompt: "je suis perdu", answer: "i am lost" },
  { prompt: "aidez-moi", answer: "help me" },
  { prompt: "je ne comprends pas", answer: "i don't understand" },
  { prompt: "je comprends", answer: "i understand" },
  { prompt: "parlez-vous anglais ?", answer: "do you speak English" },
  { prompt: "je parle un peu français", answer: "i speak a little french" },
  { prompt: "répétez, s'il vous plaît", answer: "please repeat" },
  { prompt: "plus lentement", answer: "more slowly" },
  { prompt: "comment dit-on ... ?", answer: "how do you say ...?" },
  { prompt: "qu'est-ce que ça veut dire ?", answer: "what does that mean" },
  { prompt: "où habitez-vous ?", answer: "where do you live" },
  { prompt: "j'habite à Londres", answer: "i live in london" },
  { prompt: "où est ... ?", answer: "where is ..." },
  { prompt: "où sont les toilettes ?", answer: "where is the toilet" },
  { prompt: "où est la gare ?", answer: "where is the station" },
  { prompt: "où est l'hôtel ?", answer: "where is the hotel" },
  { prompt: "à gauche", answer: "on the left" },
  { prompt: "à droite", answer: "on the right" },
  { prompt: "tout droit", answer: "straight ahead" },
  { prompt: "ici", answer: "here" },
  { prompt: "là-bas", answer: "over there" },
  { prompt: "venez ici", answer: "come here" },
  { prompt: "attendez une minute", answer: "wait a minute" },
  { prompt: "entrez", answer: "come in" },
  { prompt: "je peux entrer ?", answer: "may i come in" },
  { prompt: "ouvrez le livre", answer: "open the book" },
  { prompt: "fermez la porte", answer: "close the door" },
  { prompt: "écoutez", answer: "listen" },
  { prompt: "regardez", answer: "look" },
  { prompt: "asseyez-vous", answer: "sit down" },
  { prompt: "levez-vous", answer: "stand up" },
  { prompt: "commençons", answer: "let's begin" },
  { prompt: "je voudrais", answer: "i would like" },
  { prompt: "je veux", answer: "i want" },
  { prompt: "un café, s'il vous plaît", answer: "a coffee, please" },
  { prompt: "de l'eau", answer: "water" },
  { prompt: "le pain", answer: "bread" },
  { prompt: "le fromage", answer: "cheese" },
  { prompt: "la pomme", answer: "apple" },
  { prompt: "la banane", answer: "banana" },
  { prompt: "le chien", answer: "dog" },
  { prompt: "le chat", answer: "cat" },
  { prompt: "la maison", answer: "house" },
  { prompt: "l'école", answer: "school" },
  { prompt: "le livre", answer: "book" },
  { prompt: "la voiture", answer: "car" },
  { prompt: "le soleil", answer: "sun" },
  { prompt: "la lune", answer: "moon" },
  { prompt: "le matin", answer: "morning" },
  { prompt: "l'après-midi", answer: "afternoon" },
  { prompt: "le soir", answer: "evening" },
  { prompt: "la nuit", answer: "night" },
  { prompt: "aujourd'hui", answer: "today" },
  { prompt: "demain", answer: "tomorrow" },
  { prompt: "hier", answer: "yesterday" },
  { prompt: "maintenant", answer: "now" },
  { prompt: "toujours", answer: "always" },
  { prompt: "jamais", answer: "never" },
  { prompt: "souvent", answer: "often" },
  { prompt: "parfois", answer: "sometimes" },
  { prompt: "vite", answer: "quickly" },
  { prompt: "lentement", answer: "slowly" },
  { prompt: "beaucoup", answer: "a lot" },
  { prompt: "un peu", answer: "a little" },
  { prompt: "combien ?", answer: "how much" },
  { prompt: "combien ça coûte ?", answer: "how much does it cost" },
  { prompt: "c'est cher", answer: "it's expensive" },
  { prompt: "ce n'est pas cher", answer: "it's not expensive" },
  { prompt: "bon appétit", answer: "enjoy your meal" },
  { prompt: "santé !", answer: "cheers" },
  { prompt: "joyeux anniversaire", answer: "happy birthday" },
  { prompt: "joyeux Noël", answer: "merry christmas" },
  { prompt: "bonne année", answer: "happy new year" },
  { prompt: "à tes souhaits", answer: "bless you" },
  { prompt: "quel âge as-tu ?", answer: "how old are you" },
  { prompt: "j'ai quinze ans", answer: "i'm fifteen years old" },
  { prompt: "quelle heure est-il ?", answer: "what time is it" },
  { prompt: "il est midi", answer: "it's noon" },
  { prompt: "il est une heure", answer: "it's one o'clock" },
  { prompt: "il est deux heures", answer: "it's two o'clock" },
  { prompt: "quel jour sommes-nous ?", answer: "what day is it" },
  { prompt: "lundi", answer: "monday" },
  { prompt: "mardi", answer: "tuesday" },
  { prompt: "mercredi", answer: "wednesday" },
  { prompt: "jeudi", answer: "thursday" },
  { prompt: "vendredi", answer: "friday" },
  { prompt: "samedi", answer: "saturday" },
  { prompt: "dimanche", answer: "sunday" },
  { prompt: "janvier", answer: "january" },
  { prompt: "février", answer: "february" },
  { prompt: "mars", answer: "march" },
  { prompt: "avril", answer: "april" },
  { prompt: "mai", answer: "may" },
  { prompt: "juin", answer: "june" },
  { prompt: "juillet", answer: "july" },
  { prompt: "août", answer: "august" },
  { prompt: "septembre", answer: "september" },
  { prompt: "octobre", answer: "october" },
  { prompt: "novembre", answer: "november" },
  { prompt: "décembre", answer: "december" },
  { prompt: "le printemps", answer: "spring" },
  { prompt: "l'été", answer: "summer" },
  { prompt: "l'automne", answer: "autumn" },
  { prompt: "l'hiver", answer: "winter" },
  { prompt: "j'aime", answer: "i like" },
  { prompt: "je n'aime pas", answer: "i don't like" },
  { prompt: "j'adore", answer: "i love" },
  { prompt: "je déteste", answer: "i hate" },
  { prompt: "c'est bon", answer: "that's good" },
  { prompt: "c'est mauvais", answer: "that's bad" },
  { prompt: "c'est facile", answer: "it's easy" },
  { prompt: "c'est difficile", answer: "it's difficult" },
  { prompt: "je suis prêt", answer: "i'm ready" },
  { prompt: "allons-y", answer: "let's go" },
  { prompt: "il pleut", answer: "it's raining" },
  { prompt: "il neige", answer: "it's snowing" },
  { prompt: "il fait beau", answer: "the weather is nice" },
  { prompt: "il fait mauvais", answer: "the weather is bad" },
  { prompt: "il y a du vent", answer: "it's windy" }
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
    navigator.serviceWorker.getRegistrations()
      .then((registrations) => Promise.all(registrations.map((registration) => registration.unregister())))
      .then(() => caches.keys())
      .then((keys) => Promise.all(
        keys.filter((key) => key.startsWith("french-game-pwa-")).map((key) => caches.delete(key))
      ))
      .then(() => {
        if (sessionStorage.getItem("frenchCacheCleared") === APP_VERSION) {
          return;
        }

        sessionStorage.setItem("frenchCacheCleared", APP_VERSION);
        window.location.replace(`./index.html?app-version=${APP_VERSION}`);
      })
      .catch(() => {});
  });
}
