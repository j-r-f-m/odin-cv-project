import React, { Component } from "react";

class InputPerso extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="">
        <h3 className="form--headers card--title">Personal Information</h3>
        <form className="input--form">
          <input
            type="text"
            placeholder="First Name"
            className="form--inputs"
            name="firstName"
            // acces function passed from App.js with propsasdf
            onChange={this.props.iptFirst}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="form--inputs"
            name="lastName"
            onChange={this.props.iptLast}
          />
          <input
            type="text"
            placeholder="Title"
            className="form--inputs"
            name="title"
            onChange={this.props.iptTitle}
          />
          <div className="button--container">
            <button>Add</button>
            <button>Delete</button>
          </div>
        </form>
      </div>
    );
  }
}

export default InputPerso;
