import React, { lazy, Suspense } from "react";
import { Router, Route, withRouter } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { connect } from "react-redux";
import { history } from "./managers/history";
import BaseComponent from "./modules/baseComponent";
import { createTheme } from "@material-ui/core/styles";
import ShowLoader from "./common/components/showLoader";
// import { sessionManager } from "./managers/sessionManager";

const Dashboard = withRouter(
  lazy(() => import("./modules/dashboard/dashboardComponent"))
);

class Routes extends BaseComponent {
  componentDidMount() {
    
    // let user = "";

    // try {
    //   user = window.web3.eth.accounts;
    // } catch (e) {}

    // const redirectToLogout = () => {
    //   sessionManager.removeDataFromCookies("isLoggedIn");
    //   sessionManager.removeDataFromCookies("accountAddress");
    //   sessionManager.removeDataFromCookies("userId");
    //   sessionManager.removeDataFromCookies("username");
    //   sessionManager.removeDataFromCookies("profilePicture");
    //   history.replace("/");
    // };
    // if(props.user=="")
    //   {redirectToLogout()
    //   }
  
  }

  getPublicRoutes = () => {
    return (
      <Switch>
        <Redirect exact from="*" to="/" />
      </Switch>
    );
  };
  getPrivateRoutes = () => {
    return (
      <Suspense fallback={<ShowLoader />}>
        <Switch>
          <Redirect exact from="/" to="/about" />
          <Route exact path={"/"} component={Dashboard} />
          <Route exact path={"/:menu"} component={Dashboard} />
          <Route
            exact
            path={"/:menu/:subMenu"}
            component={Dashboard}
          />
          <Redirect exact from="*" to="/" />
        </Switch>
      </Suspense>
    );
  };

  render() {
    
    return (
      <>
      <MuiThemeProvider muiTheme={createTheme()}>
        <Router history={history}>
          {true ? this.getPrivateRoutes() : this.getPublicRoutes()}
        </Router>
      </MuiThemeProvider>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Routes);
