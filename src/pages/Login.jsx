import React, { useState } from "react";
import { useSnackbar } from "notistack";
import * as yup from "yup";
import { useFormik } from "formik";
import { apiFetch } from "../lib/apiFetch";
import { useNavigate } from "react-router-dom";
import { setAccessToken, setRole } from "../lib/token";

const validate = yup.object().shape({});

function Login() {
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleRegister = async (value) => {
    try {
      setIsLoading(true);
      const { data, status } = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify(value),
      });
      if (!status) {
        const message = Object.entries(data)[0][1];
        throw new Error(message);
      }
      setAccessToken(data.token);
      enqueueSnackbar("Đăng nhập thành công", { variant: "success" });
      if (data.role.includes("ADMIN")) {
        setRole("admin");
        navigate("/admin/AdminDashboard");
        return;
      }
      if (data.role.includes("DOCTOR")) {
        setRole("doctor");
        navigate("/Home");
        return;
      }
      if (data.role.includes("USER")) {
        setRole("user");
        navigate("/Home");
        return;
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      password: "",
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
              {/* Nội Dung Đăng Nhập */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src="assets/img/login-banner.png"
                      className="img-fluid"
                      alt="Đăng Nhập Clinic Booking"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>Đăng nhập</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
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
                        <label className="focus-label">Mật Khẩu</label>
                      </div>
                      <div className="text-right">
                        <a className="forgot-link" href="/forgotPassword">
                          Quên Mật Khẩu?
                        </a>
                      </div>
                      <button
                        className="btn btn-primary btn-block btn-lg login-btn"
                        disabled={isLoading}
                        type="submit"
                      >
                        Đăng Nhập
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
                      <div className="text-center dont-have">
                        Chưa có tài khoản? <a href="/register">Đăng Ký</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* /Nội Dung Đăng Nhập */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
}

export default Login;
