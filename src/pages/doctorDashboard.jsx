import React from 'react';

function DoctorDashboard() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/Home">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Dashboard</h2>
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
                      <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
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
              {/* Upcoming Appointment Tab */}
              <div className="tab-pane" id="upcoming-Appointments">
                <div className="card card-table mb-0">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>Tên Bệnh Nhân</th>
                            <th>Ngày Hẹn</th>
                            <th>Mục Đích</th>
                            <th>Loại</th>
                            <th className="text-center">Số Tiền Đã Thanh Toán</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Example Row */}
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/patientProfile" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src="assets/img/patients/patient1.jpg" alt="User Image" />
                                </a>
                                <a href="/patientProfile">Charlene Reed <span>#PT0001</span></a>
                              </h2>
                            </td>
                            <td>3 Tháng 11, 2019 <span className="d-block text-info">11:00 Sáng</span></td>
                            <td>Khám Tổng Quát</td>
                            <td>Bệnh Nhân Cũ</td>
                            <td className="text-center">$200</td>
                            <td className="text-right">
                              <div className="table-action">
                                <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                  <i className="far fa-eye"></i> Xem
                                </a>
                                <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                  <i className="fas fa-check"></i> Chấp Nhận
                                </a>
                                <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                  <i className="fas fa-times"></i> Hủy
                                </a>
                              </div>
                            </td>
                          </tr>
                          {/* Add more rows as needed */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Upcoming Appointment Tab */}

              {/* Today Appointment Tab */}
              <div className="tab-pane" id="today-Appointments">
                <div className="card card-table mb-0">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>Tên Bệnh Nhân</th>
                            <th>Ngày Hẹn</th>
                            <th>Mục Đích</th>
                            <th>Loại</th>
                            <th className="text-center">Số Tiền Đã Thanh Toán</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Example Row */}
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/patientProfile" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src="assets/img/patients/patient2.jpg" alt="User Image" />
                                </a>
                                <a href="/patientProfile">Travis Trimble <span>#PT0002</span></a>
                              </h2>
                            </td>
                            <td>1 Tháng 11, 2019 <span className="d-block text-info">1:00 Chiều</span></td>
                            <td>Khám Tổng Quát</td>
                            <td>Bệnh Nhân Mới</td>
                            <td className="text-center">$75</td>
                            <td className="text-right">
                              <div className="table-action">
                                <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                  <i className="far fa-eye"></i> Xem
                                </a>
                                <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                  <i className="fas fa-check"></i> Chấp Nhận
                                </a>
                                <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                  <i className="fas fa-times"></i> Hủy
                                </a>
                              </div>
                            </td>
                          </tr>
                          {/* Add more rows as needed */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Today Appointment Tab */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
}

export default DoctorDashboard;