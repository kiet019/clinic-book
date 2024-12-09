import React from 'react'

function register() {
  return (
    <div>
      {/* Page Content */}
      <div className="content" style={{ marginBottom: '30px' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Register Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img src="assets/img/login-banner.png" className="img-fluid" alt="Đăng Ký clinicbooking" />	
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>Bệnh Nhân <a href="/doctorRegister">Bạn là bác sĩ?</a></h3>
                    </div>
                    {/* Register Form */}
                    <form action="#">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">Tên</label>
                      </div>
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">Số Điện Thoại</label>
                      </div>
                      <div className="form-group form-focus">
                        <input type="password" className="form-control floating" />
                        <label className="focus-label">Tạo Mật Khẩu</label>
                      </div>
                      <div className="text-right">
                        <a className="forgot-link" href="/login">Đã có tài khoản?</a>
                      </div>
                      <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Đăng Ký</button>
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
                    </form>
                    {/* /Register Form */}
                  </div>
                </div>
              </div>
              {/* /Register Content */}
            </div>
          </div>
        </div>
      </div>		
      {/* /Page Content */}
    </div>
  )
}

export default register