import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/header" element={<Header/>}/>
          <Route path="/header" element={<Header/>}/>
          <Route path="/header" element={<Header/>}/>
          <Route path="/header" element={<Header/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
