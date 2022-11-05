import { Component, Fragment } from "react";

import "./pop-up-card.style.css";

class PopUpCard extends Component {
  constructor() {
    super();
    this.state = {
      close: "",
    };
  }
  render() {
    console.log(this.props.data);
    const { firstName, lastName, hair, gender, age, weight, eyeColor } =
      this.props.data;
    const { type } = hair;
    return (
      <Fragment>
        {this.state.close === "" ? (
          <div
            style={{ display: this.props.clicked === "yes" ? "block" : "none" }}
            className="popupCard-container"
          >
            <h1 style={{ color: "black", background: "white" }}>{firstName}</h1>
            <div className="description-container">
              <div className="image-container">
                <img
                  src={`https://robohash.org/${firstName}.png?set=set4`}
                  alt={`${firstName}`}
                />
              </div>

              <div className="bioData-container">
                <p>{`full-name : ${firstName} ${lastName}`}</p>
                <p>{`Age : ${Math.ceil(age / 15)} Years Old`}</p>
                <p>{`Gender : ${gender}`}</p>
                <p>{`Weight : ${Math.floor(weight - (weight - 4))} Kg`}</p>
                <div className="eyeColor-container">
                  <p>{`Eye Color : ${eyeColor}`}</p>
                  <span
                    className="color"
                    style={{ background: `${eyeColor}` }}
                  ></span>
                </div>
                <p>{`Fur-Type : ${type}`}</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

export default PopUpCard;
