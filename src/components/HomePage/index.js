import React, { Fragment } from "react";
import "./styles.scss";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import PropTypes from "prop-types";

function HomePage(props) {
  const { selectedUser, usersData, handlerChangeSelect, isDisabled } = props;
  const logUser = usersData[0].name;
  return (
    <Fragment>
      <Header logUser={logUser} />
      <Main
        selectedUser={selectedUser}
        usersData={usersData}
        handlerChangeSelect={handlerChangeSelect}
        isDisabled={isDisabled}
      />
      <Footer />
    </Fragment>
  );
}

HomePage.propTypes = {
  selectedUser: PropTypes.object.isRequired
};

export default HomePage;
