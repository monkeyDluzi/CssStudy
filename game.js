const catchMeButton = document.getElementById("catchMeButton");

let score = 0;
let highScore = localStorage.getItem("highScore") || 0;

document.getElementById("highScoreText").textContent =
  "High Score: " + highScore;

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

    newLeft = Math.max(
      0,
      Math.min(1000 - catchMeButton.offsetWidth, newLeft)
    );

    newTop = Math.max(
      0,
      Math.min(600 - catchMeButton.offsetHeight, newTop)
    );

    catchMeButton.style.left = newLeft + "px";
    catchMeButton.style.top = newTop + "px";
  }
});

catchMeButton.addEventListener("click", () => {
  score++;
  document.getElementById("score").textContent = "Score: " + score;

  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
    document.getElementById("highScoreText").textContent =
      "High Score: " + highScore;
  }
});


newLeft = Math.max(
  0,
  Math.min(1000 - catchMeButton.offsetWidth, newLeft)
);

newTop = Math.max(
  0,
  Math.min(600 - catchMeButton.offsetHeight, newTop)
);

