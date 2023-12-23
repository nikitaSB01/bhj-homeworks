const hasTooltips = Array.from(document.querySelectorAll("a.has-tooltip"));
let divTooltip = document.querySelector(".tooltip");

for (const item of hasTooltips) {
  item.addEventListener("click", (elem) => {
    elem.preventDefault();
    let text = item.title;
    if (item.children[0]) {
      item.children[0].remove();
    } else {
      let divElements = Array.from(
        document.querySelectorAll(".tooltip_active")
      );
      if (divElements.length >= 1) {
        console.log("ERROR");
      } else {
        let divElem = document.createElement("div");
        divElem.className = "tooltip";
        divElem.textContent = text;
        item.appendChild(divElem);
        item.style.position = "relative";
        divElem.style.position = "absolute";
        divElem.style.left = "0";
        divElem.classList.toggle("tooltip_active");
      }
    }
  });
}
