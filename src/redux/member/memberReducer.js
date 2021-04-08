import initialState from "../initialState";
import {
  GET_MEMBERS_REQUEST,
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_FAILURE,
} from "./memberTypes";

const memberReducer = (state = initialState.members, action) => {
  switch (action.type) {
    case GET_MEMBERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MEMBERS_SUCCESS:
      return {
        loading: false,
        members: action.payload,
        error: "",
      };
    case GET_MEMBERS_FAILURE:
      return {
        loading: false,
        members: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default memberReducer;
