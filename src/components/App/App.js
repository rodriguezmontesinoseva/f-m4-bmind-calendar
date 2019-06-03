import React from "react";
import "./App.scss";
import "../HomePage";
import HomePage from "../HomePage";
import fetchService from "../../services/fetchService"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: [],
      selectedUser: {}
    };
  }
  
  fetchUsers() {
    fetchService()
      .then(data => {
        this.setState({
          usersData: data,
          selectedUser: data[0]
        });
      });
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div className="App">
        <HomePage selectedUser={this.state.selectedUser}/>
      </div>
    );
  }
}
export default App;
