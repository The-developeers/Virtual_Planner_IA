import axios from 'axios'; // Importa o axios para fazer requisições HTTP

const API_URL = 'http://localhost:8000/api'; // URL do backend FastAPI

// Função para registrar usuário
export const registerUser = async (username, password) => {
    try {
        // Faz uma requisição POST para o endpoint de registro de usuário
        const response = await axios.post(`${API_URL}/users/register`, { username, password });
        return response.data; // Retorna os dados da resposta da requisição
    } catch (error) {
        console.error("Erro ao registrar:", error.response?.data || error.message); // Exibe erro, se houver
        throw error; // Lança o erro para ser tratado onde a função foi chamada
    }
};

// Função para login de usuário
export const loginUser = async (username, password) => {
    try {
        // Faz uma requisição POST para o endpoint de login de usuário
        const response = await axios.post(`${API_URL}/users/login`, { username, password });
        return response.data; // Retorna os dados da resposta da requisição
    } catch (error) {
        console.error("Erro no login:", error.response?.data || error.message); // Exibe erro, se houver
        throw error; // Lança o erro para ser tratado onde a função foi chamada
    }
};

// Função para buscar todas as tarefas
export const getTasks = async () => {
    try {
        // Faz uma requisição GET para buscar todas as tarefas
        const response = await axios.get(`${API_URL}/tasks`);
        return response.data; // Retorna os dados das tarefas
    } catch (error) {
        console.error("Erro ao buscar tarefas:", error.response?.data || error.message); // Exibe erro, se houver
        throw error; // Lança o erro para ser tratado onde a função foi chamada
    }
};

// Função para criar uma nova tarefa
export const createTask = async (task) => {
    try {
        // Faz uma requisição POST para criar uma nova tarefa
        const response = await axios.post(`${API_URL}/tasks`, task);
        return response.data; // Retorna os dados da tarefa criada
    } catch (error) {
        console.error("Erro ao criar tarefa:", error.response?.data || error.message); // Exibe erro, se houver
        throw error; // Lança o erro para ser tratado onde a função foi chamada
    }
};

// Função para atualizar uma tarefa
export const updateTask = async (taskId, updatedTask) => {
    try {
        // Faz uma requisição PUT para atualizar a tarefa com o ID especificado
        const response = await axios.put(`${API_URL}/tasks/${taskId}`, updatedTask);
        return response.data; // Retorna os dados da tarefa atualizada
    } catch (error) {
        console.error("Erro ao atualizar tarefa:", error.response?.data || error.message); // Exibe erro, se houver
        throw error; // Lança o erro para ser tratado onde a função foi chamada
    }
};

// Função para deletar uma tarefa
export const deleteTask = async (taskId) => {
    try {
        // Faz uma requisição DELETE para deletar a tarefa com o ID especificado
        const response = await axios.delete(`${API_URL}/tasks/${taskId}`);
        return response.data; // Retorna a confirmação da exclusão
    } catch (error) {
        console.error("Erro ao deletar tarefa:", error.response?.data || error.message); // Exibe erro, se houver
        throw error; // Lança o erro para ser tratado onde a função foi chamada
    }
};
