import React from "react";
import "../styles/TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
    
  //hacemos el llamado del Hoock de useContext y le enviamos el contexto, para obtener los estados estan globales
  const {totalTodos, completedTodos}= React.useContext(TodoContext)
  
  return (

  <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} ToDos</h2>

  );
}

/* aqui se exporta el TodoCounter con el porblema que al import
se le puede poner cualquier nombre  */
//export default TodoCounter

/* con este exportacion obligamos al desarrollador a escribir el
nombre exacto del archivo */

export { TodoCounter };
