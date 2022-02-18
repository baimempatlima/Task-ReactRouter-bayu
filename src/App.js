import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Drinks from "./components/Drinks/Drinks";
import Desserts from "./components/Desserts/Desserts";
import { Maincourse } from "./components/Maincourse/Maincourse";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/maincourse" exact element={<Maincourse />} />
          <Route path="/desserts" exact element={<Desserts />} />
          <Route path="/drinks" exact element={<Drinks />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
