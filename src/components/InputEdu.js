import React, { Component } from "react";

class InputEdu extends Component {
  constructor(props) {
    super(props);
    this.inputReference = React.createRef();

    this.state = { setFocus: true };
  }

  componentDidUpdate() {
    this.inputReference.current.focus();
  }

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
            <form key={school.schoolName} className="input--form">
              <input
                ref={this.inputReference}
                type="text"
                placeholder="School Name"
                className={`form--inputs ${school.id}`}
                name="schoolName"
                onChange={this.props.iptSchool}
                value={school.schoolName}
                onFocus={this.onFocInp}
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
              <div className="button--container">
                <button onClick={this.props.onAddEduc}>Add</button>
                <button>Delete</button>
              </div>
            </form>
          );
        })}

        {/* <form className="input--form">
          <input
            type="text"
            placeholder="School Name"
            className="form--inputs"
            name="schoolName"
            onChange={this.props.iptSchool}
          />
          <input
            type="text"
            placeholder="Title Of Study"
            className="form--inputs"
            name="titleOfStudy"
            onChange={this.props.iptTitleStudy}
          />
          <input
            type="text"
            placeholder="Date of Study"
            className="form--inputs"
            name="dateOfStudy"
            onChange={this.props.iptDateStudy}
          />
          <div className="button--container">
            <button onClick={this.props.onAddEduc}>Add</button>
            <button>Delete</button>
          </div>
        </form> */}

        {/* {this.props.state.schools.map((school) => {
              return (
                <div key={school.schoolName} className="output--school">
                  <div className="school--info">
                    School Name: {school.schoolName}
                  </div>
                  <div className="school--info">
                    Title Of Study: {school.titleOfStudy}
                  </div>
                  <div className="school--info">
                    Date of Study: {school.dateOfStudy}
                  </div>
                </div>
              );
            })} */}
      </div>
    );
  }
}

export default InputEdu;
