const taskInput = document.getElementById("task__input");
const taskButton = document.getElementById("tasks__add");
const ListTask = document.querySelector(".tasks__list");

taskButton.addEventListener("click", (elem) => {
  elem.preventDefault();
  let valueTaskInput = taskInput.value;
  if (taskInput.value.trim() === "") {
    taskInput.value = null;
    return;
  }
  ListTask.insertAdjacentHTML(
    "afterBegin",
    `<div class='task'><div class='task__title'>${valueTaskInput}</div><a href='#' class='task__remove'>&times;</a></div>`
  );
  taskInput.value = null;
  let taskRemove = document.querySelector(".task__remove");
  taskRemove.addEventListener("click", function () {
    this.parentElement.remove();
  });
});
