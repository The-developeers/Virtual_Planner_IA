import React, { useState, useEffect } from "react"; // Importa hooks do React
import { getTasks, createTask, updateTask, deleteTask } from "../api"; // Importa funções para interagir com a API
import "../App.css"; // Importa o arquivo CSS para estilização

const Tasks = () => {
  const [tasks, setTasks] = useState([]); // Estado para armazenar as tarefas
  const [newTask, setNewTask] = useState(""); // Estado para armazenar a nova tarefa a ser adicionada

  // Hook useEffect para carregar as tarefas quando o componente for montado
  useEffect(() => {
    loadTasks();
  }, []);

  // Função para carregar as tarefas da API
  const loadTasks = async () => {
    try {
      const data = await getTasks(); // Chama a API para pegar as tarefas
      setTasks(data); // Atualiza o estado com as tarefas recebidas
    } catch (error) {
      console.error("Erro ao carregar tarefas:", error); // Se houver erro, exibe no console
    }
  };

  // Função para adicionar uma nova tarefa
  const handleAddTask = async () => {
    if (!newTask.trim()) return; // Se a tarefa estiver vazia, não faz nada
    const task = { title: newTask, completed: false }; // Cria uma nova tarefa
    try {
      await createTask(task); // Envia a tarefa para a API
      setNewTask(""); // Limpa o campo de input após a tarefa ser adicionada
      loadTasks(); // Recarrega as tarefas para mostrar a nova tarefa
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error); // Se houver erro, exibe no console
    }
  };

  // Função para alternar o status de conclusão de uma tarefa
  const handleToggleComplete = async (task) => {
    try {
      // Atualiza a tarefa no backend, invertendo o status de 'completed'
      await updateTask(task._id, { ...task, completed: !task.completed });

      // Atualiza o estado localmente para refletir a mudança
      setTasks(prevTasks => 
        prevTasks.map(t =>
          t._id === task._id ? { ...t, completed: !t.completed } : t
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error); // Se houver erro, exibe no console
    }
  };

  // Função para deletar uma tarefa
  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId); // Envia o ID da tarefa para a API para deletá-la
      loadTasks(); // Recarrega a lista de tarefas após a exclusão
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error); // Se houver erro, exibe no console
    }
  };

  return (
    <div className="tasks-container"> {/* Contêiner principal da lista de tarefas */}
      <h1 className="tasks-title">📋 Minhas Tarefas</h1> {/* Título da seção de tarefas */}
      <input
        className="tasks-input"
        type="text"
        placeholder="Nova tarefa..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)} // Atualiza o estado da nova tarefa enquanto o usuário digita
      />
      <button className="tasks-add-button" onClick={handleAddTask}>Adicionar</button> {/* Botão para adicionar tarefa */}
      <ul className="tasks-list"> {/* Lista de tarefas */}
        {tasks.map((task) => ( // Mapeia as tarefas e renderiza cada uma
          <li className="tasks-item" key={task._id}> {/* Cada item da lista de tarefas */}
            <span
              onClick={() => handleToggleComplete(task)} // Alterna o status de completada ao clicar na tarefa
              style={{
                textDecoration: task.completed ? "line-through" : "none", // Adiciona um riscado se a tarefa estiver completada
                cursor: "pointer", // Altera o cursor para indicar que é clicável
              }}
            >
              {task.title.length > 40 ? task.title.substring(0, 50) + "..." : task.title} {/* Exibe a tarefa, com limite de caracteres */}
            </span>
            <button className="tasks-delete-button" onClick={() => handleDeleteTask(task._id)}>X</button> {/* Botão para deletar a tarefa */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
