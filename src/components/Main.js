import React from "react";
import List from "./List";

export default function Main({ cards, onFormSubmit, onCardDelete }) {
  return (
    <main>
      <List
        onCardDelete={onCardDelete}
        onFormSubmit={onFormSubmit}
        cards={cards.filter((c) => c.list === "todo")}
        header="todo"
      />
    </main>
  );
}
