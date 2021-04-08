const baseUrl = process.env.API_URL + "/migrations/";
import axios from "axios";

import {
  GET_MIGRATIONS_SUCCESS,
  GET_MIGRATIONS_REQUEST,
  GET_MIGRATIONS_FAILURE,
} from "./migrationTypes";

export const getMigrationsRequest = () => {
  return {
    type: GET_MIGRATIONS_REQUEST,
  };
};

const getMigrationsSuccess = (migrations) => {
  return {
    type: GET_MIGRATIONS_SUCCESS,
    payload: migrations,
  };
};

const getMigrationsFailure = (error) => {
  return {
    type: GET_MIGRATIONS_FAILURE,
    payload: error,
  };
};

export const getMigrations = () => {
  return (dispatch) => {
    dispatch(getMigrationsRequest);
    axios
      .get(baseUrl)
      .then((response) => {
        const migrations = response.data;
        dispatch(getMigrationsSuccess(migrations));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getMigrationsFailure(errorMsg));
      });
  };
};
