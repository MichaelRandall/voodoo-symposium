const baseUrl = process.env.API_URL + "/authors/";
import axios from "axios";

import {
  GET_AUTHORS_SUCCESS,
  GET_AUTHORS_REQUEST,
  GET_AUTHORS_FAILURE,
} from "./authorTypes";

export const getAuthorsRequest = () => {
  return {
    type: GET_AUTHORS_REQUEST,
  };
};

const getAuthorsSuccess = (authors) => {
  return {
    type: GET_AUTHORS_SUCCESS,
    payload: authors,
  };
};

const getAuthorsFailure = (error) => {
  return {
    type: GET_AUTHORS_FAILURE,
    payload: error,
  };
};

export const getAuthors = () => {
  return (dispatch) => {
    dispatch(getAuthorsRequest);
    axios
      .get(baseUrl)
      .then((response) => {
        const authors = response.data;
        // console.log("This is the response for authors ", authors);
        dispatch(getAuthorsSuccess(authors));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getAuthorsFailure(errorMsg));
      });
  };
};
