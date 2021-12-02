import React from 'react'
import { TodoContext } from '../TodoContext';
import { TodoCounter } from "../todos/TodoCounter";
import { TodoSearch } from "../todos/TodoSearch";
import { TodoList } from "../todos/TodoList";
import { TodoItem } from "../todos/TodoItem";
import { CreateTodoButton } from "../todos/CreateTodoButton";
import { Modal } from '../Modal'
import { ToDoForm } from '../ToDoForm';
import { TodosError } from '../todos/TodosError'
import { TodosLoading } from '../todos/TodosLoading'
import { EmptyTodos } from '../todos/EmptyTodos'

/* ya estas props no son neceserias gracias al Provider de nuestro ToDoContex, porque ya son pesutas 
desde que este envuelto en nuestro provider, lo mismo con aquellos componentes hijos o nietos */
function AppUI (
    /*{loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,}*/
){ 

   /*Esta es una forma de utilizar Consumer co "<TodoContext.Consumer>" la otra forma, definitiva y recomendables
 es con un React Hook que es useContext de esta manera:  
 1.llamamo eel hoock 
  2. pasamos como parametro el contexto ToDoContex
 3. pasamos los estados del contexto  como un objeto */
 const {
  error,
  loading,
  searchedTodos,
  completeTodo,
  deleteTodo,
  openModal,
  setOpenModal,
 } = React.useContext(TodoContext)

return(
  //con la etiqueta "ReactFragment" nos evitamos colocar contenedores que sobren o que no falten
  <React.Fragment>
  <TodoCounter 
/*    total={totalTodos}
   completed={completedTodos} */
  />
  <TodoSearch 
   /* searchValue={searchValue}
   setSearchValue={setSearchValue} */
  />

       <TodoList>
       {error && <TodosError error={error} />  }
       {loading && <TodosLoading />}
       {(!loading && !searchedTodos.length) && <EmptyTodos />}
   
         
       {searchedTodos.map(todo => (
         <TodoItem 
          /* cuando llamamos una lista debemos colocar un llave "key" que identifique cada elemento, 
        con elemento clave y sepa cual llamar */
         key= {todo.text} 
         text={todo.text}
         completed={todo.complete}
         onComplete ={()   => completeTodo(todo.text)}
         onDelete =  {()   => deleteTodo(todo.text)}
         />
       ))}
     </TodoList>
  
  {openModal &&(
    <Modal setOpenModal={setOpenModal}>
     <ToDoForm />
  </Modal>

  )}
 
  <CreateTodoButton 

    setOpenModal = {setOpenModal}
  />
</React.Fragment>

);

}

export {AppUI};