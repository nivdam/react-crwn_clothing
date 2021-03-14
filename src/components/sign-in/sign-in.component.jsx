import React from "react";

import FormInput from "../form-input/form-input.component";
// import CustomButton from '../custom-button/custom-button.component';

import "./sign-in.style.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    // console.log(value);

    this.setState({ [name]: value }, () =>
      console.log(this.state, { name, value })
    );
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            id="input-email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            id="input-password"
            required
          />
          {/* <CustomButton type='submit'> Sign in </CustomButton> */}
          <button type="submit">Sign in</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
