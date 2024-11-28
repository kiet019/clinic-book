import React from 'react';

function DoctorProfileSettings() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/Home">Trang Chủ</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Cài Đặt Hồ Sơ</li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Cài Đặt Hồ Sơ</h2>
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
                      <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="Hình Ảnh Người Dùng" />
                    </a>
                    <div className="profile-det-info">
                      <h3>Dr. Darren Elder</h3>
                      <div className="patient-details">
                        <h5 className="mb-0">BDS, MDS - Phẫu Thuật Miệng và Hàm Mặt</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li>
                        <a href="/doctorDashboard">
                          <i className="fas fa-columns"></i>
                          <span>Bảng Điều Khiển</span>
                        </a>
                      </li>
                      <li>
                        <a href="/Appointments">
                          <i className="fas fa-calendar-check"></i>
                          <span>Lịch Hẹn</span>
                        </a>
                      </li>
                      <li>
                        <a href="/patientProfile">
                          <i className="fas fa-user-injured"></i>
                          <span>Bệnh Nhân Của Tôi</span>
                        </a>
                      </li>
                      <li>
                        <a href="/scheduleTimings">
                          <i className="fas fa-hourglass-start"></i>
                          <span>Lịch</span>
                        </a>
                      </li>
                      <li>
                        <a href="/Invoice">
                          <i className="fas fa-file-invoice"></i>
                          <span>Hóa Đơn</span>
                        </a>
                      </li>
                      <li>
                        <a href="/Reviews">
                          <i className="fas fa-star"></i>
                          <span>Đánh Giá</span>
                        </a>
                      </li>
                      <li>
                        <a href="/Chat">
                          <i className="fas fa-comments"></i>
                          <span>Tin Nhắn</span>
                          <small className="unread-msg">23</small>
                        </a>
                      </li>
                      <li className="active">
                        <a href="/doctorProfileSettings">
                          <i className="fas fa-user-cog"></i>
                          <span>Cài Đặt Hồ Sơ</span>
                        </a>
                      </li>
                      <li>
                        <a href="social-media.html">
                          <i className="fas fa-share-alt"></i>
                          <span>Mạng Xã Hội</span>
                        </a>
                      </li>
                      <li>
                        <a href="doctor-/changePassword">
                          <i className="fas fa-lock"></i>
                          <span>Đổi Mật Khẩu</span>
                        </a>
                      </li>
                      <li>
                        <a href="/Home">
                          <i className="fas fa-sign-out-alt"></i>
                          <span>Đăng Xuất</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/* /Profile Sidebar */}
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9">
              {/* Basic Information */}
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Thông Tin Cơ Bản</h4>
                  <div className="row form-row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="change-avatar">
                          <div className="profile-img">
                            <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="Hình Ảnh Người Dùng" />
                          </div>
                          <div className="upload-img">
                            <div className="change-photo-btn">
                              <span><i className="fa fa-upload"></i> Tải Ảnh Lên</span>
                              <input type="file" className="upload" />
                            </div>
                            <small className="form-text text-muted">Chấp nhận JPG, GIF hoặc PNG. Kích thước tối đa 2MB</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Tên Tài Khoản <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" readOnly />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Email <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" readOnly />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Tên <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Họ <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Số Điện Thoại</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Giới Tính</label>
                        <select className="form-control select">
                          <option>Chọn</option>
                          <option>Nam</option>
                          <option>Nữ</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-0">
                        <label>Ngày Sinh</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Basic Information */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  )
}

export default DoctorProfileSettings      