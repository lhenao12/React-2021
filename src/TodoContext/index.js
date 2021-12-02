import React from "react";
import { useLocalStorage } from "./useLocalStorage";

/* Esta es la herramienta de React que nos permitira crear contextos  que son las herramientas 
que nos van a dar los Providers y Consumers para compartir el estado en todos los componentes de
nuestra aplicación   */

// esta constante es un objeto que saca sus propiedades {Provider, Consumer}
const TodoContext = React.createContext();

function TodoProvider(props) {
    
  //consumimos nuestro custom hook recibiendo un array de objetos
const{item: todos, 
    saveItem: saveTodos, 
    loading,
    error,  } = useLocalStorage('TODOS_V1',[])

    
    //const[Nombres, saveNombres] = useLocalStorage('NOMBRES_V1',['LUIS','ENRIQUE'])
    const [searchValue, setSearchValue] = React.useState('');
    const[openModal, setOpenModal] = React.useState(false);

const completedTodos = todos.filter(todo => !!todo.complete).length;
const totalTodos = todos.length;

let searchedTodos = [];

if(searchValue.length <= 1){
searchedTodos = todos;

}else{
 searchedTodos = todos.filter(todo => {

//transformamos los text de los todos lowercase  
const todoText = todo.text.toLowerCase();
//transformamos el string que escribe el usuario el el TodoSearch
const searchText = searchValue.toLowerCase();
return todoText.includes(searchText);
});
}



/*========================================================================================================== */
//metodos para añadir un todo
const  addTodo = (text) => {
  //operador "spread operator" nos ayuda abreviar los elementos del array
  const newTodos = [...todos];
  // con esta funcion añadimos el nuevo ToDo desde nuestro Modal
  newTodos.push({
    completed: false,
     text,
  })
  saveTodos(newTodos);
       //una forma de hacerlo
  // todos[todoIndex] = {
  //    text: todos[todoIndex].text,
  //    completed: true,

};


/*========================================================================================================== */
//metodos para Eliminar y completar un todo
const  completeTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  //operador "spread operator" nos ayuda abreviar los elementos del array
  const newTodos = [...todos];
  newTodos[todoIndex].complete = true;
  saveTodos(newTodos);
       //una forma de hacerlo
  // todos[todoIndex] = {
  //    text: todos[todoIndex].text,
  //    completed: true,

};

/*========================================================================================================== */


const  deleteTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  //operador "spread operator" nos ayuda abreviar los elementos del array
  const newTodos = [...todos];
  //la funcion splice quita el ToDo index  y la cantidad de Todos qu vamos a quitar
  newTodos.splice(todoIndex, 1);
  saveTodos(newTodos);
};

/*========================================================================================================== */

//    console.log('Render (useeffect primer uso)');   

// //Este useEffect se ejecuta segun condiciones
// React.useEffect(() =>{

//    console.log('useeffect hook');
//    console.log('valor de totalTodos: '+totalTodos)
// },[totalTodos])
//console.log('Render(useeffect despues primer uso)');

/*========================================================================================================== */

  return (
    /* 1. este componente lo vamos a utilizar para envolver toda  nuestra aplicacion del componete App.js
    lo importanyte es que este TodoContex.Provider tenga a cualquier componente dentro de los componentes 
    que sea donde llamemos a nuestro consumidor del contexto
    2. con el elemento {props.childre} de esta forma nuestro componnete "TodoProvider" lo vamos a utilizar aca para llamar el componete 
        consumidor.
    3. Vamos a decirle a provider cual es el estado que queremos compartir en todos los componentes que esta conte-
       niendo para eso vamos a utilizar una propiedad especial que se llama "value" que se encargara de compartir todas
       nuestras propiedades de nuestro contexto
    4. "value" es un objeto donde vamos a utilizar dobles llaves que es un objeto js y no jsx*/
    
    <TodoContext.Provider value={{
        
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    addTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    }}>

    {props.children}

    </TodoContext.Provider>
  );
}

/*este componente lo vamos a utilizar en todas partes siempre que necesitemos información de ese estado
compartido en cualquiera de nuestros componentes
<TodoContext.Consumer></TodoContext.Consumer>;*/



export {TodoContext, TodoProvider}
