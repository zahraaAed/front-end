import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from "./components/Footer";
import Product from './components/smallProduct';
import Filter from './components/Filter';
import ProductPage from './pages/product';
import ProductIcecream from './components/icecream';

function App (){
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/header' element={<Header />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productIcecream' element={<ProductIcecream />} />
          <Route path='/filter' element={<Filter />} />
          <Route path='/productPage' element={<ProductPage/>}/>
      
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
