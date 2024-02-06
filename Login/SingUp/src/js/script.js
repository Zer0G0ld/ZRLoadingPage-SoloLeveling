// Redireciona ao clicar no botão
document.getElementById("singInButton").onclick = function () {
    window.location.href = "/Login/SingIn/index.html";
};

document.getElementById("homeButton").onclick = function () {
    window.location.href = "/index.html";
};

// Registra o usuário
function registerUser() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pwd').value;

    // Enviar dados para o servidor
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "register.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Exibir a resposta do servidor
            console.log(xhr.responseText);
        }
    };

    // Enviar dados como JSON
    var data = {
        username: username,
        email: email,
        password: password
    };

    xhr.send(JSON.stringify(data));
}