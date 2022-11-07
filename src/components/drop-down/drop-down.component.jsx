import { Component } from "react";
import { UserContext } from "../context/userContext";

import "./drop-down.styles.css";
class DropDownMenu extends Component {
  constructor() {
    super();
    this.state = {
      clicked: 1,
    };
  }

  static contextType = UserContext;

  render() {
    const { setUser } = this.context;
    return (
      <div className="drop-down-container">
        <button
          onClick={() => {
            this.state.clicked === 1
              ? this.setState({ clicked: 0 })
              : this.setState({ clicked: 1 });
          }}
          type=""
          className={`category-button ${
            this.state.clicked === 0 ? "clicked" : ""
          }`}
        >
          <span style={{ color: "red" }}>Cat</span>egory
        </button>
        <div
          className={`drop-down-card-container ${
            this.state.clicked === 0 ? "show" : ""
          }`}
        >
          <div
            onClick={() => {
              setUser({ user: "Cats" });
              this.setState({ clicked: 1 });
            }}
            className="category-button-selection"
          >
            <p>Cats</p>
          </div>
          <div
            onClick={() => {
              setUser({ user: "Rare" });
              this.setState({ clicked: 1 });
            }}
            className="category-button-selection"
          >
            <p>Rare</p>
          </div>
          <div
            onClick={() => {
              setUser({ user: "Exotics" });
              this.setState({ clicked: 1 });
            }}
            className="category-button-selection"
          >
            <p>Exotics</p>
          </div>
          <div
            onClick={() => {
              setUser({ user: "nothing" });
              this.setState({ clicked: 1 });
            }}
            className="category-button-selection"
          >
            <p>All</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DropDownMenu;
