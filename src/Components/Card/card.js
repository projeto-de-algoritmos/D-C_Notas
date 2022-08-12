import "./card.css";
import React from "react";
import image from "../../Assets/trash.png";

const Card = ({ name, grade, trash, onClick, median }) => {
  return (
    <div className={`cardContainer ${median ? median > grade ? 'BelowMedian' : 'AboveMedian' : ''}`}>
      {trash && (
        <img className="trashImage" alt="trash" src={image} onClick={onClick} />
      )}
      <div className="titleCard">{name}</div>
      <div className="textCard">
        Média - {grade === 1 ? grade + " ponto" : grade + " pontos"}
      </div>
    </div>
  );
};

export default Card;
