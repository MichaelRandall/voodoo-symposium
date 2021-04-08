const baseUrl = process.env.API_URL + "/migrations/";
import axios from "axios";

export function getMigrations() {
  return axios
    .get(baseUrl)
    .then((response) => {
      const migrations = response.data;
    })
    .catch((error) => {
      const errorMsg = error.message;
    });
  // return fetch(baseUrl).then(handleResponse).catch(handleError);
}
