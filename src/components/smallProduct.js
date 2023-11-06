import React from "react";
import cake from '../images/strawberry.png';
import '../components/smallProduct.css';
const product = () => {
    return (
<div className="small-product">
    <div className="small-products">
        <img src={cake} alt="cake" className="image"/>
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