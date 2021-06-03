// Importing Helpers
import React from "react";
import "./CardList.Styles.css";

// Importing Components
import Card from "../Card/Card.Component";

// Functional Component
const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

// Default Export
export default CardList;
