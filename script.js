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

// Cake drawing
const canvas = document.getElementById("cakeCanvas");
const ctx = canvas.getContext("2d");

function drawCakeBase() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Cake body
  ctx.fillStyle = "#8B4513";
  ctx.fillRect(90, 130, 120, 80);
  ctx.fillStyle = "#fff";
  ctx.fillRect(90, 120, 120, 10);
  ctx.fillStyle = "#ff6fa2";
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

drawCakeBase();

// Animate cake slice
function cutCake() {
  let sliceY = 130;
  const interval = setInterval(() => {
    drawCakeBase();
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(150, 120);


