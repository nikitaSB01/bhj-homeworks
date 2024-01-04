const editor = document.getElementById("editor");
const button = document.getElementById("button");
// проверка н наличие значения в textarea
if (localStorage.editorValue === undefined) {
  editor.innerHTML = "";
} else {
  editor.value = localStorage.editorValue;
}
// добавлене значения textarea в localStorage
editor.addEventListener("focusout", () => {
  localStorage.setItem("editorValue", editor.value);
});
// удаление localStorage и значения textarea
button.onclick = function () {
  localStorage.removeItem("editorValue");
  editor.value = "";
};
