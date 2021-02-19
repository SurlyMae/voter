import React, { useState } from "react";
import Image from "../Image";
import Quickview from "../Quickview";

function SummaryRow({ props }) {
  const [summaryProps, getSummaryProps] = useState(props);

  console.log(props);
  return (
    <div className="row border border-5 border-dark">
      <Image />
      <Quickview props={summaryProps}></Quickview>
    </div>
  );
}

export default SummaryRow;
