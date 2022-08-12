import React from "react";
import { useState } from "react";
import Button from "../Button";
import "./sidebar.css";

const SideBar = ({ setOnClick }) => {
  const [studentName, setStudentName] = useState("");
  const [studentGrade, setStudentGrade] = useState(0);

  const updateForm = () => {
    if (studentName !== "") {
      setOnClick({
        name: studentName,
        grade: studentGrade,
      });
    } else if (studentName === "") {
      alert("Adicione um nome");
    }
  };

  return (
    <div className="sidebarContainer">
      <div className="titleSidebar">
        Adicione os alunos da turma e suas notas finais
      </div>
      <div className="formContent">
        <div className="formSidebar">
          <label htmlFor="student">Nome do aluno</label>
          <input
            type="text"
            id="student"
            name="student"
            placeholder="Digite o nome do aluno"
            onChange={(e) => setStudentName(e.target.value)}
            value={studentName}
          />
          <label htmlFor="grade">Nota do aluno</label>
          <input
            type="number"
            min={0}
            id="grade"
            pattern="[0-9]+([\.,][0-9]+)?"
            name="grade"
            placeholder="Selecione a nota do aluno"
            onChange={(e) => setStudentGrade(e.target.value)}
            value={studentGrade}
          />
        </div>
        <Button text="Cadastrar" onClick={() => updateForm()} />
      </div>
    </div>
  );
};

export default SideBar;
