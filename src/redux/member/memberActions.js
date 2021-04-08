const baseUrl = process.env.API_URL + "/members/";
import axios from "axios";

import {
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_REQUEST,
  GET_MEMBERS_FAILURE,
} from "./memberTypes";

export const getMembersRequest = () => {
  return {
    type: GET_MEMBERS_REQUEST,
  };
};

const getMembersSuccess = (members) => {
  return {
    type: GET_MEMBERS_SUCCESS,
    payload: members,
  };
};

const getMembersFailure = (error) => {
  return {
    type: GET_MEMBERS_FAILURE,
    payload: error,
  };
};

export const getMembers = () => {
  return (dispatch) => {
    dispatch(getMembersRequest);
    axios
      .get(baseUrl)
      .then((response) => {
        const members = response.data;
        dispatch(getMembersSuccess(members));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getMembersFailure(errorMsg));
      });
  };
};
