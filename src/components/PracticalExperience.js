import React, { Component } from "react";

class PracticalExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="">
        <h3 id="input--form--title" className="form--headers">
          Practical Experience
        </h3>
        <form id="input--form">
          <input
            type="text"
            placeholder="Company Name"
            className="form--inputs"
            name="companyName"
          />
          <input
            type="text"
            placeholder="Positon Title"
            className="form--inputs"
            name="positionTitle"
          />
          <input
            type="text"
            placeholder="Main Tasks Of your Job"
            className="form--inputs"
            name="mainTask"
          />

          <input
            type="text"
            placeholder="From"
            className="form--inputs"
            name="from"
          />
          <input
            type="text"
            placeholder="To"
            className="form--inputs"
            name="to"
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

export default PracticalExperience;
