import React, { Component } from "react";

class EducationalExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="">
        <h3 id="card--title" className="form--headers">
          Educational Experience
        </h3>
        <form id="input--form">
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
            <button>Add</button>
            <button>Delete</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EducationalExperience;
