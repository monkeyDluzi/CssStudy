const catchMeButton = document.getElementById("catchMeButton");

function move() {
  const x = Math.random() * (window.innerWidth - catchMeButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - catchMeButton.offsetHeight);

  catchMeButton.style.left = `${x}px`;
  catchMeButton.style.top = `${y}px`;
}

catchMeButton.addEventListener("click", move);
