import React, { useState } from "react"; // Importa o React e useState para gerenciar o estado do componente
import { Link } from "react-router-dom"; // Importa o Link para navegação entre páginas
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirecionamento de página após login
import axios from "axios"; // Importa axios para fazer requisições HTTP
import BeeLogo from "../assets/icons/bee-logo.webp";
import "../App.css";

const Login = () => {
  // Estado para armazenar os dados do formulário de login
  const [formData, setFormData] = useState({ username: "", password: "" });
  
  // Hook para navegação após o login
  const navigate = useNavigate();

  // Função que lida com a mudança nos campos de entrada
  const handleChange = (e) => {
    // Atualiza o estado 'formData' com o valor do campo modificado
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Função que lida com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede o comportamento padrão de envio do formulário
    try {
      // Faz a requisição de login para a API usando os dados do formulário
      const response = await axios.post("http://localhost:8000/api/users/login", formData);
      
      // Se o login for bem-sucedido, armazena o token no localStorage e redireciona para a página principal
      localStorage.setItem("token", response.data.token);
      navigate("/"); // Redireciona para a página principal
    } catch (error) {
      console.error("Erro ao fazer login", error);
      // Exibe um alerta se ocorrer algum erro
      alert("Erro ao fazer login: " + error.response?.data?.detail || error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <img
          src={BeeLogo}
          alt="Logo"
          className="auth-logo" 
        />
        <h2>PLANEJOU, REALIZOU!</h2>
        <p className="auth-subtitle">Sua vida organizada, simplificada e inteligente</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <input 
            type="text" 
            name="username" 
            placeholder="E-mail ou Usuário" 
            onChange={handleChange} 
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Senha do Usuário" 
            onChange={handleChange} 
            required 
          />
          <button type="submit">Entrar</button>
        </form>
        <p className="auth-question">Ainda não tem conta? <Link to="/register">Cadastre-se</Link></p>
      </div>
    </div>
  );
};

export default Login;
