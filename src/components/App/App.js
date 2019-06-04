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
      isFetching: true,
      isDisabled: true,
    };
    this.handlerChangeSelect = this.handlerChangeSelect.bind(this);

  }

  fetchUsers() {
    fetchService().then(data => {
      this.setState({
        usersData: data,
        selectedUser: data[0],
        isFetching: false,
      });
    });
  }

  componentDidMount() {
    this.fetchUsers();
  }


  handlerChangeSelect(event) {
    const currentIdUser = event.target.value;
    const newUser = this.state.usersData.find(item => parseInt(currentIdUser) === item.id);

    this.setState({
      selectedUser: newUser

    })

  }

  render() {
    const { selectedUser, isFetching, usersData, isDisabled } = this.state;
    return (
      <div className='App fetching'>
        {isFetching
          ?
          'Loading...'
          :
          <HomePage
            selectedUser={selectedUser}
            usersData={usersData}
            handlerChangeSelect={this.handlerChangeSelect}
            isDisabled={isDisabled}
          />
        }
      </div>
    );
  }
}
export default App;
