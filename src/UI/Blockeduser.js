import React, { useEffect, useState } from "react";

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
import Spacer from "../UI/Spacer";
import MyButton from "./MyButton";
import ApiCall from "../BackendCall";
import { SearchTwoTone } from "@material-ui/icons";

export default function MyTable({ promoter }) {
  const [blockeduser, setblockeduser] = useState([]);
  const [search, setsearch] = useState("");
  //   console.log("test", test);
  const getdata = async () => {
    const response = await ApiCall.get("/blockedlist");
    setblockeduser(response.data);
    console.log("what is data", response.data);
  };

  const blockuser = async (id) => {
    const response = await ApiCall.get("/unblockuser/" + id);
    setsearch(response.data);
    console.log("find data", search);
  };

  useEffect(() => {
    getdata();
  }, [search]);

  return (
    <div style={{ marginTop: "10px" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>#</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>User Name</TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                Type
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold" }}
                align="right"
              ></TableCell>
              <TableCell
                style={{ fontWeight: "bold" }}
                align="right"
              ></TableCell>
              <TableCell
                style={{ fontWeight: "bold" }}
                align="right"
              ></TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blockeduser.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="right">{row.Role}</TableCell>
                <TableCell align="right">{row.Conversions}</TableCell>
                <TableCell align="right">{row.Sales}</TableCell>
                <TableCell
                  style={{ fontWeight: "bold" }}
                  align="right"
                ></TableCell>
                <TableCell
                  align="right"
                  style={{ color: "green", fontWeight: "600" }}
                >
                  <MyButton
                    fillColor={"green"}
                    onPress={() => {
                      blockuser(row._id);
                    }}
                  >
                    Unblock
                  </MyButton>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Spacer space="20" />
    </div>
  );
}
