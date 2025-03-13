from bson import ObjectId
from models.task_model import Task
from database.database import tasks_collection

# Função que recupera todas as tarefas do banco de dados e as retorna como uma lista.
async def get_tasks():
    tasks = []  # Lista para armazenar as tarefas
    async for task in tasks_collection.find():
        task["_id"] = str(task["_id"])  # Converte o ObjectId para string
        tasks.append(task)  # Adiciona a tarefa à lista
    return tasks  # Retorna a lista de tarefas

# Função que cria uma nova tarefa no banco de dados e retorna a tarefa criada.
async def create_task(task: Task):
    new_task = await tasks_collection.insert_one(task.model_dump())
    created_task = await tasks_collection.find_one({"_id": new_task.inserted_id})
    created_task["_id"] = str(created_task["_id"])  # Converte o ObjectId para string
    return created_task  # Retorna a tarefa criada

# Função que atualiza os dados de uma tarefa existente no banco de dados.
# Recebe o ID da tarefa e os novos dados, e retorna True se a tarefa foi atualizada com sucesso.
async def update_task(task_id: str, updated_task: Task):
    result = await tasks_collection.update_one(
        {"_id": ObjectId(task_id)},
        {"$set": updated_task.dict()}
    )
    return result.modified_count > 0  # Retorna True se a tarefa foi modificada

# Função que deleta uma tarefa do banco de dados com base no ID fornecido.
# Retorna True se a tarefa foi deletada com sucesso.
async def delete_task(task_id: str):
    result = await tasks_collection.delete_one({"_id": ObjectId(task_id)})
    return result.deleted_count > 0  # Retorna True se a tarefa foi deletada
