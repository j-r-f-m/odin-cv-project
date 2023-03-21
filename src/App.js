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

    // state for personal information
    this.state = {
      persInfo: {
        firstName: "",
        lastName: "",
        title: "",
      },

      // DELETE ?????
      schoolInfo: {
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: "",
        id: uniqid(),
      },

      schools: [
        {
          schoolName2: "name12",
          schoolName: "name1",
          titleOfStudy: "titleStudy1",
          dateOfStudy: "date1",
          id: uniqid(),
        },
        {
          schoolName2: "name22",
          schoolName: "name2",
          titleOfStudy: "titleStudy2",
          dateOfStudy: "date2",
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

  onAddEdu = (e) => {
    console.log("hi");
    // prevent reloading page on button press
    e.preventDefault();

    const oldSchoolsArr = this.state.schools;

    const newSchool = {
      schoolName2: "School Names",
      titleOfStudy: "Title Of Study",
      dateOfStudy: "Date Of Study",
      id: uniqid(),
    };
    const newSchoolsArr = [...oldSchoolsArr, newSchool];

    this.setState({
      schools: newSchoolsArr,
    });

    console.log(this.state.schools);
  };

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
