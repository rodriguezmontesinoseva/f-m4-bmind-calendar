import React from "react";
import "./App.scss";
import "../HomePage";
import HomePage from "../HomePage";
import fetchService from "../../services/fetchService";
import moment from "moment";

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
      team: "0"
    };
    this.handlerChangeSelect = this.handlerChangeSelect.bind(this);
    this.rangePicked = this.rangePicked.bind(this);
    this.onPrevYear = this.onPrevYear.bind(this);
    this.onNextYear = this.onNextYear.bind(this);
    this.datePicked = this.datePicked.bind(this);
    this.goToToday = this.goToToday.bind(this);
    this.handlerChangeTeam = this.handlerChangeTeam.bind(this);
    this.handleValidatePeriod = this.handleValidatePeriod.bind(this)
  }

  fetchUsers() {
    fetchService().then(data => {
      this.setState({
        usersData: data,
        selectedUser: data[0],
        isFetching: false,
        loggedUser: data[0]
      });
    });
  }

  componentDidMount() {
    this.fetchUsers();
  }

  handlerChangeTeam(event) {
    console.log(event.target.name);

    const { value } = event.target;
    this.setState({
      team: value
    });
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

  handleValidatePeriod() {
    const selectStartDay = this.state.selectedRange[0]._i[2];
    const selectStartMonth = parseInt(this.state.selectedRange[0]._i[1]) + 1;
    const selectStartYear = this.state.selectedRange[0]._i[0];
    const selectEndDay = this.state.selectedRange[1]._i[2];
    const selectEndMonth = parseInt(this.state.selectedRange[1]._i[1]) + 1;
    const selectEndYear = this.state.selectedRange[1]._i[0];
    const url = new URL("https://adalab.bmind.es/api/periods");
    const data = {
      start_date: selectStartYear + "-" + selectStartMonth + "-" + selectStartDay,
      end_date: selectEndYear + "-" + selectEndMonth + "-" + selectEndDay,
      year: selectEndYear,
      user_id: this.state.loggedUser.id
    };
    console.log(data);

    let headers = {
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: headers
    })
      .then(response => response)
      .then(json => console.log(json));

    window.location.reload();
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
    const {
      selectedUser,
      isFetching,
      usersData,
      loggedUser,
      isDisabled,
      selectedRange,
      selectRange,
      year,
      selectedDay,
      team
    } = this.state;
    return (
      <div className="App">
        {isFetching ? (
          <p className="loading">Loading...</p>
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
              handleValidatePeriod={this.handleValidatePeriod}
            />
          )}
      </div>
    );
  }
}
export default App;
