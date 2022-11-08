import React from "react";
import Filter from "./Filter";
import User from "./User";
import { connect } from "react-redux";

class UsersList extends React.Component {

  // handleChange = (e) => {
  //   this.setState({
  //     filter: e.target.value,
  //   });
  // };

  render() {
    const { users } = this.props;
    
    return (
      <div>
        <div className="filter">
          <Filter
            filterText={fliter}
            count={users.length}
            // onChange={handleChange}
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
  console.log(state.users)
  console.log(state.users.UsersList)
  return {
    users: state.users.UsersList,
    filter: state.users.filteredText,
  };
};

// const mapDispatch= {
//   moveOption: handleChange
// }

export default connect(mapState,null )(UsersList);

