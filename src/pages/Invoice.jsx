import React from 'react';

function Invoice() {
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
                  <li className="breadcrumb-item active" aria-current="page">Hóa Đơn</li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Hóa Đơn</h2>
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
                        <h5 className="mb-0">BDS, MDS - Phẫu Thuật Hàm Mặt & Cổ</h5>
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
                          <span>Thời Gian Lịch</span>
                        </a>
                      </li>
                      <li className="active">
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
              <div className="card card-table">
                <div className="card-body">
                  {/* Invoice Table */}
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Số Hóa Đơn</th>
                          <th>Bác Sĩ</th>
                          <th>Số Tiền</th>
                          <th>Ngày Thanh Toán</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="/invoiceView">#INV-0010</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/patientProfile" className="avatar avatar-sm mr-2">
                                <img className="avatar-img rounded-circle" src="assets/img/patients/patient.jpg" alt="Hình Ảnh Người Dùng" />
                              </a>
                              <a href="/patientProfile">Richard Wilson <span>#PT0016</span></a>
                            </h2>
                          </td>
                          <td>$450</td>
                          <td>14 Tháng 11, 2019</td>
                          <td className="text-right">
                            <div className="table-action">
                              <a href="/invoiceView" className="btn btn-sm bg-info-light">
                                <i className="far fa-eye"></i> Xem
                              </a>
                              <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                <i className="fas fa-print"></i> In
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="/invoiceView">#INV-0009</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/patientProfile" className="avatar avatar-sm mr-2">
                                <img className="avatar-img rounded-circle" src="assets/img/patients/patient1.jpg" alt="Hình Ảnh Người Dùng" />
                              </a>
                              <a href="/patientProfile">Charlene Reed <span>#PT0001</span></a>
                            </h2>
                          </td>
                          <td>$200</td>
                          <td>13 Tháng 11, 2019</td>
                          <td className="text-right">
                            <div className="table-action">
                              <a href="/invoiceView" className="btn btn-sm bg-info-light">
                                <i className="far fa-eye"></i> Xem
                              </a>
                              <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                <i className="fas fa-print"></i> In
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="/invoiceView">#INV-0008</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/patientProfile" className="avatar avatar-sm mr-2">
                                <img className="avatar-img rounded-circle" src="assets/img/patients/patient2.jpg" alt="Hình Ảnh Người Dùng" />
                              </a>
                              <a href="/patientProfile">Travis Trimble <span>#PT0002</span></a>
                            </h2>
                          </td>
                          <td>$100</td>
                          <td>12 Tháng 11, 2019</td>
                          <td className="text-right">
                            <div className="table-action">
                              <a href="/invoiceView" className="btn btn-sm bg-info-light">
                                <i className="far fa-eye"></i> Xem
                              </a>
                              <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                <i className="fas fa-print"></i> In
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="/invoiceView">#INV-0007</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/patientProfile" className="avatar avatar-sm mr-2">
                                <img className="avatar-img rounded-circle" src="assets/img/patients/patient3.jpg" alt="Hình Ảnh Người Dùng" />
                              </a>
                              <a href="/patientProfile">Carl Kelly <span>#PT0003</span></a>
                            </h2>
                          </td>
                          <td>$350</td>
                          <td>11 Tháng 11, 2019</td>
                          <td className="text-right">
                            <div className="table-action">
                              <a href="/invoiceView" className="btn btn-sm bg-info-light">
                                <i className="far fa-eye"></i> Xem
                              </a>
                              <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                <i className="fas fa-print"></i> In
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="/invoiceView">#INV-0006</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/patientProfile" className="avatar avatar-sm mr-2">
                                <img className="avatar-img rounded-circle" src="assets/img/patients/patient4.jpg" alt="Hình Ảnh Người Dùng" />
                              </a>
                              <a href="/patientProfile">Michelle Fairfax <span>#PT0004</span></a>
                            </h2>
                          </td>
                          <td>$275</td>
                          <td>10 Tháng 11, 2019</td>
                          <td className="text-right">
                            <div className="table-action">
                              <a href="/invoiceView" className="btn btn-sm bg-info-light">
                                <i className="far fa-eye"></i> Xem
                              </a>
                              <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                <i className="fas fa-print"></i> In
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="/invoiceView">#INV-0005</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/patientProfile" className="avatar avatar-sm mr-2">
                                <img className="avatar-img rounded-circle" src="assets/img/patients/patient5.jpg" alt="Hình Ảnh Người Dùng" />
                              </a>
                              <a href="/patientProfile">Gina Moore <span>#PT0005</span></a>
                            </h2>
                          </td>
                          <td>$600</td>
                          <td>9 Tháng 11, 2019</td>
                          <td className="text-right">
                            <div className="table-action">
                              <a href="/invoiceView" className="btn btn-sm bg-info-light">
                                <i className="far fa-eye"></i> Xem
                              </a>
                              <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                <i className="fas fa-print"></i> In
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="/invoiceView">#INV-0004</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/patientProfile" className="avatar avatar-sm mr-2">
                                <img className="avatar-img rounded-circle" src="assets/img/patients/patient6.jpg" alt="Hình Ảnh Người Dùng" />
                              </a>
                              <a href="/patientProfile">Elsie Gilley <span>#PT0006</span></a>
                            </h2>
                          </td>
                          <td>$50</td>
                          <td>8 Tháng 11, 2019</td>
                          <td className="text-right">
                            <div className="table-action">
                              <a href="/invoiceView" className="btn btn-sm bg-info-light">
                                <i className="far fa-eye"></i> Xem
                              </a>
                              <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                <i className="fas fa-print"></i> In
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="/invoiceView">#INV-0003</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/patientProfile" className="avatar avatar-sm mr-2">
                                <img className="avatar-img rounded-circle" src="assets/img/patients/patient7.jpg" alt="Hình Ảnh Người Dùng" />
                              </a>
                              <a href="/patientProfile">Joan Gardner <span>#PT0007</span></a>
                            </h2>
                          </td>
                          <td>$400</td>
                          <td>7 Tháng 11, 2019</td>
                          <td className="text-right">
                            <div className="table-action">
                              <a href="/invoiceView" className="btn btn-sm bg-info-light">
                                <i className="far fa-eye"></i> Xem
                              </a>
                              <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                <i className="fas fa-print"></i> In
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="/invoiceView">#INV-0002</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/patientProfile" className="avatar avatar-sm mr-2">
                                <img className="avatar-img rounded-circle" src="assets/img/patients/patient8.jpg" alt="Hình Ảnh Người Dùng" />
                              </a>
                              <a href="/patientProfile">Daniel Griffing <span>#PT0008</span></a>
                            </h2>
                          </td>
                          <td>$550</td>
                          <td>6 Tháng 11, 2019</td>
                          <td className="text-right">
                            <div className="table-action">
                              <a href="/invoiceView" className="btn btn-sm bg-info-light">
                                <i className="far fa-eye"></i> Xem
                              </a>
                              <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                <i className="fas fa-print"></i> In
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="/invoiceView">#INV-0001</a>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/patientProfile" className="avatar avatar-sm mr-2">
                                <img className="avatar-img rounded-circle" src="assets/img/patients/patient9.jpg" alt="Hình Ảnh Người Dùng" />
                              </a>
                              <a href="/patientProfile">Walter Roberson <span>#PT0009</span></a>
                            </h2>
                          </td>
                          <td>$100</td>
                          <td>5 Tháng 11, 2019</td>
                          <td className="text-right">
                            <div className="table-action">
                              <a href="/invoiceView" className="btn btn-sm bg-info-light">
                                <i className="far fa-eye"></i> Xem
                              </a>
                              <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                <i className="fas fa-print"></i> In
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* /Invoice Table */}
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

export default Invoice;