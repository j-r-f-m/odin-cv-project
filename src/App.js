import "./styles/styles.css";
import React, { Component } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";

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
        </section>
      </div>
    );
  }
}

export default App;
