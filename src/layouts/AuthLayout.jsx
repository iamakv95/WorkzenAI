import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, AuthHeader } from "../components";

const AuthLayout = () => {
  return (
    <>
      <AuthHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default AuthLayout;
