import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/page404";
import About from "./pages/About";
import "./styles/style.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
