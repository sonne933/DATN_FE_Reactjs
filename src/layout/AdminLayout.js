/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import Sidebar from "../compoment/admin/Sidebar";
import "../compoment/admin/Admin.css";
import NavAdmin from "../compoment/admin/NavAdmin";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import BaseUrl from "../utils/BaseUrl";
import axios from "axios";

export default function AdminLayout() {
  // const navigate = useNavigate();
  // const [open, setOpen] = useState(false);
  // const check = async () => {
  //   const id = sessionStorage.getItem("user");
  //   try {
  //     const user = await axios.get(BaseUrl + "account/getAccount/" + id);
  //     if (!user.data) {
  //       navigate("/signup");
  //     } else if (user?.data.typeAccount < 3) {
  //       navigate("/authorized");
  //     } else {
  //       setOpen(true);
  //     }
  //   } catch {
  //     navigate("/authorized");
  //   }
  // };
  // useEffect(() => {
  //   check();
  // });

  return (
    <>
      {open ? (
        <div>
          <Sidebar />
          <div className="content_admin">
            <NavAdmin />
            <Outlet />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
