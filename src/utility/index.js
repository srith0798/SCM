import "react-s-alert/dist/s-alert-default.css";
import { history } from "../managers/history";
// import Cookies from "universal-cookie";
import ToastService from "react-material-toast";

const toast = ToastService.new({
  place: "topRight",
  duration: 1,
  maxCount: 2,
});
const utility = {
  truncateTxnAddress,
  getHeader,
  apiFailureToast,
  apiSuccessToast,
  isNumber,
  trackEvent,
  navigateToPath,
  toggleDropDown,
  // validateName,
  // validateEmail,
  // isPasswordValid,
  isEmpty,
  isMenuActive,
  parseResponse,
  convertToInternationalCurrencySystem,
  truncateTxnAddressDesktop,
  truncateTag
};
export default utility;


export const dispatchAction = (type, data) => {
  return (dispatch) => dispatch({ type, data });
};

function parseResponse(promise) {
  return promise
    .then((data) => {
      return [null, data];
    })
    .catch((err) => [err]);
}
function trackEvent(event, eventData) {
  // try {
  //     if (!eventData)
  //         mixpanel.track(event);
  //     else
  //         mixpanel.track(event, eventData);
  // } catch (err) {
  //     console.log(err)
  // }
}
function convertToInternationalCurrencySystem(num) {
  if (isNaN(Number(num))) {
    return "";
  }
  num = Number(num);
  if (num > 999.99999999 && num < 1000000) {
    return parseFloat((num / 1000).toFixed(2)) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num > 999999.99999999 && num < 999999999.99999999) {
    return parseFloat((num / 1000000).toFixed(2)) + "M"; // convert to M for number from > 1 million && < 1 billion
  } else if (num >= 1000000000) {
    return parseFloat((num / 1000000000).toFixed(2)) + "B"; // convert to B for number from > 1 billion
  } else if (num < 999.99999999) {
    return parseFloat(num.toFixed(8)); // if value < 1000, nothing to do
  }
}

function getHeader() {
  // return {
  //     'session-token': sessionManager.getDataFromCookies(genericConstants.COOKIES_KEY.SESSION_TOKEN),
  //     'device-id': sessionManager.getDataFromCookies(genericConstants.COOKIES_KEY.DEVICE_ID),
  //     'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON
  // };
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

//TODO: update apiConstant.API_FAILURE
function apiFailureToast(message) {
  toast.error(message ? message : "apiConstant.API_FAILURE");
}

function apiSuccessToast(msg) {
  toast.success(msg ? msg : "apiConstant.API_SUCCESS");
}
function truncateTxnAddress(address) {
  const start = address.slice(0, 7);
  const end = address.slice(-5);
  // console.log(start, end);
  return start + "..." + end;
}
function truncateTxnAddressDesktop(address) {
  const start = address.slice(0, 20);
  const end = address.slice(-16);
  // console.log(start, end);
  return start + "..." + end;
}
function truncateTag(tag){
  const start = tag.slice(0, 20);
  const end = tag.slice(-16);
  // console.log(start, end);
  return start + "..." + end;
}

function navigateToPath(path) {
  history.push(path);
}

function toggleDropDown(dropdownID) {
  // $("#" + dropdownID).toggle("show");
}

// function validateName(name) {
//     let reg = /[A-Z][a-zA-Z]*/;
//     return reg.test(name)
// }

// function validateEmail(email) {
//     let reg =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return reg.test(email);
// }

// function isPasswordValid(password) {
//     let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
//     return reg.test(password);
// }

function isEmpty(string) {
  return !string || string.trim().length === 0;
}

function isMenuActive(path) {
  // console.log(window.location.pathname, path);
  return window.location.pathname.includes(path);
}
