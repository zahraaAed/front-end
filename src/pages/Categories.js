import { useEffect, useState } from "react";

import CategoryDetails from "../components/CategoryDetails";

const Categories = () => {
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
  return (
    <div className="Categories">
      <div className="title">
        <p className="offer">What We Offer</p>
        <p className="quote">"Discover Your Perfect Dessert Getaway</p>
      </div>
      <div className="categories">
        {categories && categories.map((category) => (
          <CategoryDetails key={category._id} category={category} />
        ))}
      </div>
    </div>
  )
}

export default Categories