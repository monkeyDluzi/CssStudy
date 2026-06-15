const catchMeButton = document.getElementById("catchMeButton");

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
      Math.min(window.innerWidth - catchMeButton.offsetWidth, newLeft)
    );

    newTop = Math.max(
      0,
      Math.min(window.innerHeight - catchMeButton.offsetHeight, newTop)
    );

    catchMeButton.style.left = newLeft + "px";
    catchMeButton.style.top = newTop + "px";
  }
});

let score = 0;

catchMeButton.addEventListener("click", () => {
  score++;
  document.getElementById("score").textContent = "Score: " + score;
});
