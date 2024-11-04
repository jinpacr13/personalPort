import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from '../src/pages/js/Landing';
import FlowerSell from "./pages/js/FlowerSell";
import GroundBook from "./pages/js/GroundBook";
import HouserentApp from "./pages/js/HouserentApp";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="/HouserentApp" element={<HouserentApp />} />
        <Route path="/FlowerSell" element={<FlowerSell />} />
        <Route path="/GroundBook" element={<GroundBook />} />
      </Routes>
    </Router>

  );
}

export default App;
