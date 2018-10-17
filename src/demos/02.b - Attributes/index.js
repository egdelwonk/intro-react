/**
 * Attributes
 Similar to HTML attributes are defined as key=value pairs.

 - Use quotes to specify string literals as attributes.
 - Use curly braces to use an expression for the attribute value.


When an element type starts with a lowercase letter, it refers to a built-in component like `<div>` or `<span>` and results in a string `'div'` or `'span'` passed to `React.createElement.` Types that start with a capital letter like `<Foo />` compile to `React.createElement(Foo)` and correspond to a component defined or imported in your JavaScript file.

Built-in elements can accept all of the attributes available on their HTML equivalent elements.

One thing to remember: JSX is closer to Javascript than HTML. Some properties need to use the DOM propery name to work properly, versus the html attribute. For example, class becomes className in JSX, and tabindex becomes tabIndex.
 */

import React from "react";

const Attributes = () => {
  const avatar = "https://avatars3.githubusercontent.com/u/512548?s=460&v=4";

  return (
    <div className="avatar">
      <img src={avatar} alt="Avatar" />
      <span>Will</span>
    </div>
  );
};

export default Attributes;
