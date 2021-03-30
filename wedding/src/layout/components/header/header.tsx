import React, { Component } from "react";
import { Link } from "react-router-dom";

type HeaderProps = {
  //
};

class Header extends Component<HeaderProps, any> {
  public render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Our Story</Link>
          </li>
          <li>
            <Link to="/bestfriends">Bestfriends</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
