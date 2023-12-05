import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

//import './App.css';

// const defaultTodos = [
//   { text: 'cortar papel', complete: false },
//   { text: 'Tomar el curso de react', complete: false },
//   { text: 'Sentarme a tomar cafe', complete: false },
//   { text: 'Leer un libro', complete: false },
// ];

//Custom react hook

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
