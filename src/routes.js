import React, { lazy, Suspense } from "react";
import { Router, Route, withRouter } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { connect } from "react-redux";
import { history } from "./managers/history";
import BaseComponent from "./modules/baseComponent";
import { createTheme } from "@material-ui/core/styles";
import ShowLoader from "./common/components/showLoader";

const Dashboard = withRouter(
  lazy(() => import("./modules/dashboard/dashboardComponent"))
);

class Routes extends BaseComponent {
  componentDidMount() {}

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
          <Redirect exact from="/" to="/dashboard/about" />
          <Route exact path={"/dashboard"} component={Dashboard} />
          <Route exact path={"/dashboard"} component={Dashboard} />
          <Route exact path={"/dashboard/:menu"} component={Dashboard} />
          <Route
            exact
            path={"/dashboard/:menu/:subMenu"}
            component={Dashboard}
          />
          <Redirect exact from="*" to="/" />
        </Switch>
      </Suspense>
    );
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={createTheme()}>
        <Router history={history}>
          {true ? this.getPrivateRoutes() : this.getPublicRoutes()}
        </Router>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Routes);
