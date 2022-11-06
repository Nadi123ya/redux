import React from "react";
import { connect } from "react-redux";
import * as userActions from "./users.actions.js";

class Users extends React.Component {

  onUserCreate = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User # ${id}`,
    };
    this.props.createUser(newUser);
  };

  render() {

    const { users, deleteUser } = this.props;
console.log(this.props)
    return (
      <div className="users">
        <button onClick={this.onUserCreate} className="users__create-btn">
          Create User
        </button>
        <ul className="users__list">
          {users.map((user) => (
            <li key={user.id} className="users__list-item">
              {user.name}
              <button
                onClick={() => deleteUser(user.id)}
                className="users__delete-btn"
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state, props) => {
  console.log(props)
  console.log(state)
  return {
    users: state.users.usersList,
  };
};

//state.users - store.js
//usersList - users.reducer.js

const mapDispatch = {
  createUser: userActions.addUser,
  deleteUser: userActions.deleteUser,
};

const connector = connect(mapState, mapDispatch);

const connectedUsers = connector(Users);

export default connectedUsers;
