import React, { useState } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Shop() {
  const PriceFilter = () => {
    const [price, setPrice] = useState(2000);

    const updatePrice = (event) => {
      const newPrice = parseInt(event.target.value);
      setPrice(newPrice);
    };

    const calculateDisplayPrice = () => {
      // Adjust this calculation based on your specific requirements
      return `₦2,000 - ₦${price + 33000}`;
    };

    const calculateBackgroundSize = () => {
      const min = 2000;
      const max = 50000;
      const percentage = ((price - min) / (max - min)) * 100;
      return `${percentage}% 100%`;
    };

    return (
      <div className="d-flex align-items-center mb-3">
        <span className="h6 text-muted me-2">Filter by price:</span>
        <div className="form-range w-50">
          <input
            type="range"
            min="2000"
            max="50000"
            value={price}
            className="form-control-range"
            onChange={updatePrice}
            style={{ backgroundSize: calculateBackgroundSize() }}
          />
          <span className="visually-hidden">Min to Max</span>
          <p className="range-value ms-2">{calculateDisplayPrice()}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        {/* Include the PriceFilter component here */}
        <PriceFilter />
      </div>
      <Footer />
    </>
  );
}

export default Shop;
