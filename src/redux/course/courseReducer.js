import initialState from "../initialState";
import {
  GET_COURSES_REQUEST,
  GET_COURSES_FAILURE,
  GET_COURSES_SUCCESS,
} from "./courseTypes";

const courseReducer = (state = initialState.courses, action) => {
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
    default:
      return state;
  }
};

export default courseReducer;
