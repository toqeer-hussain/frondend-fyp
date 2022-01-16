import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import ApiCall from "./BackendCall";
export default function VerifyMail() {
  const [success, setsuccess] = useState("");
  // get url params using react route dom
  const { verifytoken } = useParams();
  const history = useHistory();
  const getdata = async () => {
    const response = await ApiCall.get(`/user/verifymail/${verifytoken}`);
    if (response.data.Email_Verified) {
      setsuccess("Email Verified Successfully");
      history.replace("/Login");
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  return <div>{success}</div>;
}
