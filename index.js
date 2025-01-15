
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, push, onValue, update, remove } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBGLGGafurkKvuEi1yyThgJ843J1geWLVc",
  authDomain: "illeoppg.firebaseapp.com",
  projectId: "illeoppg",
  storageBucket: "illeoppg.firebasestorage.app",
  messagingSenderId: "130746147104",
  appId: "1:130746147104:web:308c6445831cc90117f745",
  measurementId: "G-MVNSMYFFXT",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const wordsRef = ref(db, "words");

const wordForm = document.getElementById("word-form");
const wordInput = document.getElementById("word");
const hintInput = document.getElementById("hint");
const categoryInput = document.getElementById("category");
const wordList = document.getElementById("word-list");

wordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const word = wordInput.value;
  const hint = hintInput.value;
  const category = categoryInput.value;
  
  if (word && hint && category) {
    push(wordsRef, { word, hint, category });
    wordForm.reset();
  }
});

onValue(wordsRef, (snapshot) => {
  wordList.innerHTML = "";
  const words = snapshot.val();
  
  for (let id in words) {
    const li = document.createElement("li");
    li.textContent = `${words[id].word} (${words[id].category}) - Hint: ${words[id].hint}`;
    
    const editBtn = document.createElement("button");
    editBtn.textContent = "Rediger";
    editBtn.addEventListener("click", () => editWord(id, words[id]));
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Slett";
    deleteBtn.addEventListener("click", () => remove(ref(db, `words/${id}`)));
    
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    wordList.appendChild(li);
  }
});

function editWord(id, wordData) {
  wordInput.value = wordData.word;
  hintInput.value = wordData.hint;
  categoryInput.value = wordData.category;
  
  wordForm.onsubmit = (e) => {
    e.preventDefault();
    update(ref(db, `words/${id}`), {
      word: wordInput.value,
      hint: hintInput.value,
      category: categoryInput.value,
    });
    wordForm.onsubmit = null; 
    wordForm.reset();
  };
}
