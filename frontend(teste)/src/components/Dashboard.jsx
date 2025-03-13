import React from "react";
import "../App.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Bem-vindo ao seu assistente inteligente!</p>
      <p>Aqui você verá um resumo das suas tarefas, notas e relatórios.</p>

      <div className="dashboard-cards">
        <div className="card">
          <h2>📋 Tarefas</h2>
          <p>Você tem <strong>5 tarefas pendentes</strong>.</p>
        </div>
        <div className="card">
          <h2>📝 Notas</h2>
          <p>Você salvou <strong>12 anotações</strong> até agora.</p>
        </div>
        <div className="card">
          <h2>📊 Relatórios</h2>
          <p>Seu último relatório foi atualizado há <strong>2 dias</strong>.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
