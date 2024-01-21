import React from "react";
import { Signup as SignupComponent } from "../components";

function Signup(props) {
  return (
    <div className="py-8 h-screen">
      <div className="mt-7">
        <SignupComponent />
      </div>
    </div>
  );
}

export default Signup;
