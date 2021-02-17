import React from "react";

function StateLink({ state }) {
  return (
    <a className="nav-link" href="#">
      {state}
    </a>
  );
}

export default StateLink;
