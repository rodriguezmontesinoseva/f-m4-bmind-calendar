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
      selectedUser: {},
      isFetching: true
    };
  }

  fetchUsers() {
    fetchService().then(data => {
      this.setState({
        usersData: data,
        selectedUser: data[0],
        isFetching: false
      });
    });
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { selectedUser, isFetching } = this.state;
    return (
      <div className='App'>
        {isFetching
          ?
          'Loading...'
          :
          <HomePage
            selectedUser={selectedUser}
            usersData={this.state.usersData} />
        }
      </div>
    );
  }
}
export default App;
