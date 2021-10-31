const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form__input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let toDos = [];

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteToDo = (event) => {
  const li = event.target.parentNode;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
};

const paintNewToDo = (newToDo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.id = newToDo.id;
  li.classList.add("todo-item");
  span.innerText = newToDo.text;
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  button.addEventListener("click", deleteToDo);
};

const handleToDoSubmit = (event) => {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDos.push(newToDoObj);
  paintNewToDo(newToDoObj);
  saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const paresdToDos = JSON.parse(savedToDos);
  toDos = paresdToDos;
  paresdToDos.forEach(paintNewToDo);
}
