import { Component } from "react";

import "./card-list.styles.css";

import Card from "../card/card.component";
import ResultCounter from "../result-counter/result-counter.component";

class CardList extends Component {
  render() {
    const { filteredData, notFilteredData, counterName } = this.props;

    return (
      <div>
        <ResultCounter countThisData={filteredData} counterName={counterName} />
        <hr />
        {filteredData.length === 0 ? (
          <div className="cardList-container"></div>
        ) : (
          <div className="cardList-container">
            {filteredData.map((e) => (
              <Card
                key={e.id}
                cardData={e}
                isFiltered={true}
                arrayLength={filteredData.length}
              />
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
