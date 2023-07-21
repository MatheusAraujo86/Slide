// Selecionando os elementos HTML
const asideSection = document.querySelector("aside");
const mainSection = document.querySelector("main");

const signInBtn = document.getElementById("login-btn");
const signUpBtn = document.getElementById("register-btn");

// Adicionando um evento de clique ao botão
signInBtn.addEventListener("click", () => {
  mainSection.classList.add("slide-right");
  asideSection.classList.add("slide-left");
});

// Adicionando um evento de clique ao botão de registro.
signUpBtn.addEventListener("click", () => {
  mainSection.classList.remove("slide-right");
  asideSection.classList.remove("slide-left");
});
