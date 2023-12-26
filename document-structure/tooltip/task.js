const header = document.querySelector(".header");
const hasTooltips = Array.from(document.querySelectorAll("a.has-tooltip"));
header.insertAdjacentHTML(
  "beforeBegin",
  "<div class='tooltip' style=''></div>"
);
let divTooltip = document.querySelector(".tooltip");
for (const item of hasTooltips) {
  item.addEventListener("click", (elem) => {
    elem.preventDefault();
    let titleTextItem = item.title;
    if (divTooltip.textContent === titleTextItem) {
      divTooltip.classList.toggle("tooltip_active");
    } else {
      divTooltip.classList.add("tooltip_active");
      divTooltip.textContent = titleTextItem;
      item.append(divTooltip);
      item.style.position = "relative";
      divTooltip.style.position = "absolute";
      divTooltip.style.left = "0";
    }
  });
}
