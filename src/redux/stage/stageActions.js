const baseUrl = process.env.API_URL + "/stages/";
import axios from "axios";

import {
  GET_STAGES_SUCCESS,
  GET_STAGES_REQUEST,
  GET_STAGES_FAILURE,
} from "./stageTypes";

export const getStagesRequest = () => {
  return {
    type: GET_STAGES_REQUEST,
  };
};

const getStagesSuccess = (stages) => {
  return {
    type: GET_STAGES_SUCCESS,
    payload: stages,
  };
};

const getStagesFailure = (error) => {
  return {
    type: GET_STAGES_FAILURE,
    payload: error,
  };
};

export const getStages = () => {
  return (dispatch) => {
    dispatch(getStagesRequest);
    axios
      .get(baseUrl)
      .then((response) => {
        const stages = response.data;
        dispatch(getStagesSuccess(stages));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getStagesFailure(errorMsg));
      });
  };
};
