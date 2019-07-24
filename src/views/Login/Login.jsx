import React, { Component } from 'react';
import UserNameIcon from '../../asset/icons/username.png';
import PasswordIcon from '../../asset/icons/password.png';

class Login extends Component {
  render() {
    return (      
      <div className="login">
        <div className="column1" />
        <div className="box">
          <div className="row">
            <div className="col-md-6" />
            <div className="col-md-6">
              <div className="signin">
                <div className="login-form">
                  <form autoComplete="off">
                    <h1>Sign In</h1>
                    <div className="icon">
                      <img alt="facebook_signin" src="https://img.icons8.com/color/48/000000/facebook-circled.png" />
                      <img alt="google_signin" src="https://img.icons8.com/color/48/000000/google-logo.png" />
                    </div>
                    <div className="input-group">
                      <img src={UserNameIcon} alt="ui" />
                      <input className="input" type="text" htmlFor="username" placeholder="sammysmart" autoComplete="false" />
                    </div>
                    <br />
                    <div className="input-group">
                      <img src={PasswordIcon} alt="ui" />
                      <input className="input" type="password" htmlFor="password" placeholder="* * * * * * * * * *" autoComplete="false" />
                    </div>
                    <br />
                    <button className="button" type="button">
                      Login
                    </button>
                  </form>
                  <p className="pass">
                    Forgot your
                    {' '}
                    <a className="regain" href="/">
                      password?
                    </a>
                  </p>
                  <p className="p1">
                    Already have an account?
                    {' '}
                    <a className="regain" href="/">
                      click here.
                    </a>
                    {' '}
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    {' '}
                    <a href="/">Need help?</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
