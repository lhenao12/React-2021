import React from "react";
import "../styles/CreateTodoButton.css";

function CreateTodoButton(props) {

    //manejo de evento
    const onClickButton = () =>{

    /*  Todas la funciones actualizadoras de estado "setEstado" podemos hacer 2 cosas:
    1. enviar el estado directo "true or false"
    2. Tambien nos permite enviar una funcion de actulizacion del estado anterior lo cual nos toca enviar un valor 
    para actualizar el estado*/
    props.setOpenModal(prevState => !prevState);

    }
  return <button className="CreateTodoButton"  
  onClick={onClickButton}
  >+</button>;
 
}

export { CreateTodoButton };
