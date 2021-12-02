import React from "react";
import '../styles/EmptyTodos.css'



function EmptyTodos() {

    return(
        <div className="contenedor_first" align="center">
  
  <p>
   Empieza con tu primer ToDo  animate!!
  </p>
  
  <div className="imgTodo">
   <img src="https://i.imgur.com/TZMQFYz.png" alt="haz tu primer ToDo" />
  </div>
  
  <p>
    Cambia tu día a día guardando tus tareas...
  </p>
    
  
</div>
    )
}


export {EmptyTodos}