const baseUrl = process.env.API_URL + "/authors/";
import axios from "axios";

import {
  GET_AUTHORS_SUCCESS,
  GET_AUTHORS_REQUEST,
  GET_AUTHORS_FAILURE,
} from "./authorTypes";

export const getAuthorsRequest = () => {
  console.log("getAuthorsRequest called");
  return {
    type: GET_AUTHORS_REQUEST,
  };
};

const getAuthorsSuccess = (authors) => {
  console.log("getAuthorsSuccess called");
  console.log(authors);
  return {
    type: GET_AUTHORS_SUCCESS,
    payload: authors,
  };
};

const getAuthorsFailure = (error) => {
  console.log("getAuthorsFailure called");
  console.log(error);
  return {
    type: GET_AUTHORS_FAILURE,
    payload: error,
  };
};

export const getAuthors = () => {
  console.log("getAuthors from authorActions called");
  return (dispatch) => {
    dispatch(getAuthorsRequest);
    axios
      .get(baseUrl)
      .then((response) => {
        // console.log("this is the author data", response.data);
        const authors = response.data;
        console.log("this be the ", authors);
        dispatch(getAuthorsSuccess(authors));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getAuthorsFailure(errorMsg));
      });
  };
};
