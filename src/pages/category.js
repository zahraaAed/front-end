import React from "react";
import Header from "../components/Header";
import "../pages/Category.css";
import wafer from "../images/wafer.png";
import cake from "../images/categoryCake.png";
import petitfour from "../images/Petitfour.png";

const Category=()=>{
    return(
        <>
        <Header/>
        <div className="content">
            <div className="heading">
                <h1>What We Offer</h1>
                <q> Discover Your Perfect Dessert Getaway</q>
            </div>
            <div className="category-product">
                <div className="categoryItem">
                    <img src={cake} alt="cake"/>
                    <h4>Cakes & Icecream</h4>
                </div>
                <div className="categoryItem">
                    <img src={wafer} alt="wafer"/>
                    <h4>wafer</h4>
                </div>
                <div className="categoryItem">
                    <img src={petitfour} alt="petitfour"/>
                    <h4>Petitfour</h4>
                </div>
            </div>
        </div>
    </>
    )
}
export default Category;