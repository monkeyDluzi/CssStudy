const catchMeButton = document.getElementById("catchMeButton");

let score = 0;


let highScore = localStorage.getItem("highScore");
highScore = highScore ? Number(highScore) : 0;

document.getElementById("highScoreText").textContent =
  "High Score: " + highScore;

let canScore = true;


document.addEventListener("mousemove", (e) => {
  const rect = catchMeButton.getBoundingClientRect();

  const buttonX = rect.left + rect.width / 2;
  const buttonY = rect.top + rect.height / 2;

  const dx = buttonX - e.clientX;
  const dy = buttonY - e.clientY;

  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 120) {
    let newLeft = catchMeButton.offsetLeft + dx * 2;
    let newTop = catchMeButton.offsetTop + dy * 2;

   
    newLeft = Math.max(0, Math.min(1000 - catchMeButton.offsetWidth, newLeft));
    newTop = Math.max(0, Math.min(600 - catchMeButton.offsetHeight, newTop));

    catchMeButton.style.left = newLeft + "px";
    catchMeButton.style.top = newTop + "px";
  }
});


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

const catchMeButton = document.getElementById("catchMeButton");
const arena = document.getElementById("arena");

let x = 250;
let y = 300;

let speedX = 4;
let speedY = 3;

document.addEventListener("mousemove", (e) => {
  const rect = catchMeButton.getBoundingClientRect();

  const buttonX = rect.left + rect.width / 2;
  const buttonY = rect.top + rect.height / 2;

  const dx = buttonX - e.clientX;
  const dy = buttonY - e.clientY;

  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 150) {
    // push away instead of teleport
    speedX += dx * 0.05;
    speedY += dy * 0.05;
  }
});

function animate() {
  x += speedX;
  y += speedY;

  // friction (prevents infinite speed buildup)
  speedX *= 0.99;
  speedY *= 0.99;

  // wall bounce
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


