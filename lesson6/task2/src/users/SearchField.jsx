import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import * as usersActions from "./users.actions";
import { getUserData } from "./users.gateway";

class SearchField extends React.Component {
  state = {
    userName: "",
  };
  onChange = (event) => {
    this.setState({ userName: event.target.value });
  };

  handleUserSearch = () => {
    this.props.showSpinner();
    getUserData(this.state.userName).then((userData) => {
      this.props.userDataReceived(userData);
    });
  };

  render() {
    return (
      <div className="name-form">
        <input
          type="text"
          className="name-form__input"
          value={this.state.userName}
          onChange={this.onChange}
        />
        <button className="name-form__btn btn" onClick={this.handleUserSearch}>
          Show
        </button>
      </div>
    );
  }
}
SearchField.propTypes = {
  showSpinner: propTypes.func,
  userDataReceived: propTypes.func,
};
const mapDispatch = {
  showSpinner: usersActions.showSpinner,
  userDataReceived: usersActions.userDataReceived,
};

export default connect(null, mapDispatch)(SearchField);
