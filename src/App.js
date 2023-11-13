import { BrowserRouter, Routes, Route,Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NavBar from "./components/NavBar";
import Products from "./pages/products";
import Product from "./pages/Product";
import BestSeller from "./pages/BestSeller/BestSeller"

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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/products/:categoryId" element={<Products />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/Bestsellers" element={<BestSeller />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
