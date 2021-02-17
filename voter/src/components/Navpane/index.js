import React from "react";
import StateLink from "../StateLink";

function Navpane({ members }) {
  let stateArray = [];
  members.map((member) => {
    stateArray.push({ id: member.id, state: member.state });
  });

//   let states = [];
//   states.push(a.state);
//   if (!states.includes(b.state)) {
//     states.push(b.state);
//   }
//   console.log(`${states}`);

//   if (a.state < b.state) {
//     return -1;
//   }
//   if (a.state > b.state) {
//     return 1;
//   }
//   return 0;
// });
  let sortedArray = stateArray.sort((a, b) => {
   
  console.log(`${JSON.stringify(sortedArray)}`);
  return (
    <nav className="nav flex-column">
      {states.map((member) => {
        return <StateLink key={member.id} state={member.state}></StateLink>;
      })}
    </nav>
  );
}

export default Navpane;
