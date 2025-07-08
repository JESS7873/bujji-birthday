// script.js

// Unlock music autoplay on user interaction
document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bgMusic');
  const musicToggle = document.getElementById('musicToggle');

  function unlockAudio() {
    music.muted = false;
    music.play().catch(() => {});
    document.removeEventListener('click', unlockAudio);
  }

  document.addEventListener('click', unlockAudio);

  musicToggle.addEventListener('click', () => {
    if (music.paused) {
      music.play();
      musicToggle.textContent = "🔊";
    } else {
      music.pause();
      musicToggle.textContent = "🔇";
    }
  });
});

// Cake drawing and slice animation
const canvas = document.getElementById("cakeCanvas");
const ctx = canvas.getContext("2d");

function drawCakeBase() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#8B4513";
  ctx.fillRect(90, 130, 120, 80);
  ctx.fillStyle = "#fff";
  ctx.fillRect(90, 120, 120, 10);
  ctx.fillStyle = "#ff6fa2";
  ctx.beginPath();
  ctx.moveTo(90, 120);
  ctx.bezierCurveTo(100, 140, 140, 100, 210, 120);
  ctx.fill();

  ctx.fillStyle = "#FFD700";
  ctx.fillRect(145, 100, 10, 20);
  ctx.beginPath();
  ctx.fillStyle = "orange";
  ctx.arc(150, 95, 6, 0, 2 * Math.PI);
  ctx.fill();
}

drawCakeBase();

function cutCake() {
  let sliceY = 130;
  const interval = setInterval(() => {
    drawCakeBase();
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(150, 120);
    ctx.lineTo(170, sliceY);
    ctx.lineTo(130, sliceY);
    ctx.closePath();
    ctx.fill();

    sliceY += 2;
    if (sliceY > 250) {
      clearInterval(interval);
      showMessageAfterCake();
    }
  }, 20);
  triggerConfetti();
}

function showMessageAfterCake() {
  scrollToSection("message");
  triggerConfetti();
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  triggerConfetti();
}

function toggleEnvelope() {
  const letter = document.querySelector(".letter");
  const flap = document.querySelector(".flap");
  letter.style.transform = "translateY(0)";
  flap.style.transform = "rotateX(180deg)";
  triggerConfetti();
}

function triggerConfetti() {
  const confettiContainer = document.querySelector(".confetti");

  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");

    confetti.style.position = "fixed";
    confetti.style.top = "-10px";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.width = "8px";
    confetti.style.height = "14px";
    confetti.style.backgroundColor = ["#ff69b4", "#ffc0cb", "#ff1493", "#f4a460"][Math.floor(Math.random() * 4)];
    confetti.style.opacity = "0.9";
    confetti.style.zIndex = "9999";
    confetti.style.borderRadius = "2px";
    confetti.style.animation = `fall ${2 + Math.random() * 2}s linear forwards`;

    confettiContainer.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}



