import initialState from "../initialState";
import {
  GET_MIGRATIONS_REQUEST,
  GET_MIGRATIONS_SUCCESS,
  GET_MIGRATIONS_FAILURE,
} from "./migrationTypes";

const migrationReducer = (state = initialState.migrations, action) => {
  switch (action.type) {
    case GET_MIGRATIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MIGRATIONS_SUCCESS:
      return {
        loading: false,
        migrations: action.payload,
        error: "",
      };
    case GET_MIGRATIONS_FAILURE:
      return {
        loading: false,
        migrations: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default migrationReducer;
