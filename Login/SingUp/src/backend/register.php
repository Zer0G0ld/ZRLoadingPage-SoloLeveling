<?php
// Inclua o arquivo de configuração do banco de dados aqui

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $inputJSON = file_get_contents('php://input');
    $input = json_decode($inputJSON, true);

    if (isset($input['username']) && isset($input['email']) && isset($input['password'])) {
        $username = $input['username'];
        $email = $input['email'];
        $password = $input['password'];

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode(array("error" => "Formato de e-mail inválido"));
            exit;
        }

        $conn = new mysqli("localhost", "seu_usuario", "sua_senha", "SoloData");

        if ($conn->connect_error) {
            die("Conexão com o banco de dados falhou: " . $conn->connect_error);
        }

        $stmt = $conn->prepare("INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)");
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);
        $stmt->bind_param("sss", $username, $email, $hashed_password);

        if ($stmt->execute()) {
            echo json_encode(array("message" => "Usuário registrado com sucesso"));
        } else {
            echo json_encode(array("error" => "Erro no registro do usuário: " . $stmt->error));
        }

        $stmt->close();
        $conn->close();
    } else {
        echo json_encode(array("error" => "Todos os campos são obrigatórios"));
    }
} else {
    echo json_encode(array("error" => "Método não permitido"));
}
?>
