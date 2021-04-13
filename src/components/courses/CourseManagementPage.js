import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";

// actions - only get for now
import { getCourses, getAuthors } from "../../redux";

import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";
import { propTypes } from "react-bootstrap/esm/Image";

// courses accessed by coursesData.courses, authorsData accessed by authorsData.authors
const CourseManagementPage = ({
  coursesData,
  authorsData,
  getCourses,
  getAuthors,
  ...props
}) => {
  const [course, setCourse] = useState({ ...props.course });

  useEffect(() => {
    if (coursesData.courses.length === 0) {
      getCourses();
    }
    if (authorsData.authors.length === 0) {
      getAuthors();
    }
  }, []);

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} authors={authorsData} />
    </>
  );
};

// defines what properties are available on you component
// selecting the part of the data from the store that the connected component needs.
// the CourseManagementPage component has access to state.courses through the object key coursesData
// the CourseManagementPage component has access to state.authors through the object key authorsData
// mapStateToProps is called every time the store state changes
// it receives the entire store state and you specify an object of data the component needs
const mapStateToProps = (state) => {
  const { courses, authors } = state;

  return {
    course: newCourse,
    coursesData: courses,
    authorsData: authors,
  };
};

// example of using destructuring - 1st: create an object
const person = { name: "Mike", age: 54 };
// example of using destructuring - 2nd: specify the name of the prop
const { name } = person;
// example of using destructuring - 3rd: use the name of the prop
console.log("What is wrong? ", name);

// defines what actions are available on your component
const mapDispatchToProps = (dispatch) => {
  return {
    getCourses: () => dispatch(getCourses()),
    getAuthors: () => dispatch(getAuthors()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseManagementPage);
