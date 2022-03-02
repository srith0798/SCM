import { httpConstants } from "../constants";
import { httpService } from "../utility/httpService";

export default {
  addAlert
};

function getHeaders() {
  return {
    "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON,
    skip: true,
  };
}

async function addAlert(requestData) {
  let url = "http://localhost:3001/alert";
  return httpService(
    httpConstants.METHOD_TYPE.POST,
    getHeaders(),
    requestData,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

