import React, { Component } from "react";
import PersonalInformation from "./PersonalInformation";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";

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
