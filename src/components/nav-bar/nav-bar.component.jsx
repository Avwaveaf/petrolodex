import { Component } from "react";

import "./nav-bar.style.css";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../context/cart.context";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
    };
  }
  static contextType = CartContext;
  render() {
    const { isClicked } = this.state;
    const onClickToggleHandler = (val) => {
      return this.setState({ isClicked: !val });
    };

    const { cartCount } = this.context;
    return (
      <div className="nav-container">
        <a href="#top">
          <span style={{ fontSize: "30px", color: "yellow" }}>{`[ `}</span>
          <span className="ad-text">{` Add `}</span>
          <span style={{ fontSize: "30px", color: "yellow" }}>{` ] `}</span> opt
          Meow
        </a>
        <div className="cart-button-container">
          <span
            onClick={() => onClickToggleHandler(isClicked)}
            className={`material-symbols-outlined ${
              isClicked ? "cart-clicked" : ""
            }`}
          >
            shopping_bag
            <span className="cart-counter" style={{ fontSize: "10px" }}>
              {cartCount}
            </span>
          </span>
          <div>{this.state.isClicked ? <CartDropdown /> : ""}</div>
        </div>
      </div>
    );
  }
}

export default NavBar;
