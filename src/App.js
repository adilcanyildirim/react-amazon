import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Payment from "./components/Payment";
import Order from "./components/Order";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "./components/firebase";
import { userActions } from "./store/userSlice";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KgoaqAX5oE8pjXQYQur0j1jJ1R2DbvGvmCVZ8SEjxqQoc9TJnqLRfZWtzKMYIBJvJ2MpU5aBON5QDsM4U3qsQDU001Qkhu2sQ"
);
function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        let email = authUser.email;
        dispatch(userActions.userLogin(email));
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
