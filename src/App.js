import React from 'react';
import './App.css';

// Import necessary components
import Header from './components/Header';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Home />
        <ProductList />
        <ProductDetail />
        <Cart />
        <Checkout />
      </div>
      <Footer />
    </div>
  );
}

export default App;
