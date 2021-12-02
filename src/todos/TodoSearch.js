import React from "react";
import "../styles/TodoSearch.css"
import { TodoContext } from "../TodoContext";

function TodoSearch() {
//hacemos el llamado del Hoock de useContext y le enviamos el contexto, para obtener los estados estan globales
  const{searchValue, setSearchValue}=React.useContext(TodoContext)


    /*  manejo de estado con Hooks este codigo se vuelve obsoleto aqui
    const [searchValue, setSearchValue] = React.useState('');*/

    //Manejo de evento
    const onSearchValueChange = (event) =>{
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }


  return( 
  <input key={1} className="TodoSearch" 
  placeholder="Digite aqui..." 
  value={searchValue}
  onChange={onSearchValueChange}
  />
)
}

export { TodoSearch };
