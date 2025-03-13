from pydantic import BaseModel

# Definição do modelo User usando Pydantic
# O modelo User representa um usuário com os campos "username" e "password".
class User(BaseModel):
    username: str  # O nome de usuário é obrigatório (campo string)
    password: str  # A senha do usuário também é obrigatória (campo string)