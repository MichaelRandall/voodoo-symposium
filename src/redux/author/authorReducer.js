import initialState from "../initialState";
import {
  GET_AUTHORS_REQUEST,
  GET_AUTHORS_SUCCESS,
  GET_AUTHORS_FAILURE,
} from "./authorTypes";

const authorReducer = (state = initialState.authors, action) => {
  switch (action.type) {
    case GET_AUTHORS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_AUTHORS_SUCCESS:
      return {
        loading: false,
        authors: action.payload,
        error: "",
      };
    case GET_AUTHORS_FAILURE:
      return {
        loading: false,
        authors: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authorReducer;
