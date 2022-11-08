import React, { Component } from "react";
import Pagination from "./Pagination";
import User from "./User";
import { connect } from "react-redux";
import * as pageActions from "./page.actions";
import propTypes from "prop-types";

class UsersList extends Component {
  render() {
    const { page, users,  increment, decrement } = this.props;
    const itemsPerPage = 3;
    const pageStart = page * itemsPerPage;
    const pageEnd = pageStart + itemsPerPage;
    const usersToDisplay = users.slice(pageStart, pageEnd);

    return (
      <div>
        <Pagination
          goPrev={decrement}
          goNext={increment}
          currentPage={page}
          totalIteam={users.length}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {usersToDisplay.map((user) => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

// to ensure that an array of objects being passed to a component is
// actually an array of objects of a specific shape

UsersList.propTypes = {
  users: propTypes.arrayOf(
    propTypes.shape({ id: "id-0", age: 21, name: "Bob" })
  ),
  currentPage: propTypes.string,
  goNext: propTypes.func,
  goPrev: propTypes.func,
};

const mapState = (state) => {
  return {
    page: state.currentPage,
    users: state.users.usersList,
  };
};

const mapDispatch = {
  increment: pageActions.increment,
  decrement: pageActions.decrement,
};

const connector = connect(mapState, mapDispatch); // HOC

export default connector(UsersList);
