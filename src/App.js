import "./styles/styles.css";
import React, { Component } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Output from "./components/Output";

class App extends Component {
  // pass props as argument to constructor
  constructor(props) {
    super(props);

    // bind methods to the context in which they were created
    this.iptFirstName = this.iptFirstName.bind(this);
    this.iptLastName = this.iptLastName.bind(this);

    // state for personal information
    this.state = {
      persInfo: {
        firstName: "",
        lastName: "",
        title: "",
      },
    };
  }

  iptFirstName = (e) => {
    this.setState({
      persInfo: {
        firstName: e.target.value,
        lastName: this.state.persInfo.lastName,
        title: this.state.persInfo.title,
      },
    });

    console.log(this.state.persInfo);
  };

  iptLastName = (e) => {
    this.setState({
      persInfo: {
        firstName: this.state.persInfo.firstName,
        lastName: e.target.value,
        title: this.state.persInfo.title,
      },
    });
    console.log(this.state.persInfo);
  };

  iptTitle = (e) => {
    this.setState({
      persInfo: {
        firstName: this.state.persInfo.firstName,
        lastName: this.state.persInfo.lastName,
        title: e.target.value,
      },
    });
    console.log(this.state.persInfo);
  };

  // render jsx to html??
  render() {
    return (
      <div id="app--container">
        <Header />
        <section id="main">
          {/* pass defined function to inputForm with porp named "handleClick" */}
          <InputForm
            iptFirst={this.iptFirstName}
            iptLast={this.iptLastName}
            iptTitle={this.iptTitle}
          />
          <Output state={this.state} />
        </section>
      </div>
    );
  }
}

export default App;
