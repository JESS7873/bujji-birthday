// 🎵 Music toggle
const music = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("musicToggle");
toggleBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "🔊";
  } else {
    music.pause();
    toggleBtn.textContent = "🔇";
  }
});

// 🎂 Cake drawing & slicing animation
const canvas = document.getElementById("cakeCanvas");
const ctx = canvas.getContext("2d");

function drawCake() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Base
  ctx.fillStyle = "#8B4513"; // chocolate base
  ctx.fillRect(90, 130, 120, 80);
  ctx.fillStyle = "#FFF"; // top frosting
  ctx.fillRect(90, 120, 120, 10);
  ctx.fillStyle = "#ff6fa2"; // dripping icing
  ctx.beginPath();
  ctx.moveTo(90, 120);
  ctx.bezierCurveTo(100, 140, 140, 100, 210, 120);
  ctx.fill();
  // Candle
  ctx.fillStyle = "#FFD700";
  ctx.fillRect(145, 100, 10, 20);
  // Flame
  ctx.beginPath();
  ctx.fillStyle = "orange";
  ctx.arc(150, 95, 6, 0, 2 * Math.PI);
  ctx.fill();
}

function cutCake() {
  // Animate a slice coming out
  drawCake();
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.moveTo(150, 120);
  ctx.lineTo(170, 180);
  ctx.lineTo(130, 180);
  ctx.closePath();
  ctx.fill();

  triggerConfetti();
}

// 💌 Envelope toggle
function toggleEnvelope() {
  const envelope = document.querySelector(".envelope");
  envelope.classList.toggle("open");
  triggerConfetti();
}

// ⬇ Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  triggerConfetti();
}

// 🎉 Confetti burst per section
function triggerConfetti() {
  const confettiContainer = document.querySelector(".confetti");
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      ["#ff69b4", "#ffb6c1", "#ff1493", "#ffc0cb"][Math.floor(Math.random() * 4)];
    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";
    confetti.style.width = "6px";
    confetti.style.height = "12px";
    confetti.style.position = "fixed";
    confetti.style.top = "0";
    confetti.style.opacity = "0.7";
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.style.zIndex = "999";

    confettiContainer.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}

// 🧁 Initialize cake
drawCake();

