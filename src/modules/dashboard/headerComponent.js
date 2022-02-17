import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import { Row } from "simple-flexbox";
import { makeStyles } from "@material-ui/styles";
import UploadPhoto from "./uploadPhoto";
import FileUpload from "../../services/fileUpload";
import Utility from "../../utility/index";
import UserService from "../../services/user";
import { history } from "../../managers/history";
import { cookiesConstants, pathConstants } from "../../constants";
import sessionManager from "../../managers/sessionManager";
import Popover from "@material-ui/core/Popover";

const HeaderComponent = (props) => {
  const [openPopOver, setOpenPopOver] = React.useState(null);
  const open = Boolean(openPopOver);
  return (
    <HeaderContainer>
      <Row style={{ position: "absolute" }}>
        <PopOverComponent {...props}></PopOverComponent>
      </Row>
      <Row></Row>
    </HeaderContainer>
  );
};

function PopOverComponent(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openPopOver, setOpenPopOver] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const [cancel, setCancel] = React.useState(false);
  const handlePopup = () => {
    setCancel(!cancel);
  };
  const handleClose = () => {
    setOpenPopOver(null);
  };
  const [ImageURL, setImageURL] = useState("");
  const [file, setFile] = React.useState(null);

  const handleUpload = (event) => {
    setFile({
      raw: event.target.files[0],
      previewURL: URL.createObjectURL(event.target.files[0]),
    });
  };
  const DragAndDropImage = (value) => {
    setFile({ raw: value, previewURL: URL.createObjectURL(value) });
  };
  const uploadLogo = async (file) => {
    if (!file) return;
    let formData = new FormData();
    const pathValue = "file";
    formData.append("uploadedFile", file);
    formData.append("path", pathValue);
    return await FileUpload.fileUpload(formData);
  };
  const savePicture = async (event) => {
    let logoData = {};
    if (file && file.raw) logoData = await uploadLogo(file?.raw);
    const userMetaData = sessionManager.getDataFromCookies(
      cookiesConstants.USER_META_DATA
    );
    const UserID = sessionManager.getDataFromCookies(
      cookiesConstants.USER_DETAILS
    );
    let req = {
      id: UserID.sub,
      picture: logoData[0].url,
    };
    console.log("uploaded logo data is ======>", req);
    const [err, response] = await Utility.parseResponse(
      UserService.updateUser(req)
    );
    if (err || !response) return;
    Utility.apiSuccessToast("Profile Picture Updated Successfully");
    // window.location.reload();
    setCancel(!cancel);
    setAnchorEl(null);
    history.push(pathConstants.DASHBOARD_MENU.HOSPITALS);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <div className={classes.root}>
      <div className={classes.styleHeader}>
        <UserAvatar
          alt="avatar"
          src={file?.previewURL ? file.previewURL : props.data.ProfileURL}
          className={props.class}
          aria-describedby={id}
          type="avatar"
          onClick={handleClick}
        />
      </div>
      <PopOverRapper>
        <Popover
          id={id}
          onClose={handleClick}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <div className={classes.paper}>
            <ul
              className={classes.textStyle}
              style={{ cursor: "pointer" }}
              onClick={props.changePassword}
            >
              Change Password
            </ul>
            <ul
              className={classes.textStyle}
              style={{ cursor: "pointer" }}
              onClick={handlePopup}
            >
              Upload Photo
            </ul>
            <ul
              className={classes.textStyle}
              style={{ cursor: "pointer" }}
              onClick={props.logout}
            >
              Logout
            </ul>
            {cancel && (
              <UploadPhoto
                savePicture={savePicture}
                DragAndDropImage={DragAndDropImage}
                file={file}
                handleUpload={handleUpload}
                clicked={handlePopup}
                ImageURL={props.data.ProfileURL}
                state={props.state}
              />
            )}
          </div>
        </Popover>
      </PopOverRapper>
    </div>
  );
}
export default HeaderComponent;

const useStyles = makeStyles(() => ({
  avatarStyle: {
    width: "30px",
    height: "30px",
    margin: "7px 10px 0 0",
  },
  styleHeader: {
    display: "flex",
    justifyContent: "flex-end",
  },
  styleParagraph: {
    color: "#343434",
    margin: "15px 15px 15px 0",
    fontSize: "12px",
    fontWeight: "500",
  },
  paper: {
    boxShadow: "0 3px 22px 0 #f1f0f0",
    borderRadius: "3px",
    border: "solid 1px #ece9e9",
    padding: "6px 0 6px 0",
    backgroundColor: "#ffffff",
    margin: "0px 0px 0px 0px",
    height: "100px",
    width: "140px",
    color: "#343434",
  },
  textStyle: {
    color: "#3a3a3a",
    fontFamily: "MuseoSans !important",
    fontSize: "14px",
    fontWeight: "500",
    margin: "5px 0px 10px 3px",
    paddingLeft: "6px",
  },
}));
const PopOverRapper = styled.div`
  margin-top: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 60px;
  width: 100%;
  margin: 0 0 2px;
  padding: 10px 12px 7px 29px;
  border-bottom: 3px solid #d6e7f2;
  box-shadow: 0 3px 6px 0 #f5f8fa;
  background-color: #ffffff;
`;
const UserAvatar = styled(Avatar)`
  height: 32px !important;
  width: 32px !important;
  cursor: pointer;
`;
