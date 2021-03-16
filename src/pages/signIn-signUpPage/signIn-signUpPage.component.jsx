import React from "react";

import "./signIn-signUpPage.style.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const signInSignUpPage = () => (
  <div className="sign_in_sign_up--page">
    <SignIn />
    <SignUp />
  </div>
);

export default signInSignUpPage;
