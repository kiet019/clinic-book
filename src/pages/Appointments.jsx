import React from 'react';

function Appointments() {
  return (
    <div>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/Home">Trang Chủ</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Lịch Hẹn</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Lịch Hẹn</h2>
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
                        <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="Người Dùng" />
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
                        <li className="active">
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
                        <li>
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
                <div className="Appointments">
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <a href="/patientProfile" className="booking-doc-img">
                        <img src="assets/img/patients/patient.jpg" alt="Người Dùng" />
                      </a>
                      <div className="profile-det-info">
                        <h3><a href="/patientProfile">Richard Wilson</a></h3>
                        <div className="patient-details">
                          <h5><i className="far fa-clock"></i> 14 Tháng 11, 2019, 10:00 Sáng</h5>
                          <h5><i className="fas fa-map-marker-alt"></i> Newyork, Hoa Kỳ</h5>
                          <h5><i className="fas fa-envelope"></i> richard@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone"></i> +1 923 782 4575</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye"></i> Xem
                      </a>
                      <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check"></i> Chấp Nhận
                      </a>
                      <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times"></i> Hủy
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Repeat similar blocks for other Appointments */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      {/* /Main Wrapper */}
      
      {/* Appointment Details Modal */}
      <div className="modal fade custom-modal" id="appt_details">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Chi Tiết Lịch Hẹn</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul className="info-details">
                <li>
                  <div className="details-header">
                    <div className="row">
                      <div className="col-md-6">
                        <span className="title">#APT0001</span>
                        <span className="text">21 Tháng 10, 2019 10:00 Sáng</span>
                      </div>
                      <div className="col-md-6">
                        <div className="text-right">
                          <button type="button" className="btn bg-success-light btn-sm" id="topup_status">Đã Hoàn Thành</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="title">Trạng Thái:</span>
                  <span className="text">Đã Hoàn Thành</span>
                </li>
                <li>
                  <span className="title">Ngày Xác Nhận:</span>
                  <span className="text">29 Tháng 6, 2019</span>
                </li>
                <li>
                  <span className="title">Số Tiền Đã Thanh Toán:</span>
                  <span className="text">$450</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /Appointment Details Modal */}
    </div>
  );
}

export default Appointments;