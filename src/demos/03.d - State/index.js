/**


Component State 


Up until now, we have only been dealing with props. These are static values that are being passed down our component tree from parent to child. Once defined, the props do not change, but as we know, most applications are not static. They have values that change over time, or as a user interacts with the page.

In order to work with dynamic changing values, we must use state.

Components defined with functions, as we showed before, only accept `props` as an argument. So we must use class components to use state.

*/

import React from "react";

const Friend = props => {
  return <div>My friend is named {props.name}.</div>;
};

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: ["lauren", "russ", "aimee", "john"],
      likes: 10
    };
  }

  incrementFriend() {
    this.setState((state, props) => {
      return { likes: state.likes + 1 };
    });
  }
  componentDidMount() {
    // Every second, call incrementFriend to increase our likes count
    this.friendIncrementer = setInterval(() => this.incrementFriend(), 1000);
  }

  componentWillUnmount() {
    // Clear the incrementer when this component is removed
    clearInterval(this.friendIncrementer);
  }

  render() {
    return (
      <div>
        <h2>Friends</h2>
        {this.state.friends.map(name => (
          <Friend name={name} />
        ))}
        <h3>Likes</h3>
        <p>
          {this.state.friends.length} friends have liked me {this.state.likes}{" "}
          times.
        </p>
      </div>
    );
  }
}

/**
 
  Never modify state directly. setState causes the component to `render()` again. If you update the state directly, the component is not aware of the update. e.g.

  // Wrong
  this.state.comment = "Hello";

  // Correct
  this.setState({ comment: "Hello" });


  State and Props are encapsulated to the component that they are defined in. A components state or props is not made aware of it's parent's or children components.

  This is commonly called a "top-down" or "unidirectional" data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components "below", (i.e. their children) them in the tree.
 
  In our example above, we introduced the concept of lifecyle methods. We will talk about those more in detail later.

 */

export default FriendsList;
