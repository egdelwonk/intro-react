/**
## Components

### What is a component?

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen. Remember, elements are the smallest building blocks in a react app. (divs, spans, etc.)

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

[Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
*/

import React from "react";

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.src} alt={`${props.name}'s avatar`} />
      <span className="avatar-user">Hello, {props.name}</span>
    </div>
  );
}

/**
 
In order for a simple function to be a component, it needs to do atleast two things:

1. Accept an argument for props.
2. Return elements.
*/

const AvatarWrapper = () => (
  <Avatar
    src="https://avatars3.githubusercontent.com/u/512548?s=460&v=4"
    name="Will"
  />
);
export default AvatarWrapper;
