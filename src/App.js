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

    // state for personal information
    this.state = {
      persInfo: {
        firstName: "",
        lastName: "",
        title: "",
      },

      schoolInfo: {
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: "",
        id: uniqid(),
      },

      schools: [
        {
          schoolName: "name1",
          titleOfStudy: "titleStudy1",
          dateOfStudy: "date1",
          id: uniqid(),
        },
        {
          schoolName: "name2",
          titleOfStudy: "titleStudy2",
          dateOfStudy: "date2",
          id: uniqid(),
        },
      ],
    };
  }

  // personal information functionality
  iptFirstName = (e) => {
    this.setState({
      persInfo: {
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

  // --------------educational experience functionality---------------------

  /**
   * set state for educational infromation
   * @param {object} e event object
   */
  iptSchoolName = (e) => {
    // const idObj = e.target.classList[1];
    // console.log(idObj);
    // const found = this.state.schools.find((school) => school.id === idObj);
    // console.log(found);
    // if (found) {
    //   this.setState({
    //     schoolInfo: {
    //       schoolName: e.target.value,
    //       titleOfStudy: this.state.schoolInfo.titleOfStudy,
    //       dateOfStudy: this.state.schoolInfo.dateOfStudy,
    //       id: this.state.schoolInfo.id,
    //     },
    //   });
    // }
    this.setState({
      schoolInfo: {
        schoolName: e.target.value,
        titleOfStudy: this.state.schoolInfo.titleOfStudy,
        dateOfStudy: this.state.schoolInfo.dateOfStudy,
        id: this.state.schoolInfo.id,
      },
    });
    console.log(this.state.schoolInfo);
    console.log(this.state.schools);
  };

  iptTitleOfStudy = (e) => {
    this.setState({
      schoolInfo: {
        schoolName: this.state.schoolInfo.schoolName,
        titleOfStudy: e.target.value,
        dateOfStudy: this.state.schoolInfo.dateOfStudy,
        id: this.state.schoolInfo.id,
      },
    });
    console.log(this.state.schoolInfo);
  };

  iptDateOfStudy = (e) => {
    this.setState({
      schoolInfo: {
        schoolName: this.state.schoolInfo.schoolName,
        titleOfStudy: this.state.schoolInfo.titleOfStudy,
        dateOfStudy: e.target.value,
        id: this.state.schoolInfo.id,
      },
    });
    console.log(this.state.schoolInfo);
  };

  onAddEdu = (e) => {
    console.log("hi");
    // prevent reloading page on button press
    e.preventDefault();

    // const parent = document.getElementById("input--Edu");
    // console.log(parent);

    // parent.appendChild()

    // this.setState({
    //   schools: this.state.schools.concat(this.state.schoolInfo),
    // });

    this.setState({
      // add school infor to array
      // schools: this.state.schools.concat(this.state.schoolInfo),
      // reset school info
      // schoolInfo: { schoolName: "", titleOfStudy: "", dateOfStudy: "" },
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
            iptSchool={this.iptSchoolName}
            iptTitleStudy={this.iptTitleOfStudy}
            iptDateStudy={this.iptDateOfStudy}
            onAddEduc={this.onAddEdu}
            state={this.state}
          />
          <Output state={this.state} />
        </section>
      </div>
    );
  }
}

export default App;
