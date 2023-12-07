const countDown = function () {
  const start = document.getElementById("timer");
  if (start.textContent > 0) {
    start.textContent -= 1;
  } else {
    clearInterval;
    alert("Вы победили в конкурсе!");
  }
};

setInterval(countDown, 1000);
