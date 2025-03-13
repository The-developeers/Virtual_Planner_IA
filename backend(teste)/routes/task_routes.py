from fastapi import APIRouter, HTTPException
from models.task_model import Task
from api.tasks import get_tasks, create_task, update_task, delete_task

task_router = APIRouter()

@task_router.get("/")
async def read_tasks():
    tasks = await get_tasks()
    return tasks

@task_router.post("/")
async def add_task(task: Task):
    new_task = await create_task(task)
    return new_task

@task_router.put("/{task_id}")
async def edit_task(task_id: str, updated_task: Task):
    updated = await update_task(task_id, updated_task)
    if updated:
        return {"message": "Tarefa atualizada com sucesso!"}
    raise HTTPException(status_code=404, detail="Tarefa não encontrada")

@task_router.delete("/{task_id}")
async def remove_task(task_id: str):
    deleted = await delete_task(task_id)
    if deleted:
        return {"message": "Tarefa removida com sucesso!"}
    raise HTTPException(status_code=404, detail="Tarefa não encontrada")
