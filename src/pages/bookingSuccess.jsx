import React from 'react';

function BookingSuccess() {
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
                  <li className="breadcrumb-item active" aria-current="page">Đặt Lịch Hẹn</li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Đặt Lịch Hẹn</h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}

      {/* Page Content */}
      <div className="content success-page-cont">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              {/* Success Card */}
              <div className="card success-card">
                <div className="card-body">
                  <div className="success-cont">
                    <i className="fas fa-check"></i>
                    <h3>  </h3>
                    <p>Đặt Lịch Hẹn Với <strong>Bác Sĩ Darren Elder</strong><br /> Vào <strong>12 Tháng 11 2019 5:00PM Đến 6:00PM</strong></p>
                    <a href="/invoiceView" className="btn btn-primary view-inv-btn">Xem Hóa Đơn</a>
                  </div>
                </div>
              </div>
              {/* /Success Card */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
}

export default BookingSuccess;