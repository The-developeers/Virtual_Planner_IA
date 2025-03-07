from ..models.task import User
from ..utils.database import users_collection

def register_user(username, password):
	if users_collection.find_one({"username":username}):
		return {"message":"Usuário já existe"}, 400
	
	user = User(username, password)
	users_collection.insert_one(user.to_dict())

	return {"message":"Usuário registrado com sucesso"}, 201

def login_user(username,password):
	user = users_collection.find_one({"username":username,"password":password})

	if user:
		return {"message":"Login bem-sucedido","user_id":str(user["_id"])}, 200
	else:
		return {"message": "Credenciais inválidas"}, 401