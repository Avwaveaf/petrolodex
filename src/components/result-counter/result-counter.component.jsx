import { Component } from "react";

class ResultCounter extends Component {
  render() {
    const { countThisData, counterName } = this.props;
    return (
      <div>
        <p>
          {countThisData.length === 0
            ? `${counterName} unavailable`
            : `${counterName} found (${countThisData.length})`}
        </p>
      </div>
    );
  }
}

export default ResultCounter;
