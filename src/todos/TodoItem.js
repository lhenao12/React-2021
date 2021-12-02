import React from "react";
import "../styles/TodoItem.css"
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";

function TodoItem(props) {
    // const onComplete = () => {
    //     alert('Ya completaste el ToDo '+props.text);
    // }
   /*  const onDelete = () => {
        alert('Estas Eliminando el ToDO '+props.text);
        <span onClick={props.onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}> </span>
         <span className="Icon Icon-delete" onClick={props.onDelete}>
         X
        </span>
    } */

  return (
    <li className="TodoItem">
      
       <CompleteIcon 
         completed = {props.completed}
         onComplete = {props.onComplete}
       />
     
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}</p>
       <DeleteIcon
          onDelete = {props.onDelete}
       />
    </li>
  );
}

export {TodoItem}