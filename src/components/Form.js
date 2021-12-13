import React, { useState } from "react";
import Button from "./Button";

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [description, setColor] = useState("");
  function submit(evt) {
    evt.preventDefault();
    // console.log("work");
    props.onFormSubmit({
      title: title,
      list: "todo",
      id: Math.random(),
      description: description,
    });
    setTitle("");
  }
  function titleChanged(e) {
    setTitle(e.target.value);
  }
  function descriptionChanged(e) {
    setColor(e.target.value);
  }

  return (
    <form onSubmit={submit}>
      <h2>Add a task</h2>
      <div className="inputs-button">
        <label>
          Title
          <input
            type="text"
            onChange={titleChanged}
            name="title"
            value={title}
          ></input>
        </label>
        <label>
          Description
          <input
            type="text"
            onChange={descriptionChanged}
            name="description"
            value={description}
          ></input>
        </label>
        <Button />
      </div>
    </form>
  );
}
