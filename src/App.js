import { Component, Fragment } from "react";
import { UserContext } from "./components/context/userContext";
import "./App.css";

import CardList from "./components/card-list/card-list.comonent";
import SearchBox from "./components/search-box/search-box.component";
import DropDownMenu from "./components/drop-down/drop-down.component";
import NavBar from "./components/nav-bar/nav-bar.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: [],
      dogs: [],
      exotics: [],
      searchVal: "",
      dropDownSelect: "",
    };
  }

  static contextType = UserContext;

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

    this.context.setUser(this.setState({ user: ["afif", "lala"] }));
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
    const { user = { user: "nothing" } } = this.context;
    const { cats, dogs, exotics, searchVal } = this.state;
    const { onChangeSearchHandler, filterHandler, unFilteredHandler } = this;

    const filteredCatsArray = filterHandler(cats, searchVal);
    const unfilteredCatsArray = unFilteredHandler(cats, searchVal);
    const filteredDogsArray = filterHandler(dogs, searchVal);
    const unFilteredDogsArray = unFilteredHandler(dogs, searchVal);
    const filteredExoticsArray = filterHandler(exotics, searchVal);
    const unfilteredExoticsArray = unFilteredHandler(exotics, searchVal);

    return (
      <div id="top" className="App">
        <NavBar />
        <SearchBox
          placeholder={"search any pet"}
          onChange={onChangeSearchHandler}
        />
        <DropDownMenu />

        {user.user !== "nothing" ? (
          // <CardList
          //   filteredData={`filtered${user.user}Array`}
          //   notFilteredData={`unfiltered${user.user}Array`}
          //   counterName={user.user}
          //   categoryData={user}
          // />
          <Fragment>
            {user.user === "Cats" ? (
              <CardList
                filteredData={filteredCatsArray}
                notFilteredData={unfilteredCatsArray}
                counterName="Cats"
              />
            ) : user.user === "Rare" ? (
              <CardList
                filteredData={filteredDogsArray}
                notFilteredData={unFilteredDogsArray}
                counterName="Rare"
              />
            ) : user.user === "Exotics" ? (
              <CardList
                filteredData={filteredExoticsArray}
                notFilteredData={unfilteredExoticsArray}
                counterName="Exotics"
              />
            ) : (
              <div>Out of option selected</div>
            )}
          </Fragment>
        ) : (
          <Fragment>
            <CardList
              filteredData={filteredCatsArray}
              notFilteredData={unfilteredCatsArray}
              counterName="Cats"
            />

            <CardList
              filteredData={filteredDogsArray}
              notFilteredData={unFilteredDogsArray}
              counterName="Rare"
            />
            <CardList
              filteredData={filteredExoticsArray}
              notFilteredData={unfilteredExoticsArray}
              counterName="Exotics"
            />
          </Fragment>
        )}
      </div>
    );
  }
}

export default App;
