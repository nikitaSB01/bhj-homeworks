const fontSize = Array.from(document.querySelectorAll(".font-size"));
const book = document.getElementById("book");
const textColor = Array.from(
  document.querySelectorAll(".book__control_color .color")
);
const textBackground = Array.from(
  document.querySelectorAll(".book__control_background .color")
);
//  console.log(textColor, textBackground);

for (let i = 0; i < fontSize.length; i++) {
  fontSize[i].addEventListener("click", (elem) => {
    for (let i = 0; i < fontSize.length; i++) {
      fontSize[i].classList.remove("font-size_active");
    }
    elem.preventDefault();
    fontSize[i].classList.add("font-size_active");
    if (fontSize[i].className === "font-size font-size_active") {
      book.classList.remove("book_fs-small");
      book.classList.remove("book_fs-big");
    }
    if (
      fontSize[i].className === "font-size font-size_small font-size_active"
    ) {
      book.classList.remove("book_fs-big");
      book.classList.add("book_fs-small");
    }
    if (fontSize[i].className === "font-size font-size_big font-size_active") {
      book.classList.remove("book_fs-big");
      book.classList.remove("book_fs-small");
      book.classList.add("book_fs-big");
    }
  });
}

for (let i = 0; i < textColor.length; i++) {
  textColor[i].addEventListener("click", (elem) => {
    for (let i = 0; i < textColor.length; i++) {
      textColor[i].classList.remove("color_active");
    }
    elem.preventDefault();
    textColor[i].classList.add("color_active");
    if (textColor[i].className === "color text_color_black color_active") {
      book.classList.remove("book_color-whitesmoke");
      book.classList.remove("book_color-gray");
      book.classList.add("book_color-black");
    }
    if (textColor[i].className === "color text_color_gray color_active") {
      book.classList.remove("book_color-whitesmoke");
      book.classList.remove("book_color-black");
      book.classList.add("book_color-gray");
    }
    if (textColor[i].className === "color text_color_whitesmoke color_active") {
      book.classList.remove("book_color-gray");
      book.classList.remove("book_color-black");
      book.classList.add("book_color-whitesmoke");
    }
  });
}

for (let i = 0; i < textBackground.length; i++) {
  textBackground[i].addEventListener("click", (elem) => {
    for (let i = 0; i < textBackground.length; i++) {
      textBackground[i].classList.remove("color_active");
    }
    elem.preventDefault();
    textBackground[i].classList.add("color_active");
    if (textBackground[i].className === "color bg_color_black color_active") {
      book.classList.remove("book_bg-gray");
      book.classList.remove("book_bg-white");
      book.classList.add("book_bg-black");
    }
    if (textBackground[i].className === "color bg_color_gray color_active") {
      book.classList.remove("book_bg-black");
      book.classList.remove("book_bg-white");
      book.classList.add("book_bg-gray");
    }
    if (textBackground[i].className === "color bg_color_white color_active") {
      book.classList.remove("book_bg-black");
      book.classList.remove("book_bg-gray");
      book.classList.add("book_bg-white");
    }
  });
}
