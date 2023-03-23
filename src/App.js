import "./styles/styles.css";
import React, { Component, useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Output from "./components/Output";
import uniqid from "uniqid";

// class App extends Component {
//   // pass props as argument to constructor
//   constructor(props) {
//     super(props);

//     // bind methods to the context in which they were created
//     iptFirstName = iptFirstName.bind(this);
//     iptLastName = iptLastName.bind(this);
//     iptTitle = iptTitle.bind(this);
//     iptSchoolName = iptSchoolName.bind(this);
//     iptTitleOfStudy = iptTitleOfStudy.bind(this);
//     iptDateOfStudy = iptDateOfStudy.bind(this);
//     eduSchoolName = eduSchoolName.bind(this);
//     // MISSING DELET AND ADD EDUC EXPERIECE
//     iptComp = iptComp.bind(this);
//     iptPosi = iptPosi.bind(this);
//     iptTask = iptTask.bind(this);
//     iptFrom = iptFrom.bind(this);
//     iptTo = iptTo.bind(this);
//     onDltComp = onDltComp.bind(this);

//     // ----------------------------------- state -------------------------------
//     state = {
//       persInfo: {
//         firstName: "Jonas",
//         lastName: "Mösch",
//         title: "M.Sc.",
//       },

//       // array containing educational experience objects
//       schools: [
//         {
//           schoolName2: "Anna-Schmidt-Schule",
//           titleOfStudy: "Schule",
//           dateOfStudy: "2010-2018",
//           id: uniqid(),
//         },
//         {
//           schoolName2: "TU München",
//           titleOfStudy: "Bauing. M.Sc.",
//           dateOfStudy: "2018-2023",
//           id: uniqid(),
//         },
//       ],

//       // array cotaining practical experience
//       practical: [
//         {
//           compName: "Ilp2",
//           position: "Student Worker",
//           task: "Prüfung",
//           from: "2016",
//           to: "2020",
//           id: uniqid(),
//         },
//       ],
//     };
//   }

//   // -------------------- personal information functionality -------------------

//   /**
//    * set state for personal information
//    * @param {object} e event-object
//    */
//   iptFirstName = (e) => {
//     setState({
//       persInfo: {
//         // get new data and save it to object
//         firstName: e.target.value,
//         // get information that was not changed and save it as well
//         lastName: state.persInfo.lastName,
//         title: state.persInfo.title,
//       },
//     });

//     // console.log(state.persInfo);
//   };

//   iptLastName = (e) => {
//     setState({
//       persInfo: {
//         firstName: state.persInfo.firstName,
//         lastName: e.target.value,
//         title: state.persInfo.title,
//       },
//     });
//     console.log(state.persInfo);
//   };

//   iptTitle = (e) => {
//     setState({
//       persInfo: {
//         firstName: state.persInfo.firstName,
//         lastName: state.persInfo.lastName,
//         title: e.target.value,
//       },
//     });
//     console.log(state.persInfo);
//   };

//   // --------------educational experience functionality-------------------------

//   eduSchoolName = (e) => {
//     // get id from used input
//     const idObj = e.target.classList[1];
//     console.log(idObj);

//     // save schools-array to variable
//     const schoolArr = state.schools;
//     //console.log(schoolArr);
//     // get idx of object user wants to write to
//     const idx = schoolArr.findIndex((ele) => ele.id === idObj);
//     console.log(idx);

//     // create new school-array with content of old-school array
//     let newSchoolsArr = [...schoolArr];
//     console.log(newSchoolsArr);

//     // create a new object
//     newSchoolsArr[idx] = {
//       // copy old contents to new object
//       ...newSchoolsArr[idx],
//       // change object-property
//       schoolName2: e.target.value,
//     };

//     // set new state for schools array with changed content
//     setState({
//       schools: newSchoolsArr,
//     });
//   };

//   iptSchoolName = (e) => {
//     const idObj = e.target.classList[1];
//     console.log(idObj);

//     const schoolArr = state.schools;
//     //console.log(schoolArr);
//     const idx = schoolArr.findIndex((ele) => ele.id === idObj);
//     console.log(idx);

//     let newSchoolsArr = [...schoolArr];
//     console.log(newSchoolsArr);
//     newSchoolsArr[idx] = {
//       ...newSchoolsArr[idx],
//       schoolName: e.target.value,
//     };
//     setState({
//       schools: newSchoolsArr,
//     });
//   };

//   iptTitleOfStudy = (e) => {
//     // get id from input
//     const idObj = e.target.classList[1];
//     console.log(idObj);

//     const schoolArr = state.schools;
//     //console.log(schoolArr);
//     const idx = schoolArr.findIndex((ele) => ele.id === idObj);
//     console.log(idx);

//     let newSchoolsArr = [...schoolArr];
//     console.log(newSchoolsArr);
//     newSchoolsArr[idx] = {
//       ...newSchoolsArr[idx],
//       titleOfStudy: e.target.value,
//     };
//     setState({
//       schools: newSchoolsArr,
//     });
//   };

//   iptDateOfStudy = (e) => {
//     const idObj = e.target.classList[1];
//     console.log(idObj);

//     const schoolArr = state.schools;
//     //console.log(schoolArr);
//     const idx = schoolArr.findIndex((ele) => ele.id === idObj);
//     console.log(idx);

//     let newSchoolsArr = [...schoolArr];
//     console.log(newSchoolsArr);
//     newSchoolsArr[idx] = {
//       ...newSchoolsArr[idx],
//       dateOfStudy: e.target.value,
//     };
//     setState({
//       schools: newSchoolsArr,
//     });
//   };

//   /**
//    * add new educational experiences form
//    * @param {object} e event-object
//    */
//   onAddEdu = (e) => {
//     // prevent reloading page on button press
//     e.preventDefault();

//     // save old array
//     const oldSchoolsArr = state.schools;

//     // create new object
//     const newSchool = {
//       schoolName2: "",
//       titleOfStudy: "",
//       dateOfStudy: "",
//       id: uniqid(),
//     };

//     // copy contents of old school-array to new school-array including new object
//     const newSchoolsArr = [...oldSchoolsArr, newSchool];

//     // set state
//     setState({
//       schools: newSchoolsArr,
//     });

//     console.log(state.schools);
//   };

//   /**
//    * delete educational experience
//    * @param {object} e event-object
//    */
//   onDltEdu = (e) => {
//     e.preventDefault();
//     // console.log("delete");

//     // get id
//     const idObj = e.target.classList[1];

//     const schoolArr = state.schools;
//     const oldSchoolArr = [...schoolArr];
//     //console.log(schoolArr);

//     const idx = oldSchoolArr.findIndex((ele) => ele.id === idObj);
//     console.log(idx);

//     const firstHalfArr = oldSchoolArr.slice(0, idx);
//     console.log(firstHalfArr);
//     const secondHalfArr = oldSchoolArr.slice(idx + 1);
//     console.log(secondHalfArr);
//     const newSchoolArr = firstHalfArr.concat(secondHalfArr);
//     console.log(newSchoolArr);

//     setState({
//       schools: newSchoolArr,
//     });
//   };

//   // -------------------------- practical experience functionality ------------_

//   // input company
//   iptComp = (e) => {
//     // get id from input
//     const idObj = e.target.classList[1];
//     console.log(idObj);

//     const companyArray = state.practical;

//     //console.log(schoolArr);
//     const idx = companyArray.findIndex((ele) => ele.id === idObj);
//     console.log(idx);
//     let newCompanyArray = [...companyArray];
//     console.log(newCompanyArray);
//     newCompanyArray[idx] = {
//       ...newCompanyArray[idx],
//       compName: e.target.value,
//     };
//     setState({
//       practical: newCompanyArray,
//     });
//   };

//   iptPosi = (e) => {
//     // get id from input
//     const idObj = e.target.classList[1];
//     console.log(idObj);

//     const companyArray = state.practical;

//     //console.log(schoolArr);
//     const idx = companyArray.findIndex((ele) => ele.id === idObj);
//     console.log(idx);
//     let newCompanyArray = [...companyArray];
//     console.log(newCompanyArray);
//     newCompanyArray[idx] = {
//       ...newCompanyArray[idx],
//       position: e.target.value,
//     };
//     setState({
//       practical: newCompanyArray,
//     });
//   };

//   iptTask = (e) => {
//     // get id from input
//     const idObj = e.target.classList[1];
//     console.log(idObj);

//     const companyArray = state.practical;

//     //console.log(schoolArr);
//     const idx = companyArray.findIndex((ele) => ele.id === idObj);
//     console.log(idx);
//     let newCompanyArray = [...companyArray];
//     console.log(newCompanyArray);
//     newCompanyArray[idx] = {
//       ...newCompanyArray[idx],
//       task: e.target.value,
//     };
//     setState({
//       practical: newCompanyArray,
//     });
//   };

//   iptFrom = (e) => {
//     // get id from input
//     const idObj = e.target.classList[1];
//     console.log(idObj);

//     const companyArray = state.practical;

//     //console.log(schoolArr);
//     const idx = companyArray.findIndex((ele) => ele.id === idObj);
//     console.log(idx);
//     let newCompanyArray = [...companyArray];
//     console.log(newCompanyArray);
//     newCompanyArray[idx] = {
//       ...newCompanyArray[idx],
//       from: e.target.value,
//     };
//     setState({
//       practical: newCompanyArray,
//     });
//   };

//   iptTo = (e) => {
//     // get id from input
//     const idObj = e.target.classList[1];
//     console.log(idObj);

//     const companyArray = state.practical;

//     //console.log(schoolArr);
//     const idx = companyArray.findIndex((ele) => ele.id === idObj);
//     console.log(idx);
//     let newCompanyArray = [...companyArray];
//     console.log(newCompanyArray);
//     newCompanyArray[idx] = {
//       ...newCompanyArray[idx],
//       to: e.target.value,
//     };
//     setState({
//       practical: newCompanyArray,
//     });
//   };

//   /**
//    * add new educational experiences form
//    * @param {object} e event-object
//    */
//   onAddComp = (e) => {
//     // prevent reloading page on button press
//     e.preventDefault();

//     // save old array
//     const oldPractArr = state.practical;

//     // create new object
//     const newPract = {
//       compName: "",
//       position: "",
//       task: "",
//       from: "",
//       to: "",
//       id: uniqid(),
//     };

//     // copy contents of old school-array to new school-array including new object
//     const newPractArr = [...oldPractArr, newPract];

//     // set state
//     setState({
//       practical: newPractArr,
//     });
//   };

//   /**
//    * delete educational experience
//    * @param {object} e event-object
//    */
//   onDltComp = (e) => {
//     console.log("dlt");
//     // prevent reloading
//     e.preventDefault();
//     // get id
//     const idObj = e.target.classList[1];

//     // get practArr and copy content to new array
//     const practArr = state.practical;
//     const oldPractArr = [...practArr];

//     // get index of object corresponding to input field
//     const idx = oldPractArr.findIndex((ele) => ele.id === idObj);
//     console.log(idx);

//     const firstHalfArr = oldPractArr.slice(0, idx);
//     console.log(firstHalfArr);
//     const secondHalfArr = oldPractArr.slice(idx + 1);
//     console.log(secondHalfArr);
//     const newPractArr = firstHalfArr.concat(secondHalfArr);

//     setState({
//       practical: newPractArr,
//     });
//   };

//   // render jsx to html??
//   render() {
//     return (
//       <div id="app--container">
//         <Header />
//         <section id="main">
//           {/* pass defined function to inputForm with porp named "handleClick" */}
//           <InputForm
//             iptFirst={iptFirstName}
//             iptLast={iptLastName}
//             iptTitle={iptTitle}
//             // iptSchoolName={iptSchoolName}
//             iptTitleStudy={iptTitleOfStudy}
//             iptDateStudy={iptDateOfStudy}
//             onAddEduc={onAddEdu}
//             onDltEdu={onDltEdu}
//             state={state}
//             eduSchoolName={eduSchoolName}
//             iptComp={iptComp}
//             iptPosi={iptPosi}
//             iptTask={iptTask}
//             iptFrom={iptFrom}
//             iptTo={iptTo}
//             onAddComp={onAddComp}
//             onDltComp={onDltComp}
//           />
//           <Output state={state} />
//         </section>
//       </div>
//     );
//   }
// }

const App = (props) => {
  const [state, setState] = useState({
    persInfo: {
      firstName: "Jonas",
      lastName: "Mösch",
      title: "M.Sc.",
    },

    // array containing educational experience objects
    schools: [
      {
        schoolName2: "Anna-Schmidt-Schule",
        titleOfStudy: "Schule",
        dateOfStudy: "2010-2018",
        id: uniqid(),
      },
      {
        schoolName2: "TU München",
        titleOfStudy: "Bauing. M.Sc.",
        dateOfStudy: "2018-2023",
        id: uniqid(),
      },
    ],

    // array cotaining practical experience
    practical: [
      {
        compName: "Ilp2",
        position: "Student Worker",
        task: "Prüfung",
        from: "2016",
        to: "2020",
        id: uniqid(),
      },
    ],
  });

  // const [persInfo, setPersInfo] = useState({
  //   firstName: "Jonas",
  //   lastName: "Mösch",
  //   title: "M.Sc.",
  // });

  // -------------------- personal information functionality -------------------

  /**
   * set state for personal information
   * @param {object} e event-object
   */
  const iptFirstName = (e) => {
    setState({
      ...state,
      persInfo: {
        ...state.persInfo,
        firstName: e.target.value,
      },
    });

    // setPersInfo({
    //   // ...state,
    //   // persInfo: {
    //   //   ...state.persInfo,
    //   //   firstName: e.target.value,
    //   // },

    //   ...persInfo,
    //   firstName: e.target.value,
    // });
  };

  const iptLastName = (e) => {
    setState({
      ...state,
      persInfo: {
        ...state.persInfo,
        lastName: e.target.value,
      },
    });
  };

  const iptTitle = (e) => {
    setState({
      ...state,
      persInfo: {
        ...state.persInfo,
        title: e.target.value,
      },
    });
  };

  // --------------educational experience functionality-------------------------

  const eduSchoolName = (e) => {
    // get id from used input
    const idObj = e.target.classList[1];
    console.log(idObj);

    // save schools-array to variable
    const schoolArr = state.schools;
    console.log(schoolArr);
    // get idx of object user wants to write to
    const idx = schoolArr.findIndex((ele) => ele.id === idObj);
    console.log(idx);

    // create new school-array with content of old-school array
    let newSchoolsArr = [...schoolArr];
    console.log(newSchoolsArr);

    // create a new object
    newSchoolsArr[idx] = {
      // copy old contents to new object
      ...newSchoolsArr[idx],
      // change object-property
      schoolName2: e.target.value,
    };

    // set new state for schools array with changed content
    setState({
      // schools: newSchoolsArr,
      ...state,
      schools: [...newSchoolsArr],
    });
  };

  // deleete????
  // const iptSchoolName = (e) => {
  //   const idObj = e.target.classList[1];
  //   console.log(idObj);

  //   const schoolArr = state.schools;
  //   //console.log(schoolArr);
  //   const idx = schoolArr.findIndex((ele) => ele.id === idObj);
  //   console.log(idx);

  //   let newSchoolsArr = [...schoolArr];
  //   console.log(newSchoolsArr);
  //   newSchoolsArr[idx] = {
  //     ...newSchoolsArr[idx],
  //     schoolName: e.target.value,
  //   };
  //   setState({
  //     schools: newSchoolsArr,
  //   });
  // };

  const iptTitleOfStudy = (e) => {
    // get id from input
    const idObj = e.target.classList[1];
    console.log(idObj);

    const schoolArr = state.schools;
    //console.log(schoolArr);
    const idx = schoolArr.findIndex((ele) => ele.id === idObj);
    console.log(idx);

    let newSchoolsArr = [...schoolArr];
    console.log(newSchoolsArr);
    newSchoolsArr[idx] = {
      ...newSchoolsArr[idx],
      titleOfStudy: e.target.value,
    };
    setState({
      ...state,
      schools: [...newSchoolsArr],
    });
  };

  const iptDateOfStudy = (e) => {
    const idObj = e.target.classList[1];
    console.log(idObj);

    const schoolArr = state.schools;
    //console.log(schoolArr);
    const idx = schoolArr.findIndex((ele) => ele.id === idObj);
    console.log(idx);

    let newSchoolsArr = [...schoolArr];
    console.log(newSchoolsArr);
    newSchoolsArr[idx] = {
      ...newSchoolsArr[idx],
      dateOfStudy: e.target.value,
    };
    setState({
      ...state,
      schools: [...newSchoolsArr],
    });
  };

  /**
   * add new educational experiences form
   * @param {object} e event-object
   */
  const onAddEdu = (e) => {
    // prevent reloading page on button press
    e.preventDefault();

    // save old array
    const oldSchoolsArr = state.schools;

    // create new object
    const newSchool = {
      schoolName2: "",
      titleOfStudy: "",
      dateOfStudy: "",
      id: uniqid(),
    };

    // copy contents of old school-array to new school-array including new object
    const newSchoolsArr = [...oldSchoolsArr, newSchool];

    // set state
    setState({
      ...state,
      schools: [...newSchoolsArr],
    });

    console.log(state.schools);
  };

  /**
   * delete educational experience
   * @param {object} e event-object
   */
  const onDltEdu = (e) => {
    e.preventDefault();
    // console.log("delete");

    // get id
    const idObj = e.target.classList[1];

    const schoolArr = state.schools;
    const oldSchoolArr = [...schoolArr];
    //console.log(schoolArr);

    const idx = oldSchoolArr.findIndex((ele) => ele.id === idObj);
    console.log(idx);

    const firstHalfArr = oldSchoolArr.slice(0, idx);
    console.log(firstHalfArr);
    const secondHalfArr = oldSchoolArr.slice(idx + 1);
    console.log(secondHalfArr);
    const newSchoolArr = firstHalfArr.concat(secondHalfArr);
    console.log(newSchoolArr);

    setState({
      ...state,
      schools: [...newSchoolArr],
    });
  };

  // -------------------------- practical experience functionality ------------_

  // input company
  const iptComp = (e) => {
    // get id from input
    const idObj = e.target.classList[1];
    console.log(idObj);

    const companyArray = state.practical;

    //console.log(schoolArr);
    const idx = companyArray.findIndex((ele) => ele.id === idObj);
    console.log(idx);
    let newCompanyArray = [...companyArray];
    console.log(newCompanyArray);
    newCompanyArray[idx] = {
      ...newCompanyArray[idx],
      compName: e.target.value,
    };
    setState({
      ...state,
      practical: [...newCompanyArray],
    });
  };

  const iptPosi = (e) => {
    // get id from input
    const idObj = e.target.classList[1];
    console.log(idObj);

    const companyArray = state.practical;

    //console.log(schoolArr);
    const idx = companyArray.findIndex((ele) => ele.id === idObj);
    console.log(idx);
    let newCompanyArray = [...companyArray];
    console.log(newCompanyArray);
    newCompanyArray[idx] = {
      ...newCompanyArray[idx],
      position: e.target.value,
    };
    setState({
      ...state,
      practical: [...newCompanyArray],
    });
  };

  const iptTask = (e) => {
    // get id from input
    const idObj = e.target.classList[1];
    console.log(idObj);

    const companyArray = state.practical;

    //console.log(schoolArr);
    const idx = companyArray.findIndex((ele) => ele.id === idObj);
    console.log(idx);
    let newCompanyArray = [...companyArray];
    console.log(newCompanyArray);
    newCompanyArray[idx] = {
      ...newCompanyArray[idx],
      task: e.target.value,
    };
    setState({
      ...state,
      practical: [...newCompanyArray],
    });
  };

  const iptFrom = (e) => {
    // get id from input
    const idObj = e.target.classList[1];
    console.log(idObj);

    const companyArray = state.practical;

    //console.log(schoolArr);
    const idx = companyArray.findIndex((ele) => ele.id === idObj);
    console.log(idx);
    let newCompanyArray = [...companyArray];
    console.log(newCompanyArray);
    newCompanyArray[idx] = {
      ...newCompanyArray[idx],
      from: e.target.value,
    };
    setState({
      ...state,
      practical: [...newCompanyArray],
    });
  };

  const iptTo = (e) => {
    // get id from input
    const idObj = e.target.classList[1];
    console.log(idObj);

    const companyArray = state.practical;

    //console.log(schoolArr);
    const idx = companyArray.findIndex((ele) => ele.id === idObj);
    console.log(idx);
    let newCompanyArray = [...companyArray];
    console.log(newCompanyArray);
    newCompanyArray[idx] = {
      ...newCompanyArray[idx],
      to: e.target.value,
    };
    setState({
      ...state,
      practical: [...newCompanyArray],
    });
  };

  /**
   * add new educational experiences form
   * @param {object} e event-object
   */
  const onAddComp = (e) => {
    // prevent reloading page on button press
    e.preventDefault();

    // save old array
    const oldPractArr = state.practical;

    // create new object
    const newPract = {
      compName: "",
      position: "",
      task: "",
      from: "",
      to: "",
      id: uniqid(),
    };

    // copy contents of old school-array to new school-array including new object
    const newPractArr = [...oldPractArr, newPract];

    // set state
    setState({
      ...state,
      practical: [...newPractArr],
    });
  };

  /**
   * delete educational experience
   * @param {object} e event-object
   */
  const onDltComp = (e) => {
    console.log("dlt");
    // prevent reloading
    e.preventDefault();
    // get id
    const idObj = e.target.classList[1];

    // get practArr and copy content to new array
    const practArr = state.practical;
    const oldPractArr = [...practArr];

    // get index of object corresponding to input field
    const idx = oldPractArr.findIndex((ele) => ele.id === idObj);
    console.log(idx);

    const firstHalfArr = oldPractArr.slice(0, idx);
    console.log(firstHalfArr);
    const secondHalfArr = oldPractArr.slice(idx + 1);
    console.log(secondHalfArr);
    const newPractArr = firstHalfArr.concat(secondHalfArr);

    setState({
      ...state,
      practical: [...newPractArr],
    });
  };

  return (
    <div id="app--container">
      <Header />
      <section id="main">
        {/* pass defined function to inputForm with porp named "handleClick" */}
        <InputForm
          iptFirst={iptFirstName}
          iptLast={iptLastName}
          iptTitle={iptTitle}
          // iptSchoolName={iptSchoolName}
          iptTitleStudy={iptTitleOfStudy}
          iptDateStudy={iptDateOfStudy}
          onAddEduc={onAddEdu}
          onDltEdu={onDltEdu}
          state={state}
          eduSchoolName={eduSchoolName}
          iptComp={iptComp}
          iptPosi={iptPosi}
          iptTask={iptTask}
          iptFrom={iptFrom}
          iptTo={iptTo}
          onAddComp={onAddComp}
          onDltComp={onDltComp}
        />
        <Output state={state} />
      </section>
    </div>
  );
};

export default App;
