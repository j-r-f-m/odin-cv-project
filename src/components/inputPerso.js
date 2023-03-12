import React, { Component } from "react";

class PersonalInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="">
        <h3 id="card--title" className="form--headers">
          Personal Information
        </h3>
        <form id="input--form">
          <input
            type="text"
            placeholder="First Name"
            className="form--inputs"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="form--inputs"
            name="lastName"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="form--inputs"
            name="phoneNumber"
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

export default PersonalInformation;
