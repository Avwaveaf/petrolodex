import { Component } from "react";
import { CartContext } from "../context/cart.context";

import "./add-to-cart.btn.style.css";

class AddToCartBtn extends Component {
  static contextType = CartContext;

  render() {
    const { selectedData } = this.props;
    const { setSelectedDatas } = this.context;

    return (
      <div>
        <button
          className="addToCard-button"
          type=""
          onClick={() => setSelectedDatas(selectedData)}
        >
          Add to cart
        </button>
      </div>
    );
  }
}

export default AddToCartBtn;
