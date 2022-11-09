import React from "react";
import Filter from "./Filter";
import User from "./User";
import { connect } from "react-redux";
import { setFilterText } from "./users.actions.js";

class UsersList extends React.Component {

  render() {
    const { users, filter, handleInput } = this.props;
    console.log(this.props);
   console.log(filter)
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
    users: state.users.usersList,
    filter: state.users.filterText,
  };
};


const mapDispatch = {
  handleInput: setFilterText,
};

export default connect(mapState, mapDispatch)(UsersList);
