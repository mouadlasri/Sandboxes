import React from "react";

import "./experience.css";

const Experience = () => {
  return (
    <div className="experience container-fluid">
      {/* <div className="experience-group"> */}
      <div className="card box">
        <img
          className="card-img-top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkHe5EgGvozEjjNo1N9zrXKwszaXLVx_hmh3o0Eon0tD02TZW"
          alt="Card image"
        />
        <div className="card-body">
          <h4 className="card-title">John Doe</h4>
          <p className="card-text">Some example text.</p>
          <a href="#" className="btn btn-primary">
            See Profile
          </a>
        </div>
      </div>
      <div className=" box">
        <p>Box 2</p>
      </div>
      <div className="box">
        <p>Box 3</p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Experience;
