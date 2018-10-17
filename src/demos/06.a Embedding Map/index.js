/**


Embedding Map

In the previous examples you have seen that we used an expression inside of our return statement to call `.map()` on our list of friends.

You could use variables to store the return values of the map() and use it later.
*/

import React from "react";

const FriendsList = props => {
  const friends = props.friends.map((friend, id) => <li key={id}>{friend}</li>);

  return <ul>{friends}</ul>;
};

const FriendsListWrapper = () => (
  <FriendsList friends={["will", "mike", "chris"]} />
);

export default FriendsListWrapper;
