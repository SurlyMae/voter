import React from "react";

function Quickview(props) {
  console.log(`inside quickview props are ${JSON.stringify(props)}`);

  return (
    <div className="col-8">
      <ul>
        <li>{props.member.member.name}</li>
        <li>{props.member.member.party}</li>
        <li></li>
      </ul>
    </div>
  );
}

export default Quickview;
