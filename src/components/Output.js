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

        <h3 className="output--header">Experience</h3>
        <h3 className="output--header">Education</h3>
      </div>
    );
  }
}

export default Output;
