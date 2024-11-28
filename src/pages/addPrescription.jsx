import React from 'react';

function AddPrescription() {
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
                  <li className="breadcrumb-item active" aria-current="page">Thêm Đơn Thuốc</li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Thêm Đơn Thuốc</h2>
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
              {/* Profile Widget */}
              <div className="card widget-profile pat-widget-profile">
                <div className="card-body">
                  <div className="pro-widget-content">
                    <div className="profile-info-widget">
                      <a href="#" className="booking-doc-img">
                        <img src="assets/img/patients/patient.jpg" alt="Hình Ảnh Người Dùng" />
                      </a>
                      <div className="profile-det-info">
                        <h3><a href="/patientProfile">Richard Wilson</a></h3>
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
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Thêm Đơn Thuốc</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="biller-info">
                        <h4 className="d-block">Dr. Darren Elder</h4>
                        <span className="d-block text-sm text-muted">Nha Sĩ</span>
                        <span className="d-block text-sm text-muted">Newyork, Hoa Kỳ</span>
                      </div>
                    </div>
                    <div className="col-sm-6 text-sm-right">
                      <div className="billing-info">
                        <h4 className="d-block">1 Tháng 11, 2019</h4>
                        <span className="d-block text-muted">#INV0001</span>
                      </div>
                    </div>
                  </div>

                  {/* Add Item */}
                  <div className="add-more-item text-right">
                    <a href="javascript:void(0);"><i className="fas fa-plus-circle"></i> Thêm Mục</a>
                  </div>
                  {/* /Add Item */}

                  {/* Prescription Item */}
                  <div className="card card-table">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center">
                          <thead>
                            <tr>
                              <th style={{ minWidth: '200px' }}>Tên</th>
                              <th style={{ minWidth: '100px' }}>Số Lượng</th>
                              <th style={{ minWidth: '100px' }}>Số Ngày</th>
                              <th style={{ minWidth: '100px' }}>Thời Gian</th>
                              <th style={{ minWidth: '80px' }}></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <input className="form-control" type="text" />
                              </td>
                              <td>
                                <input className="form-control" type="text" />
                              </td>
                              <td>
                                <input className="form-control" type="text" />
                              </td>
                              <td>
                                <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" /> Sáng
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" /> Chiều
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" /> Tối
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" /> Đêm
                                  </label>
                                </div>
                              </td>
                              <td>
                                <a href="#" className="btn bg-danger-light trash"><i className="far fa-trash-alt"></i></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* /Prescription Item */}

                  {/* Signature */}
                  <div className="row">
                    <div className="col-md-12 text-right">
                      <div className="signature-wrap">
                        <div className="signature">
                          Nhấn vào đây để ký
                        </div>
                        <div className="sign-name">
                          <p className="mb-0">( Dr. Darren Elder )</p>
                          <span className="text-muted">Chữ Ký</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Signature */}

                  {/* Submit Section */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="submit-section">
                        <button type="submit" className="btn btn-primary submit-btn">Lưu</button>
                        <button type="reset" className="btn btn-secondary submit-btn">Xóa</button>
                      </div>
                    </div>
                  </div>
                  {/* /Submit Section */}
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

export default AddPrescription;