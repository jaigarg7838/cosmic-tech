import React,{ Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import Main from "./components/MainComponent";
import {BrowserRouter} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "boxicons/css/boxicons.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <BrowserRouter>
  <div className="App">
   <Main/>
    </div>
    </BrowserRouter>

  );
}

export default App;
