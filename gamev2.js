const catchMeButton = document.getElementById("catchMeButtonv2");
const arena = document.getElementById("arenav2");

let score = 0;
let canScore = true;

let highScore = localStorage.getItem("highScore");
highScore = highScore ? Number(highScore) : 0;

document.getElementById("highScoreText").textContent =
  "High Score: " + highScore;

// position + velocity
let x = 250;
let y = 300;

let speedX = 8;
let speedY = 7;

// mouse repulsion (ONLY ONE mouse listener)
document.addEventListener("mousemove", (e) => {
  const rect = catchMeButton.getBoundingClientRect();

  const buttonX = rect.left + rect.width / 2;
  const buttonY = rect.top + rect.height / 2;

  const dx = buttonX - e.clientX;
  const dy = buttonY - e.clientY;

  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 150) {
    speedX += dx * 0.05;
    speedY += dy * 0.05;
  }
});

function animate() {
  x += speedX;
  y += speedY;

  speedX *= 0.99;
  speedY *= 0.99;

  // walls
  if (x <= 0) {
    x = 0;
    speedX *= -1;
  }
  if (x >= arena.clientWidth - catchMeButtonv2.offsetWidth) {
    x = arena.clientWidth - catchMeButtonv2.offsetWidth;
    speedX *= -1;
  }

  if (y <= 0) {
    y = 0;
    speedY *= -1;
  }
  if (y >= arena.clientHeight - catchMeButtonv2.offsetHeight) {
    y = arena.clientHeight - catchMeButtonv2.offsetHeight;
    speedY *= -1;
  }

  catchMeButtonv2.style.left = x + "px";
  catchMeButtonv2.style.top = y + "px";

  requestAnimationFrame(animate);
}

animate();

// scoring
catchMeButtonv2.addEventListener("click", () => {
  if (!canScore) return;

  canScore = false;

  score++;
  document.getElementById("score").textContent = "Score: " + score;

  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);

    document.getElementById("highScoreText").textContent =
      "High Score: " + highScore;
  }

  setTimeout(() => {
    canScore = true;
  }, 200);
});
