import React, { useState } from "react";
import Main from "./Main";
import Header from "./Header";

export default function App() {
  const [cards, setCards] = useState([
    {
      title: "make it dynamic",
      list: "todo",
      id: 1,
      description: "some description",
    },
    {
      title: "make it dynamic",
      list: "todo",
      id: 2,
      description: "some description",
    },
    {
      title: "make it static",
      list: "todo",
      id: 3,
      description: "some description",
    },
  ]);

  function onFormSubmit(data) {
    setCards(cards.concat(data));
  }
  function onCardDelete(id) {
    const nextCards = cards.filter((cards) => cards.id !== id);
    setCards(nextCards);
  }

  return (
    <div className="App">
      <Header />

      <Main
        onCardDelete={onCardDelete}
        onFormSubmit={onFormSubmit}
        cards={cards}
      />
    </div>
  );
}
