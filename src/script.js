const textInput = document.getElementById("textInput");

textInput.addEventListener("input", () => {
  const text = textInput.value;

  const letters = text.match(/[a-zA-Z]/g) || [];
  const letterCount = letters.length;

  const words = text.match(/\b\w+\b/g) || [];
  const wordCount = words.length;

  const charCount = text.length;

  const sentences = text.match(/[^\.!\?]+[\.!\?]+(\s|$)/g) || [];
  const sentenceCount = sentences.length || (text.trim() ? 1 : 0);

  const paragraphs = text.trim() ? text.trim().split(/\n{2,}/) : [];
  const paragraphCount = paragraphs.length;

  const numbers = text.match(/\d+/g) || [];
  const numberCount = numbers.length;

  document.getElementById("letterCount").textContent = letterCount;
  document.getElementById("wordCount").textContent = wordCount;
  document.getElementById("charCount").textContent = charCount;
  document.getElementById("sentenceCount").textContent = sentenceCount;
  document.getElementById("paragraphCount").textContent = paragraphCount;
  document.getElementById("numberCount").textContent = numberCount;
});

let colors = ["#FF0000", "#00FF00", "#0000FF"]; // Array of colors
let currentIndex = 0;

function changeBackgroundColor() {
  document.body.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length; // Cycle through colors
}

// Call changeBackgroundColor every 60 seconds (60000 milliseconds)
setInterval(changeBackgroundColor, 10000);

// Initial call to set the first color immediately
changeBackgroundColor();
