// alert("hello");
let btnAdd = document.querySelector("#btnAdd");

btnAdd.addEventListener("click", function () {
  //   alert("hello");
  let parentElement = document.querySelector("#todos");
  let taskElement = document.createElement("li");
  let spanElement = document.createElement("span");

  let taskName = document.querySelector("#newTask").value;
  // <span< taskanme <span>
  spanElement.innerHTML = taskName;

  //<li> <span>tasnk name<span> </li>
  taskElement.appendChild(spanElement);

  //create a button
  let buttonElement = document.createElement("button");
  buttonElement.innerHTML = "Edit";
  buttonElement.addEventListener("click", function () {
    let newTask = prompt("add a new task");
    spanElement.innerHTML = newTask;
  });
  //<li>taskname <button><li>
  taskElement.appendChild(buttonElement);
  parentElement.appendChild(taskElement);
});
