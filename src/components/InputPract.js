import React, { Component } from "react";

class InputPract extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="">
        <h3 className="form--headers card--title">Practical Experience</h3>
        {this.props.state.practical.map((comp) => {
          return (
            <form key={comp.id} className="input--form">
              <input
                type="text"
                placeholder="Company Name"
                className="form--inputs"
                name="companyName"
                value={comp.compName}
              />
              <input
                type="text"
                placeholder="Positon Title"
                className="form--inputs"
                name="positionTitle"
              />
              <input
                type="text"
                placeholder="Main Tasks Of your Job"
                className="form--inputs"
                name="mainTask"
              />

              <input
                type="text"
                placeholder="From"
                className="form--inputs"
                name="from"
              />
              <input
                type="text"
                placeholder="To"
                className="form--inputs"
                name="to"
              />
              <button>Delete</button>
            </form>
          );
        })}
        <div className="button--container">
          <button>Add</button>
        </div>
      </div>
    );
  }
}

export default InputPract;
