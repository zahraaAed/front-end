// import { useEffect, useState } from "react";

import CategoryForm from "../components/CategoryForm";
import ProductForm from "../components/ProductForm";
import ReviewForm from "../components/ReviewForm";
import FeedbackForm from "../components/FeedbackForm";
import "./Admin.css";

const Admin = () => {

  return (
    <div className="AdminPanel">
      <CategoryForm />
      <ProductForm />
      <FeedbackForm />
      {/* <ReviewForm /> just for trial, mustbe placed in item page */}
    </div>
  )
}

export default Admin;