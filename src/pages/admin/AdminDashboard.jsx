import React from 'react';

function AdminDashboard() {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Chào Admin!</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item active">Bảng Điều Khiển</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}

        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="dash-widget-icon text-primary border-primary">
                    <i className="fe fe-users"></i>
                  </span>
                  <div className="dash-count">
                    <h3>168</h3>
                  </div>
                </div>
                <div className="dash-widget-info">
                  <h6 className="text-muted">Bác Sĩ</h6>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-primary w-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="dash-widget-icon text-success">
                    <i className="fe fe-credit-card"></i>
                  </span>
                  <div className="dash-count">
                    <h3>487</h3>
                  </div>
                </div>
                <div className="dash-widget-info">
                  <h6 className="text-muted">Bệnh Nhân</h6>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-success w-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="dash-widget-icon text-danger border-danger">
                    <i className="fe fe-money"></i>
                  </span>
                  <div className="dash-count">
                    <h3>485</h3>
                  </div>
                </div>
                <div className="dash-widget-info">
                  <h6 className="text-muted">Hẹn</h6>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-danger w-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="dash-widget-icon text-warning border-warning">
                    <i className="fe fe-folder"></i>
                  </span>
                  <div className="dash-count">
                    <h3>$62523</h3>
                  </div>
                </div>
                <div className="dash-widget-info">
                  <h6 className="text-muted">Doanh Thu</h6>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-warning w-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-6">
            {/* Sales Chart */}
            <div className="card card-chart">
              <div className="card-header">
                <h4 className="card-title">Doanh Thu</h4>
              </div>
              <div className="card-body">
                <div id="morrisArea"></div>
              </div>
            </div>
            {/* /Sales Chart */}
          </div>
          <div className="col-md-12 col-lg-6">
            {/* Invoice Chart */}
            <div className="card card-chart">
              <div className="card-header">
                <h4 className="card-title">Trạng Thái</h4>
              </div>
              <div className="card-body">
                <div id="morrisLine"></div>
              </div>
            </div>
            {/* /Invoice Chart */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex">
            {/* Recent Orders */}
            <div className="card card-table flex-fill">
              <div className="card-header">
                <h4 className="card-title">Bác Sĩ</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Tên Bác Sĩ</th>
                        <th>Chuyên Ngành</th>
                        <th>Thu Nhập</th>
                        <th>Đánh Giá</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.html" className="avatar avatar-sm mr-2">
                              <img className="avatar-img rounded-circle" src="../assets/img/doctors/doctor-thumb-01.jpg" alt="User Image" />
                            </a>
                            <a href="profile.html">Dr. Ruby Perrin</a>
                          </h2>
                        </td>
                        <td>Nha Sĩ</td>
                        <td>$3200.00</td>
                        <td>
                          <i className="fe fe-star text-warning"></i>
                          <i className="fe fe-star text-warning"></i>
                          <i className="fe fe-star text-warning"></i>
                          <i className="fe fe-star text-warning"></i>
                          <i className="fe fe-star-o text-secondary"></i>
                        </td>
                      </tr>
                      {/* Thêm các bác sĩ khác tương tự */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* /Recent Orders */}
          </div>
          <div className="col-md-6 d-flex">
            {/* Feed Activity */}
            <div className="card card-table flex-fill">
              <div className="card-header">
                <h4 className="card-title">Bệnh Nhân</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Tên Bệnh Nhân</th>
                        <th>Số Điện Thoại</th>
                        <th>Lần Khám</th>
                        <th>Thanh Toán</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.html" className="avatar avatar-sm mr-2">
                              <img className="avatar-img rounded-circle" src="../assets/img/patients/patient1.jpg" alt="User Image" />
                            </a>
                            <a href="profile.html">Charlene Reed</a>
                          </h2>
                        </td>
                        <td>8286329170</td>
                        <td>20 Oct 2019</td>
                        <td className="text-right">$100.00</td>
                      </tr>
                      {/* Thêm các bệnh nhân khác tương tự */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* /Feed Activity */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* Recent Orders */}
            <div className="card card-table">
              <div className="card-header">
                <h4 className="card-title">Danh sách cuộc hẹn</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Tên Bác Sĩ</th>
                        <th>Chuyên Ngành</th>
                        <th>Tên Bệnh Nhân</th>
                        <th>Thời Gian Hẹn</th>
                        <th>Trạng Thái</th>
                        <th className="text-right">Thanh Toán</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.html" className="avatar avatar-sm mr-2">
                              <img className="avatar-img rounded-circle" src="../assets/img/doctors/doctor-thumb-01.jpg" alt="User Image" />
                            </a>
                            <a href="profile.html">Dr. Ruby Perrin</a>
                          </h2>
                        </td>
                        <td>Nha Sĩ</td>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.html" className="avatar avatar-sm mr-2">
                              <img className="avatar-img rounded-circle" src="../assets/img/patients/patient1.jpg" alt="User Image" />
                            </a>
                            <a href="profile.html">Charlene Reed</a>
                          </h2>
                        </td>
                        <td>9 Nov 2019 <span className="text-primary d-block">11.00 AM - 11.15 AM</span></td>
                        <td>
                          <div className="status-toggle">
                            <input type="checkbox" id="status_1" className="check" checked />
                            <label htmlFor="status_1" className="checktoggle">checkbox</label>
                          </div>
                        </td>
                        <td className="text-right">$200.00</td>
                      </tr>
                      {/* Thêm các cuộc hẹn khác tương tự */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* /Recent Orders */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;