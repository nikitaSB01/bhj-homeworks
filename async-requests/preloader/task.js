const imgLoader = document.getElementById("loader");
const items = document.getElementById(".items");
const item = document.querySelector(".item");
//
const xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    imgLoader.classList.remove("loader_active");
    const result = JSON.parse(xhr.response);
    for (let key in result.response.Valute) {
      let charCode = result.response.Valute[key].CharCode;
      let value = result.response.Valute[key].Value;
      item.insertAdjacentHTML(
        "afterEnd",
        `<div class ='item'><div class='item__code'>${charCode}</div><div class='item__value'>${value}</div><div class='item__currency'>руб.</div></div>`
      );
    }
  }
});

xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
xhr.send();
