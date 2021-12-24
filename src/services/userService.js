import { httpConstants } from "../constants";
import { httpService } from "../utility/httpService";

export default {
  getUser,
  addUser
};

function getHeaders() {
  return {
    "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON,
    skip: true,
  };
}

async function getUser(accountAddress) {
  let url = process.env.REACT_APP_USER_CONTRACT_MICROSERVICE + httpConstants.API_END_POINT.GET_USER + `?accountAddress=${accountAddress}` ;
  console.log("url----", url);
  return httpService(
    httpConstants.METHOD_TYPE.GET,
    getHeaders(),
    {},
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

async function addUser(requestData) {
  // let url = `${process.env.REACT_APP_CONTRACTS_SERVICE_URL}${httpConstants.API_END_POINT.GET_CONTRACTS_LIST}`;
  let url = process.env.REACT_APP_USER_CONTRACT_MICROSERVICE + httpConstants.API_END_POINT.GET_USER
  console.log("url----", url);
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
