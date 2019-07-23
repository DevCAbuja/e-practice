import React, { Component } from 'react'


class Login extends Component {
  render() {
    return <div id="container">
        <div id="box">
          <div class="row">
            <div class="column1">
            </div>
            <div class="column2">
              <div class="signin">
                <div id="input">
                  <h1>Sign Up</h1>
                  <div class="icon"><img src="https://img.icons8.com/color/48/000000/facebook-circled.png"></img>
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png"></img>
                  </div>
                  <input class="input" type="text" for="username" placeholder="sammysmart"></input><br />
                  <input class="input" type="password" for="password" placeholder="..............."></input><br />
                  <button className="button" type="button">SignUp</button>
                  <p class="pass">Forgot your <a class="regain" href="#">password?</a></p>
                  <p class="p1">Already have an account? <a class="regain" href="#">click here.</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="#">Need help?</a></p>                 
                </div> 
              </div>
            </div>
          </div>
        </div>      
    </div>
  }
}

export default Login