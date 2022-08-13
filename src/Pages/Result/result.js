import "./result.css";
import React from "react";
import { Button, Card } from "../../Components";
import { useNavigate, useLocation } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="resultContainer">
        <div className="textResult">
          {location.state && location.state.median > 0
            ? `A mediana da turma é de ${location.state.median} pontos`
            : "Nenhuma nota foi adicionada"}
        </div>
        <div className="resultCard">
          {location.state &&
            location.state.gradeAverage.map((item, index) => {
              return (
                <div key={index}>
                  <Card
                    name={item.name}
                    grade={item.grade}
                    median={location.state.median}
                  />
                </div>
              );
            })}
        </div>
        <div className="resultButton">
          <Button
            size="big"
            text="Novamente"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Result;
