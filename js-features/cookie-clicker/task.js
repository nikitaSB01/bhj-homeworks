const clicNumber = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
function changeSizes() {
  if (clicNumber.textContent % 2 === 0) {
    cookie.width = 300;
    cookie.height = 300;
  } else {
    cookie.width = 200;
    cookie.height = 200;
  }
  clicNumber.textContent++;
}
cookie.onclick = () => changeSizes();
