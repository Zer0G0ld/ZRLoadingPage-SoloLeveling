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

    // Enviar dados para o servidor
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "rester.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 )
    }
}