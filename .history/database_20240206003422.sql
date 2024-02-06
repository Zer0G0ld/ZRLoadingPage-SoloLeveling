-- Criação do Banco de Dados SoloData se não existir
CREATE DATABASE IF NOT EXISTS SoloData;

-- Seleção do Banco de Dados
USE SoloData;

-- Criação da Tabela de Usuários (users)
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- Adicione outros campos conforme necessário
    -- data_de_nascimento DATE,
    -- nome_completo VARCHAR(100),
    
    -- Adicionando índice ao campo username para otimizar consultas
    INDEX idx_username (username),
    
    -- Adicionando índice ao campo email para otimizar consultas
    INDEX idx_email (email)
);

-- Comentário: O campo password_hash será usado para armazenar hashes seguros das senhas, não armazenar senhas em texto simples.

-- Exemplo de como inserir um usuário na tabela:
-- INSERT INTO users (username, email, password_hash) VALUES ('exemplo', 'exemplo@email.com', 'hash_da_senha');

-- Lembre-se de sempre usar hashes seguros para senhas, como bcrypt.
