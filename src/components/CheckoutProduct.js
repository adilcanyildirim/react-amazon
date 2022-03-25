import React from "react";
import "./CheckoutProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { shoppingListActions } from "../store/shoppingListSlice";

function CheckoutProduct({ id, image, title, price, rating }) {
  const checkoutProductPackage = useSelector((state) => state.shoppingList);
  const dispatch = useDispatch();
  console.log(image, "image");
  const removeFromBasket = () => {
    dispatch(shoppingListActions.removeFromCart(id));
  };

  let ratingStars = "";
  for (let i = 0; rating > i; i++) {
    ratingStars = ratingStars + "⭐";
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">{ratingStars}</div>
        {/* {!hideButton && ( */}
        <button onClick={removeFromBasket}>Remove from Basket</button>
        {/* )} */}
      </div>
    </div>
  );
}

export default CheckoutProduct;
