const baseUrl = process.env.API_URL + "/courses/";
import axios from "axios";

import {
  GET_COURSES_SUCCESS,
  GET_COURSES_REQUEST,
  GET_COURSES_FAILURE,
  POST_COURSE_SUCCESS,
  POST_COURSE_REQUEST,
  POST_COURSE_FAILURE,
  PUT_COURSE_SUCCESS,
  PUT_COURSE_REQUEST,
  PUT_COURSE_FAILURE,
} from "./courseTypes";

// GET Courses - action creators
export const getCoursesRequest = () => {
  console.log("actionCretor getCourseRequest called");
  return {
    type: GET_COURSES_REQUEST,
  };
};

const getCoursesSuccess = (courses) => {
  console.log("actionCretor getCoursesSuccess called");
  return {
    type: GET_COURSES_SUCCESS,
    payload: courses,
  };
};

const getCoursesFailure = (error) => {
  console.log("actionCretor getCoursesFailure called");
  return {
    type: GET_COURSES_FAILURE,
    payload: error,
  };
};

// POST Course - action creators
export const postCourseRequest = () => {
  console.log("actionCretor postCourseRequest called");
  return {
    type: POST_COURSE_REQUEST,
  };
};

const postCourseSuccess = (course) => {
  console.log("actionCretor ostCourseSuccess called");
  return {
    type: POST_COURSE_SUCCESS,
    payload: course,
  };
};

const postCourseFailure = (error) => {
  console.log("actionCretor postCourseFailure called");
  return {
    type: POST_COURSE_FAILURE,
    payload: error,
  };
};

// PUT course action creators
export const putCourseRequest = () => {
  console.log("actionCretor putCourseRequest called");
  return {
    type: PUT_COURSE_REQUEST,
  };
};

const putCourseSuccess = (course) => {
  console.log("actionCretor putCourseSuccess called");
  return {
    type: PUT_COURSE_SUCCESS,
    payload: course,
  };
};

const putCourseFailure = (error) => {
  console.log("actionCretor putCourseFailure called");
  return {
    type: PUT_COURSE_FAILURE,
    payload: error,
  };
};

// THUNK asycn action creators

// GET Courses
export const getCourses = () => {
  return (dispatch) => {
    dispatch(getCoursesRequest);
    axios
      .get(baseUrl)
      .then((response) => {
        const courses = response.data;
        dispatch(getCoursesSuccess(courses));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getCoursesFailure(errorMsg));
      });
  };
};

// POST Course - THUNK async action creator
export function postCourse(course) {
  console.log("postCourse has been called with: ", course);
  const options = {
    headers: { "content-type": "application/json" },
  };

  return (dispatch) => {
    console.log("postCourseRequest called within postCourse");
    dispatch(postCourseRequest);
    axios
      // .post(baseUrl + (course.id || ""), options)
      // course is coming in from the form
      .post(baseUrl, course, options)
      .then((course) => {
        // currently no course.id exists so jumps to the second statement
        course.id
          ? console.log("This should be a put request") //dispatch(putCourseSuccess(course))
          : dispatch(postCourseSuccess(course));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(postCourseFailure(errorMsg));
      });
  };
}

// PUT course
export function putCourse(course) {
  console.log("putCourse has been called with: ", course);
  const options = {
    headers: { "content-type": "application/json" },
  };

  return (dispatch) => {
    console.log("putCourseRequest called within putCourse");
    dispatch(putCourseRequest);
    axios
      .put(baseUrl, course)
      .then((course) => {
        console.log(
          "This is the course sent to dispatch putCourseSuccess",
          course
        );
        course.id
          ? dispatch(putCourseSuccess(course))
          : console.log("this should be a post request");
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(putCourseFailure(errorMsg));
      });
  };
}
