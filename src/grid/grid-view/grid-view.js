import React from 'react';

import './grid-view.css';

const GridView = () => {
  return (
      
    <div className="row grid-section">
    <div className="col-md-4 grid-box">
      <div className="grid-box-img">
        <img
          src="https://cdn-images-1.medium.com/max/1200/1*eRUPgszpDHzEUpvXhFMeUg.png"
          alt="datacamp img"
        />
      </div>
      <p>Box 1</p>
    </div>
    <div className="col-md-4 grid-box">
      <div className="grid-box-img">
        <img
          src="https://cdn-images-1.medium.com/max/1200/1*eRUPgszpDHzEUpvXhFMeUg.png"
          alt="datacamp img"
        />
      </div>
      <p>Box 2</p>
    </div>
    <div className="col-md-4 grid-box">
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
    <div className="col-md-4 grid-box">
      <div className="grid-box-img">
        <img
          src="https://cdn-images-1.medium.com/max/1200/1*eRUPgszpDHzEUpvXhFMeUg.png"
          alt="datacamp img"
        />
      </div>
      <p>Box 1</p>
    </div>
    <div className="col-md-4 grid-box">
      <div className="grid-box-img">
        <img
          src="https://cdn-images-1.medium.com/max/1200/1*eRUPgszpDHzEUpvXhFMeUg.png"
          alt="datacamp img"
        />
      </div>
      <p>Box 2</p>
    </div>
    <div className="col-md-4 grid-box">
      <div className="grid-box-img">
        <img
          src="https://cdn-images-1.medium.com/max/1200/1*eRUPgszpDHzEUpvXhFMeUg.png"
          alt="datacamp img"
        />
      </div>
      <p>Box 3</p>
    </div>
  </div>
  );
}

export default GridView;