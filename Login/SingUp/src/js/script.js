function registerUser() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pwd').value;
    var checkbox = document.getElementById('chbox');

    if (!checkbox.checked) {
        alert("Você deve aceitar os termos e condições para registrar.");
        return false;
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "register.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                alert(xhr.responseText); // Exibe mensagem de sucesso
                window.location.href = "/index.html"; // Redireciona após o registro
            } else {
                alert("Erro no registro do usuário: " + xhr.responseText); // Exibe mensagem de erro
            }
        }
    };

    var data = {
        username: username,
        email: email,
        password: password
    };

    xhr.send(JSON.stringify(data));
    return false; // Impede o envio do formulário padrão
}
