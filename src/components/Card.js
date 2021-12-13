import React from "react";
// import Form from "./Form";
// import Button from "./Button";

export default function Card(props) {
  console.log(props);
  function onDelete() {
    props.onCardDelete(props.id);
  }
  return (
    <article className="singleCard">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="buttonDiv">
        <button onClick={onDelete}>Done</button>
      </div>
    </article>
  );
}
