import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
// import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { Row, Column } from "simple-flexbox";

export default function CreateAccount() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Div>
      <MainComponent>
        <Heading>Create Account</Heading>
        <RowSpan>
          Already having an account? <Color> &nbsp;Sign in </Color>
        </RowSpan>
        <hr></hr>
        <div style={{ marginTop: "35px" }}>
          <Row>
            <MainHeading>Email</MainHeading>
          </Row>
          <Row>
            <InputBox placeholder="Enter your email" />
          </Row>
          <Row>
            <MainHeading>Password</MainHeading>
          </Row>
          <Row>
            {/* <Input placeholder="Enter password" type="password" /> */}
            {/* <InputLabel htmlFor="standard-adornment-password">
              Enter Password
            </InputLabel> */}
            <Input
              type={values.showPassword ? "text" : "password"}
              onChange={handlePasswordChange("password")}
              value={values.password}
              placeholder="Enter password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Row>
          <Row>
            <MainHeading>Confirm Password</MainHeading>
          </Row>
          <Row>
            {/* <Input placeholder="Enter password" /> */}
            {/* <InputLabel htmlFor="standard-adornment-password">
              Enter Password
            </InputLabel> */}
            <Input
              type={values.showPassword ? "text" : "password"}
              onChange={handlePasswordChange("password")}
              value={values.password}
              placeholder="Enter password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Row>
          <RowSpan>
            I agree to the Xmartly <Color> &nbsp;terms &nbsp;</Color> and
            <Color> &nbsp;services&nbsp; </Color>
          </RowSpan>
        </div>
        <Row>
          <Button>Create account</Button>
        </Row>
      </MainComponent>
    </Div>
  );
}
const Div = styled.div`
  width: 100%;
  margin-top: 178px;
`;
const MainComponent = styled.div``;
const Heading = styled.span`
  text-align: left;
  font: normal normal 600 32px/39px Inter;
  color: #191919;
  margin-bottom: 21px;
`;
const MainHeading = styled.span`
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #191919;
`;
const RowSpan = styled.span`
  display: flex;
  flex-flow: row nowrap;
  text-align: left;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  margin-top: 21px;
`;
const InputBox = styled.input`
  background: #f5f5f5 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border: none;
  text-align: left;
  font: normal normal medium 18px/21px Inter;
  color: #b1b1b1;
  width: 100%;
  max-width: 667px;
  margin-top: 10px;
`;
const Color = styled.span`
  text-align: left;
  font: normal normal medium 18px/21px Inter;
  color: #3163f0;
`;
const Button = styled.button`
  background: #919ec1 0% 0% no-repeat padding-box;
  border-radius: 4px;
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  border: 0px;
`;
