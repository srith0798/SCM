import React from "react";
import DashboardComponent from "./dashboardComponent";
import { history } from "../../managers/history";
import BaseComponent from "../baseComponent";
import { pathConstants, eventConstants ,cookiesConstants} from "../../constants";
import { dispatchAction } from "../../utility";
import { connect } from "react-redux";
import sessionManager from "../../managers/sessionManager";
import UserService from '../../services/user'
import Utility from "../../utility/index";


class Dashboard extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      ProfileURL: ""
    }
    let url = [];
    if (history.location.pathname) url = history.location.pathname.split("/");

    if (url && url.length === 2)
      history.replace(pathConstants.DASHBOARD_MENU.HOSPITALS);
  }

  componentDidMount = async () => {
    const UserID = sessionManager.getDataFromCookies(cookiesConstants.USER_DETAILS)
    const [err,response] = await Utility.parseResponse(UserService.getUserDetails(UserID.sub));
    if(!err && response)
      this.setState({ProfileURL:response.user_metadata.picture})
  }
  onMenuClick = (activeMenu) => {
    history.push({ pathname: activeMenu });
  };
 
  logout = async () => {
    this.props.dispatchAction(eventConstants.LOGOUT_SUCCESS, {});
    sessionManager.removeDataFromCookies(cookiesConstants.USER_META_DATA);
    sessionManager.removeDataFromCookies(cookiesConstants.USER_DETAILS);
    localStorage.clear();
    history.push('/')
  }
  changePassword =()=>{
    history.push('/change-password')
  }
  
  render() {
    return <DashboardComponent 
    data={
      {
        ProfileURL:this.state.ProfileURL
      }
    }
    onMenuClick={this.onMenuClick} logout={this.logout} changePassword={this.changePassword}/>;
  }
}
const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { dispatchAction })(Dashboard);
