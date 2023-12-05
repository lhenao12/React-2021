import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    //funcion setTimeOut para simular la carga de los ToDos desde una API
    setTimeout(() => {
      try {
        //funcion Local Storage ToDos la envolvemos en un hook useEffect
        const LocalStorageItem = localStorage.getItem(itemName);
        let parsedItems;

        if (!LocalStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = [];
        } else {
          parsedItems = JSON.parse(LocalStorageItem);
        }

        setItem(parsedItems);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 2000);
    //Se usa el segundo parametro para darle condicion
  }, []);

  //funcion para salvar el arreglo de los TODOS
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  /* anteriormente se enviaba un array de retorno, en este caso si se retorna mas de 2 elementos
    eviamos un array de objetos en este caso como convencion de React*/
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
