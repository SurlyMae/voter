import React from "react";
import Image from "../Image";
import Quickview from "../Quickview";

function SummaryRow({ children }) {
  return (
    <div className="row border border-5 border-dark">
      <Image />
      <Quickview />
    </div>
  );
}

export default SummaryRow;
