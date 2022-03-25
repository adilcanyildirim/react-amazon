import React, { useState, useEffect } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  let [products, setProducts] = useState();
  let navigate = useNavigate();
  let basket = useSelector((state) => state.shoppingList);
  console.log(basket, "items package");

  useEffect(() => {
    if (basket.items) {
      setProducts(basket.items.length);
    } else {
      setProducts(null);
    }
  }, [basket, setProducts]);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.totalQuantity} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox"></input>
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={basket.totalAmount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {products && (
        <button
          onClick={() => {
            navigate("/payment", { replace: true });
          }}
        >
          Proceed to checkout
        </button>
      )}
    </div>
  );
}

export default Subtotal;
