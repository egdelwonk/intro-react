/**


Lifting State

Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.

*/

import React from "react";

const FriendsCount = ({ friends }) => <p>You have {friends.length} friends</p>;

const FriendsList = ({ friends }) => (
  <div>
    <h2>Friends</h2>
    <ul>
      {friends.map(friend => (
        <li key={friend}>{friend}</li>
      ))}
    </ul>
  </div>
);

const FriendsAdd = ({ handleSubmit, handleChange, name }) => (
  <form onSubmit={handleSubmit}>
    <label>
      <span>Name:</span>
      <input type="text" value={name} onChange={handleChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
);

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      friends: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    const friend = this.state.name;

    this.setState(state => {
      return {
        name: "", // Clear the name
        friends: [...state.friends, friend] // Add our new friend to the list
      };
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <FriendsCount friends={this.state.friends} />
        <FriendsList friends={this.state.friends} />
        <FriendsAdd
          name={this.state.name}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Friends;
