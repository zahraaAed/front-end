import React from "react";
import icecream from "../images/icecream.png";
import "../components/icecream.css";
const product = () => {
    return (
<div className="icecream-product">
    <div className="icecream-products">
        <img src={icecream} alt="icecream" className="img"/>

<div className="price">
<p> 20$</p>
</div>
<p> featuring fresh strawberries in a moist vanilla base with strawberry-infused frosting.</p>
<div className="review">
<p>Review by moussa wehbi:</p>
<p>Delicious treat.The cake was very delicious</p>
</div>
</div>
</div>
    );
}
export default product;