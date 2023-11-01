import {BrowserRouter, Routes, Route} from "react-router-dom";

import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route path = "/home" element = {<Home/>}/>
            <Route path = "/categories" element = {<Categories/>}/>
            <Route path = "/about" element = {<About/>}/>
            <Route path = "/contact" element = {<Contact/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
