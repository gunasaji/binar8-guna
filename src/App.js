import "./App.css";
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="App">
      {/* <Event />
      <Submit />
      <Reactstrap /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/edit" element={<Edit />} />
        </Routes>
      </Router>

      
    </div>
  )
}

export default App;
