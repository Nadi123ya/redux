import React from "react";
import UserMenu from "./UserMenu";
import {UserContext} from "./context";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <UserMenu />
      </header>
    );
  }
}

Header.contextType = UserContext;

export default Header;


