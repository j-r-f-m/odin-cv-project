import React, { Component } from "react";

class Output extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="output--container">
        <div className="out--info">
          <div className="output--name">
            {this.props.state.persInfo.firstName.length > 0
              ? this.props.state.persInfo.firstName
              : "First Name"}
          </div>
          <div className="output--name">
            {this.props.state.persInfo.lastName.length > 0
              ? this.props.state.persInfo.lastName
              : "Last Name"}
          </div>
        </div>
        <div className="output--title">
          {this.props.state.persInfo.title.length > 0
            ? this.props.state.persInfo.title
            : "Title"}
        </div>

        <div>
          <h3 className="output--header">Educational Experience</h3>
          <div className="output--school-con">
            {this.props.state.schools.map((school) => {
              return (
                <div key={school.id} className="output--school">
                  <div className="school--info">
                    School Name: {school.schoolName2}
                  </div>
                  <div className="school--info">
                    Title Of Study: {school.titleOfStudy}
                  </div>
                  <div className="school--info">
                    Date of Study: {school.dateOfStudy}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="output--header">PracticalExperience</h3>
          <div className="output--school-con">
            {this.props.state.practical.map((comp) => {
              return (
                <div key={comp.id} className="output--school">
                  <div className="school--info">
                    Company Name: {comp.compName}
                  </div>
                  <div className="school--info">
                    Position Title: {comp.position}
                  </div>
                  <div className="school--info">Main Task: {comp.task}</div>
                  <div className="school--info">from: {comp.from}</div>
                  <div className="school--info">to: {comp.to}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Output;
