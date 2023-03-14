import React, { Component } from "react";

class InputEdu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="input--Edu">
        <h3 className="form--headers card--title">Educational Experience</h3>
        <form className="input--form">
          <input
            type="text"
            placeholder="School Name"
            className="form--inputs"
            name="schoolName"
          />
          <input
            type="text"
            placeholder="Title Of Study"
            className="form--inputs"
            name="titleOfStudy"
          />
          <input
            type="text"
            placeholder="Date of Study"
            className="form--inputs"
            name="dateOfStudy"
          />
          <div className="button--container">
            <button onClick={this.props.newInputEdu}>Add</button>
            <button>Delete</button>
          </div>
        </form>
      </div>
    );
  }
}

export default InputEdu;
