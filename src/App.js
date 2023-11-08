import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
// import axios from "axios"
// import { useState,useEffect } from "react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  // const [data, setData] = useState([])
  // const [loading, setLoading] = useState(false)

  // useEffect(()=>{
  //   setLoading(true)
  //   axios.get('https://localhost:4000/api/admin')
  //   .then((response) => {
  //     setData(response.data)
  //     console.log(response.data)
  //     setLoading(false)
  //   }).catch((error) => {
  //     console.log(error)
  //     setLoading(false)
  //   })
  // },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
