import React from "react";

function StateLink({ state }) {
  const showStateSens = (e, state) => {
    console.log(state);
  };
  return (
    <a
      className="nav-link"
      href="#"
      onClick={(e) => {
        showStateSens(e, state);
      }}
    >
      {state}
    </a>
  );
}

export default StateLink;
