import React from 'react';
import '../styles/TodoIcon.css';
import { ReactComponent as CheckTodo } from '../img/checktodo.svg'
import { ReactComponent as DeleteTodo } from '../img/deletetodo.svg'


    // podemos crear un objeto con todos los iconos
    const iconTypes = {
        "check" : color =>  (
            <CheckTodo className="Icon-svg Icon-svg--check" fill={color}/>

        ),

        "delete" : color => (
            <DeleteTodo className="Icon-svg Icon-svg--delete" fill={color}/>
        ),

    };

function TodoIcon({type, color= 'gray', onClick}) {

    return(
     <span
    className={`Icon-container Icon-container--${type}`}
    onClick={onClick}
    >
     {iconTypes[type](color)}
    </span>
    )

}

export {TodoIcon}