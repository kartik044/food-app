import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Body from "./body";
import Head from "./namastereact/head";
import  Footer from "./components/footer";



function App() {
  return (
    <>
      <Head />
      <Body />
      <Footer/>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
