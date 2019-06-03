import React from 'react';
import './App.scss';
import '../HomePage';
import HomePage from '../HomePage';
import fetchService from '../../services/fetchService';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: [],
<<<<<<< HEAD
      selectedUser: {}
=======
      selectedUser: {},
      isFetching: true
>>>>>>> dev
    };
  }

  fetchUsers() {
<<<<<<< HEAD
    fetchService()
      .then(data => {
        this.setState({
          usersData: data,
          selectedUser: data[0]
        });
=======
    fetchService().then(data => {
      this.setState({
        usersData: data,
        selectedUser: data[0],
        isFetching: false
>>>>>>> dev
      });
    });
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { selectedUser, isFetching } = this.state;
    return (
<<<<<<< HEAD
      <div className="App">
        <HomePage selectedUser={this.state.selectedUser}/>
=======
      <div className='App'>
        {isFetching ? 'Loading...' : <HomePage selectedUser={selectedUser} />}
>>>>>>> dev
      </div>
    );
  }
}
export default App;
