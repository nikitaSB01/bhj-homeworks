const fontSize = Array.from(document.querySelectorAll(".font-size"));
const book = document.getElementById("book");

for (let i = 0; i < fontSize.length; i++) {
  fontSize[i].addEventListener("click", (elem) => {
    for (let i = 0; i < fontSize.length; i++) {
      fontSize[i].classList.remove("font-size_active");
    }
    elem.preventDefault();
    fontSize[i].classList.add("font-size_active");
    if (fontSize[i].className === "font-size font-size_active") {
      book.classList = "book";
    }
    if (
      fontSize[i].className === "font-size font-size_small font-size_active"
    ) {
      book.classList = "book";
      book.classList.add("book_fs-small");
    }
    if (fontSize[i].className === "font-size font-size_big font-size_active") {
      book.classList = "book";
      book.classList.add("book_fs-big");
    }
  });
}
