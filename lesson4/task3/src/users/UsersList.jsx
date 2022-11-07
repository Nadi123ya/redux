import React, { Component } from 'react';
import Pagination from './Pagination';
import User from './User';
import { users } from './users';
import store from './store';
import { connect } from 'react-redux';
import * as pageActions from './page.actions';


class UsersList extends Component {
  render() {
    
    const { page, increment, decrement } = this.props;
    const itemsPerPage = 3;
    const pageStart = page * itemsPerPage;
    const pageEnd = pageStart + itemsPerPage;
    const usersToDisplay = store.getState().users.usersList.slice(pageStart, pageEnd);
    
    
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
        {
          usersToDisplay.map(user => (
          <User key={user.id} name={user.name} age={user.age}/>
          ))
        }
        </ul>
  
      </div>
    )
  }

}

const mapState = state => {
  return {
    page: state.currentPage,
  };
};

const mapDispatch = {
  increment: pageActions.increment,
  decrement: pageActions.decrement,
}



const connector = connect(mapState, mapDispatch); // HOC

export default connector(UsersList);