import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div>
        <h1>hello{this.props.data}</h1>
      </div>
    );
  }
}

export default Nav;
