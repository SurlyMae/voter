import React from "react";
import SummaryRow from "../SummaryRow";

function Container({ children }) {
  return (
    <div className="container">
      {
        <div className="row h-100">
          <div className="col-4 border border-5">{children}</div>
          <div className="col-8 border border-5">
            <SummaryRow props="summary props"></SummaryRow>
          </div>
        </div>
      }
    </div>
  );
}

export default Container;
