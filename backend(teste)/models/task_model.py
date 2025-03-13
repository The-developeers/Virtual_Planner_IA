from pydantic import BaseModel
from typing import Optional

# Definição do modelo Task usando Pydantic
# O modelo Task é utilizado para representar uma tarefa com os campos "title" e "completed".
# O campo "completed" é opcional e tem um valor padrão de False caso não seja fornecido.
class Task(BaseModel):
    title: str  # O título da tarefa é obrigatório (campo string)
    completed: Optional[bool] = False  # O status de conclusão é opcional, com valor padrão False