from fastapi import APIRouter, HTTPException, Depends
from models.user_model import User
from api.users import register_user, login_user
from fastapi.security import OAuth2PasswordBearer

user_router = APIRouter()

@user_router.post("/register")
async def register(user: User):
    created = await register_user(user.username, user.password)
    if not created:
        raise HTTPException(status_code=400, detail="Usuário já existe")
    return {"message": "Usuário registrado com sucesso!"}

@user_router.post("/login")
async def login(user: User):
    token = await login_user(user.username, user.password)
    if not token:
        raise HTTPException(status_code=401, detail="Credenciais inválidas")
    return {"token": token}
    
