from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.task_routes import task_router
from routes.user_routes import user_router

# Criação da instância da aplicação FastAPI
app = FastAPI()

# Configuração do CORS para permitir comunicação com o front-end
# O middleware CORSMiddleware permite que o front-end (rodando em "http://localhost:3000") faça requisições para o back-end sem problemas de CORS.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Front-end rodando na porta 3000
    allow_credentials=True,  # Permite o envio de cookies e credenciais
    allow_methods=["*"],  # Permite todos os métodos HTTP (GET, POST, etc.)
    allow_headers=["*"],  # Permite todos os cabeçalhos
)

# Inclui as rotas de tarefas (task_router) com o prefixo "/api/tasks"
# O prefixo especifica que todas as rotas dentro de task_router terão "/api/tasks" no início da URL.
app.include_router(task_router, prefix="/api/tasks", tags=["tasks"])

# Rota raiz ("/") que retorna uma mensagem simples
@app.get("/")
def read_root():
    return {"message": "Bem-vindo ao assistente inteligente!"}

# Inclui as rotas de usuários (user_router) com o prefixo "/api/users"
app.include_router(user_router, prefix="/api/users", tags=["users"])

# Comando para rodar a aplicação com Uvicorn:

# Comando para lançar o backend no localhost: python -m uvicorn main:app --reload
