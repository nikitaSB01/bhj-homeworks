const taskInput = document.getElementById("task__input");
const taskButton = document.getElementById("tasks__add");
const ListTask = document.querySelector(".tasks__list");

taskButton.addEventListener("click", (elem) => {
  elem.preventDefault();
  if (taskInput.value === "") {
    return;
  } else {
    ListTask.insertAdjacentHTML(
      "afterBegin",
      "<div class='task'><div class='task__title'></div><a href='#' class='task__remove'>&times;</a></div>"
    );
    let title = document.querySelectorAll(".task__title");
    for (let i = 0; i < title.length; i++) {
      if (!title[i].textContent) {
        title[i].textContent = taskInput.value;
      }
    }
    taskInput.value = null;
  }
  let task = document.getElementsByClassName("task");
  let taskRemove = document.getElementsByClassName("task__remove");

  for (let i = 0; i < taskRemove.length; i++) {
    taskRemove[i].addEventListener("click", function () {
      this.parentElement.remove();
    });
  }
});
