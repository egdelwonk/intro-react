/**
 * Children Elements

 Similar to HTML, react elements can have children.
 If a tag is empty, you may close it immediately with />, like XML. 
 Otherwise, you wrap the enclosing children with a closing tag.
 */

import React from "react";

const Children = () => {
  // Each p element is a child of the div
  return (
    <div>
      <p>Hello World!</p>
      <p>Good to see you here!</p>
    </div>
  );
};

export default Children;
