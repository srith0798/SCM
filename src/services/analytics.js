import { httpConstants, cookiesConstants } from "../constants";
import { httpService } from "../utility/httpService";
import { sessionManager } from "../managers/sessionManager";

export default {
  getTransactionsAnalytics,
  getGasUsedAnalytics,
  getActiveUsersAnalytics,
  getTopCallers,
  getTopFunctionCalls
};

function getHeaders() {
  return {
    "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON,
    "authorization": `Bearer ${sessionManager.getDataFromCookies(cookiesConstants.SESSION_TOKEN)}`,
    skip: true,
  };
}

async function getTransactionsAnalytics(requestData) {
  let url =  process.env.REACT_APP_USER_TRANSACTION_MICROSERVICE + "/get-transaction-analytics";
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

async function getGasUsedAnalytics(requestData) {
    let url = process.env.REACT_APP_USER_TRANSACTION_MICROSERVICE + "/get-gas-used-analytics";
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
  
  async function getActiveUsersAnalytics(requestData) {
    let url = process.env.REACT_APP_USER_TRANSACTION_MICROSERVICE +  "/get-active-users-analytics";
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

  async function getTopCallers(requestData) {
    let url = process.env.REACT_APP_USER_TRANSACTION_MICROSERVICE +  "/get-top-callers";
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

  async function getTopFunctionCalls(requestData) {
    let url = process.env.REACT_APP_USER_TRANSACTION_MICROSERVICE +  "/get-top-function-calls";
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


