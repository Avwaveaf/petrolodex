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
              transform: arrayLength < 5 ? "scale(1.1) " : "none",
              border:
                arrayLength === 1
                  ? "5px solid black"
                  : arrayLength < 5
                  ? "5px dotted black "
                  : "",
            }}
            className="cardItem-container"
          >
            <img
              src={`https://robohash.org/${cardData.firstName}.png?set=set4`}
              alt={`${cardData.firstName}`}
            />
            <h1>{cardData.firstName}</h1>
            <p>{cardData.email}</p>
          </div>
        ) : (
          <div className="cardItem-container">
            <img
              src={`https://robohash.org/${cardData.firstName}.png?set=set4`}
              alt={`${cardData.firstName}`}
            />
            <h1>{cardData.firstName}</h1>
            <p>{cardData.email}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Card;
