import React from "react";
import { TopBar, Profile, FooterLove, ProfileInfo } from "../components/index";
import { Login } from "../components/index";
function LoginPage() {
  return (
    <>
      <TopBar />
      <Login />
      <FooterLove />
    </>
  );
}

export default LoginPage;
