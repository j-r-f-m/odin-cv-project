import React, { Component } from "react";

class InputEdu extends Component {
  constructor(props) {
    super(props);
    // this.inputReference = React.createRef();

    this.state = { setFocus: true };
  }

  // componentDidUpdate() {
  //   this.inputReference.current.focus();
  // }

  onFocInp = (e) => {
    console.log(this.state);
  };

  test = () => {
    console.log(this.props);
  };

  render() {
    return (
      <div id="input--Edu">
        <h3 className="form--headers card--title">Educational Experience</h3>
        {/* {console.log(this.props.state)} */}

        {this.props.state.schools.map((school) => {
          return (
            <form key={school.id} className="input--form">
              <input
                type="text"
                placeholder="School Name"
                className={`form--inputs ${school.id}`}
                name="schoolName"
                onChange={this.props.eduSchoolName}
                value={school.schoolName2}
              />
              <input
                type="text"
                placeholder="Title Of Study"
                className={`form--inputs ${school.id}`}
                name="titleOfStudy"
                onChange={this.props.iptTitleStudy}
                value={school.titleOfStudy}
              />
              <input
                type="text"
                placeholder="Date of Study"
                className={`form--inputs ${school.id}`}
                name="dateOfStudy"
                onChange={this.props.iptDateStudy}
                value={school.dateOfStudy}
              />
              <button
                className={`form--inputs ${school.id}`}
                onClick={this.props.onDltEdu}
              >
                Delete
              </button>
            </form>
          );
        })}

        <div className="button--container">
          <button onClick={this.props.onAddEduc}>Add</button>
        </div>
      </div>
    );
  }
}

export default InputEdu;
