
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBGLGGafurkKvuEi1yyThgJ843J1geWLVc",
  authDomain: "illeoppg.firebaseapp.com",
  databaseURL: "https://illeoppg-default-rtdb.firebaseio.com",
  projectId: "illeoppg",
  storageBucket: "illeoppg.firebasestorage.app",
  messagingSenderId: "130746147104",
  appId: "1:130746147104:web:308c6445831cc90117f745",
  measurementId: "G-MVNSMYFFXT",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const wordsRef = ref(db, "words");

const categoryElement = document.getElementById("category");
const hintElement = document.getElementById("hint");
const attemptsElement = document.getElementById("attempts");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const resultMessage = document.getElementById("result-message");
const playAgainButton = document.getElementById("play-again-button");

let currentWord = null;
let attempts = 0;

function loadRandomWord() {
  resultMessage.textContent = "";
  guessInput.value = "";
  playAgainButton.style.display = "none";
  attempts = 0;
  attemptsElement.textContent = attempts;

  onValue(wordsRef, (snapshot) => {
    const words = snapshot.val();
    if (!words) {
      resultMessage.textContent = "Ingen ord tilgjengelig i databasen.";
      return;
    }

    const keys = Object.keys(words);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    currentWord = words[randomKey];

    categoryElement.textContent = currentWord.category;
    hintElement.textContent = currentWord.hint;
  }, {
    onlyOnce: true, 
  });
}

guessButton.addEventListener("click", () => {
  const guess = guessInput.value.trim().toLowerCase();
  if (!guess) return;

  attempts++;
  attemptsElement.textContent = attempts;

  if (guess === currentWord.word.toLowerCase()) {
    resultMessage.textContent = "Gratulerer! Du gjettet riktig!";
    resultMessage.style.color = "green";
    playAgainButton.style.display = "inline-block";
    guessButton.disabled = true;
    guessInput.disabled = true;
  } else {
    resultMessage.textContent = "Feil gjetning. Prøv igjen!";
    resultMessage.style.color = "red";
  }
});

playAgainButton.addEventListener("click", () => {
  guessButton.disabled = false;
  guessInput.disabled = false;
  loadRandomWord();
});

loadRandomWord();
