/**


Forms

[Learn more](https://reactjs.org/docs/forms.html)
*/

import React from "react";

class AddFriend extends React.Component {
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
    console.log("A friend was added: " + friend);

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
        <h2>Friends</h2>
        <ul>
          {this.state.friends.map((f, id) => (
            <li key={id}>{f}</li>
          ))}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <label>
            <span>Name:</span>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddFriend;
