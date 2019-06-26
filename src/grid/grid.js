import React from "react";

import "./grid.css";

const Grid = () => {
  return (
    <div className="container-fluid centered-grid">
      <div className="row">
        <div className="col-md-8 grid">
          <div className="filter-section">
            <button className="btn btn-info">Filter</button>
          </div>
          <div className="row">
            <div className="col-md-4 grid-box">
              <p>Box 1</p>
            </div>
            <div className="col-md-4 grid-box">
              <p>Box 2</p>
            </div>
            <div className="col-md-4 grid-box">
              <p>Box 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;