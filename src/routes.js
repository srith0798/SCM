import React from "react";
import { Router, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { connect } from "react-redux";
import { history } from "./managers/history";
import BaseComponent from "./modules/baseComponent";
// import LoginComponent from "./modules/login/loginComponent";
import TransactionList from "./modules/transactions/transactionList";
// import CreateAccount from "./modules/CreateAccount/createAccount";
import VerifyEmail from "./modules/VerifyEmail/verifyEmail";
import Contract from "./modules/Contract/contract";
import ContractDetails from "./modules/contractDetails/contractDetails";
import SubContractsInfo from "./modules/TransactionDetails/SubContracts2";

import AddContract from "./modules/Popup/addContract";
import ContractAbi from "./modules/Popup/contractAbi";
import RenameContract from "./modules/Popup/renameContract";
import SourceCode from "./modules/contractDetails/sourceCode";
import HideContract from "./modules/Popup/hideContract";
import Remove from "./modules/Popup/remove";
import transactionDetails from "./modules/TransactionDetails/transactionDetails";
import Network from "./modules/Network/network";
import LetsGetStarted from "./modules/Popup/letsGetStartedPopUp";
import AddNetwork from "./modules/Popup/addNetwork";
import Settings from "./modules/Popup/settings";
import Rules from "./modules/Alerting/Rules";
import AlertDetails from "./modules/Alerting/AlertDetails";
import Analytics from "./modules/Analytics/analytics";
import MainComponent from "./modules/Analytics/mainComponent";
import FullScreen from "./modules/Analytics/fullScreen";

class Routes extends BaseComponent {
  componentDidMount() {}

  // componentDidMount() {}

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={history}>
          <Switch>
            {/* <Route exact path={"/"} component={LoginComponent} /> */}
            <Route exact path={"/"} component={TransactionList} />

            <Route exact path={"/verify"} component={VerifyEmail} />
            <Route exact path={"/contract"} component={Contract} />
            <Route
              exact
              path={"/contract-details"}
              component={ContractDetails}
            />
            <Route
              exact
              path={"/transaction-details"}
              component={transactionDetails}
            />
            <Route exact path={"/subcontract2"} component={SubContractsInfo} />
            <Route exact path={"/AlertDetails"} component={AlertDetails} />
            <Route exact path={"/Alerting"} component={Rules} />

            <Route exact path={"/add-contract"} component={AddContract} />
            <Route exact path={"/rename-contract"} component={RenameContract} />
            <Route exact path={"/contract-abi"} component={ContractAbi} />
            <Route exact path={"/source-code"} component={SourceCode} />
            <Route exact path={"/hide-contract"} component={HideContract} />

            <Route exact path={"/network"} component={Network} />
            <Route exact path={"/startedPopUp"} component={LetsGetStarted} />
            <Route exact path={"/remove"} component={Remove} />
            <Route exact path={"/add-network"} component={AddNetwork} />
            <Route exact path={"/settings"} component={Settings} />
            <Route exact path={"/analytics"} component={Analytics} />
            <Route exact path={"/analytics"} component={MainComponent} />
            <Route exact path={"/fullscreen"} component={FullScreen} />
            <Redirect exact from="*" to="/" />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Routes);
