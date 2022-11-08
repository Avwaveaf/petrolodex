import { Component, Fragment } from "react";

import "./pop-up-card.style.css";

import AddToCartBtn from "../add-to-cart-button/add-to-cart-btn.component";

class PopUpCard extends Component {
  constructor() {
    super();
    this.state = {
      close: "",
    };
  }
  render() {
    const { data } = this.props;
    const { firstName, lastName, hair, gender, age, weight, eyeColor } = data;
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
                <p>
                  <span className="data-title">Full-name :</span>
                  {` ${firstName} ${lastName}`}
                </p>
                <p>
                  <span className="data-title">Age :</span>
                  {` ${Math.ceil(age / 15)} Years Old`}
                </p>
                <p>
                  <span className="data-title">Gender :</span>
                  {` ${gender}`}
                </p>
                <p>
                  <span className="data-title">Weight :</span>
                  {` ${Math.floor(weight - (weight - 4))} Kg`}
                </p>
                <div className="eyeColor-container">
                  <p>
                    <span className="data-title">Eye Color :</span>
                    {` ${eyeColor}`}
                  </p>
                  <span
                    className="color"
                    style={{ background: `${eyeColor}` }}
                  ></span>
                </div>
                <p>
                  <span className="data-title">Fur-Type :</span>
                  {` ${type}`}
                </p>
              </div>
            </div>
            <AddToCartBtn selectedData={data} />
          </div>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

export default PopUpCard;
