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
    
    -- Adicionando índice ao campo username para otimizar consultas
    INDEX idx_username (username),
    
    -- Adicionando índice ao campo email para otimizar consultas
    INDEX idx_email (email)
);