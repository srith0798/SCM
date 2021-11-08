import React from "react";
import CreateAccount from "./createAccount";
import LoginSideView from "../loginSideView/loginSideView";

export default class Account extends BaseComponent {
  render() {
    return (
      <div>
        <LoginSideView />
        <CreateAccount />
      </div>
    );
  }
}
