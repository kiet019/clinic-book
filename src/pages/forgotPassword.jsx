import React from 'react';

function ForgotPassword() {
  return (
    <div>
      {/* Nội Dung Trang */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Nội Dung Tài Khoản */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img src="assets/img/login-banner.png" className="img-fluid" alt="Biểu Ngữ Đăng Nhập" />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>Quên Mật Khẩu?</h3>
                      <p className="small text-muted">Nhập email của bạn để nhận liên kết đặt lại mật khẩu</p>
                    </div>

                    {/* Biểu Mẫu Quên Mật Khẩu */}
                    <form action="#//login">
                      <div className="form-group form-focus">
                        <input type="email" className="form-control floating" required />
                        <label className="focus-label">Email</label>
                      </div>
                      <div className="text-right">
                        <a className="forgot-link" href="/login">Nhớ mật khẩu của bạn?</a>
                      </div>
                      <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Đặt Lại Mật Khẩu</button>
                    </form>
                    {/* /Biểu Mẫu Quên Mật Khẩu */}
                  </div>
                </div>
              </div>
              {/* /Nội Dung Tài Khoản */}
            </div>
          </div>
        </div>
      </div>
      {/* /Nội Dung Trang */}
    </div>
  );
}

export default ForgotPassword;