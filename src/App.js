import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Main from "./main";
import ProjectFinance from "./projects/ProjectFinance";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projectFinance" element={<ProjectFinance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
