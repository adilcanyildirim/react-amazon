import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LoginOption from "./LoginOption";
import LogoutOption from "./LogoutOption";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Header(props) {
  let totalQuantity = useSelector((state) => state.shoppingList.totalQuantity);
  let user = useSelector((state) => state.user.user);
  console.log(user, "user");
  // let { logedin, setLogedin } = useState(user);
  // console.log(logedin, "header");
  // useEffect(() => {
  //   setLogedin(user);
  // }, [user, setLogedin]);

  return (
    <div className="header">
      <div className="header__logoContainer">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="header__searchContainer">
        <div className="header__search">
          <input className="header__searchInput"></input>
          <SearchIcon className="header__searchIcon"></SearchIcon>
        </div>
      </div>
      <div className="header__navContainer">
        {!user && <LoginOption />}
        {user && <LogoutOption user={user} />}

        <Link to="/order">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {totalQuantity}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;