import React from "react";
import ReactDOM from "react-dom";
import Sider from "./sider.js";
import Header from "./header.js";
import About from "./about.js";
import Experience from "./experience.js";
import Separator from "./separator";
import Testing from "./testing/testing";
import Grid from "./grid/grid";
import ContactForm from "./contact/contact";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <Sider />
          <div className="col-md-10 main-page text-center">
            <Header />
            {/* <Experience /> */}
            <Grid />
            {/* <Testing /> */}
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
