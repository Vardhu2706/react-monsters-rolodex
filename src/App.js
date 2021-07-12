// Importing Helpers
import React, { Component } from "react";
import "./App.css";

// Importing Components
import CardList from "./Components/CardList/CardList.Component";
import SearchField from "./Components/Search/SearchField.Component";

// Class Component
class App extends Component {
  // Constructor
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // ComponentDidMount LifeCycle Method - used to fetch user data.
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // Handle Change Function
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  // Render method
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchField
          placeHolder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

// Default Export
export default App;
