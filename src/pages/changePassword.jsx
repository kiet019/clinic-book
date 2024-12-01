import React, { useState } from "react";
import { useSnackbar } from "notistack";
import * as yup from "yup";
import { useFormik } from "formik";
import { apiFetch } from "../lib/apiFetch";

// Chưa hoàn thiện
const validate = yup.object().shape({});

function ChangePassword() {
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (value) => {
    try {
      setIsLoading(true);
      if (value.newPassword !== value.confirmPassword) {
        throw new Error("Mật khẩu không khớp");
      }
      const res = await apiFetch("/user/forgotpassword", {
        method: "POST",
        body: JSON.stringify(value),
      });
      const { data, status } = res;
      if (!status) {
        throw new Error(data);
      }
      enqueueSnackbar(data, { variant: "success" });
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: handleRegister,
  });

  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/Home">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Change Password
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Change Password</h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}

      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Profile Sidebar */}
              <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <a href="#" className="booking-doc-img">
                      <img
                        src="assets/img/patients/patient.jpg"
                        alt="User Image"
                      />
                    </a>
                    <div className="profile-det-info">
                      <h3>Richard Wilson</h3>
                      <div className="patient-details">
                        <h5>
                          <i className="fas fa-birthday-cake"></i> 24 Jul 1983,
                          38 years
                        </h5>
                        <h5 className="mb-0">
                          <i className="fas fa-map-marker-alt"></i> Newyork, USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li>
                        <a href="patient-dashboard.html">
                          <i className="fas fa-columns"></i>
                          <span>Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="favourites.html">
                          <i className="fas fa-bookmark"></i>
                          <span>Favourites</span>
                        </a>
                      </li>
                      <li>
                        <a href="/Chat">
                          <i className="fas fa-comments"></i>
                          <span>Message</span>
                          <small className="unread-msg">23</small>
                        </a>
                      </li>
                      <li>
                        <a href="/profileSettings">
                          <i className="fas fa-user-cog"></i>
                          <span>Profile Settings</span>
                        </a>
                      </li>
                      <li className="active">
                        <a href="/changePassword">
                          <i className="fas fa-lock"></i>
                          <span>Change Password</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/* /Profile Sidebar */}
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-6">
                      {/* Change Password Form */}
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label>Old Password</label>
                          <input
                            type="password"
                            className="form-control"
                            name="oldPassword"
                            value={values.oldPassword}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>New Password</label>
                          <input
                            type="password"
                            className="form-control"
                            name="newPassword"
                            value={values.newPassword}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>Confirm Password</label>
                          <input
                            type="password"
                            className="form-control"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="submit-section">
                          <button
                            type="submit"
                            className="btn btn-primary submit-btn"
                          >
                            Save Changes
                          </button>
                        </div>
                      </form>
                      {/* /Change Password Form */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
}

export default ChangePassword;
