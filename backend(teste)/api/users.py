from fastapi import HTTPException
from database.database import users_collection
from models.user_model import User
import bcrypt
import jwt

# Função para criar um novo usuário no sistema
# A lógica dessa função foi feita de forma simples e rápida, e não inclui boas práticas de segurança ou validação adequada.
async def register_user(username: str, password: str):
    # Verifica se o nome de usuário já está registrado no banco de dados
    user_exists = await users_collection.find_one({"username": username})
    
    if user_exists:
        return False  # Retorna False se o usuário já existir
    
    # Criação do novo usuário
    # A senha não é tratada de forma segura, o que é uma grande falha de segurança.
    # Aqui deveríamos criptografar a senha antes de armazená-la no banco.
    new_user = User(username=username, password=password)  # A senha é armazenada em texto simples
    await users_collection.insert_one(new_user.dict())  # Adiciona o usuário ao banco de dados
    
    return True  # Retorna True se o usuário for criado com sucesso

# Função para fazer o login de um usuário
# O login atual não é seguro porque as senhas são verificadas diretamente em texto simples.
async def login_user(username: str, password: str):
    # Busca o usuário no banco com o nome de usuário e senha fornecidos (sem criptografia)
    user = await users_collection.find_one({"username": username, "password": password})
    
    if user:
        # A autenticação aqui é muito simplificada e não segura.
        # Um JWT (JSON Web Token) deve ser gerado, mas no código atual, estamos apenas criando um token falso.
        token = "fake_token_for_demo"  # Token falso de demonstração
        return token
    
    return None  # Retorna None caso as credenciais não sejam válidas
