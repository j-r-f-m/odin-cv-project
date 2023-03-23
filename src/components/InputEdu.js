import React from "react";

const InputEdu = (props) => {
  return (
    <div id="input--Edu">
      <h3 className="form--headers card--title">Educational Experience</h3>
      {console.log(props)}

      {props.state.schools.map((school) => {
        return (
          <form key={school.id} className="input--form">
            <input
              type="text"
              placeholder="School Name"
              className={`form--inputs ${school.id}`}
              name="schoolName"
              onChange={props.eduSchoolName}
              value={school.schoolName2}
            />
            <input
              type="text"
              placeholder="Title Of Study"
              className={`form--inputs ${school.id}`}
              name="titleOfStudy"
              onChange={props.iptTitleStudy}
              value={school.titleOfStudy}
            />
            <input
              type="text"
              placeholder="Date of Study"
              className={`form--inputs ${school.id}`}
              name="dateOfStudy"
              onChange={props.iptDateStudy}
              value={school.dateOfStudy}
            />
            <button
              className={`form--inputs ${school.id}`}
              onClick={props.onDltEdu}
            >
              Delete
            </button>
          </form>
        );
      })}

      <div className="button--container">
        <button onClick={props.onAddEduc}>Add</button>
      </div>
    </div>
  );
};

// class InputEdu extends Component {
//   constructor(props) {
//     super(props);
//     state = { setFocus: true };
//   }

//   onFocInp = (e) => {
//     console.log(state);
//   };

//   test = () => {
//     console.log(props);
//   };

//   render() {
//     return (
//       <div id="input--Edu">
//         <h3 className="form--headers card--title">Educational Experience</h3>
//         {/* {console.log(props.state)} */}

//         {props.state.schools.map((school) => {
//           return (
//             <form key={school.id} className="input--form">
//               <input
//                 type="text"
//                 placeholder="School Name"
//                 className={`form--inputs ${school.id}`}
//                 name="schoolName"
//                 onChange={props.eduSchoolName}
//                 value={school.schoolName2}
//               />
//               <input
//                 type="text"
//                 placeholder="Title Of Study"
//                 className={`form--inputs ${school.id}`}
//                 name="titleOfStudy"
//                 onChange={props.iptTitleStudy}
//                 value={school.titleOfStudy}
//               />
//               <input
//                 type="text"
//                 placeholder="Date of Study"
//                 className={`form--inputs ${school.id}`}
//                 name="dateOfStudy"
//                 onChange={props.iptDateStudy}
//                 value={school.dateOfStudy}
//               />
//               <button
//                 className={`form--inputs ${school.id}`}
//                 onClick={props.onDltEdu}
//               >
//                 Delete
//               </button>
//             </form>
//           );
//         })}

//         <div className="button--container">
//           <button onClick={props.onAddEduc}>Add</button>
//         </div>
//       </div>
//     );
//   }
// }

export default InputEdu;
