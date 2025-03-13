import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

// Array contendo os links e suas rotas
const menuItems = [
  { label: "Tarefas", path: "/tasks" },
  { label: "Notas", path: "/notes" },
  { label: "Relatórios", path: "/reports" },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
