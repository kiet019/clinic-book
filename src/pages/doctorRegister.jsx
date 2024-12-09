import React, { useState } from "react";
import { useSnackbar } from "notistack";
import * as yup from "yup";
import { useFormik } from "formik";
import { apiFetch } from "../lib/apiFetch";

// Chưa hoàn thiện
const validate = yup.object().shape({});

function DoctorRegister() {
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (value) => {
    try {
      setIsLoading(true);
      const res = await apiFetch("/auth/register", {
        method: "POST",
        body: JSON.stringify(value),
      });
      const { data, status } = res;
      if (!status) {
        const message = Object.entries(data)[0][1];
        throw new Error(message);
      }
      enqueueSnackbar("Đăng kí thành công", { variant: "success" });
    } catch (error) {
      console.log(error)
      enqueueSnackbar(error.message, { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      password: "",
      role: ["USER", "DOCTOR"],
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    onSubmit: handleRegister,
  });

  return (
    <div>
      {/* Page Content */}
      <div className="content" style={{ marginBottom: "30px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Account Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src="assets/img/login-banner.png"
                      className="img-fluid"
                      alt="Biểu Ngữ Đăng Nhập"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Bác Sĩ <a href="/register">Không phải bác sĩ?</a>
                      </h3>
                    </div>
                    {/* Register Form */}
                    <form onSubmit={handleSubmit}>
                      <h5>Thông tin đăng nhập</h5>
                      <div className="form-group form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          value={values.username}
                          name="username"
                          onChange={handleChange}
                        />
                        <label className="focus-label">Tên đăng nhập</label>
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="password"
                          className="form-control floating"
                          value={values.password}
                          name="password"
                          onChange={handleChange}
                        />
                        <label className="focus-label">Tạo Mật Khẩu</label>
                      </div>
                      <h5>Thông tin cá nhân</h5>
                      <div className="row form-row social-login">
                        <div className="form-group form-focus col-6">
                          <input
                            type="text"
                            className="form-control floating"
                            value={values.firstName}
                            name="firstName"
                            onChange={handleChange}
                          />
                          <label className="focus-label">Họ</label>
                        </div>
                        <div className="form-group form-focus col-6">
                          <input
                            type="text"
                            className="form-control floating"
                            value={values.lastName}
                            name="lastName"
                            onChange={handleChange}
                          />
                          <label className="focus-label">Tên</label>
                        </div>
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          value={values.email}
                          name="email"
                          onChange={handleChange}
                        />
                        <label className="focus-label">Email</label>
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          value={values.phoneNumber}
                          name="phoneNumber"
                          onChange={handleChange}
                        />
                        <label className="focus-label">Số Điện Thoại</label>
                      </div>
                      <div className="text-right">
                        <a className="forgot-link" href="/login">
                          Đã có tài khoản?
                        </a>
                      </div>
                      <button
                        className="btn btn-primary btn-block btn-lg login-btn"
                        type="submit"
                        disabled={isLoading}
                      >
                        Đăng Ký
                      </button>
                      <div className="login-or">
                        <span className="or-line"></span>
                        <span className="span-or">hoặc</span>
                      </div>
                      <div className="row form-row social-login">
                        <div className="col-6">
                          <a href="#" className="btn btn-facebook btn-block">
                            <i className="fab fa-facebook-f mr-1"></i> Đăng Nhập
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="#" className="btn btn-google btn-block">
                            <i className="fab fa-google mr-1"></i> Đăng Nhập
                          </a>
                        </div>
                      </div>
                    </form>
                    {/* /Register Form */}
                  </div>
                </div>
              </div>
              {/* /Account Content */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
}

export default DoctorRegister;
