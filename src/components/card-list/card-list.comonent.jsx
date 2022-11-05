import { Component, Fragment } from "react";

import "./card-list.styles.css";

import Card from "../card/card.component";
import ResultCounter from "../result-counter/result-counter.component";
import PopUpCard from "../pop-up-card/pop-up-card.component";

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      clickedData: {},
      isClicked: "no",
    };
  }

  render() {
    const { filteredData, notFilteredData, counterName } = this.props;

    return (
      <div className="content-container">
        <ResultCounter countThisData={filteredData} counterName={counterName} />

        {filteredData.length === 0 ? (
          <Fragment />
        ) : (
          <div className="cardList-container">
            {this.state.isClicked === "yes" ? (
              <Fragment>
                <PopUpCard
                  data={this.state.clickedData}
                  clicked={this.state.isClicked}
                />
                <button
                  className="popUp-closeButton"
                  type=""
                  onClick={() => {
                    this.setState({ isClicked: "no" });
                  }}
                  style={{
                    borderRadius: "50px",
                    width: "50px",
                    height: "50px",
                    padding: "5px",
                  }}
                >
                  X
                </button>
              </Fragment>
            ) : (
              ""
            )}

            {filteredData.map((e) => (
              <div
                key={e.id}
                onClick={() =>
                  this.setState({ clickedData: e, isClicked: "yes" })
                }
                className={"cardList-container-child"}
              >
                <Card
                  cardData={e}
                  isFiltered={true}
                  arrayLength={filteredData.length}
                />
              </div>
            ))}
            {notFilteredData.map((e) => (
              <Card cardData={e} key={e.id} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default CardList;
