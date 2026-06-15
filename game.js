const catchMeButton = document.getElementById("catchMeButton");

document.addEventListener("mousemove", (e) => {
  const rect = catchMeButton.getBoundingClientRect();

  const buttonX = rect.left + rect.width / 2;
  const buttonY = rect.top + rect.height / 2;

  const dx = buttonX - e.clientX;
  const dy = buttonY - e.clientY;

  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 120) {
    catchMeButton.style.left =
      catchMeButton.offsetLeft + dx * 2 + "px";

    catchMeButton.style.top =
      catchMeButton.offsetTop + dy * 2 + "px";
  }
});
