/**
 * Created by Ayush Kulshrestha on 18/09/2019.
 */

export const httpConstants = {
  METHOD_TYPE: {
    POST: "POST",
    PUT: "PUT",
    GET: "GET",
    DELETE: "DELETE",
  },
  CONTENT_TYPE: {
    APPLICATION_JSON: "application/json",
    MULTIPART_FORM_DATA: "multipart/form-data",
    APPLICATION_FORM_URLENCODED: "application/x-www-form-urlencoded",
    IMAGE_PNG: "image/png",
  },
  DEVICE_TYPE: {
    WEB: "web",
  },
  API_END_POINT: {
    GET_CONTRACTS_LIST: "/contract-list",
    ADD_CONTRACT: "/contract",
    HIDE_CONTRACT: "/hide-contract",
    SHOW_CONTRACT: "/show-contract",
    RENAME_CONTRACT: "/contract-name",
    GET_USER: "/user",
    ADD_TAGS: "/tags",
    GET_TRANSACTIONS_LIST: "/get-transaction",
    REMOVE_TAG: "/tags",
    ADD_NETWORK: "/add-network",
    GET_NETWORK_LIST: "/get-network",
  },
  MESSAGE:{
    TOASTS_POSITION:"top-center",
    VALIDATE_BROWSER_LOGIN:"Please Login To XDCPay"
  }
};

export const analytics = {
  ANALYTICS_DROPDOWN :[
    {
      TEXT : "Last 7 days",
      VALUE: 7
    },
    {
      TEXT : "Last 15 days",
      VALUE: 15
    },
    {
      TEXT : "Last 25 days",
      VALUE: 25
    },
    {
      TEXT : "Last 1 month",
      VALUE: 30
    },
  ]
}
