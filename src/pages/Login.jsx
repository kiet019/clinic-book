import React from 'react';

function Login() {
  return (
    <div>
      {/* Page Content */}
      <div className="content" style={{ marginBottom: '30px' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Nội Dung Đăng Nhập */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img src="assets/img/login-banner.png" className="img-fluid" alt="Đăng Nhập clinicbooking" />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>Đăng Nhập <span>Đặt Lịch Khám</span></h3>
                    </div>
                    <form action="">
                      <div className="form-group form-focus">
                        <input type="email" className="form-control floating" />
                        <label className="focus-label">Email</label>
                      </div>
                      <div className="form-group form-focus">
                        <input type="password" className="form-control floating" />
                        <label className="focus-label">Mật Khẩu</label>
                      </div>
                      <div className="text-right">
                        <a className="forgot-link" href="/forgotPassword">Quên Mật Khẩu?</a>
                      </div>
                      <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Đăng Nhập</button>
                      <div className="login-or">
                        <span className="or-line"></span>
                        <span className="span-or">hoặc</span>
                      </div>
                      <div className="row form-row social-login">
                        <div className="col-6">
                          <a href="#" className="btn btn-facebook btn-block"><i className="fab fa-facebook-f mr-1"></i> Đăng Nhập</a>
                        </div>
                        <div className="col-6">
                          <a href="#" className="btn btn-google btn-block"><i className="fab fa-google mr-1"></i> Đăng Nhập</a>
                        </div>
                      </div>
                      <div className="text-center dont-have">Chưa có tài khoản? <a href="/register">Đăng Ký</a></div>
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