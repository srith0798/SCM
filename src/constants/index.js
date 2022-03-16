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
    IMAGE_PNG: "IMAGE/png",
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
    GET_TRANSACTIONS_LIST: "/get-transaction-list",
    GET_TRANSACTION_FROM_HASH: "/get-transaction",
    REMOVE_TAG: "/tags",
    ADD_NETWORK: "/add-network",
    GET_NETWORK_LIST: "/get-network",
    GET_CONTRACT_BY_ADDRESS: "/contract/"
  },
  MESSAGE:{
    TOASTS_POSITION:"top-center",
    VALIDATE_BROWSER_LOGIN:"Please Login To XDCPay"
  }
};

export const analytics = {
  ANALYTICS_DROPDOWN :[
    {
      TEXT : "Last 1 month",
      VALUE: 30
    },
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
    }
   ,
  ]
}

export const validationsMessages = {
  VALIDATE_BROWSER_REDIRECTING: "XDCPay Extension Not Available",
  TOASTS_POSITION: "top-center"
}

export const genericConstants={
  ALERT_TYPE:{
  SUCCESSFULL_TRANSACTIONS:"SUCCESSFULL_TRANSACTIONS",
  FAILED_TRANSACTIONS:"FAILED_TRANSACTIONS",
  TOKEN_TRANSFER:"TOKEN_TRANSFER",
  TRANSACTION_VALUE:"TRANSACTION_VALUE",
  XDC_BALANCE:"XDC_BALANCE",
  STATE_CHANGE:"STATE_CHANGE",
  FUNCTION_CALL:"FUNCTION_CALL",
  ADDRESS:"ADDRESS",
  NETWORK:"NETWORK",
  TAG:"TAG"
},
 ALERT_TYPE_IMAGES:{
    SUCCESSFULL_TRANSACTIONS:{TYPE: "successfulTransaction", IMAGE : "/images/successful-transaction-blue.svg"},
    FAILED_TRANSACTIONS: {TYPE: "failedTransaction", IMAGE : "/images/failed-transaction-blue.svg"},
    TOKEN_TRANSFER:{TYPE: "tokenTransfer", IMAGE :  "/images/xdc-token-transfer-blue.svg"},
    TRANSACTION_VALUE: {TYPE: "transactionValue", IMAGE : "/images/transaction-value-blue.svg"},
    XDC_BALANCE: {TYPE: "balanceToken", IMAGE : "/images/xdc-balance-blue.svg"},
    STATE_CHANGE:{TYPE: "stateChange", IMAGE : "/images/state-change-blue.svg"},
    FUNCTION_CALL: {TYPE: "functionCall", IMAGE :"/images/functioncall.svg"},
    ADDRESS:{TYPE: "address", IMAGE : "/images/address-logo-blue.svg"},
    NETWORK: {TYPE: "network", IMAGE :  "/images/network-logo-blue.svg"},
    TAG:{TYPE: "tag", IMAGE :  "/images/tag-logo-blue.svg"}
 },
 ALERT_TYPE_IMAGES_WHITE:{
  SUCCESSFULL_TRANSACTIONS:{TYPE: "successfulTransaction", IMAGE : "/images/successful-transaction.svg"},
  FAILED_TRANSACTIONS: {TYPE: "failedTransaction", IMAGE : "/images/failed-transaction-white.svg"},
  TOKEN_TRANSFER:{TYPE: "tokenTransfer", IMAGE :  "/images/xdc-token-white.svg"},
  TRANSACTION_VALUE: {TYPE: "transactionValue", IMAGE : "/images/xdc-logo-white.svg"},
  XDC_BALANCE: {TYPE: "balanceToken", IMAGE : "/images/xdc-logo-white.svg"},
  STATE_CHANGE:{TYPE: "stateChange", IMAGE : "/images/state-change-white.svg"},
  FUNCTION_CALL: {TYPE: "functionCall", IMAGE :"/images/functioncall.svg"},
  ADDRESS:{TYPE: "address", IMAGE : "/images/address-logo-white.svg"},
  NETWORK: {TYPE: "network", IMAGE :  "/images/network-logo-white.svg"},
  TAG:{TYPE: "tag", IMAGE :  "/images/tag-logo-white.svg"}
},
ALERT_TYPE_NAMES:{
  SUCCESSFULL_TRANSACTIONS:"Successfull Transaction",
  FAILED_TRANSACTIONS:"Failed Transaction",
  TOKEN_TRANSFER:"Token Transfer",
  TRANSACTION_VALUE:"Value",
  XDC_BALANCE:"Balance",
  STATE_CHANGE:"State Change",
  FUNCTION_CALL:"Function Call"
},
DESTINATION_TYPE :{
  SLACK:"Slack",
  WEBHOOK:"Webhook",
  EMAIL:"Email"
}
}
