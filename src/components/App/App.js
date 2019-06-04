import React from "react";
import "./App.scss";
import "../HomePage";
import HomePage from "../HomePage";
import fetchService from "../../services/fetchService";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: [],
      selectedUser: {},
      isFetching: true,
      isDisabled: false,
      loggedUser: {},
      teams: []

    };
    this.handlerChangeSelect = this.handlerChangeSelect.bind(this);
  }

  fetchUsers() {
    fetchService().then(data => {
      this.setState({
        usersData: data,
        selectedUser: data[0],
        isFetching: false,
        loggedUser: data[0],
      });
    });
  }

  componentDidMount() {
    this.fetchUsers();
  }

  handlerChangeTeam(event) {
    const { value } = event.target;
    this.setState({
      teams: this.state.teams.includes(value)
        ? this.state.teams.filter(item => item !== value)
        : this.state.teams.concat(value)
    })

  }

  handlerChangeSelect(event) {
    const currentIdUser = event.target.value;
    const newUser = this.state.usersData.find(
      item => parseInt(currentIdUser) === item.id
    );
    if (parseInt(currentIdUser) === this.state.loggedUser.id) {
      // console.log(currentIdUser, this.state.loggedUser.id);

      this.setState({
        selectedUser: newUser,
        isDisabled: false
      });
    } else {
      // console.log(currentIdUser, this.state.loggedUser.id);
      this.setState({
        selectedUser: newUser,
        isDisabled: true
      });
    }
  }

  render() {
    const {
      selectedUser,
      isFetching,
      usersData,
      loggedUser,
      handlerChangeTeam,
      teams } = this.state;

    return (
      <div className="App fetching">
        {isFetching ? (
          "Loading..."
        ) : (
            <HomePage
              selectedUser={selectedUser}
              usersData={usersData}
              handlerChangeSelect={this.handlerChangeSelect}
              loggedUser={loggedUser}
              handlerChangeTeam={handlerChangeTeam}
              teams={teams}
            />
          )}
      </div>
    );
  }
}
export default App;
