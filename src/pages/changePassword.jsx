import React, { useState } from "react";
import { useSnackbar } from "notistack";
import * as yup from "yup";
import { useFormik } from "formik";
import { apiFetch } from "../lib/apiFetch";
import { UserSidebar } from "../components/Sidebar/UserSidebar";

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
              <UserSidebar />
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
