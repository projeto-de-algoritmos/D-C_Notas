import "./main.css";
import React from "react";
import { Button, Card, SideBar } from "../../Components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import findMedian from "../../util/mediana";

const Main = () => {
  const navigate = useNavigate();
  const [formSideBar, setFormSideBar] = useState([]);
  const [card, setCard] = useState([]);

  const handeldel = (index) => {
    card.splice(index, 1);
    setCard([...card]);
  };

  useEffect(() => {
    if (formSideBar.length !== 0) {
      return setCard((card) => [...card, formSideBar]);
    }
  }, [formSideBar]);

  const getMedian = () => {
    card.map((item) => item.grade = Number(item.grade));
    const result = findMedian(card)
    navigate("/resultado", {
      state: result
    })
  }
  return (
    <>
      <SideBar setOnClick={setFormSideBar} />
      <div className="mainContainer">
        <div className="mainCard">
          {card &&
            card.map((item, index) => {
              return (
                <div key={index}>
                  <Card
                    trash
                    name={item.name}
                    grade={item.grade}
                    onClick={() => handeldel(index)}
                  />
                </div>
              );
            })}
        </div>
        {card.length === 0 ? (
          <div className="textMain">Nenhum aluno cadastrado</div>
        ) : null}
        <div className="mainButton">
          <Button
            size="big"
            text="Ver média da turma"
            onClick={() => getMedian()}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
