import React from "react";

const InputPract = (props) => {
  return (
    <div id="">
      <h3 className="form--headers card--title">Practical Experience</h3>
      {props.state.practical.map((comp) => {
        return (
          <form key={comp.id} className="input--form">
            <input
              type="text"
              placeholder="Company Name"
              className={`form--inputs ${comp.id}`}
              name="companyName"
              value={comp.compName}
              onChange={props.iptComp}
            />
            <input
              type="text"
              placeholder="Positon Title"
              className={`form--inputs ${comp.id}`}
              name="positionTitle"
              value={comp.position}
              onChange={props.iptPosi}
            />
            <input
              type="text"
              placeholder="Main Tasks Of your Job"
              className={`form--inputs ${comp.id}`}
              name="mainTask"
              value={comp.task}
              onChange={props.iptTask}
            />

            <input
              type="text"
              placeholder="From"
              className={`form--inputs ${comp.id}`}
              name="from"
              value={comp.from}
              onChange={props.iptFrom}
            />
            <input
              type="text"
              placeholder="To"
              className={`form--inputs ${comp.id}`}
              name="to"
              value={comp.to}
              onChange={props.iptTo}
            />
            <button
              className={`form--inputs ${comp.id}`}
              onClick={props.onDltComp}
            >
              Delete
            </button>
          </form>
        );
      })}
      <div className="button--container">
        <button onClick={props.onAddComp}>Add</button>
      </div>
    </div>
  );
};

// class InputPract extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div id="">
//         <h3 className="form--headers card--title">Practical Experience</h3>
//         {props.state.practical.map((comp) => {
//           return (
//             <form key={comp.id} className="input--form">
//               <input
//                 type="text"
//                 placeholder="Company Name"
//                 className={`form--inputs ${comp.id}`}
//                 name="companyName"
//                 value={comp.compName}
//                 onChange={props.iptComp}
//               />
//               <input
//                 type="text"
//                 placeholder="Positon Title"
//                 className={`form--inputs ${comp.id}`}
//                 name="positionTitle"
//                 value={comp.position}
//                 onChange={props.iptPosi}
//               />
//               <input
//                 type="text"
//                 placeholder="Main Tasks Of your Job"
//                 className={`form--inputs ${comp.id}`}
//                 name="mainTask"
//                 value={comp.task}
//                 onChange={props.iptTask}
//               />

//               <input
//                 type="text"
//                 placeholder="From"
//                 className={`form--inputs ${comp.id}`}
//                 name="from"
//                 value={comp.from}
//                 onChange={props.iptFrom}
//               />
//               <input
//                 type="text"
//                 placeholder="To"
//                 className={`form--inputs ${comp.id}`}
//                 name="to"
//                 value={comp.to}
//                 onChange={props.iptTo}
//               />
//               <button
//                 className={`form--inputs ${comp.id}`}
//                 onClick={props.onDltComp}
//               >
//                 Delete
//               </button>
//             </form>
//           );
//         })}
//         <div className="button--container">
//           <button onClick={props.onAddComp}>Add</button>
//         </div>
//       </div>
//     );
//   }
// }

export default InputPract;
