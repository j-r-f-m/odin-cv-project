import React, { Component } from "react";
import PersonalInformation from "./inputPerso";
import EducationalExperience from "./inputEdu";
import PracticalExperience from "./inputPract";

class InputForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="input--form--container">
        <PersonalInformation />
        <EducationalExperience />
        <PracticalExperience />
      </div>
    );
  }
}

export default InputForm;
