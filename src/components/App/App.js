import React from "react";
import "./App.scss";
import "../HomePage";
import HomePage from "../HomePage";
import fetchService from "../../services/fetchService"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: []
    };
  }

  fetchUsers() {
    fetchService()
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
        <HomePage usersData={this.state.usersData} />
      </div>
    );
  }
}
export default App;
