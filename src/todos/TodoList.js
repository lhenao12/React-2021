import React from "react";

function TodoList(props) {
  return (
    <section>
      <ul className="ul">
          {props.children}
      </ul>
    </section>
  );
}

export { TodoList };
