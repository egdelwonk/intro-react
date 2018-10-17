# Outline

## What is React ?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

## Why React ?

- Simple
- Declarative
- Composable

## What is JSX

As we build out our examples, you may come across a strange looking syntax. A hybrid of HTML and Javascript. This is called JSX.

JSX is a syntax extension to JavaScript. It allows you to describe what your UI should look like.
It looks a lot like HTML or other templating languages you may have seen, but it also has the full power of Javascript.

```jsx
  <div id="hello">Hello world</div>
  <UserAvatar src="avatar.png" />
```

The purpose of JSX is to produces React "Elements". Elements are the smallest building blocks of React apps.
The use of JSX is not required but it is recommened, because without JSX the code can be quite verbose.

As you can see by the following example, Babel compiles JSX down to React.createElement() calls.
These examples are functionally equivalent:

```jsx
const element = <h1 className="greeting">Hello, world!</h1>;
```

```jsx
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
```

### Expressions

You can put any valid JavaScript expression inside the curly braces in JSX.
`{ 2 + 2 }` or {someVariable} or {someFunction()}

### Attributes

- Use quotes to specify string literals as attributes:

```jsx
<img src="avatar.png" />
```

- Use curly braces to use an expression for the attribute value:

```jsx
const avatar = "avatar.png";
<img src={avatar} />;
```

> One thing to remember: JSX is closer to Javascript than HTML. Some properties need to use the DOM propery name to work properly, versus the html attribute. For example, class becomes className in JSX, and tabindex becomes tabIndex.

### Conventions

_User-Defined Components Must Be Capitalized_
When an element type starts with a lowercase letter, it refers to a built-in component like `<div>` or `<span>` and results in a string `'div'` or `'span'` passed to `React.createElement.` Types that start with a capital letter like `<Foo />` compile to `React.createElement(Foo)` and correspond to a component defined or imported in your JavaScript file.

### Children Elements

If a tag is empty, you may close it immediately with />, like XML:

```jsx
<img src={user.avatarUrl} />
```

However, a JSX (like HTML), can have children:

```jsx
<div>
  <h1>Hello!</h1>
  <h2>Good to see you here.</h2>
</div>
```

### Rendering Elements

Elements are the smallest building blocks of React apps. Elements are what components are "made of".

To render a react element onto the screen, you must define a container for the application to "render" into.
A common convention is to define a "root" dom node on your page. We call this a "root" DOM node because everything inside it will be managed by React DOM.

```jsx
<div id="root" />
```

To render a React element into a root DOM node, pass both to ReactDOM.render():

```jsx
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById("root"));
```

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

## Components

### What is a component?

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen. Remember, elements are the smallest building blocks in a react app. (divs, spans, etc.)

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

[Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

### Function and Class Components

The simplest way to make a component is to write a function:

```jsx
function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.src} />
      <span className="avatar-user">Hello, {props.name}</span>
    </div>;
}
```

In order for a simple function to be a component, it needs to do atleast two things:

1. Accept an argument for props.
2. Return elements.

You can also use a class to write a React component:

```jsx
class Avatar extends React.Component {
  render() {
    return (
      <div className="avatar">
        <img src={this.props.src} />
        <span className="avatar-user">Hello, {this.props.name}</span>
      </div>
    );
  }
}
```

When React sees a user-defined component, it passes the JSX attributes to the function or constructor as a single object, called "props".

In this example, the avatar component would receive a props object with `{src: "avatar.png", name: "will}`

```jsx
const avatar = <Avatar src="avatar.png" name="Will" />;
```

### Component Composition

Having a single component in your app wouldn't be much fun!
Components can use other components in their ouput. This is called component composition or composing components.

Using our avatar example above, you could make a list of avatars on the page:

```jsx
function AvatarList() {
  return (
    <div>
      <Avatar src="avatar-lauren.png" name="Lauren" />
      <Avatar src="avatar-will.png" name="Will" />
      <Avatar src="avatar-russ.png" name="Russ" />
    </div>
  );
}
```

When rendering this `<AvatarList/>` component, it would return a div with three avatars as children.

### Props

You use props to change or define the behavior of your components.
Props are read-only. The component receiving props cannot modify the props that are passed into the component. Props are passed down from a parent component to child component(s). Props are considered immutable.

### State

Up until now, we have only been dealing with props. These are static values that are being passed down our component tree from parent to child. Once defined, the props do not change, but as we know, most applications are not static. They have values that change over time, or as a user interacts with the page.

In order to work with dynamic changing values, we must use state.

Components defined with functions, as we showed above, only accept `props` as an argument. So we must use class components to use state.

[Code Example](https://codepen.io/anon/pen/rqJqox?editors=0010)

```jsx
const Friend = props => {
  return <div>My friend is named {props.name}.</div>;
};

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: ["lauren", "russ", "aimee", "john"],
      likes: 10
    };
  }

  incrementFriend() {
    this.setState((state, props) => {
      return { likes: state.likes + 1 };
    });
  }
  componentDidMount() {
    // Every second, call incrementFriend to increase our likes count
    this.friendIncrementer = setInterval(() => this.incrementFriend(), 1000);
  }

  componentWillUnmount() {
    // Clear the incrementer when this component is removed
    clearInterval(this.friendIncrementer);
  }

  render() {
    return (
      <div>
        <h2>Friends</h2>
        {this.state.friends.map(name => (
          <Friend name={name} />
        ))}
        <h3>Likes</h3>
        <p>
          {this.state.friends.length} friends have liked me {this.state.likes}{" "}
          times.
        </p>
      </div>
    );
  }
}

In our example above, we introduced the concept of lifecyle methods. We will talk about those more in detail later.
```

### Setting State

Never modify state directly. setState causes the component to `render()` again. If you update the state directly, the component is not aware of the update. e.g.

```jsx
// Wrong
this.state.comment = "Hello";

// Correct
this.setState({ comment: "Hello" });
```

### Encapsulated props and State

State and Props are encapsulated to the component that they are defined in. A components state or props is not made aware of it's parent's or children components.

This is commonly called a "top-down" or "unidirectional" data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components "below", (i.e. their children) them in the tree.

## Event Handling

Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:

React events are named using camelCase, rather than lowercase.
With JSX you pass a function as the event handler, rather than a string.

[Code Example](https://codepen.io/anon/pen/zmRMQj?editors=0010)

```jsx
const Friend = props => {
  return <div>My friend is named {props.name}.</div>;
};

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: ["lauren", "russ", "aimee", "john"]
    };
  }

  onFriendAdd = e => {
    if (e.key === "Enter") {
      const friend = e.target.value;

      this.setState(state => {
        // Append our new friend to our existing friends list
        return {
          friends: [...state.friends, friend]
        };
      });
    }
  };

  render() {
    return (
      <div>
        <h2>Friends</h2>
        {this.state.friends.map(name => (
          <Friend key={name} name={name} />
        ))}

        <hr />
        <input
          type="text"
          onKeyPress={this.onFriendAdd}
          placeholder="Friend Name"
        />
      </div>
    );
  }
}
```

For React elements, an event handler attribute can be passed any function as a value. This can be a method defined on the class, or a stand alone function.

When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class.

## Conditional Rendering

In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.

### Element Variables

You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change.

```jsx
const Avatar = props => {
  let welcomeMsg = <p>Hello, {props.name}</p>;

  if (props.isReturning) {
    welcomeMsg = <p>Welcome back, {props.name}</p>;
  }

  return (
    <div className="avatar">
      <img src={props.src} />
      {welcomeMsg}
    </div>
  );
};
```

### Preventing Component from Rendering

Return `null` during `render()` to prevent the component from rendering.

```jsx
const Avatar = props => {
  if (props.hideAvatar) {
    return null;
  }

  return (
    <div className="avatar">
      <img src={props.src} />
      <span>Hello, {props.name}</span>
    </div>
  );
};
```

## Lists and Keys

You can render a list of components using curly braces:

```jsx
const FriendsList = () => {
  const friends = [<li>Will</li>, <li>mike</li>, <li>chri</li>];

  return <ul>{friends}</ul>;
};
```

You can build your element list dynamically from data:

```jsx
const FriendsList = props => {
  const friends = ["will", "mike", "chris"];
  return (
    <ul>
      {friends.map(friend => (
        <li>{friend}</li>
      ))}
    </ul>
  );
};
```

```jsx
// Accept a list of friends as props
const FriendsList = props => {
  return (
    <ul>
      {props.friends.map(friend => (
        <li key={friend}>{friend}</li>
      ))}
    </ul>
  );
};

// Usage
<FriendsList friends={["will", "mike", "chris"]} />;
```

When you run this code, you’ll be given a warning that a key should be provided for list items. A "key" is a special string attribute you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys. Key's only need to be unique amongst their siblings. They do not need to be globally unique.

Let's add a key to our FriendsList:

```jsx
// Accept a list of friends as props
const FriendsList = props => {
  return (
    <ul>
      {props.friends.map(friend => (
        <li>{friend}</li>
      ))}
    </ul>
  );
};

// Usage
<FriendsList friends={["will", "mike", "chris"]} />;
```

If we add a friend with the same name, it will have the same key, and this will cause issues when updating the components on the page. Let's refactor our component to handle this.

```jsx
// Accept a list of friends as props
const FriendsList = props => {
  return (
    <ul>
      {props.friends.map(friend => (
        <li key={friend.id}>{friend.name}</li>
      ))}
    </ul>
  );
};

// Usage
<FriendsList
  friends={[
    { name: "will", id: 1 },
    { name: "mike", id: 2 },
    { name: "chris", id: 3 },
    { name: "will", id: 4 }
  ]}
/>;
```

In a case where your data doesn't have unique values to identify the element in the list, you can use the array index, but this can negatively impact performance.

```jsx
// Accept a list of friends as props
const FriendsList = props => {
  return (
    <ul>
      {props.friends.map((friend, id) => (
        <li key={id}>{friend}</li>
      ))}
    </ul>
  );
};

// Usage
<FriendsList friends={["will", "mike", "chris"]} />;
```

### Embedding map

In the previous examples you have seen that we used an expression inside of our return statement to call `.map()` on our list of friends.

You could use variables to store the return values of the map() and use it later.

```jsx
// Accept a list of friends as props
const FriendsList = props => {
  const friends = props.friends.map((friend, id) => <li key={id}>{friend}</li>);

  return <ul>{friends}</ul>;
};

// Usage
<FriendsList friends={["will", "mike", "chris"]} />;
```

## Forms

[Learn more](https://reactjs.org/docs/forms.html)

```jsx
class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      friends: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    const friend = this.state.name;
    console.log("A friend was added: " + friend);

    this.setState(state => {
      return {
        name: "", // Clear the name
        friends: [...state.friends, friend] // Add our new friend to the list
      };
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Friends</h2>
        <ul>
          {this.state.friends.map((f, id) => (
            <li key={id}>{f}</li>
          ))}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
```

## Lifting up State

Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.

```jsx
const FriendsCount = ({ friends }) => <p>You have {friends.length} friends</p>;

const FriendsList = ({ friends }) => (
  <div>
    <h2>Friends</h2>
    <ul>
      {friends.map(friend => (
        <li key={friend}>{friend}</li>
      ))}
    </ul>
  </div>
);

const FriendsAdd = ({ handleSubmit, handleChange, name }) => (
  <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input type="text" value={name} onChange={handleChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
);

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      friends: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    const friend = this.state.name;

    this.setState(state => {
      return {
        name: "", // Clear the name
        friends: [...state.friends, friend] // Add our new friend to the list
      };
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <FriendsCount friends={this.state.friends} />
        <FriendsList friends={this.state.friends} />
        <FriendsAdd
          name={this.state.name}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
```
