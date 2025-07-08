// Cake Drawing
function drawCake() {
  const canvas = document.getElementById("cakeCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Cake
  ctx.fillStyle = "#ffb3c1";
  ctx.fillRect(100, 120, 100, 80);

  // Frosting
  ctx.fillStyle = "#fff";
  ctx.fillRect(100, 110, 100, 10);

  // Candle
  ctx.fillStyle = "#ff4d6d";
  ctx.fillRect(145, 90, 10, 20);

  // Flame
  ctx.beginPath();
  ctx.arc(150, 85, 5, 0, 2 * Math.PI);
  ctx.fillStyle = "yellow";
  ctx.fill();
}

function cutCake() {
  const canvas = document.getElementById("cakeCanvas");
  const ctx = canvas.getContext("2d");
  drawCake();
  ctx.beginPath();
  ctx.moveTo(150, 120);
  ctx.lineTo(150, 200);
  ctx.strokeStyle = "#a4133c";
  ctx.lineWidth = 4;
  ctx.stroke();
}

drawCake();

// Scroll Function
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Envelope Toggle
function toggleEnvelope() {
  document.querySelector(".envelope").classList.toggle("open");
}
