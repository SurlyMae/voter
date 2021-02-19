import React from "react";

function StateLink(props) {
  // console.log(`inside state props are ${JSON.stringify(props)}`);
  return (
    <>
      <a
        className="nav-link"
        href="#"
        onClick={() => props.onClick(props.state)}
      >
        {props.state}
      </a>
    </>
  );
}

export default StateLink;
