import React from "react";
import Experience from "../experience";

import "./testing.css";

const Testing = () => {
  return (
    <div className="container-fluid centered-content">
      <div className="row">
        <div className="col-md-8 testing">
          <p className="text-test">Random text</p>
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default Testing;
