import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.js";
import About from "./pages/About.js";
import Gallery from "./pages/Gallery.js";
import Home from "./pages/Home.js";
import HomeContent from "./components/HomeContent.js";
import Footer from "./components/Footer.js";
import Contact from './pages/Contact.js';
import Cart from './pages/Cart.js';
import Shop from './pages/Shop.js';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route path='/project' element={<Gallery/>}></Route>
        <Route path='/homecontent' element={<HomeContent/>}></Route>
        <Route path='/footer' element={<Footer/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
      </Router>
  );
}

export default App;




