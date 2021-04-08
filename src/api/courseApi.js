const baseUrl = process.env.API_URL + "/courses/";
import axios from "axios";

export function getCourses() {
  return axios
    .get(baseUrl)
    .then((response) => {
      const courses = response.data;
    })
    .catch((error) => {
      const errorMsg = error.message;
    });
  // return fetch(baseUrl).then(handleResponse).catch(handleError);
}
