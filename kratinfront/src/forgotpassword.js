import { useState } from "react";
import axios from "axios";

function ForgotPassword() {
  var [user, setUser] = useState({ email: "" });

  var handleChange = (args) => {
    debugger;
    var copy = { ...user };
    copy[args.target.name] = args.target.value;
    setUser(copy);
  };

  var forgotpassword = (props) => {
    debugger;
    axios.post("http://localhost:", user).then((result) => {});
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
                <img src="vendors/images/forgot-password.png" alt="" />
              </div>
              <div class="col-md-6 col-lg-5">
                <div class="login-box bg-white box-shadow border-radius-10">
                  <div class="login-title">
                    <h2 class="text-center text-primary">Reset Password</h2>
                  </div>
                  <form action="">
                    <div class="select-role"></div>
                    <div class="input-group custom">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        name="email"
                        value={user.email}
                        placeholder="Email"
                        onChange={handleChange}
                      />
                      <div class="input-group-append custom">
                        <span class="input-group-text">
                          <i class="icon-copy dw dw-user1"></i>
                        </span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="input-group mb-0">
                          <button
                            class="btn btn-primary btn-lg btn-block"
                            onClick={() => {
                              forgotpassword(user);
                            }}
                          >
                            Send email
                          </button>
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

export default ForgotPassword;
