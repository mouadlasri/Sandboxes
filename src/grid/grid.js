import React from "react";

import "./grid.css";

const Grid = () => {
  return (
    <div className="container-fluid centered-grid">
      <div className="row">
        <div className="col-md-8 grid">
          <div className="filter-section">
            <button className="btn btn-info btn-filter ">Filter</button>
            <button className="btn btn-warning btn-filter btn-disabled disabled">
              Data Analysis
            </button>
            <button className="btn btn-danger btn-filter btn-disabled disabled">
              Web Development
            </button>
          </div>

          <div className="row grid-section">
            <div className="col-md-4 grid-box data-analysis">
              <div className="grid-box-img">
                <img
                  src="https://cdn-images-1.medium.com/max/1200/1*eRUPgszpDHzEUpvXhFMeUg.png"
                  alt="datacamp img"
                />
              </div>
              <p>Box 1</p>
            </div>
            <div className="col-md-4 grid-box web-dev">
              <div className="grid-box-img">
                <img
                  src="https://cdn-images-1.medium.com/max/1200/1*eRUPgszpDHzEUpvXhFMeUg.png"
                  alt="datacamp img"
                />
              </div>
              <p>Box 2</p>
            </div>
            <div className="col-md-4 grid-box web-dev">
              <div className="grid-box-img">
                <img
                  src="https://cdn-images-1.medium.com/max/1200/1*eRUPgszpDHzEUpvXhFMeUg.png"
                  alt="datacamp img"
                />
              </div>
              <p>Box 3</p>
            </div>
          </div>

          <div className="row grid-section">
            <div className="col-md-4 grid-box data-analysis">
              <div className="grid-box-img">
                <img
                  src="https://cdn-images-1.medium.com/max/1200/1*eRUPgszpDHzEUpvXhFMeUg.png"
                  alt="datacamp img"
                />
              </div>
              <p>Box 1</p>
            </div>
            <div className="col-md-4 grid-box data-analysis">
              <div className="grid-box-img">
                <img
                  src="https://cdn-images-1.medium.com/max/1200/1*eRUPgszpDHzEUpvXhFMeUg.png"
                  alt="datacamp img"
                />
              </div>
              <p>Box 2</p>
            </div>
            <div className="col-md-4 grid-box data-analysis">
              <div className="grid-box-img">
                <img
                  src="https://cdn-images-1.medium.com/max/1200/1*eRUPgszpDHzEUpvXhFMeUg.png"
                  alt="datacamp img"
                />
              </div>
              <p>Box 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
