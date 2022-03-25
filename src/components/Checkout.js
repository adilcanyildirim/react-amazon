import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";

function Checkout(props) {
  let email;
  let basket = useSelector((state) => state.shoppingList);
  let user = useSelector((state) => state.user.user);

  console.log(email, "email");
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          alt=""
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        ></img>
        <div>
          <h1 className="checkout__mail">Hello,{user}</h1>
          <h1 className="checkout__title">Your Shopping Basket</h1>
          {basket.items.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default Checkout;
