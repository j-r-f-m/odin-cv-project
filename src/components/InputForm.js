import React, { Component } from "react";
import PersonalInformation from "./InputPerso";
import EducationalExperience from "./InputEdu";
import PracticalExperience from "./InputPract";

class InputForm extends Component {
  constructor(props) {
    super(props);
  }

  test = () => {
    console.log(this.props);
  };

  render() {
    return (
      <div id="input--form--container">
        {/* access passed function from App.js with props-object and pass it to
        PersonalInformation.js wiht props */}
        <PersonalInformation
          iptFirst={this.props.iptFirst}
          iptLast={this.props.iptLast}
          iptTitle={this.props.iptTitle}
        />
        <EducationalExperience />
        <PracticalExperience />
      </div>
    );
  }
}

export default InputForm;
