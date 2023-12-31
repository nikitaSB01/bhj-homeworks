"use strict";

let pollTitle = document.querySelector(".poll__title");
const pollAnswers = document.querySelector(".poll__answers");
//
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();
xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    const result = JSON.parse(xhr.response);
    pollTitle.textContent = result.data.title;
    for (let i = 0; i < result.data.answers.length; i++) {
      pollAnswers.insertAdjacentHTML(
        "beforeEnd",
        `<button class='poll__answer'>${result.data.answers[i]}</button>`
      );

      const buttons = Array.from(document.querySelectorAll(".poll__answer"));
      buttons[i].addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
      });
    }
  }
});