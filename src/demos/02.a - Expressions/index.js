/**
 * Expressions
 
 You can put any valid JavaScript expression inside the curly braces in JSX.
  e.g `{ 2 + 2 }` or {someVariable} or {someFunction()}
 */
import React from "react";

const Expressions = () => {
  const someVariable = "Hello World!";
  const someFunction = () => "Some function!";

  return (
    <div>
      <p>2 + 2 = {2 + 2}</p>
      <p>someVariable = {someVariable}</p>
      <p>someFunction = {someFunction()}</p>
    </div>
  );
};

export default Expressions;
