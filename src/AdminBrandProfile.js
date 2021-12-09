import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Spacer from "./UI/Spacer";
import ApiCall from "./BackendCall";
import SideBar from "./UI/SideBar";

let itemcategory = [
  { key: "10", value: "HBL / Konnect" },
  { key: "20", value: "Advans Micro Finance Bank LTD" },
  { key: "30", value: "Al Baraka Islamic Bank Limited" },
  { key: "40", value: "Allied Bank Limited" },
  { key: "50", value: "Apna Microfinance Bank" },
  { key: "60", value: "Askari Commercial Bank Limited" },
  { key: "70", value: "Bank Al Habib Limited" },
  { key: "80", value: "Bank Alfalah Limited" },
  { key: "90", value: "Bank of Khyber" },
  { key: "100", value: "Bank of Punjab" },
  { key: "110", value: "BankIslami Pakistan Limited" },
  { key: "120", value: "Burj Bank Limited" },
  { key: "130", value: "Citi Bank" },
  { key: "140", value: "Dubai Islamic Bank Pakistan Limited" },
  { key: "150", value: "Easypaisa / Telenor Microfinance Bank" },
  { key: "160", value: "Faysan Bank Limited" },
  { key: "170", value: "FINCA Microfinance Bank" },
  { key: "180", value: "FINJA EMI" },
  { key: "190", value: "First Women Bank" },
  { key: "200", value: "FMFB-PK / FirstPay" },
  { key: "210", value: "Habib Metropolitan Bank Limited" },
  { key: "220", value: "ICBC" },
  { key: "230", value: "JS Bank" },
  { key: "240", value: "KASB Bank Limited" },
  { key: "250", value: "Khushali Microfinance Bank" },
  { key: "260", value: "MCB Bank Limited" },
  { key: "270", value: "MCB Islamic" },
  { key: "280", value: "MCB Arif Habib Savings" },
  { key: "290", value: "Meezan Bank Limited" },
  { key: "300", value: "Mobilink Microfinance Bank Ltd / JazzCash" },
  { key: "310", value: "National Bank of Pakistan" },
  { key: "320", value: "NAYAPAY" },
  { key: "330", value: "MBP Fund Management Limited" },
  { key: "340", value: "NRST MFBL" },
  { key: "350", value: "PayMax" },
  { key: "360", value: "SadaPay" },
  { key: "370", value: "SAMBA" },
  { key: "380", value: "Silk Bank" },
  { key: "390", value: "Sindh Bank" },
  { key: "400", value: "Soneri Bank Limited" },
  { key: "410", value: "Standard Chartered Bank" },
  { key: "420", value: "Summit Bank" },
  { key: "430", value: "UBank / UPaisa" },
  { key: "440", value: "United Bank Limited" },
];

const getbank = (value) => {
  let index = itemcategory.findIndex((x) => x.key === value);
  return itemcategory[index].value;
};

let rows = [];
export default function AdminBrandProfile() {
  const [data, setdata] = useState([]);
  const getdata = async () => {
    const response = await ApiCall.get("/procom");
    setdata(response.data);
    console.log("data", response.data);
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ flex: 1, margin: "10px" }}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>#</TableCell>

                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Promoter ID
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }} align="right">
                    Bank Name
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }} align="right">
                    Account No
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }} align="right">
                    Com Pending
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }} align="right">
                    Com Recieved
                  </TableCell>

                  <TableCell style={{ fontWeight: "bold" }} align="right">
                    Com Left
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="right">{row.promoter.pro_id}</TableCell>
                    <TableCell align="right">
                      {getbank(row.bankdetail.bankName)}
                    </TableCell>
                    <TableCell align="right">
                      {row.bankdetail.accountNumber}
                    </TableCell>
                    <TableCell align="right">{row.pencommission}</TableCell>
                    <TableCell align="right">{row.reccom}</TableCell>
                    <TableCell align="right">
                      {row.pencommission - row.reccom}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Spacer space="20" />
        </div>
      </div>
    </div>
  );
}
