import { httpConstants, cookiesConstants } from "../constants";
import { httpService } from "../utility/httpService";
import { sessionManager } from "../managers/sessionManager";

export default {
  addAlert,
  getAlertList,
  getAlertDetails,
  deleteAlert,
  updateAlert,
  getHistoryList
};

function getHeaders() {
  return {
    "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON,
    "authorization": `Bearer ${sessionManager.getDataFromCookies(cookiesConstants.SESSION_TOKEN)}`,
    skip: true,
    "X-API-key": process.env.REACT_APP_X_API_KEY
  };
}

async function addAlert(requestData) {
  let url = "http://localhost:3003/alert";
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

async function getAlertList(requestData) {
    let url = process.env.REACT_APP_ALERT_MICROSERVICE + "/alert-list";
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
  async function getAlertDetails(requestData) {
    let url = process.env.REACT_APP_ALERT_MICROSERVICE + "/alert/" + requestData.alertId;
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

  async function deleteAlert(requestData) {
    let url = process.env.REACT_APP_ALERT_MICROSERVICE + "/alert/" + requestData;
    return httpService(
      httpConstants.METHOD_TYPE.DELETE,
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

  async function updateAlert(requestData) {
    let url = process.env.REACT_APP_ALERT_MICROSERVICE + "/alert/" + requestData.alertId;
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

  async function getHistoryList(requestData) {
    let url = process.env.REACT_APP_ALERT_MICROSERVICE + "/history-list";
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