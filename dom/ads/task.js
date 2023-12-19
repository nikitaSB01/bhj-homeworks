const rotCase = document.querySelector(".rotator");
let i = 0;
setInterval(() => {
  if (i >= 0) {
    rotCase.children[i].classList.remove("rotator__case_active");
    if (i == rotCase.children.length - 1) {
      i = 0;
      rotCase.children[i].classList.add("rotator__case_active");
    } else {
      i += 1;
      rotCase.children[i].classList.add("rotator__case_active");
      let index = i - 1;
      rotCase.children[index].classList.remove("rotator__case_active");
    }
  }
}, 1000);