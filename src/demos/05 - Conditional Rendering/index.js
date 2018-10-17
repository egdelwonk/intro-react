/**


Conditional Rendering


In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.


### Element Variables

You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change.

*/

import React from "react";

const Avatar = props => {
  let welcomeMsg = <p>Hello, {props.name}</p>;

  if (props.isReturning) {
    welcomeMsg = <p>Welcome back, {props.name}</p>;
  }

  return (
    <div className="avatar">
      <img src={props.src} alt="avatar" />
      {welcomeMsg}
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
      isReturning={true}
    />
  </div>
);

export default AvatarWrapper;
