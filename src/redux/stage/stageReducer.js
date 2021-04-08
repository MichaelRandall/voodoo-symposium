import initialState from "../initialState";
import {
  GET_STAGES_REQUEST,
  GET_STAGES_SUCCESS,
  GET_STAGES_FAILURE,
} from "./stageTypes";

const stageReducer = (state = initialState.stages, action) => {
  switch (action.type) {
    case GET_STAGES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_STAGES_SUCCESS:
      return {
        loading: false,
        stages: action.payload,
        error: "",
      };
    case GET_STAGES_FAILURE:
      return {
        loading: false,
        stages: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default stageReducer;
