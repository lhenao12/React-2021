import React from 'react'
import "../styles/TodoError.css"


function TodosError({error}) {

    return(

        <div className="contenedor" align="center">

        <p>
        !ha ocurrido un error... no te desesperes estamos trabajando para areglarlo :();
        </p>
         <img src="https://i.imgur.com/uBTCsNR.jpg" alt="imagen de error" />
          
        <p>
        lamentamos los inconvenietes.. en un momento estaremos de vuelta
        </p>
        
        
          
        </div>
    )
    
}


export {TodosError};