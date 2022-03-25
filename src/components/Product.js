import React from "react";
import "./Product.css";
import { useSelector, useDispatch } from "react-redux";
import { shoppingListActions } from "../store/shoppingListSlice";

function Product({ title, image, price, rating, id }) {
  let dispatch = useDispatch();

  let ratingStarts = "";
  for (let a = 0; rating > a; a++) {
    ratingStarts = ratingStarts + "⭐";
  }

  const addToCart = () => {
    dispatch(
      shoppingListActions.addToCart({ title, image, price, rating, id, image })
    );
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">{ratingStarts}</div>
      </div>
      <img alt="" src={image}></img>
      <button onClick={addToCart}>Add to Basket</button>
    </div>
  );
}

export default Product;
