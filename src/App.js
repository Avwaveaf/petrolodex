import { Component } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.comonent";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: [],
      dogs: [],
      exotics: [],
      searchVal: "",
    };
  }

  componentDidMount() {
    fetch("https://dummyjson.com/users?limit=10")
      .then((res) => res.json())
      .then((data) => this.setState({ cats: data.users }));

    fetch("https://dummyjson.com/users?skip=10&limit=10")
      .then((res) => res.json())
      .then((data) => this.setState({ dogs: data.users }));

    fetch("https://dummyjson.com/users?skip=20&limit=10")
      .then((res) => res.json())
      .then((data) => this.setState({ exotics: data.users }));
  }

  filterHandler(petsArray, searchVal) {
    const temp = petsArray.filter((pet) => {
      return pet.firstName.toLocaleLowerCase().includes(searchVal);
    });
    return temp;
  }

  unFilteredHandler(petsArray, searchVal) {
    const temp = petsArray.filter((pet) => {
      return !pet.firstName.toLocaleLowerCase().includes(searchVal);
    });
    return temp;
  }

  onChangeSearchHandler = (event) => {
    const searchVal = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchVal };
    });
  };

  render() {
    const { cats, dogs, exotics, searchVal } = this.state;
    const { onChangeSearchHandler, filterHandler, unFilteredHandler } = this;

    const filteredCatsArray = filterHandler(cats, searchVal);
    const unfilteredCatsArray = unFilteredHandler(cats, searchVal);
    const filteredDogsArray = filterHandler(dogs, searchVal);
    const unFilteredDogsArray = unFilteredHandler(dogs, searchVal);
    const filteredExoticsArray = filterHandler(exotics, searchVal);
    const unfilteredExoticsArray = unFilteredHandler(exotics, searchVal);

    return (
      <div className="App">
        <SearchBox onChange={onChangeSearchHandler} />

        <CardList
          filteredData={filteredCatsArray}
          notFilteredData={unfilteredCatsArray}
          counterName="Cats"
        />
        <CardList
          filteredData={filteredDogsArray}
          notFilteredData={unFilteredDogsArray}
          counterName="Dogs"
        />
        <CardList
          filteredData={filteredExoticsArray}
          notFilteredData={unfilteredExoticsArray}
          counterName="Exotics"
        />
      </div>
    );
  }
}

export default App;
