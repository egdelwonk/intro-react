/**


Event Handling


Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:

React events are named using camelCase, rather than lowercase.
With JSX you pass a function as the event handler, rather than a string.

For React elements, an event handler attribute can be passed any function as a value. This can be a method defined on the class, or a stand alone function.

When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class.
*/

import React from "react";

const Friend = props => {
  return <div>My friend is named {props.name}.</div>;
};

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: ["lauren", "russ", "aimee", "john"]
    };
  }

  onFriendAdd = e => {
    if (e.key === "Enter") {
      const friend = e.target.value;
      e.target.value = "";
      this.setState(state => {
        // Append our new friend to our existing friends list
        return {
          friends: [...state.friends, friend]
        };
      });
    }
  };

  render() {
    return (
      <div>
        <h2>Friends</h2>
        {this.state.friends.map(name => (
          <Friend key={name} name={name} />
        ))}

        <hr />
        <input
          type="text"
          onKeyPress={this.onFriendAdd}
          placeholder="Friend Name"
        />
      </div>
    );
  }
}

export default FriendsList;
