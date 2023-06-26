import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Laporan from "./pages/Laporan";
import Tracking from "./pages/Tracking";
import FSDSS from "./pages/FSDSS";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import Kakitangan from "./pages/Kakitangan";
// yarn add @types/react-router-dom // yarn add react-router-dom
// yarn add @mui/icons-material  //  yarn add @mui/material @emotion/react @emotion/styled

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/Forecast" exact element={<Forecast />}></Route>
          <Route path="/Kakitangan" exact element={<Kakitangan />}></Route>
          <Route path="/Tracking" exact element={<Tracking />}></Route>
          <Route path="/Laporan" exact element={<Laporan />}></Route>
          <Route path="/FSDSS" exact element={<FSDSS />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
