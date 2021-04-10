const baseUrl = process.env.API_URL + "/courses/";
import axios from "axios";

import {
  GET_COURSES_SUCCESS,
  GET_COURSES_REQUEST,
  GET_COURSES_FAILURE,
} from "./courseTypes";

export const getCoursesRequest = () => {
  console.log("getCoursesRequest called");
  return {
    type: GET_COURSES_REQUEST,
  };
};

const getCoursesSuccess = (courses) => {
  console.log("getCoursesSuccess called");
  console.log(courses);
  return {
    type: GET_COURSES_SUCCESS,
    payload: courses,
  };
};

const getCoursesFailure = (error) => {
  console.log("getCoursesFailure called");
  console.log(error);
  return {
    type: GET_COURSES_FAILURE,
    payload: error,
  };
};

export const getCourses = () => {
  console.log("getCourses from courseActions called");
  return (dispatch) => {
    dispatch(getCoursesRequest);
    axios
      .get(baseUrl)
      .then((response) => {
        // console.log("this is the course data", response.data);
        const courses = response.data;
        console.log("this be the ", courses);
        dispatch(getCoursesSuccess(courses));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getCoursesFailure(errorMsg));
      });
  };
};
