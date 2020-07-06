import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <img
          src= {process.env.PUBLIC_URL + '/arrow.png'}
          width="32"
          height="32"
          alt=""
        />
        Picky: Tool picker
        <img
          src={process.env.PUBLIC_URL + '/arrow.png'}
          width="32"
          height="32"
          alt=""
        />
      </header>
    );
  }
}
