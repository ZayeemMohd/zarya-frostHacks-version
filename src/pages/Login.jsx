import React from "react";
import { Login as LoginComponent } from "../components/index";

function Login(props) {
  return (
    <div className="py-8 h-[95vh]">
      <div className="mt-9">
        <LoginComponent />
      </div>
    </div>
  );
}

export default Login;
