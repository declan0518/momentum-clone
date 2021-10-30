const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form__input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";

const handleSubmit = (event) => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.innerText = username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

loginForm.addEventListener("submit", handleSubmit);
