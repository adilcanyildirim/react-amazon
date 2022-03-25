import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userSlice";
import { auth } from "./firebase";

function LogoutOption({ user }) {
  let dispatch = useDispatch();
  useEffect(() => {
    let button = document.getElementById("logoutButton");
    button.addEventListener("click", () => {
      dispatch(userActions.userLogout());
      auth.signOut();
    });
  }, []);
  return (
    <React.Fragment>
      <div className="header__option" id="logoutButton">
        <span className="header__optionLineOne">{user}</span>
        <span className="header__optionLineTwo">Log out</span>
      </div>
    </React.Fragment>
  );
}

export default LogoutOption;
