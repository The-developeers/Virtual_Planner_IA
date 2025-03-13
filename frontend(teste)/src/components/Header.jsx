import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importa Link e useNavigate
import "../App.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    setIsAuthenticated(localStorage.getItem("token") !== null);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <header className={`header ${scrolled ? "blur" : ""}`}>
      <h1 className="logo">
        <Link to="/">Dashboard</Link>
      </h1>
      <input type="text" placeholder="Buscar..." className="search-bar" />
      <div className="profile">
        {isAuthenticated ? (
          <>
            <img
              src="https://thumbs.dreamstime.com/b/vetor-de-%C3%ADcone-perfil-do-avatar-padr%C3%A3o-foto-usu%C3%A1rio-m%C3%ADdia-social-183042379.jpg"
              alt="Perfil"
              className="profile-pic"
            />
            <span className="profile-name">Usuário</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <div className="auth-links">
            <Link to="/login">Login</Link> | <Link to="/register">Registrar</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
