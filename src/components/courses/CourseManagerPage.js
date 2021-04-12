import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCourses, getAuthors } from "../../redux";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";


const CourseManagerPage = ({ courses, authors, getCourses,  getAuthors, ...props }) => {
  
  const [ course, setCourse ] = useState({...props.course});

  useEffect(() => {
    if (courses.length === 0){
        getCourses().catch(error => {
            alert("Loading courses failed " + error)
        });
    } else {
        setCourse({...props.course })
    }

    if (authors.length === 0){
        getAuthors().catch(error => {
            alert("Loading authors failed " + error)
        });
    } 
     
  }, [props.course]);

  return (
    <CourseForm course={course} authors={authors}/>
  );
};

const mapStateToProps = (state) => {
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors,
  };
};



const mapDispatchToProps = (dispatch) => {
    return {
      getCourses: () => dispatch(getCourses()),
      getAuthors: () => dispatch(getAuthors()),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(CourseManagerPage);
