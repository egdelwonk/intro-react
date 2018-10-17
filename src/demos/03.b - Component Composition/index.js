/**

Having a single component in your app wouldn't be much fun!
Components can use other components in their ouput. This is called component composition or composing components.

Using our avatar example above, you could make a list of avatars on the page

*/

import React from "react";

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.src} alt="Avatar" />
      <span className="avatar-user">Hello, {props.name}</span>
    </div>
  );
}

function AvatarList() {
  return (
    <div>
      <Avatar
        src="https://avatars3.githubusercontent.com/u/512548?s=460&v=4"
        name="Will"
      />
      <Avatar
        src="https://avatars1.githubusercontent.com/u/4604053?s=460&v=4"
        name="Lauren"
      />
      <Avatar
        src="https://avatars0.githubusercontent.com/u/815936?s=460&v=4"
        name="Russ"
      />
    </div>
  );
}

/**
 
When rendering this `<AvatarList/>` component, it would return a div with three avatars as children.
 */

export default AvatarList;
