import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
  let navigate = useNavigate();
  let basket = useSelector((state) => state.shoppingList);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {}, [basket]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit payment");

    ////////////////////////////////////////ÖDEME SİSTEMİNİN BACKEND ÇALIŞMASI DEVAM EDİYOR

    navigate("/order", { replace: true });
  };
  const handleChange = (e) => {
    console.log(e, "e");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/checkout">{basket.items.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
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
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Tortal:{value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={basket.totalAmount}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button>
                  <span>
                    <p>Buy now</p>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
