/**

You use props to change or define the behavior of your components.
Props are read-only. The component receiving props cannot modify the props that are passed into the component. Props are passed down from a parent component to child component(s). Props are considered immutable.

When React sees a user-defined component, it passes the JSX attributes to the function or constructor as a single object, called "props".

In this example, the avatar component would receive a props object with `{src: "avatar.png", name: "will}.

The props are available on a class component under `this.props`, and on a functional component as the first argument on the function signature.

Props can be any type of value. Objects, Arrays, Strings, Functions, Other components, etc.
*/

import React from "react";

function Friend(props) {
  return (
    <div>
      {props.name} is your friend. {props.pronoun} is {props.age} years old.
    </div>
  );
}

// HoC Wrapper for the Demo
const FriendWrapper = () => <Friend name="Will" age="34" pronoun="He" />;
export default FriendWrapper;
