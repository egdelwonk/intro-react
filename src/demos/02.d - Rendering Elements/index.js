/**
### Rendering Elements

Elements are the smallest building blocks of React apps. Elements are what components are "made of".

To render a react element onto the screen, you must define a container for the application to "render" into.

A common convention is to define a "root" dom node on your page. We call this a "root" DOM node because everything inside it will be managed by React DOM.

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.
*/

import React from "react";
// import ReactDOM from "react-dom";

const RenderingElements = () => {
  return (
    <div>
      <p>Hello World!</p>
    </div>
  );
};

// We render our app in the index.js file.
// ReactDOM.render(<RenderingElements />, document.getElementById("root"));

export default RenderingElements;
