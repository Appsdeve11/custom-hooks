import React from "react";
import uuid from "uuid";
import PlayingCard from "./PlayingCard";
import useAxios from "./useAxios";
import "./PlayingCardList.css";

function CardTable() {
  const [cards, addCard] = useAxios("your-api-url");

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((cardData) => (
          <PlayingCard key={uuid()} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;