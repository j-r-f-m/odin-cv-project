import React, { Component } from "react";
import InputPerso from "./InputPerso";
import InputEdu from "./InputEdu";
import PracticalExperience from "./InputPract";

const InputForm = (props) => {
  return (
    <div id="input--form--container">
      {/* access passed function from App.js with props-object and pass it to
      PersonalInformation.js wiht props */}
      <InputPerso
        iptFirst={props.iptFirst}
        iptLast={props.iptLast}
        iptTitle={props.iptTitle}
        state={props.state}
      />
      <InputEdu
        iptSchoolName={props.iptSchoolName}
        iptTitleStudy={props.iptTitleStudy}
        iptDateStudy={props.iptDateStudy}
        onAddEduc={props.onAddEduc}
        onDltEdu={props.onDltEdu}
        newInputEdu={props.newInputEdu}
        state={props.state}
        eduSchoolName={props.eduSchoolName}
      />
      <PracticalExperience
        state={props.state}
        iptComp={props.iptComp}
        iptPosi={props.iptPosi}
        iptTask={props.iptTask}
        iptFrom={props.iptFrom}
        iptTo={props.iptTo}
        onAddComp={props.onAddComp}
        onDltComp={props.onDltComp}
      />
    </div>
  );
};

// class InputForm extends Component {
//   constructor(props) {
//     super(props);
//   }

//   test = () => {
//     console.log(props);
//   };

//   render() {
//     return (
//       <div id="input--form--container">
//         {/* access passed function from App.js with props-object and pass it to
//         PersonalInformation.js wiht props */}
//         <InputPerso
//           iptFirst={props.iptFirst}
//           iptLast={props.iptLast}
//           iptTitle={props.iptTitle}
//           state={props.state}
//         />
//         <InputEdu
//           iptSchoolName={props.iptSchoolName}
//           iptTitleStudy={props.iptTitleStudy}
//           iptDateStudy={props.iptDateStudy}
//           onAddEduc={props.onAddEduc}
//           onDltEdu={props.onDltEdu}
//           newInputEdu={props.newInputEdu}
//           state={props.state}
//           eduSchoolName={props.eduSchoolName}
//         />
//         <PracticalExperience
//           state={props.state}
//           iptComp={props.iptComp}
//           iptPosi={props.iptPosi}
//           iptTask={props.iptTask}
//           iptFrom={props.iptFrom}
//           iptTo={props.iptTo}
//           onAddComp={props.onAddComp}
//           onDltComp={props.onDltComp}
//         />
//       </div>
//     );
//   }
// }

export default InputForm;
