import initialState from "../initialState";
import {
  GET_COURSES_REQUEST,
  GET_COURSES_FAILURE,
  GET_COURSES_SUCCESS,
  POST_COURSE_SUCCESS,
  POST_COURSE_REQUEST,
  POST_COURSE_FAILURE,
  PUT_COURSE_SUCCESS,
  PUT_COURSE_REQUEST,
  PUT_COURSE_FAILURE,
} from "./courseTypes";

const courseReducer = (state = initialState.courses, action) => {
  console.log("This is the action that is called ", action);
  switch (action.type) {
    case GET_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_COURSES_SUCCESS:
      return {
        loading: false,
        courses: action.payload,
        error: "",
      };
    case GET_COURSES_FAILURE:
      return {
        loading: false,
        courses: [],
        error: action.payload,
      };
    case POST_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case POST_COURSE_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case PUT_COURSE_REQUEST:
      console.log("UPDATE COURSE REQUEST");
      return {
        ...state,
        loading: true,
      };
    // check this 11 handle creates and updates actions
    case PUT_COURSE_SUCCESS:
      console.log("UPDATE COURSE SUCCESS");
      return {
        // ...state.courses.courses.map((course) =>
        //   course.id === action.course.id ? action.course : course
        // ),
        ...state,
        loading: false,
      };
    case PUT_COURSE_FAILURE:
      console.log("UPDATE COURSE FAILURE");
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default courseReducer;
