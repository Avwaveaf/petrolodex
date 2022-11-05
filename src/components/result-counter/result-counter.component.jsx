import { Component } from "react";

import "./result-counter.style.css";

class ResultCounter extends Component {
  render() {
    const { countThisData, counterName } = this.props;
    return (
      <div className="title-counter-container">
        <p>
          {countThisData.length === 0
            ? `${counterName} unavailable`
            : `${counterName} found (${countThisData.length})`}
        </p>
        <hr />
      </div>
    );
  }
}

export default ResultCounter;
