import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  white-space: nowrap;
  margin-top: 20px;
  border-spacing: 0 20px;
  // padding: 10px;
`;
const TableHead = styled.thead`
  border-radius: 8px;
`;
const TableBody = styled.tbody`
  position: relative;
`;
const HeadColumn = styled.th`
  color: #102C78;
  padding: 14px 0 14px 26px;
  font-weight: 300;
  text-align: left;
  font-size: 16px;
  font-weight: 300;
  width:320px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: solid 1px #bbbbbb;
  &:first-child {
    border-top: none;
    border-left: none;
    border-right: none;
  }
  &:last-child {
    border-top: none;
    border-left: none;
    border-right: none;
  }
`;
const BodyRow = styled.tr`
  padding: 20px 26px;
  margin: 0px 0px 0px 0px;
  font-family: MuseoSans !important;
`;

const BodyColumn = styled.td`
  font-size: 16px;
  font-weight: 500;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: solid 1px #bbbbbb;
  text-align: left;
  vertical-align: middle;
  padding: 14px 0 14px 26px;

  &:first-child {
    border-top: none;
    border-left: none;
    border-right: none;
  }
  &:last-child {
    border-top: none;
    border-left: none;
    border-right: none;
  }
`;

export default {
  Table,
  TableHead,
  TableBody,
  HeadColumn,
  BodyColumn,
  BodyRow,
}
