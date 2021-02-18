import React from "react";

// function Navpane({ members }) {
//   let stateArray = [];
//   members.map((member) => {
//     stateArray.push({ id: member.id, state: member.state });
//   });

//   // let states = [];
//   // states.push(a.state);
//   // if (!states.includes(b.state)) {
//   //   states.push(b.state);
//   // }

//   stateArray.sort((a, b) => {
//     if (a.state < b.state) {
//       return -1;
//     }
//     if (a.state > b.state) {
//       return 1;
//     }
//     return 0;
//   });

//   stateArray = [...new Set(stateArray)];
//   console.log(stateArray);

//   return (
//     <nav className="nav flex-column">
//       {stateArray.map((member) => {
//         return <StateLink key={member.id} state={member.state}></StateLink>;
//       })}
//     </nav>
//   );
// }

function Quickview() {
  return (
    <div className="col-8">
      <ul>
        <li>Sen/Rep</li>
        <li>Party</li>
        <li>District/State</li>
      </ul>
    </div>
  );
}

export default Quickview;
