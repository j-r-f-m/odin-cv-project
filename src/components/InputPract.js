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
                className={`form--inputs ${comp.id}`}
                name="companyName"
                value={comp.compName}
                onChange={this.props.iptComp}
              />
              <input
                type="text"
                placeholder="Positon Title"
                className={`form--inputs ${comp.id}`}
                name="positionTitle"
                value={comp.position}
                onChange={this.props.iptPosi}
              />
              <input
                type="text"
                placeholder="Main Tasks Of your Job"
                className={`form--inputs ${comp.id}`}
                name="mainTask"
                value={comp.task}
                onChange={this.props.iptTask}
              />

              <input
                type="text"
                placeholder="From"
                className={`form--inputs ${comp.id}`}
                name="from"
                value={comp.from}
                onChange={this.props.iptFrom}
              />
              <input
                type="text"
                placeholder="To"
                className={`form--inputs ${comp.id}`}
                name="to"
                value={comp.to}
                onChange={this.props.iptTo}
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
