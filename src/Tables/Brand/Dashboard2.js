import React, { useState, useEffect } from "react";

import {
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import Spacer from "../../UI/Spacer";
import ApiCall from "../../BackendCall";

export default function MyTable({ promoter }) {
  const [data, setdata] = useState([]);

  const getdata = async () => {
    const response = await ApiCall.get(`/toppromoter`);
    setdata(response.data);
    console.log("top promoter", response.data);
  };
  useEffect(() => {
    getdata();
  }, []);
  // console.log("test", test);

  return (
    <div style={{ marginTop: "10px" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>#</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Promoter id</TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                Clicks
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Sales
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Conversions %
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Commission
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Return
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Return %
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{row.brand}</TableCell>
                <TableCell align="right">{row.click}</TableCell>
                <TableCell align="right">{row.sale}</TableCell>
                <TableCell align="right">{row.conversion}</TableCell>
                <TableCell align="right">
                  {" "}
                  <span>&#8360;</span> {row.commission}
                </TableCell>
                <TableCell align="right"> {row.return || "0"}</TableCell>
                <TableCell align="right"> {row.returnpre || "0"} %</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Spacer space="20" />
    </div>
  );
}
