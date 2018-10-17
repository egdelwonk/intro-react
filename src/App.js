import React, { Component } from "react";
import "./App.css";

import Demo1 from "./demos/01 - What is React";
import Demo2 from "./demos/02 - What is JSX";
import Demo3 from "./demos/02.a - Expressions";
import Demo4 from "./demos/02.b - Attributes";
import Demo5 from "./demos/02.c - Children";
import Demo6 from "./demos/02.d - Rendering Elements";
import Demo7 from "./demos/03 - Components";
import Demo8 from "./demos/03.a - Class Components";
import Demo9 from "./demos/03.b - Component Composition";
import Demo10 from "./demos/03.c - Props";
import Demo11 from "./demos/03.d - State";
import Demo12 from "./demos/04 - Event Handling";
import Demo13 from "./demos/05 - Conditional Rendering";
import Demo14 from "./demos/05.a -Preventing Rendering";
import Demo15 from "./demos/06 - Lists and Keys";
import Demo16 from "./demos/06.a Embedding Map";
import Demo17 from "./demos/07 - Forms";
import Demo18 from "./demos/08 - Lifting State";

const demos = [
  { name: "What is React ?", source: Demo1 },
  { name: "What is JSX ?", source: Demo2 },
  { name: "JSX Expressions", source: Demo3 },
  { name: "JSX Attributes", source: Demo4 },
  { name: "JSX Children", source: Demo5 },
  { name: "Rendering Elements", source: Demo6 },
  { name: "Components", source: Demo7 },
  { name: "Class Components", source: Demo8 },
  { name: "Component Composition", source: Demo9 },
  { name: "Component Props", source: Demo10 },
  { name: "Component State", source: Demo11 },
  { name: "Event Handling", source: Demo12 },
  { name: "Conditional Rendering", source: Demo13 },
  { name: "Preventing Rendering", source: Demo14 },
  { name: "Lists and Keys", source: Demo15 },
  { name: "Embedding Map", source: Demo16 },
  { name: "Forms", source: Demo17 },
  { name: "Lifting State", source: Demo18 }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDemo: demos[0]
    };
  }

  setActiveDemo(demo) {
    this.setState({
      activeDemo: demo
    });
  }
  render() {
    const ActiveDemo = this.state.activeDemo.source;
    return (
      <div className="App">
        <nav>
          {demos.map(demo => {
            const className =
              this.state.activeDemo.name === demo.name ? "active" : "";

            return (
              <a
                key={demo.name}
                className={className}
                onClick={() => this.setActiveDemo(demo)}
              >
                {demo.name}
              </a>
            );
          })}
        </nav>

        <header>
          <div className="wrapper">
            <div className="container container-narrow">
              <h1>{this.state.activeDemo.name}</h1>
            </div>
          </div>
        </header>

        <main className="container container--narrow">
          <ActiveDemo />
        </main>
      </div>
    );
  }
}

export default App;
