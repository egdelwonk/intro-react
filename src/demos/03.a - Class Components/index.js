/**
You can also use a class to write a React component
*/

import React, { Component } from "react";

class Avatar extends Component {
  render() {
    return (
      <div className="avatar">
        <img src={this.props.src} alt={`${this.props.name}'s avatar`} />

        <span className="avatar-user">Hello, {this.props.name}</span>
      </div>
    );
  }
}

const AvatarWrapper = () => (
  <Avatar
    src="https://avatars3.githubusercontent.com/u/512548?s=460&v=4"
    name="Will"
  />
);
export default AvatarWrapper;
