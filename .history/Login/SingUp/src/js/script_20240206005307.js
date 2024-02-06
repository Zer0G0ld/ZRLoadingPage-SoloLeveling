// Redireciona ao clicar no botão
document.getElementById("singInButton").onclick = function () {
    window.location.href = "../SingIn/index.html";
};

document.getElementById("homeButton").onclick = function () {
    window.location.href = "/index.html";
};

// Regista usuario
function registerUser() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Enviar dados para o serv
}