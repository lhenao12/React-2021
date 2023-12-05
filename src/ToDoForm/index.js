import React from 'react'
import { TodoContext } from '../TodoContext'
import '../styles/TodoForm.css'


function ToDoForm(params) {
        // Creamos el useState que va a escuchar el componete textarea y atrapar el texto que se escribe
        const [newToDoValue, setNewToDoValue] = React.useState('')


        const {
            addTodo,
            setOpenModal,
        } = React.useContext(TodoContext);


        
        const onCancel = () => {
            setOpenModal(false)

        }
        const onSubmit = (event) => {
          //El metodo prevent Default nos ayuda a enviar el formulario sin recargar la pagina
           event.preventDefault()
           addTodo(newToDoValue)
           setOpenModal(false)
        }

        const onChange = (event) => {  
            //atrapamos el texto con evento target
            setNewToDoValue(event.target.value);
        }
        
    return(
        <form className="form" onSubmit={onSubmit}>

            <label >Escribe tu nuevo ToDo</label>
            <textarea 
            className="textarea"
            value={newToDoValue}
            onChange={onChange}
            cols="30" 
            rows="10" 
            placeholder="Ingresa tu nuevo ToDo...">
                
            </textarea>

            <div className="TodoForm-buttonContainer">
            <button  
            type="button" 
            onClick={onCancel}
            className="TodoForm-button todoForm-button-cancel">

                Cancelar
            </button>

            <button 
            type="submit"
            className="TodoForm-button todoForm-button-add">
                Añadir
            </button>

            </div>


        </form>
    )
    
}


export { ToDoForm }