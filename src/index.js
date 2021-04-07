document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById ("create-task-form");
  const newTaskDescription= document.getElementById("new-task-description");
  const newTaskPriority= document.getElementById("new-task-priority");
  const newTaskU1= document.getElementById("tasks");
  newTaskForm.addEventListener("submit", createNewTask);
});
  const createNewTask = event => {
    const newTaskDesription= document.getElementsByName("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDesription.value;

    appendNewTask(newTask)
    event.target.reset();
  };
  const appendNewTask = task => {
    document.getElementById("tasks").appendChild(task);

  }


