import React from "react";
//import ContentLoader from "react-content-loader";
import "bootstrap";
import "../styles/TodosLoading.css"

function TodosLoading(props) {
  return (
    <div className="container">
      <div className="background">
        <ul className="listado">
          <li className="item">Loading...</li>
          <li className="item">Loading...</li>
          <li className="item">Loading...</li>
          <li className="item">Loading...</li>
          <li className="item">Loading...</li>
        </ul>
      </div>
    </div>
  );
}

export { TodosLoading };
