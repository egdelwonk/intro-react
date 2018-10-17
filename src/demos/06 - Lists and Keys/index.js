/**


Lists and Keys

 A "key" is a special string attribute you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys. Key's only need to be unique amongst their siblings. They do not need to be globally unique.

 Note that `key` does not come down as a prop into the component. It is only used in the parent component.
*/

import React from "react";

// You can render a list of components using curly braces:
const FriendsList = () => {
  const friends = [<li>Will</li>, <li>mike</li>, <li>chris</li>];

  return <ul>{friends}</ul>;
};

// You can build your element list dynamically from data:
const FriendsListData = props => {
  const friends = ["will", "mike", "chris"];
  return (
    <ul>
      {friends.map(friend => (
        <li>{friend}</li>
      ))}
    </ul>
  );
};

// Accept a list of friends as props
const FriendsListProps = props => {
  const friends = ["will", "mike", "chris"];

  // If we add a friend with the same name, it will have the same key, and this will cause issues when updating the components on the page. Let's refactor our component to handle this.

  // In a case where your data doesn't have unique values to identify the element in the list, you can use the array index, but this can negatively impact performance.
  return (
    <ul>
      {friends.map((friend, index) => (
        <li key={index}>{friend}</li>
      ))}
    </ul>
  );
};

const FriendsListKeyed = props => {
  return (
    <ul>
      {props.friends.map(friend => (
        <li key={friend.id}>{friend.name}</li>
      ))}
    </ul>
  );
};

const FriendsListWrapper = () => (
  <div>
    <FriendsList />
    <FriendsListData />
    <FriendsListProps friends={["will", "mike", "chris"]} />
    <FriendsListKeyed
      friends={[
        { name: "will", id: 1 },
        { name: "mike", id: 2 },
        { name: "chris", id: 3 },
        { name: "will", id: 4 }
      ]}
    />
  </div>
);

export default FriendsListWrapper;
