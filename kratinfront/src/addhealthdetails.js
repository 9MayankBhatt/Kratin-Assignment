import { useState } from "react";
import axios from "axios";

function AddHealthDetails() {

	var [user, setUser] = useState({
									bp_diastolic: "",
									bp_systolic: "",
									chol_lvl: "",
									heart_rate: "",
									height: "",
									weight: "",
									user_id: ""});

	var handleChange = (args) => {
		debugger;
		var copy = { ...user };
		copy[args.target.name] = args.target.value;
		setUser(copy);
	};

	var addHealthDetails = (props) => {
		debugger;
		axios.post("http://localhost:", user).then((result) => {});
	};

  return (
    <>
      <body>
        <div class="header">
          <div class="header-left">
            <div class="menu-icon dw dw-menu"></div>
            <div
              class="search-toggle-icon dw dw-search2"
              data-toggle="header_search"
            ></div>
          </div>
          <div class="header-right">
            <div class="dashboard-setting user-notification">
              <div class="dropdown">
                <a
                  class="dropdown-toggle no-arrow"
                  href="javascript:;"
                  data-toggle="right-sidebar"
                >
                  <i class="dw dw-settings2"></i>
                </a>
              </div>
            </div>
            <div class="user-info-dropdown">
              <div class="dropdown">
                <a
                  class="dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                >
                  <span class="user-icon">
                    <img src="" alt="img" />
                  </span>
                  <span class="user-name">Logged in user</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                  <a class="dropdown-item" href="profile">
                    <i class="dw dw-user1"></i> Profile
                  </a>
                  <a class="dropdown-item" href="login">
                    <i class="dw dw-logout"></i> Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="right-sidebar">
          <div class="sidebar-title">
            <h3 class="weight-600 font-16 text-blue">
              Layout Settings
              <span class="btn-block font-weight-400 font-12">
                User Interface Settings
              </span>
            </h3>
            <div class="close-sidebar" data-toggle="right-sidebar-close">
              <i class="icon-copy ion-close-round"></i>
            </div>
          </div>
          <div class="right-sidebar-body customscroll">
            <div class="right-sidebar-body-content">
              <h4 class="weight-600 font-18 pb-10">Header Background</h4>
              <div class="sidebar-btn-group pb-30 mb-10">
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-primary header-white active"
                >
                  White
                </a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-primary header-dark"
                >
                  Dark
                </a>
              </div>

              <h4 class="weight-600 font-18 pb-10">Sidebar Background</h4>
              <div class="sidebar-btn-group pb-30 mb-10">
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-primary sidebar-light "
                >
                  White
                </a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-primary sidebar-dark active"
                >
                  Dark
                </a>
              </div>

              <h4 class="weight-600 font-18 pb-10">Menu Dropdown Icon</h4>
              <div class="sidebar-radio-group pb-10 mb-10">
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="sidebaricon-1"
                    name="menu-dropdown-icon"
                    class="custom-control-input"
                    value="icon-style-1"
                    checked=""
                  />
                  <label class="custom-control-label" for="sidebaricon-1">
                    <i class="fa fa-angle-down"></i>
                  </label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="sidebaricon-2"
                    name="menu-dropdown-icon"
                    class="custom-control-input"
                    value="icon-style-2"
                  />
                  <label class="custom-control-label" for="sidebaricon-2">
                    <i class="ion-plus-round"></i>
                  </label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="sidebaricon-3"
                    name="menu-dropdown-icon"
                    class="custom-control-input"
                    value="icon-style-3"
                  />
                  <label class="custom-control-label" for="sidebaricon-3">
                    <i class="fa fa-angle-double-right"></i>
                  </label>
                </div>
              </div>

              <h4 class="weight-600 font-18 pb-10">Menu List Icon</h4>
              <div class="sidebar-radio-group pb-30 mb-10">
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="sidebariconlist-1"
                    name="menu-list-icon"
                    class="custom-control-input"
                    value="icon-list-style-1"
                    checked=""
                  />
                  <label class="custom-control-label" for="sidebariconlist-1">
                    <i class="ion-minus-round"></i>
                  </label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="sidebariconlist-2"
                    name="menu-list-icon"
                    class="custom-control-input"
                    value="icon-list-style-2"
                  />
                  <label class="custom-control-label" for="sidebariconlist-2">
                    <i class="fa fa-circle-o" aria-hidden="true"></i>
                  </label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="sidebariconlist-3"
                    name="menu-list-icon"
                    class="custom-control-input"
                    value="icon-list-style-3"
                  />
                  <label class="custom-control-label" for="sidebariconlist-3">
                    <i class="dw dw-check"></i>
                  </label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="sidebariconlist-4"
                    name="menu-list-icon"
                    class="custom-control-input"
                    value="icon-list-style-4"
                    checked=""
                  />
                  <label class="custom-control-label" for="sidebariconlist-4">
                    <i class="icon-copy dw dw-next-2"></i>
                  </label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="sidebariconlist-5"
                    name="menu-list-icon"
                    class="custom-control-input"
                    value="icon-list-style-5"
                  />
                  <label class="custom-control-label" for="sidebariconlist-5">
                    <i class="dw dw-fast-forward-1"></i>
                  </label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="sidebariconlist-6"
                    name="menu-list-icon"
                    class="custom-control-input"
                    value="icon-list-style-6"
                  />
                  <label class="custom-control-label" for="sidebariconlist-6">
                    <i class="dw dw-next"></i>
                  </label>
                </div>
              </div>

              <div class="reset-options pt-30 text-center">
                <button class="btn btn-danger" id="reset-settings">
                  Reset Settings
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="left-side-bar">
          <div class="brand-logo">
            <a href="home">HealthApp</a>
            <div class="close-sidebar" data-toggle="left-sidebar-close">
              <i class="ion-close-round"></i>
            </div>
          </div>
          <div class="menu-block customscroll">
            <div class="sidebar-menu">
              <ul id="accordion-menu">
                <li class="dropdown">
                  <a href="home" class="dropdown-toggle">
                    <span class="micon dw dw-house-1"></span>
                    <span class="mtext">Home</span>
                  </a>
                </li>
                <li class="dropdown">
                  <a href="addhealthdetails" class="dropdown-toggle">
                    <span class="micon dw dw-edit2"></span>
                    <span class="mtext">Add health details</span>
                  </a>
                </li>
                <li class="dropdown">
                  <a href="viewhealthdetails" class="dropdown-toggle">
                    <span class="micon dw dw-library"></span>
                    <span class="mtext">View health details</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mobile-menu-overlay"></div>

        <div class="main-container">
          <div class="pd-ltr-20">
            <div class="pd-20 card-box mb-30">
              <div class="clearfix">
                <h4 class="text-blue h4">Add Health Details</h4>
              </div>
              <div class="wizard-content">
                <form class="tab-wizard wizard-circle wizard">
                  <section>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>BP Diastolic :</label>
                          <input
                            type="text"
                            class="form-control"
                            name="bp_diastolic"
                            value={user.bp_diastolic}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>BP Systolic :</label>
                          <input
                            type="text"
                            class="form-control"
                            name="bp_systolic"
                            value={user.bp_systolic}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Cholestrol Level :</label>
                          <input
                            type="text"
                            class="form-control"
                            name="chol_lvl"
                            value={user.chol_lvl}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Heart Rate :</label>
                          <input
                            type="text"
                            class="form-control"
                            name="heart_rate"
                            value={user.heart_rate}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Height :</label>
                          <input
                            type="text"
                            class="form-control"
                            name="height"
                            value={user.height}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Weight :</label>
                          <input
                            type="text"
                            class="form-control"
                            name="weight"
                            value={user.weight}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-3">
                        <div class="form-group">
                          <div class="input-group mb-0">
                            <button
                              className="btn btn-primary btn-lg btn-block"
                              onClick={() => addHealthDetails({ user })}
                            >
                              Save Data
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </form>
              </div>
            </div>
            <div class="footer-wrap pd-20 mb-20 card-box">
              HealthApp - By Mayank Bhatt
            </div>
          </div>
        </div>
        <script src="vendors/scripts/core.js"></script>
        <script src="vendors/scripts/script.min.js"></script>
        <script src="vendors/scripts/process.js"></script>
        <script src="vendors/scripts/layout-settings.js"></script>
        <script src="src/plugins/apexcharts/apexcharts.min.js"></script>
        <script src="src/plugins/datatables/js/jquery.dataTables.min.js"></script>
        <script src="src/plugins/datatables/js/dataTables.bootstrap4.min.js"></script>
        <script src="src/plugins/datatables/js/dataTables.responsive.min.js"></script>
        <script src="src/plugins/datatables/js/responsive.bootstrap4.min.js"></script>
        <script src="vendors/scripts/dashboard.js"></script>
      </body>
    </>
  );
}

export default AddHealthDetails;
