import "./styles/styles.css";
import React, { Component } from "react";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app--container">
        <Header />
      </div>
    );
  }
}

export default App;
