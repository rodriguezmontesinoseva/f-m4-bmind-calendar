import React from "react";
import "./App.scss";
import "../HomePage";
import HomePage from "../HomePage";
import fetchService from "../../services/fetchService";
import moment from "moment";
//import Demo, {selectRangeAvailable} from '../YearlyCalendar/Demo';

class App extends React.Component {
  constructor(props) {
    super(props);
    const today = moment();
    this.state = {
      usersData: [],
      selectedUser: {},
      isFetching: true,
      isDisabled: false,
      loggedUser: {},
      selectedRange: [today, moment(today).add(0, "day")],
      selectRange: true,
      year: today.year(),
      selectedDay: today,
      team: '0'
    };
    this.handlerChangeSelect = this.handlerChangeSelect.bind(this);
    this.rangePicked = this.rangePicked.bind(this);
    //this.selectRangeAvailable = this.selectRangeAvailable.bind(this);
    this.onPrevYear = this.onPrevYear.bind(this);
    this.onNextYear = this.onNextYear.bind(this);
    this.datePicked = this.datePicked.bind(this);
    this.goToToday = this.goToToday.bind(this);
    this.handlerChangeTeam = this.handlerChangeTeam.bind(this);
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
      team: value
    })

  }

  handlerChangeSelect(event) {
    const currentIdUser = event.target.value;
    const newUser = this.state.usersData.find(
      item => parseInt(currentIdUser) === item.id
    );
    if (parseInt(currentIdUser) === this.state.loggedUser.id) {

      this.setState({
        selectedUser: newUser,
        isDisabled: false,
        selectRange: true
      });
    } else {
      this.setState({
        selectedUser: newUser,
        isDisabled: true,
        selectRange: false
      });
    }
  }

  goToToday() {
    const today = moment();

    this.setState({
      selectedDay: today,
      selectedRange: [today, moment(today).add(0, "day")],
      year: today.year()
    });
  }

  datePicked(date) {
    this.setState({
      selectedDay: date,
      selectedRange: [date, moment(date).add(0, "day")]
    });
  }

  rangePicked(start, end) {
    this.setState({
      selectedRange: [start, end],
      selectedDay: start
    });
  }

  // selectRangeAvailable() {
  //   if(this.props.isDisabled) {
  //     this.setState({
  //       selectRange: true
  //     })
  //   } else {
  //     this.setState({
  //       selectRange: false
  //     })
  //   }
  // }

  onPrevYear() {
    this.setState(prevState => ({
      year: prevState.year - 1
    }));
  }

  onNextYear() {
    this.setState(prevState => ({
      year: prevState.year + 1
    }));
  }

  render() {
    const { selectedUser,
      isFetching,
      usersData,
      loggedUser,
      isDisabled,
      selectedRange,
      selectRange,
      year,
      selectedDay,
      team } = this.state;
    return (
      <div className="App fetching">
        {isFetching ? (
          "Loading..."
        ) : (
            <HomePage
              selectedUser={selectedUser}
              usersData={usersData}
              handlerChangeSelect={this.handlerChangeSelect}
              isDisabled={isDisabled}
              loggedUser={loggedUser}
              selectedRange={selectedRange}
              selectRange={selectRange}
              year={year}
              selectedDay={selectedDay}
              goToToday={this.goToToday}
              onNextYear={this.onNextYear}
              datePicked={this.datePicked}
              onPrevYear={this.onPrevYear}
              rangePicked={this.rangePicked}
              selectRangeAvailable={this.selectRangeAvailable}
              handlerChangeTeam={this.handlerChangeTeam}
              team={team}
            // onPrevYear={() => this.onPrevYear()}
            // onNextYear={() => this.onNextYear()}
            // goToToday={() => this.goToToday()}
            />
          )}
      </div>
    );
  }
}
export default App;
