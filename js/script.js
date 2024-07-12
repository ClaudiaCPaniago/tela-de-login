function mostrarSenha() {
  var inputPass = document.getElementById("senha");
  var btnShowPass = document.getElementById("icone-senha");

  if (inputPass.type === "password") {
    inputPass.setAttribute("type", "text");
    btnShowPass.classList.replace("fa-solid fa-lock-open", "fa-solid fa-lock");
  } else {
    inputPass.setAttribute("type", "password");
    btnShowPass.classList.replace("fa-solid fa-open", "fa-solid fa-lock-lock");
  }
}
