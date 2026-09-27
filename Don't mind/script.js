const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const letterOverlay = document.getElementById("letterOverlay");
const closeBtn = document.getElementById("closeBtn");

const tease = document.getElementById("tease");


// -----------------------------
// YES BUTTON
// -----------------------------

yesBtn.addEventListener("click", () => {

  letterOverlay.classList.add("show");

  createHearts();

});


// -----------------------------
// CLOSE LETTER
// -----------------------------

closeBtn.addEventListener("click", () => {

  letterOverlay.classList.remove("show");

});


// Also close when clicking outside letter

letterOverlay.addEventListener("click", (event) => {

  if (event.target === letterOverlay) {
    letterOverlay.classList.remove("show");
  }

});


// -----------------------------
// NO BUTTON
// -----------------------------

const teasingMessages = [
  "Hmm... are you sure? 👀",
  "Nice try! 😂",
  "Nope! You can't catch me!",
  "Hehehe, try again 😈",
  "Wrong button! 👉👈",
  "You really thought I'd let you? 😂",
  "The NO button has escaped!",
  "Try pressing YES instead 💕"
];


function moveNoButton() {

  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Keep the button safely inside the screen

  const padding = 15;

  const maxX = screenWidth - buttonWidth - padding;
  const maxY = screenHeight - buttonHeight - padding;

  const randomX =
    Math.floor(Math.random() * Math.max(maxX, padding));

  const randomY =
    Math.floor(Math.random() * Math.max(maxY, padding));

  // Switch to fixed positioning

  noBtn.style.position = "fixed";

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  noBtn.style.zIndex = "50";

  // Random teasing message

  const randomMessage =
    teasingMessages[
      Math.floor(Math.random() * teasingMessages.length)
    ];

  tease.textContent = randomMessage;
}


// -----------------------------
// PC: dodge when mouse gets close
// -----------------------------

document.addEventListener("mousemove", (event) => {

  if (window.innerWidth <= 600) {
    return;
  }

  const rect = noBtn.getBoundingClientRect();

  const buttonCenterX =
    rect.left + rect.width / 2;

  const buttonCenterY =
    rect.top + rect.height / 2;

  const distanceX =
    event.clientX - buttonCenterX;

  const distanceY =
    event.clientY - buttonCenterY;

  const distance =
    Math.sqrt(
      distanceX * distanceX +
      distanceY * distanceY
    );


  // If cursor gets within 100px...

  if (distance < 100) {
    moveNoButton();
  }

});


// -----------------------------
// Mobile: move when touched
// -----------------------------

noBtn.addEventListener("touchstart", (event) => {

  event.preventDefault();

  moveNoButton();

});


// Also move if somehow clicked

noBtn.addEventListener("click", (event) => {

  event.preventDefault();

  moveNoButton();

});


// -----------------------------
// Extra floating hearts
// -----------------------------

function createHearts() {

  const emojis = [
    "💗",
    "💖",
    "💕",
    "💞",
    "💘",
    "🌸"
  ];

  for (let i = 0; i < 20; i++) {

    const heart = document.createElement("div");

    heart.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.position = "fixed";

    heart.style.left =
      Math.random() * 100 + "vw";

    heart.style.top = "100vh";

    heart.style.fontSize =
      (15 + Math.random() * 25) + "px";

    heart.style.zIndex = "200";

    heart.style.pointerEvents = "none";

    heart.style.transition =
      "transform 3s ease, opacity 3s ease";

    document.body.appendChild(heart);


    setTimeout(() => {

      heart.style.transform =
        `translateY(-${window.innerHeight + 200}px) rotate(${Math.random() * 360}deg)`;

      heart.style.opacity = "0";

    }, 50);


    setTimeout(() => {

      heart.remove();

    }, 3100);

  }

}
