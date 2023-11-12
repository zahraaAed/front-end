import { useEffect, useState } from "react";

import CategoryDetails from "../components/CategoryDetails";
import "./Categories.css";
import wafer from "../images/wafer.png";
import cake from "../images/cake.png";
import petitfour from "../images/petitfour.png";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState(null);
  // console.log(categories);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const responseCategories = await fetch("http://localhost:4000/api/categoryRoute/"); //remember to change URL after developement phase so every request points to the right end point
  //     const jsonCategories = await responseCategories.json();
  //     console.log(jsonCategories)

  //     if (responseCategories.ok) {
  //       setCategories(jsonCategories);
  //     }
  //   };
  //   fetchCategories();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/categoryRoute/');
        const result = await response.json();
        console.log(result);
        setCategories(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Categories">
      <div className="category-title">
        <p className="category-offer">What We Offer</p>
        <p className="category-quote">
          "Discover Your Perfect Dessert Getaway"
        </p>
      </div>
      <div className="category-item">
        <div className="category-products">
        {categories &&
          categories.map((category) => (
            <CategoryDetails key={category._id} category={category} />
          ))}
      </div>
        {/* <div className="category-item">
          <Link className="links" to="/products">
            <img src={cake} alt="cake" />
          </Link>
          <Link className="links" to="/products">
            <h4 className="category-headers">Cakes & Icecream</h4>
          </Link>
        </div>
        <div className="category-item">
          <Link className="links" to="/">
            <img src={wafer} alt="wafer" />
          </Link>
          <Link className="links" to="/">
            <h4 className="category-headers">wafer</h4>
          </Link>
        </div>
        <div className="category-item">
          <Link className="links" to="/">
            <img src={petitfour} alt="petitfour" />
          </Link>
          <Link className="links" to="/">
            <h4 className="category-headers">Petit four</h4>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Categories;
