import { useState } from "react";
import axios from "axios";
import { Link, Route, useHistory, useLocation } from 'react-router-dom';

function Login() {

    var [user, setUser] = useState({ email: "", password: "" });
    var history = useHistory();
    var handleChange = (args) => {
        debugger;
        var copy = { ...user };
        copy[args.target.name] = args.target.value;
        setUser(copy);
    };

    var signIn = (props) => {
        debugger;
        axios.post("http://localhost:9090/users/login", user).then((result) => {
        sessionStorage.setItem("email", result.email)
        history.push('/home')
        });
    };

    return (
      <>
        <body class="login-page">
          <div class="login-header box-shadow">
            <div class="container-fluid d-flex justify-content-between align-items-center">
              <div class="brand-logo">
                <a href="login.html">
                  <b>Health App</b>
                </a>
              </div>
              <div class="login-menu">
                <ul>
                  <li>
                    <a href="register">Register</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="login-wrap d-flex align-items-center flex-wrap justify-content-center">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-6 col-lg-7">
                  <img src="vendors/images/login-page-img.png" alt="" />
                </div>
                <div class="col-md-6 col-lg-5">
                  <div class="login-box bg-white box-shadow border-radius-10">
                    <div class="login-title">
                      <h2 class="text-center text-primary">
                        Login To HealthApp
                      </h2>
                    </div>
                    <form action="">
                      <div class="select-role"></div>
                      <div class="input-group custom">
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          name="email"
                          placeholder="Email"
                          value={user.email}
                          onChange={handleChange}
                        />
                        <div class="input-group-append custom">
                          <span class="input-group-text">
                            <i class="icon-copy dw dw-user1"></i>
                          </span>
                        </div>
                      </div>
                      <div class="input-group custom">
                        <input
                          type="password"
                          class="form-control form-control-lg"
                          name="password"
                          placeholder="**********"
                          value={user.password}
                          onChange={handleChange}
                        />
                        <div class="input-group-append custom">
                          <span class="input-group-text">
                            <i class="dw dw-padlock1"></i>
                          </span>
                        </div>
                      </div>
                      <div class="row pb-30">
                        <div class="col-6"></div>
                        <div class="col-6">
                          <div class="forgot-password">
                            <a href="forgotpassword">Forgot Password</a>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="input-group mb-0">
                            <button
                              className="btn btn-primary btn-lg btn-block"
                              onClick={() => signIn({ user })}
                            >
                              Sign In
                            </button>
                          </div>
                          <div
                            class="font-16 weight-600 pt-10 pb-10 text-center"
                            data-color="#707373"
                          >
                            OR
                          </div>
                          <div class="input-group mb-0">
                            <a
                              class="btn btn-outline-primary btn-lg btn-block"
                              href="register"
                            >
                              Register To Create Account
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script src="vendors/scripts/core.js"></script>
          <script src="vendors/scripts/script.min.js"></script>
          <script src="vendors/scripts/process.js"></script>
          <script src="vendors/scripts/layout-settings.js"></script>
        </body>
      </>
    );
}

export default Login;