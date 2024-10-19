const div_letters = document.getElementById("div_letters");
const wordToFind = "Github";
const p_wordToFind = [];
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function drawKeyboard(arr) {
  for (let i = 0; i < arr.length; i++) {
    let btn = document.createElement("button");
    btn.classList.add("letter");
    btn.innerText = arr[i];
    div_letters.appendChild(btn);
  }
}
function drawWord(word) {
  for (let i = 0; i < word.length; i++) {
    p_wordToFind.innerText += "-";
  }
}

function clickLetter(letter, word) {
  p_wordToFind.length = word.length;
  for (let i = 0; i < word.length; i++) {
    if (letter == word[i].toLowerCase()) {
      p_wordToFind[i] = letter;
    }
  }
}

document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains("letter")) {
    clickLetter(event.target.innerText, wordToFind);
    event.target.setAttribute("disabled", true);
    word.innerText = p_wordToFind;
  }
});
drawKeyboard(letters);
drawWord(wordToFind);
