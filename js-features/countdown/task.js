const countDown = function () {
  const start = document.getElementById("timer");
  if (start.textContent > 0) {
    start.textContent -= 1;
  } else {
    clearInterval;
  }
};

setInterval(countDown, 1000);
