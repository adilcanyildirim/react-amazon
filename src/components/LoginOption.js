import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function LoginOption() {
  return (
    <React.Fragment>
      <Link to="/login">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
      </Link>
    </React.Fragment>
  );
}

export default LoginOption;
