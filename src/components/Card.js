import React from "react";

function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="element">
      <img className="element__img" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="element__bottom-block">
        <h2 className="element__title">{card.name}</h2>
        <div>
          <button type="button" className="element__likes" aria-label="Поставить лайк"></button>
          <span className="element__likes-count">{card.likes.length}</span>
        </div>
        <button type="button" className="element__delete" aria-label="Удалить карточку"></button>
      </div>
    </div>
  );
};

export default Card;
