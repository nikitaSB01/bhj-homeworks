const dropVal = document.querySelector(".dropdown__value");
const dropList = document.getElementsByTagName("ul");
const dropItemS = document.getElementsByClassName("dropdown__item");

function cliC() {
  dropList[0].classList.toggle("dropdown__list_active");
  for (let i = 0; i < dropItemS.length; i++) {
    dropItemS[i].addEventListener("click", function (e) {
      e.preventDefault();
      dropVal.textContent = dropItemS[i].textContent;
      dropList[0].classList.remove("dropdown__list_active");
    });
  }
}
dropVal.onclick = cliC;

/* const dropLinkS = document.getElementsByClassName("dropdown__link");
 */ //dropdown__list_active
/* 
function cliC() {
  dropList[0].classList.toggle("dropdown__list_active");
  // console.log(dropList);
  for (let i = 0; i < dropItemS.length; i++) {
    dropItemS[i].onclick = () =>
      (dropVal.textContent = dropItemS[i].textContent);
  }
} 
 dropVal.onclick = cliC;
*/
