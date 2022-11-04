import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="search pets"
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default SearchBox;
