import "./styles/styles.css";
import React, { Component } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Output from "./components/Output";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app--container">
        <Header />
        <section id="main">
          <InputForm />
          <Output />
        </section>
      </div>
    );
  }
}

export default App;
