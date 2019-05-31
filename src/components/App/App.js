import React from 'react';
import './App.scss';
import '../HomePage'
import HomePage from '../HomePage';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  
  render(){
    return (
        <div className="App">
          <HomePage />
      
        </div>
      )
  }
  
}

export default App;
