import { Component } from "react";

import "./result-counter.style.css";

class ResultCounter extends Component {
  render() {
    const { countThisData, counterName } = this.props;
    return (
      <div className="title-counter-container">
        <p
          style={{
            background:
              countThisData.length < 3 && countThisData.length !== 0
                ? "yellow"
                : "",
          }}
        >
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
