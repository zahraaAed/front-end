import {BrowserRouter, Routes, Route} from "react-router-dom";

import Categories from "./pages/Categories";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path = "/" element = {<Categories/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
