import React from "react";

function Container({ children }) {
  return (
    <div className="container">
      {
        <div className="row h-100">
          <div className="col-4 border border-5">{children}</div>
          <div className="col-8 border border-5">
            {<img src="/images/voter-sq.png" alt="voter"></img>}
          </div>
        </div>
      }
    </div>
  );
}

export default Container;
