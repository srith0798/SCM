import { httpConstants } from "../constants";
import { httpService } from "../utility/httpService";

export default {
  getContractsList,
  addContract,
  getContractsById,
  hideContract,
  showContract,
  checkAddress,
  renameContract,
  removeContract,
};

function getHeaders() {
  return {
    "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON,
    skip: true,
  };
}

async function getContractsList(requestData) {
  let url =
    process.env.REACT_APP_USER_CONTRACT_MICROSERVICE +
    httpConstants.API_END_POINT.GET_CONTRACTS_LIST;
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

async function addContract(requestData) {
  let url =
    process.env.REACT_APP_USER_CONTRACT_MICROSERVICE +
    httpConstants.API_END_POINT.ADD_CONTRACT;
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
async function getContractsById(requestData) {
  let url =
    process.env.REACT_APP_USER_CONTRACT_MICROSERVICE +
    httpConstants.API_END_POINT.ADD_CONTRACT +
    `?id=` +
    requestData;
  console.log("url----", url);
  return httpService(
    httpConstants.METHOD_TYPE.GET,
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
async function hideContract(requestData) {
  let url =
    process.env.REACT_APP_USER_CONTRACT_MICROSERVICE +
    httpConstants.API_END_POINT.HIDE_CONTRACT;
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
async function showContract(requestData) {
  // let url = `${process.env.REACT_APP_CONTRACTS_SERVICE_URL}${httpConstants.API_END_POINT.GET_CONTRACTS_LIST}`;
  //   let url = `http://localhost:3001/contract`;
  let url =
    process.env.REACT_APP_USER_CONTRACT_MICROSERVICE +
    httpConstants.API_END_POINT.SHOW_CONTRACT;
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
async function checkAddress(requestData) {
  let url =
    process.env.REACT_APP_USER_CONTRACT_MICROSERVICE +
    `/check-address?contractAddress=` +
    requestData;
  console.log("url----", url);
  return httpService(httpConstants.METHOD_TYPE.GET, getHeaders(), {}, url)
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

async function renameContract(requestData) {
  let url =
    process.env.REACT_APP_USER_CONTRACT_MICROSERVICE +
    httpConstants.API_END_POINT.RENAME_CONTRACT;
  console.log("url----", url);
  return httpService(
    httpConstants.METHOD_TYPE.PUT,
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

async function removeContract(requestData) {
  let url =
    process.env.REACT_APP_USER_CONTRACT_MICROSERVICE +
    httpConstants.API_END_POINT.ADD_CONTRACT;
  console.log("url----", url);
  return httpService(
    httpConstants.METHOD_TYPE.DELETE,
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
