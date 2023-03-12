import React, { Component } from "react";

class Output extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="output--container">
        <div className="out--info">
          <div className="output--name">First Name</div>
          <div className="output--name">Last Name</div>
        </div>
        <div className="output--title">Title</div>
      </div>
    );
  }
}

export default Output;
