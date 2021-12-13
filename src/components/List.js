import React from "react";
import Card from "./Card";
import Form from "./Form";

export default function List(props) {
  const cards = props.cards.map((card) => (
    <Card onCardDelete={props.onCardDelete} key={card.id} {...card} />
  ));
  return (
    <section>
      {/* <h2>Tasks for today</h2> */}
      <div className="List">
        <div className="tasks">
          <h2>Your tasks</h2>
          <ul>{cards}</ul>
        </div>

        <Form onFormSubmit={props.onFormSubmit} />
      </div>
    </section>
  );
}
