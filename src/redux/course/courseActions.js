const baseUrl = process.env.API_URL + "/courses/";
import axios from "axios";

import {
  GET_COURSES_SUCCESS,
  GET_COURSES_REQUEST,
  GET_COURSES_FAILURE,
} from "./courseTypes";

export const getCoursesRequest = () => {
  return {
    type: GET_COURSES_REQUEST,
  };
};

const getCoursesSuccess = (courses) => {
  return {
    type: GET_COURSES_SUCCESS,
    payload: courses,
  };
};

const getCoursesFailure = (error) => {
  return {
    type: GET_COURSES_FAILURE,
    payload: error,
  };
};

export const getCourses = () => {
  return (dispatch) => {
    dispatch(getCoursesRequest);
    axios
      .get(baseUrl)
      .then((response) => {
        const courses = response.data;
        // console.log("This is the response for courses ", courses)
        dispatch(getCoursesSuccess(courses));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getCoursesFailure(errorMsg));
      });
  };
};
