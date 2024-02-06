<?php
// Recuperar dados do corpo da solicitação
$data = json_decode(file_get_contents("php://input"));

// Conectar ao banco de dados (certifique-se de tratar as credenciais com segurança)
$conn = new mysqli("localhost", "seu_usuario", "sua_senha", "SoloData");

// Verificar a conexão
if ($conn->connect_error) {
    die("Conexão com o banco de dados falhou: " . $conn->connect_error);
}


// Preparar a declaração SQL
$stmt = $conn->prepare("INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $data->username, $data->email, password_hash($data->password, PASSWORD_BCRYPT));

// Executar a declaração SQL
if ($stmt->execute()) {
    echo "Usuário registrado com sucesso!";
} else {
    echo "Erro no registro do usuário: " . $stmt->error;
}

// Fechar a conexão
$stmt->close();
$conn->close();
?>
