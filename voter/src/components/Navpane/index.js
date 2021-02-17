import React from "react";
import StateLink from "../StateLink";

function Navpane({ members }) {
  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
  console.log(`props are ${JSON.stringify(members, getCircularReplacer())}`);
  return (
    <nav className="nav flex-column">
      {members.map((member) => {
        return <StateLink key={member.id} state={member.state}></StateLink>;
      })}
    </nav>
  );
}

export default Navpane;
