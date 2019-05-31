import React from "react";
import "./App.scss";
import "../HomePage";
import HomePage from "../HomePage";
//import fetchUsers from "../../services/fetchUsers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: []
    };
  }
  
  fetchUsers() {
    const url = new URL("https://adalab.bmind.es/api/users");

    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    fetch(url, {
      method: "GET",
      headers: headers
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          usersData: data
        });
      });
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}
export default App;
