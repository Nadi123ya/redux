import React from "react";
import Filter from "./Filter";
import User from "./User";
import { connect } from "react-redux";
import { setFilterText } from "./users.actions.js";
import {usersListSelector, filterTextSelector} from "./users.selectors"

class UsersList extends React.Component {

  render() {
    const { users, filter, handleInput } = this.props;
    return (
      <div>
        <div className="filter">
          <Filter
            filterText={filter}
            count={users.length}
            onChange={(e) => handleInput(e.target.value)}
          />
        </div>
        <ul className="users">
          {users.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    users: usersListSelector(state),
    filter: filterTextSelector(state),
  };
};


const mapDispatch = {
  handleInput: setFilterText,
};

export default connect(mapState, mapDispatch)(UsersList);
