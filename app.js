const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form__input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";

const handleSubmit = (event) => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  paintGreeting(username);
};

const paintGreeting = (username) => {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleSubmit);
} else {
  paintGreeting(savedUsername);
}
