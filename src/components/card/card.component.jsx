import { Component } from "react";

import "./card.style.css";

class Card extends Component {
  render() {
    const { cardData, isFiltered, arrayLength } = this.props;
    return (
      <div className="card-container">
        {isFiltered === true ? (
          <div
            style={{
              background: arrayLength <= 5 ? "green" : "none",
            }}
          >
            <h1>{cardData.firstName}</h1>
          </div>
        ) : (
          <div>
            <h1>{cardData.firstName}</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Card;
