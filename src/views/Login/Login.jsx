import React, { Component } from 'react';
import DevC from '../../asset/imgs/devc.png';
import DevC1 from '../../asset/imgs/devc1.png';
import DevC2 from '../../asset/imgs/devc2.png';
import DevC3 from '../../asset/imgs/devc3.png';
import UserNameIcon from '../../asset/icons/username.png';
import PasswordIcon from '../../asset/icons/password.png';


class Login extends Component {
  render() {
    return (
      <div className="login">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={DevC} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={DevC1} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={DevC2} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={DevC3} alt="Forth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={DevC} alt="Fifth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={DevC} alt="Sixth slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>          
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          </ol>
        </div>    
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
                                        Don't have an account?
                    {' '}
                                        <a className="regain" href="./Signup">
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
