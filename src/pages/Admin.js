import { useEffect, useState } from "react";
// import { useCategoryIdContext } from "../hooks/useCategoryContext";
import CategoryForm from "../components/CategoryForm";
import ProductForm from "../components/ProductForm";
import ReviewForm from "../components/ReviewForm";
import CategoryDelete from "../components/CategoryDelete";
import ProductDelete from "../components/ProductDelete";
import ReviewDelete from "../components/ReviewDelete";
import "./Admin.css";

const Admin = () => {

//categories

  const [categories, setCategories] = useState(null);
  useEffect(() => {
    const fetchCategories = async () => {
      const responseCategories = await fetch("https://blooming-lb-7e6w.onrender.com/api/categoryRoute/"); //remember to change URL after developement phase so every request points to the right end point
      const jsonCategories = await responseCategories.json();

      if (responseCategories.ok) {
        setCategories(jsonCategories);
      }
    }
    fetchCategories();
  },[]);

//reviews

  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    const fetchReviews = async () => {
      const responseReviews = await fetch("https://blooming-lb-7e6w.onrender.com/api/reviewRoute/"); //remember to change URL after developement phase so every request points to the right end point
      const jsonReviews = await responseReviews.json();

      if (responseReviews.ok) {
        setReviews(jsonReviews);
      }
    }
    fetchReviews();
  },[]);

//products

const [products, setProducts] = useState(null);
useEffect(() => {
  const fetchProducts = async () => {
    const responseProducts = await fetch("https://blooming-lb-7e6w.onrender.com/api/productRoute/"); //remember to change URL after developement phase so every request points to the right end point
    const jsonProducts = await responseProducts.json();

    if (responseProducts.ok) {
      setProducts(jsonProducts);
    }
  }
  fetchProducts();
},[]);

  return (
    <div className="AdminPanel">
      <CategoryDelete categories={categories} />
      <ProductDelete products={products} />
      <ReviewDelete reviews={reviews} />
      <CategoryForm />
      <ProductForm />
      {/* <ReviewForm /> just for trial, mustbe placed in item page */}
    </div>
  )
}

export default Admin;