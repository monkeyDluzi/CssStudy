const catchMeButton = document.getElementById("catchMeButton");
const arena = document.getElementById("arena");

let score = 0;
let canScore = true;

let highScore = localStorage.getItem("highScore");
highScore = highScore ? Number(highScore) : 0;

document.getElementById("highScoreText").textContent =
  "High Score: " + highScore;

// position + velocity
let x = 250;
let y = 300;

let speedX = 4;
let speedY = 3;

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
  if (x >= arena.clientWidth - catchMeButton.offsetWidth) {
    x = arena.clientWidth - catchMeButton.offsetWidth;
    speedX *= -1;
  }

  if (y <= 0) {
    y = 0;
    speedY *= -1;
  }
  if (y >= arena.clientHeight - catchMeButton.offsetHeight) {
    y = arena.clientHeight - catchMeButton.offsetHeight;
    speedY *= -1;
  }

  catchMeButton.style.left = x + "px";
  catchMeButton.style.top = y + "px";

  requestAnimationFrame(animate);
}

animate();

// scoring
catchMeButton.addEventListener("click", () => {
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


