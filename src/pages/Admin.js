import { useEffect, useState } from "react";
// import { useCategoryIdContext } from "../hooks/useCategoryContext";
import CategoryForm from "../components/CategoryForm";
import ProductForm from "../components/ProductForm";
import ReviewForm from "../components/ReviewForm";
import FeedbackForm from "../components/FeedbackForm";
import CategoryDelete from "../components/CategoryDelete";
import ReviewDelete from "../components/ReviewDelete";
import "./Admin.css";

const Admin = () => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    const fetchCategories = async () => {
      const responseCategories = await fetch("/api/categoryRoute/"); //remember to change URL after developement phase so every request points to the right end point
      const jsonCategories = await responseCategories.json();

      if (responseCategories.ok) {
        setCategories(jsonCategories);
      }
    }
    fetchCategories();
  },[]);

  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    const fetchReviews = async () => {
      const responseReviews = await fetch("/api/reviewRoute/"); //remember to change URL after developement phase so every request points to the right end point
      const jsonReviews = await responseReviews.json();

      if (responseReviews.ok) {
        setReviews(jsonReviews);
      }
    }
    fetchReviews();
  },[]);

  return (
    <div className="AdminPanel">
      <CategoryDelete categories={categories} />
      <ReviewDelete reviews={reviews} />
      <CategoryForm />
      <ProductForm />
      <FeedbackForm />
      {/* <ReviewForm /> just for trial, mustbe placed in item page */}
    </div>
  )
}

export default Admin;