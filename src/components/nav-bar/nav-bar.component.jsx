import { Component } from "react";

import "./nav-bar.style.css";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-container">
        <a href="#top">
          <span style={{ fontSize: "30px", color: "yellow" }}>{`[ `}</span>
          <span className="ad-text">{` Add `}</span>
          <span style={{ fontSize: "30px", color: "yellow" }}>{` ] `}</span> opt
          Meow
        </a>
      </div>
    );
  }
}

export default NavBar;
