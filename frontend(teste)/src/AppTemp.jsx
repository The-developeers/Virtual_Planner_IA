import { Routes, Route, useLocation } from "react-router-dom"; // Importa o react-router-dom
import Header from "./components/Header"; // Importa o Header
import Sidebar from "./components/Sidebar"; // Importa a Sidebar
import Dashboard from "./components/Dashboard"; // Importa o Dashboard
import Tasks from "./components/Tasks"; // Importa a página de Tarefas
import Notes from "./components/Notes"; // Importa a página de Notas
import Reports from "./components/Reports"; // Importa a página de Relatórios
import Login from "./components/Login"; // Importa a página de Login
import Register from "./components/Register"; // Importa a página de Registro
import PrivateRoute from "./components/PrivateRoute"; // Importa a proteção de rotas privadas
import "./App.css"; // Importa os estilos

function App() {
  const location = useLocation(); // Obtém a rota atual

  // Verifica se está nas páginas de login ou registro
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className={`app-container flex ${isAuthPage ? "auth-page" : ""}`}>
      {!isAuthPage && <Sidebar />}
      <div className="main-content">
        {!isAuthPage && <Header />}
        <div className="content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/tasks" element={<PrivateRoute element={<Tasks />} />} />
            <Route path="/notes" element={<PrivateRoute element={<Notes />} />} />
            <Route path="/reports" element={<PrivateRoute element={<Reports />} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
