import { useState } from "react";
import axios from "axios";
import { Link, Route, useHistory, useLocation } from 'react-router-dom';

function Register() {
  var [user, setUser] = useState({
                                firstName: "",
                                lastName: "",
                                email: "",
                                password: "",
                                dob: "",
                                gender: "",
                            });
    var [message, setMessage] = useState("");
    var history = useHistory();
  var handleChange = (args) => {
    debugger;
    var copy = { ...user };
    copy[args.target.name] = args.target.value;
    setUser(copy);
    };
    
    var register = (props) => {
        debugger;
        if (user.email == "") {
        var copy = { ...user };
        copy.email = null;
        setUser(copy);
        }
        axios.post("http://localhost:9090/register", user).then((result) => {
        if (result.data == "") {
            setMessage("Unable to register.. Please try again..");
        } else {
            debugger;
            console.log(result.data);
            setMessage("Registered successfully");
            history.push('/login')
        }
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
                  <a href="login">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="login-wrap d-flex align-items-center flex-wrap justify-content-center">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6 col-lg-7">
                <img src="vendors/images/register-page-img.png" alt="" />
              </div>
              <div class="col-md-6 col-lg-5">
                <div class="login-box bg-white box-shadow border-radius-10">
                  <div class="login-title">
                    <h2 class="text-center text-primary">
                      Register To HealthApp
                    </h2>
                  </div>
                  <form action="">
                    <div class="select-role"></div>
                    <div class="input-group custom">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        name="firstName"
                        placeholder="First name"
                        onChange={handleChange}
                        value={user.firstName}
                      />
                      <div class="input-group-append custom">
                        <span class="input-group-text">
                          <i class="icon-copy dw dw-user1"></i>
                        </span>
                      </div>
                    </div>
                    <div class="input-group custom">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        name="lastName"
                        placeholder="Last name"
                        onChange={handleChange}
                        value={user.lastName}
                      />
                      <div class="input-group-append custom">
                        <span class="input-group-text">
                          <i class="icon-copy dw dw-user1"></i>
                        </span>
                      </div>
                    </div>
                    <div class="form-group row align-items-center">
                      <label class="col-sm-4 col-form-label">Gender*</label>
                      <div class="col-sm-8">
                        <div class="custom-control custom-radio custom-control-inline pb-0">
                          <input
                            type="radio"
                            id="male"
                            name="gender"
                            class="custom-control-input"
                            onChange={handleChange}
                            value={user.gender}
                          />
                          <label class="custom-control-label" for="male">
                            Male
                          </label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline pb-0">
                          <input
                            type="radio"
                            id="female"
                            name="gender"
                            class="custom-control-input"
                            onChange={handleChange}
                            value={user.gender}
                          />
                          <label class="custom-control-label" for="female">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="input-group custom">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        name="dob"
                        placeholder="Date of Birth (YYYY-MM-DD)"
                        onChange={handleChange}
                        value={user.dob}
                      />
                      <div class="input-group-append custom">
                        <span class="input-group-text">
                          <i class="icon-copy dw dw-user1"></i>
                        </span>
                      </div>
                    </div>
                    <div class="input-group custom">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={user.email}
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
                        onChange={handleChange}
                        value={user.password}
                      />
                      <div class="input-group-append custom">
                        <span class="input-group-text">
                          <i class="dw dw-padlock1"></i>
                        </span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="input-group mb-0">
                          <button
                            class="btn btn-primary btn-lg btn-block"
                            onClick={() => {
                              register(user);
                            }}
                          >
                            Register
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

export default Register;
