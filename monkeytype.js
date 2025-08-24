const words = [
  "monkey", "banana", "jungle", "typing", "speed",
  "javascript", "html", "coding", "practice", "test"
];

const textDiv = document.getElementById("text");
const input = document.getElementById("input");
const result = document.getElementById("result");

// Generate random words
let testWords = [];
for (let i = 0; i < 10; i++) {
  testWords.push(words[Math.floor(Math.random() * words.length)]);
}
textDiv.innerHTML = testWords.map(w => `<span>${w}</span>`).join(" ");

const spans = textDiv.querySelectorAll("span");

let currentIndex = 0;
let startTime;
let isStopped = false;

input.addEventListener("keydown", (e) => {
  if (isStopped) return;
  if (!startTime) startTime = new Date();

  if (e.key === " ") {
    e.preventDefault(); // prevent extra space
    let typedWord = input.value.trim();
    let targetWord = testWords[currentIndex];

    if (typedWord === targetWord) {
      // ✅ Correct → mark word green
      spans[currentIndex].classList.add("correct");
      currentIndex++;
      input.value = "";

      // Finished?
      if (currentIndex === testWords.length) {
        let endTime = new Date();
        let timeTaken = (endTime - startTime) / 1000 / 60; // minutes
        let wpm = Math.round(testWords.length / timeTaken);
        result.textContent = `✅ Finished! Your speed: ${wpm} WPM`;
        input.disabled = true;
      }
    } else {
      // ❌ Wrong → stop
      stopTyping("❌ You spelled a word wrong! Typing stopped.");
    }
  }
});

function stopTyping(message) {
  isStopped = true;
  result.textContent = message;
  input.disabled = true;
}
