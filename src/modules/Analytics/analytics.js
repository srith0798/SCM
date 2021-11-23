import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Line from "./graph";
import MainComponent from "./mainComponent";
import FullScreen from "./fullScreen";

export default function Analytics(props) {
  return <>{FullScreen ? <MainComponent /> : null}</>;
}
