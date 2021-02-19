import React from "react";
import StateLink from "../StateLink";

function Navpane(props) {
  console.log(`inside navpane props are ${JSON.stringify(props)}`);
  return (
    <nav className="nav flex-column">
      {props.states.map((estado, i) => {
        return (
          <StateLink
            key={i}
            state={estado}
            onClick={() => props.onClick(estado)}
          />
        );
      })}
    </nav>
  );
}

export default Navpane;
