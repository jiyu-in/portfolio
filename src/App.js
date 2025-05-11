import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Cursor from './component/Cursor';
import Main from "./main";
import ProjectFinance from "./projects/ProjectFinance";

function App() {
  return (
    <HashRouter>
      <Cursor />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projectFinance" element={<ProjectFinance />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
