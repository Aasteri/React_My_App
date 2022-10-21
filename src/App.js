// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import './App.css';
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import Contactus from "./components/pages/Contact";
import Aboutus from "./components/pages/About";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/inc/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
          <Route path="/contact" element={<Contactus />}></Route>

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
