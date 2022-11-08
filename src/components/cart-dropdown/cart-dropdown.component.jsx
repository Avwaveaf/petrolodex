import { Component } from "react";
import { CartContext } from "../context/cart.context";

import "./cart-dropdown.style.css";

class CartDropdown extends Component {
  static contextType = CartContext;
  render() {
    const { pet, clearAllData } = this.context;

    return (
      <div className="cart-dropdown-container">
        {pet.length ? (
          <div>
            {pet.map((e) => {
              return (
                <div className="cart-dropdown-content" key={e.id}>
                  <div className="cart-dropdown-img-container">
                    <img
                      src={`https://robohash.org/${e.firstName}.png?set=set4&size=70x70`}
                      alt={`${e.firstName}`}
                    />
                  </div>
                  <div className="cart-dropdown-description-container">
                    <h1>{e.firstName}</h1>
                    <p>Email Owner : {e.email}</p>
                    <p>Phone Owner : {e.phone}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <span style={{ margin: "auto", color: "grey" }}>
            Cart is empty Add item to your cart
          </span>
        )}
        <div
          onClick={() => clearAllData()}
          style={{ display: pet.length ? "" : "none" }}
          className="clear-button"
        >
          <span>Clear All</span>
        </div>
      </div>
    );
  }
}

export default CartDropdown;
