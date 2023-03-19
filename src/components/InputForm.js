import React, { Component } from "react";
import InputPerso from "./InputPerso";
import InputEdu from "./InputEdu";
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
        <InputPerso
          iptFirst={this.props.iptFirst}
          iptLast={this.props.iptLast}
          iptTitle={this.props.iptTitle}
        />
        <InputEdu
          iptSchool={this.props.iptSchool}
          iptTitleStudy={this.props.iptTitleStudy}
          iptDateStudy={this.props.iptDateStudy}
          onAddEduc={this.props.onAddEduc}
          newInputEdu={this.props.newInputEdu}
          state={this.props.state}
        />
        <PracticalExperience />
      </div>
    );
  }
}

export default InputForm;
