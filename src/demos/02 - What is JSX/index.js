/**

What is JSX ?

As we build out our examples, you may come across a strange looking syntax. A hybrid of HTML and Javascript. This is called JSX.

JSX is a syntax extension to JavaScript. It allows you to describe what your UI should look like. It looks a lot like HTML or other templating languages you may have seen, but it also has the full power of Javascript.

The purpose of JSX is to produces React "Elements". Elements are the smallest building blocks of React apps.
The use of JSX is not required but it is recommened, because without JSX the code can be quite verbose.

As you can see by the following example, Babel compiles JSX down to React.createElement() calls.
These examples are functionally equivalent:
*/
import React from "react";

const HelloWorld = () => {
  const jsxElement = <p className="greeting">Hello, world!</p>;

  const element = React.createElement(
    "p", // Tag name
    { className: "greeting" }, // Attributes
    "Hello, world!" // Children
  );

  return (
    <div>
      <strong>JSX Version:</strong> {jsxElement}
      <strong>createElement Version:</strong> {element}
    </div>
  );
};

export default HelloWorld;
