import React, { useState } from "react";
import "../App.css";

const Notes = () => {
  // Estado para armazenar as notas
  const [notes, setNotes] = useState([]);
  // Estado para armazenar o valor da nova nota
  const [newNote, setNewNote] = useState("");

  // Função para adicionar uma nova nota à lista de notas
  const handleAddNote = () => {
    // Verifica se a nova nota não está vazia ou apenas com espaços em branco
    if (newNote.trim()) {
      // Adiciona a nova nota à lista de notas e limpa o campo de entrada
      setNotes([...notes, newNote]);
      setNewNote("");
    }
  };

  return (
    <div className="notes">
      <h1>Notas</h1>
      {/* Área de texto para digitar a nova nota */}
      <textarea
        value={newNote} // O valor da área de texto é controlado pelo estado newNote
        onChange={(e) => setNewNote(e.target.value)} // Atualiza o estado newNote sempre que o valor muda
        placeholder="Adicione uma nova nota..."
      />
      {/* Botão para adicionar a nota */}
      <button onClick={handleAddNote}>Adicionar Nota</button>
      
      {/* Lista de notas */}
      <ul>
        {notes.map((note, index) => (
          // Renderiza cada nota da lista dentro de um item <li>
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
