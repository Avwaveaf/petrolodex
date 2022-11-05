import { Component } from "react";

import "./search-box.style.css";

class SearchBox extends Component {
  render() {
    const { placeholder, onChange } = this.props;
    return (
      <div className="searchbar-container">
        <input
          type="search"
          className="searchInput"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default SearchBox;
