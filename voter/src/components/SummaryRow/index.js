import React, { useState } from "react";
import Image from "../Image";
import Quickview from "../Quickview";

function SummaryRow(props) {
  console.log(`inside summary props, ${JSON.stringify(props)}`);
  return (
    <div className="row border border-5 border-dark">
      {/* <Image /> */}
      <Quickview member={props} />
    </div>
  );
}

export default SummaryRow;
