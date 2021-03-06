import { httpConstants, cookiesConstants } from "../constants";
import { sessionManager } from "../managers/sessionManager";
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
  addTags,
  getTransactionsList,
  removeTags,
  addNetworks,
  getNetworksLists,
  getTags,
  getTransactionByHash,
  getContractByAddress,
  updateContract,
  getGasPriceInUSD,
  checkIfContractVerified,
  importContractsFromObserver
};

function getHeaders() {
  return {
    "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON,
    "authorization": `Bearer ${sessionManager.getDataFromCookies(cookiesConstants.SESSION_TOKEN)}`,
    skip: true,
    "X-API-key": process.env.REACT_APP_X_API_KEY
  };
}

async function getGasPriceInUSD(requestData) {
  let url = process.env.REACT_APP_USER_TRANSACTION_MICROSERVICE + httpConstants.API_END_POINT.GET_GASPRICE_IN_USD;
  return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function getContractsList(requestData) {
  let url = process.env.REACT_APP_USER_CONTRACT_MICROSERVICE + httpConstants.API_END_POINT.GET_CONTRACTS_LIST;
  return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function addContract(requestData) {
  let url = process.env.REACT_APP_USER_CONTRACT_MICROSERVICE  + httpConstants.API_END_POINT.ADD_CONTRACT;
  console.log("url----", url);
  return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}
async function getContractsById(requestData) {
  let url = process.env.REACT_APP_USER_CONTRACT_MICROSERVICE + httpConstants.API_END_POINT.ADD_CONTRACT + `?id=` + requestData;
  console.log("url----", url);
  return httpService(httpConstants.METHOD_TYPE.GET, getHeaders(), requestData, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function getContractByAddress(requestData, id) {
  let url = process.env.REACT_APP_USER_CONTRACT_MICROSERVICE + httpConstants.API_END_POINT.GET_CONTRACT_BY_ADDRESS + id;
  console.log("url----", url);
  return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function importContractsFromObserver(requestData) {
  let url = process.env.REACT_APP_USER_CONTRACT_MICROSERVICE + httpConstants.API_END_POINT.IMPORT_CONTRACTS;
  console.log("url----", url);
  return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}


async function hideContract(requestData) {
  let url = process.env.REACT_APP_USER_CONTRACT_MICROSERVICE + httpConstants.API_END_POINT.HIDE_CONTRACT;
  console.log("url----", url);
  return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
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
  let url = process.env.REACT_APP_USER_CONTRACT_MICROSERVICE + httpConstants.API_END_POINT.SHOW_CONTRACT;
  console.log("url----", url);
  return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}
async function checkAddress(requestData) {
  let url = process.env.REACT_APP_USER_CONTRACT_MICROSERVICE + `/check-address?contractAddress=` + requestData;
  console.log("url----", url);
  return httpService(httpConstants.METHOD_TYPE.GET, getHeaders(), {}, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}
async function checkIfContractVerified(requestData) {
  let url = process.env.REACT_APP_USER_CONTRACT_MICROSERVICE + `/check-verify-contract?contractAddress=` + requestData;
  console.log("url----", url);
  return httpService(httpConstants.METHOD_TYPE.GET, getHeaders(), {}, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}
async function renameContract(requestData) {
  let url = process.env.REACT_APP_USER_CONTRACT_MICROSERVICE + httpConstants.API_END_POINT.RENAME_CONTRACT;
  console.log("url----", url);
  return httpService(httpConstants.METHOD_TYPE.PUT, getHeaders(), requestData, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function removeContract(requestData) {
  let url = process.env.REACT_APP_USER_CONTRACT_MICROSERVICE + httpConstants.API_END_POINT.ADD_CONTRACT;
  console.log("url----", url);
  return httpService(httpConstants.METHOD_TYPE.DELETE, getHeaders(), requestData, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function updateContract(requestData) {
  let url = process.env.REACT_APP_USER_CONTRACT_MICROSERVICE + httpConstants.API_END_POINT.ADD_CONTRACT;
  console.log("url----", url);
  return httpService(httpConstants.METHOD_TYPE.PUT, getHeaders(), requestData, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function addTags(requestData) {
  let url = process.env.REACT_APP_USER_CONTRACT_MICROSERVICE + httpConstants.API_END_POINT.ADD_TAGS;
  console.log("url----", url);
  return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}
async function getTags(requestData) {
  let url = process.env.REACT_APP_USER_CONTRACT_MICROSERVICE + httpConstants.API_END_POINT.ADD_TAGS;
  if(requestData?.userId)
    url =  url + `?userId=${requestData.userId}`;
  console.log("url----", url);
  return httpService(httpConstants.METHOD_TYPE.GET, getHeaders(), requestData, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}
async function getTransactionsList(requestData) {
  let url = process.env.REACT_APP_USER_TRANSACTION_MICROSERVICE + httpConstants.API_END_POINT.GET_TRANSACTIONS_LIST;
  console.log("url----", url);
  return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function getTransactionByHash(requestData) {
  let url = process.env.REACT_APP_USER_TRANSACTION_MICROSERVICE + httpConstants.API_END_POINT.GET_TRANSACTION_FROM_HASH;
  console.log("url----", url);
  return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function removeTags(requestData) {
  let url = process.env.REACT_APP_USER_CONTRACT_MICROSERVICE + httpConstants.API_END_POINT.REMOVE_TAG;
  console.log("url----", url);
  return httpService(httpConstants.METHOD_TYPE.DELETE, getHeaders(), requestData, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}
async function addNetworks(requestData) {
  let url = process.env.REACT_APP_USER_CONTRACT_MICROSERVICE + httpConstants.API_END_POINT.ADD_NETWORK;

  console.log("url----", url);
  return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}
async function getNetworksLists(requestData) {
  let url = process.env.REACT_APP_USER_CONTRACT_MICROSERVICE + httpConstants.API_END_POINT.GET_NETWORK_LIST;

  console.log("url----", url);
  return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
    .then((response) => {
      if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}
