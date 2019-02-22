import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
  let dialogData = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Sergey" },
    { id: 3, name: "Andrey" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Valera" }
  ];

  let messagesData = [
    { id: 1, message: "Укутна" },
    { id: 1, message: "Дратути!" },
    { id: 1, message: "Я пожилой енотик" },
    { id: 1, message: "Волд оф тутлс" }
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem name="Dima" id="1" />
        <DialogItem name="Sergey" id="2" />
        <DialogItem name="Andrey" id="3" />
        <DialogItem name="Sveta" id="4" />
      </div>
      <div className={s.messages}>
        <Message message="Укутна!" />
        <Message message="Дратути!" />
        <Message message="Дратути!" />
      </div>
    </div>
  );
};

export default Dialogs;
