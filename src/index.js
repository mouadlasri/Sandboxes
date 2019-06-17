import React from "react";
import ReactDOM from "react-dom";
import Sider from "./sider.js";
import Header from "./header.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <Sider />
          <div className="col-md-10 main-page text-center">
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
