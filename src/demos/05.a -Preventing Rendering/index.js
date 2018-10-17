/**


Conditional Rendering


Preenting Rendering 


Return `null` during `render()` to prevent the component from rendering.

*/

import React from "react";

const Avatar = props => {
  if (props.hideAvatar) {
    return null;
  }

  return (
    <div className="avatar">
      <img src={props.src} alt="avatar" />
      <span>Hello, {props.name}</span>
    </div>
  );
};

const AvatarWrapper = () => (
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
      hideAvatar={true}
    />
  </div>
);

export default AvatarWrapper;
