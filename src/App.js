import "./styles/styles.css";
import React, { Component } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Output from "./components/Output";
import uniqid from "uniqid";

class App extends Component {
  // pass props as argument to constructor
  constructor(props) {
    super(props);

    // bind methods to the context in which they were created
    this.iptFirstName = this.iptFirstName.bind(this);
    this.iptLastName = this.iptLastName.bind(this);
    this.iptTitle = this.iptTitle.bind(this);
    this.iptSchoolName = this.iptSchoolName.bind(this);
    this.iptTitleOfStudy = this.iptTitleOfStudy.bind(this);
    this.iptDateOfStudy = this.iptDateOfStudy.bind(this);
    this.eduSchoolName = this.eduSchoolName.bind(this);

    // ----------------------------------- state -------------------------------
    this.state = {
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
    };
  }

  // -------------------- personal information functionality -------------------

  /**
   * set state for personal information
   * @param {object} e event-object
   */
  iptFirstName = (e) => {
    this.setState({
      persInfo: {
        // get new data and save it to object
        firstName: e.target.value,
        // get information that was not changed and save it as well
        lastName: this.state.persInfo.lastName,
        title: this.state.persInfo.title,
      },
    });

    // console.log(this.state.persInfo);
  };

  iptLastName = (e) => {
    this.setState({
      persInfo: {
        firstName: this.state.persInfo.firstName,
        lastName: e.target.value,
        title: this.state.persInfo.title,
      },
    });
    console.log(this.state.persInfo);
  };

  iptTitle = (e) => {
    this.setState({
      persInfo: {
        firstName: this.state.persInfo.firstName,
        lastName: this.state.persInfo.lastName,
        title: e.target.value,
      },
    });
    console.log(this.state.persInfo);
  };

  // --------------educational experience functionality-------------------------

  eduSchoolName = (e) => {
    // get id from used input
    const idObj = e.target.classList[1];
    console.log(idObj);

    // save schools-array to variable
    const schoolArr = this.state.schools;
    //console.log(schoolArr);
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
    this.setState({
      schools: newSchoolsArr,
    });
  };

  iptSchoolName = (e) => {
    const idObj = e.target.classList[1];
    console.log(idObj);

    const schoolArr = this.state.schools;
    //console.log(schoolArr);
    const idx = schoolArr.findIndex((ele) => ele.id === idObj);
    console.log(idx);

    let newSchoolsArr = [...schoolArr];
    console.log(newSchoolsArr);
    newSchoolsArr[idx] = {
      ...newSchoolsArr[idx],
      schoolName: e.target.value,
    };
    this.setState({
      schools: newSchoolsArr,
    });
  };

  iptTitleOfStudy = (e) => {
    // get id from input
    const idObj = e.target.classList[1];
    console.log(idObj);

    const schoolArr = this.state.schools;
    //console.log(schoolArr);
    const idx = schoolArr.findIndex((ele) => ele.id === idObj);
    console.log(idx);

    let newSchoolsArr = [...schoolArr];
    console.log(newSchoolsArr);
    newSchoolsArr[idx] = {
      ...newSchoolsArr[idx],
      titleOfStudy: e.target.value,
    };
    this.setState({
      schools: newSchoolsArr,
    });
  };

  iptDateOfStudy = (e) => {
    const idObj = e.target.classList[1];
    console.log(idObj);

    const schoolArr = this.state.schools;
    //console.log(schoolArr);
    const idx = schoolArr.findIndex((ele) => ele.id === idObj);
    console.log(idx);

    let newSchoolsArr = [...schoolArr];
    console.log(newSchoolsArr);
    newSchoolsArr[idx] = {
      ...newSchoolsArr[idx],
      dateOfStudy: e.target.value,
    };
    this.setState({
      schools: newSchoolsArr,
    });
  };

  /**
   * add new educational experiences form
   * @param {object} e event-object
   */
  onAddEdu = (e) => {
    console.log("hi");
    // prevent reloading page on button press
    e.preventDefault();

    // save old array
    const oldSchoolsArr = this.state.schools;

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
    this.setState({
      schools: newSchoolsArr,
    });

    console.log(this.state.schools);
  };

  /**
   * delete educational experience
   * @param {object} e event-object
   */
  onDltEdu = (e) => {
    e.preventDefault();
    // console.log("delete");

    // get id
    const idObj = e.target.classList[1];

    const schoolArr = this.state.schools;
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

    this.setState({
      schools: newSchoolArr,
    });
  };

  // -------------------------- practical experience functionality ------------_

  iptPractC;

  // render jsx to html??
  render() {
    return (
      <div id="app--container">
        <Header />
        <section id="main">
          {/* pass defined function to inputForm with porp named "handleClick" */}
          <InputForm
            iptFirst={this.iptFirstName}
            iptLast={this.iptLastName}
            iptTitle={this.iptTitle}
            iptSchoolName={this.iptSchoolName}
            iptTitleStudy={this.iptTitleOfStudy}
            iptDateStudy={this.iptDateOfStudy}
            onAddEduc={this.onAddEdu}
            onDltEdu={this.onDltEdu}
            state={this.state}
            eduSchoolName={this.eduSchoolName}
          />
          <Output state={this.state} />
        </section>
      </div>
    );
  }
}

export default App;
