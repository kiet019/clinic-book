import React from 'react';

function PatientProfile() {
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
                  <li className="breadcrumb-item active" aria-current="page">Hồ Sơ</li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Hồ Sơ</h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}

      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar dct-dashbd-lft">
              {/* Profile Widget */}
              <div className="card widget-profile pat-widget-profile">
                <div className="card-body">
                  <div className="pro-widget-content">
                    <div className="profile-info-widget">
                      <a href="#" className="booking-doc-img">
                        <img src="assets/img/patients/patient.jpg" alt="Hình Ảnh Người Dùng" />
                      </a>
                      <div className="profile-det-info">
                        <h3>Richard Wilson</h3>
                        <div className="patient-details">
                          <h5><b>Mã Bệnh Nhân :</b> PT0016</h5>
                          <h5 className="mb-0"><i className="fas fa-map-marker-alt"></i> Newyork, Hoa Kỳ</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="patient-info">
                    <ul>
                      <li>Điện Thoại <span>+1 952 001 8563</span></li>
                      <li>Tuổi <span>38 Năm, Nam</span></li>
                      <li>Nhóm Máu <span>AB+</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Profile Widget */}

              {/* Last Booking */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Hẹn Gần Đây</h4>
                </div>
                <ul className="list-group list-group-flush">
                  {/* Booking items can be mapped here */}
                  <li className="list-group-item">
                    <div className="media align-items-center">
                      <div className="mr-3">
                        <img alt="Image placeholder" src="assets/img/doctors/doctor-thumb-02.jpg" className="avatar rounded-circle" />
                      </div>
                      <div className="media-body">
                        <h5 className="d-block mb-0">Dr. Darren Elder</h5>
                        <span className="d-block text-sm text-muted">Nha Sĩ</span>
                        <span className="d-block text-sm text-muted">14 Nov 2019 5.00 PM</span>
                      </div>
                    </div>
                  </li>
                  {/* Add more booking items as needed */}
                </ul>
              </div>
              {/* /Last Booking */}
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9 dct-appoinment">
              <div className="card">
                <div className="card-body pt-0">
                  <div className="user-tabs">
                    <ul className="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap">
                      <li className="nav-item">
                        <a className="nav-link active" href="#pat_Appointments" data-toggle="tab">Lịch Hẹn</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#pres" data-toggle="tab"><span>Đơn Thuốc</span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#medical" data-toggle="tab"><span className="med-records">Hồ Sơ Y Tế</span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#billing" data-toggle="tab"><span>Hóa Đơn</span></a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    {/* Appointment Tab */}
                    <div id="pat_Appointments" className="tab-pane fade show active">
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>Bác Sĩ</th>
                                  <th>Ngày Hẹn</th>
                                  <th>Ngày Đặt</th>
                                  <th>Số Tiền</th>
                                  <th>Theo Dõi</th>
                                  <th>Trạng Thái</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                {/* Appointment rows can be mapped here */}
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a href="/doctorProfile" className="avatar avatar-sm mr-2">
                                        <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
                                      </a>
                                      <a href="/doctorProfile">Dr. Darren Elder <span>Dental</span></a>
                                    </h2>
                                  </td>
                                  <td>14 Nov 2019 <span className="d-block text-info">10.00 AM</span></td>
                                  <td>12 Nov 2019</td>
                                  <td>$160</td>
                                  <td>16 Nov 2019</td>
                                  <td><span className="badge badge-pill bg-success-light">Confirm</span></td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                        <i className="far fa-edit"></i> Edit
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                {/* Add more appointment rows as needed */}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Appointment Tab */}

                    {/* Prescription Tab */}
                    <div className="tab-pane fade" id="pres">
                      <div className="text-right">
                        <a href="/addPrescription" className="add-new-btn">Thêm Đơn Thuốc</a>
                      </div>
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>Ngày</th>
                                  <th>Tên</th>
                                  <th>Người Tạo</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                {/* Prescription rows can be mapped here */}
                                <tr>
                                  <td>14 Tháng 11, 2019</td>
                                  <td>Đơn Thuốc 1</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a href="/doctorProfile" className="avatar avatar-sm mr-2">
                                        <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-01.jpg" alt="Hình Ảnh Người Dùng" />
                                      </a>
                                      <a href="/doctorProfile">Dr. Ruby Perrin <span>Nha Khoa</span></a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                        <i className="fas fa-print"></i> In
                                      </a>
                                      <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                        <i className="far fa-eye"></i> Xem
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                {/* Add more prescription rows as needed */}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Prescription Tab */}

                    {/* Medical Records Tab */}
                    <div className="tab-pane fade" id="medical">
                      <div className="text-right">
                        <a href="#" className="add-new-btn" data-toggle="modal" data-target="#add_medical_records">Thêm Hồ Sơ Y Tế</a>
                      </div>
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>ID</th>
                                  <th>Ngày</th>
                                  <th>Mô Tả</th>
                                  <th>Tệp Đính Kèm</th>
                                  <th>Người Tạo</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                {/* Medical records rows can be mapped here */}
                                <tr>
                                  <td><a href="javascript:void(0);">#MR-0010</a></td>
                                  <td>14 Nov 2019</td>
                                  <td>Dental Filling</td>
                                  <td><a href="#">dental-test.pdf</a></td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a href="/doctorProfile" className="avatar avatar-sm mr-2">
                                        <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-01.jpg" alt="User Image" />
                                      </a>
                                      <a href="/doctorProfile">Dr. Ruby Perrin <span>Dental</span></a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                {/* Add more medical records rows as needed */}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Medical Records Tab */}

                    {/* Billing Tab */}
                    <div className="tab-pane" id="billing">
                      <div className="text-right">
                        <a className="add-new-btn" href="add-billing.html">Thêm Hóa Đơn</a>
                      </div>
                      <div className="card card-table mb-0">
                        <div className="card-body">
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
                                {/* Billing rows can be mapped here */}
                                <tr>
                                  <td>
                                    <a href="/invoiceView">#INV-0010</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a href="/doctorProfile" className="avatar avatar-sm mr-2">
                                        <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-01.jpg" alt="User Image" />
                                      </a>
                                      <a href="/doctorProfile">Ruby Perrin <span>Dental</span></a>
                                    </h2>
                                  </td>
                                  <td>$450</td>
                                  <td>14 Nov 2019</td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                {/* Add more billing rows as needed */}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Billing Tab */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      {/* Add Medical Records Modal */}
      <div className="modal fade custom-modal" id="add_medical_records">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Medical Records</h3>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="form-group">
                  <label>Date</label>
                  <input type="text" className="form-control datetimepicker" defaultValue="31-10-2019" />
                </div>
                <div className="form-group">
                  <label>Description ( Optional )</label>
                  <textarea className="form-control"></textarea>
                </div>
                <div className="form-group">
                  <label>Upload File</label>
                  <input type="file" className="form-control" />
                </div>
                <div className="submit-section text-center">
                  <button type="submit" className="btn btn-primary submit-btn">Submit</button>
                  <button type="button" className="btn btn-secondary submit-btn" data-dismiss="modal">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Medical Records Modal */}
    </div>
  );
}

export default PatientProfile;