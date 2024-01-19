import React, { useState, useEffect } from "react";
import SideMaster from "../view/parent_include/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header_admin from './header/header_admin';
import { Outlet } from "react-router-dom";

const PageMaster = () => {
  return (
    <div className="w-100 h-100 d-flex">
      <div
        className="d-flex"
        style={{ position: "fixed", minHeight: "100vh", zIndex: 2 }}
      >
        <SideMaster />
      </div>
      <div className="contents-admin" style={{ marginLeft: "260px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default PageMaster;
