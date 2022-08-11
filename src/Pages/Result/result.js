import "./result.css";
import { Button, Card } from "../../Components";
import { useNavigate, useLocation } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="resultContainer">
        <div className="textResult">
          {location.state && location.state.arrayMedian.length > 0
            ? `A mediana da turma é de 6.5 pontos`
            : "Nenhuma nota foi adicionada"}
          {/* {console.log(
            location.state.arrayMedian.map((item) => {
              return { item }; // aqui pega os valores do array que foram passados
            })
          )} */}
        </div>
        <div className="resultCard">
          {location.state &&
            location.state.array.map((item, index) => {
              return (
                <div key={index}>
                  <Card name={item.name} grade={item.grade} />
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
