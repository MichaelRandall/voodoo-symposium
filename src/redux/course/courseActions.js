const baseUrl = process.env.API_URL + "/courses/";
import axios from "axios";

import {
  GET_COURSES_SUCCESS,
  GET_COURSES_REQUEST,
  GET_COURSES_FAILURE,
  POST_COURSE_SUCCESS,
  POST_COURSE_REQUEST,
  POST_COURSE_FAILURE,
} from "./courseTypes";

// GET Courses - action creators
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

// GET Courses - THUNK async action creator
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

// POST Course - action creators
export const postCourseRequest = () => {
  return {
    type: POST_COURSE_REQUEST,
  };
};

const postCourseSuccess = (course) => {
  return {
    type: POST_COURSE_SUCCESS,
    payload: course,
  };
};

const postCourseFailure = (error) => {
  return {
    type: POST_COURSE_FAILURE,
    payload: error,
  };
};

// POST Course - THUNK async action creator
export function postCourse(course) {
  const options = {
    headers: { "content-type": "application/json" },
  };

  return (dispatch) => {
    dispatch(postCourseRequest);
    axios
      // .post(baseUrl + (course.id || ""), options)
      // course is coming in from the form
      .post(baseUrl, course, options)
      .then(() => {
        // console.log("this is the course.id", course.id);
        // currently no course.id exists so jumps to the second statement
        course.id
          ? console.log("The other things happened for updates") // dispatch(putCourseSuccess(course))
          : dispatch(postCourseSuccess(course));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(postCourseFailure(errorMsg));
      });
  };
}
