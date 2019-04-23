import React from "react";

export const Header = (props) => (
  <div className="row">
    <div className="col-md-8">
      <h5>To do or not to do</h5>
    </div>
    <div className="col-md-4">
       {props.children}
    </div>
  </div>
);
