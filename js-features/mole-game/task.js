const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let index = 1; index <= 9; index++) {
  function getHole(index) {
    let holeClick = document.getElementById(`hole${index}`);
    return holeClick;
  }
  let hole = getHole(index);
  hole.onclick = function () {
    if (hole.classList.contains("hole_has-mole")) {
      dead.textContent++;
      if (dead.textContent == 10) {
        alert("ПОБЕДА!!!");
        dead.textContent = 0;
      }
    } else {
      lost.textContent++;
      if (lost.textContent == 5) {
        alert("ПОРАЖЕНИЕ!!!");
        lost.textContent = 0;
      }
    }
  };
}
