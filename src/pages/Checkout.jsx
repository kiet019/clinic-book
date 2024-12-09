import React from 'react';

function Checkout() {
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
                  <li className="breadcrumb-item active" aria-current="page">Thanh Toán</li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Thanh Toán</h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}

      {/* Nội Dung Trang */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-8">
              <div className="card">
                <div className="card-body">
                  {/* Biểu Mẫu Thanh Toán */}
                  <form action="#//bookingSuccess">
                    {/* Thông Tin Cá Nhân */}
                    <div className="info-widget">
                      <h4 className="card-title">Thông Tin Cá Nhân</h4>
                      <div className="row">
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>Họ</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>Tên</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>Email</label>
                            <input className="form-control" type="email" />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>Số Điện Thoại</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="exist-customer">Khách Hàng Đã Tồn Tại? <a href="#">Nhấn vào đây để đăng nhập</a></div>
                    </div>
                    {/* /Thông Tin Cá Nhân */}

                    <div className="payment-widget">
                      <h4 className="card-title">Phương Thức Thanh Toán</h4>

                      {/* Thanh Toán Bằng Thẻ Tín Dụng */}
                      <div className="payment-list">
                        <label className="payment-radio credit-card-option">
                          <input type="radio" name="radio" checked />
                          <span className="checkmark"></span>
                          Thẻ tín dụng
                        </label>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group card-label">
                              <label htmlFor="card_name">Tên trên thẻ</label>
                              <input className="form-control" id="card_name" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group card-label">
                              <label htmlFor="card_number">Số Thẻ</label>
                              <input className="form-control" id="card_number" placeholder="1234 5678 9876 5432" type="text" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group card-label">
                              <label htmlFor="expiry_month">Tháng Hết Hạn</label>
                              <input className="form-control" id="expiry_month" placeholder="MM" type="text" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group card-label">
                              <label htmlFor="expiry_year">Năm Hết Hạn</label>
                              <input className="form-control" id="expiry_year" placeholder="YY" type="text" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group card-label">
                              <label htmlFor="cvv">CVV</label>
                              <input className="form-control" id="cvv" type="text" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Thanh Toán Bằng Thẻ Tín Dụng */}

                      {/* Thanh Toán Bằng Paypal */}
                      <div className="payment-list">
                        <label className="payment-radio paypal-option">
                          <input type="radio" name="radio" />
                          <span className="checkmark"></span>
                          Paypal
                        </label>
                      </div>
                      {/* /Thanh Toán Bằng Paypal */}

                      {/* Chấp Nhận Điều Khoản */}
                      <div className="terms-accept">
                        <div className="custom-checkbox">
                          <input type="checkbox" id="terms_accept" />
                          <label htmlFor="terms_accept">Tôi đã đọc và chấp nhận <a href="#">Điều Khoản &amp; Điều Kiện</a></label>
                        </div>
                      </div>
                      {/* /Chấp Nhận Điều Khoản */}

                      {/* Phần Gửi */}
                      <div className="submit-section mt-4">
                        <button type="submit" className="btn btn-primary submit-btn">Xác Nhận và Thanh Toán</button>
                      </div>
                      {/* /Phần Gửi */}
                    </div>
                  </form>
                  {/* /Biểu Mẫu Thanh Toán */}
                </div>
              </div>
            </div>

            <div className="col-md-5 col-lg-4 theiaStickySidebar">
              {/* Tóm Tắt Đặt Lịch */}
              <div className="card booking-card">
                <div className="card-header">
                  <h4 className="card-title">Tóm Tắt Đặt Lịch</h4>
                </div>
                <div className="card-body">
                  {/* Thông Tin Bác Sĩ Đặt Lịch */}
                  <div className="booking-doc-info">
                    <a href="/doctorProfile" className="booking-doc-img">
                      <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="Hình Ảnh Người Dùng" />
                    </a>
                    <div className="booking-info">
                      <h4><a href="/doctorProfile">Dr. Darren Elder</a></h4>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">35</span>
                      </div>
                      <div className="clinic-details">
                        <p className="doc-location"><i className="fas fa-map-marker-alt"></i> Newyork, Hoa Kỳ</p>
                      </div>
                    </div>
                  </div>
                  {/* Thông Tin Bác Sĩ Đặt Lịch */}

                  <div className="booking-summary">
                    <div className="booking-item-wrap">
                      <ul className="booking-date">
                        <li>Ngày <span>16 Nov 2019</span></li>
                        <li>Thời Gian <span>10:00 AM</span></li>
                      </ul>
                      <ul className="booking-fee">
                        <li>Phí Tư Vấn <span>$100</span></li>
                        <li>Phí Đặt Lịch <span>$10</span></li>
                        <li>Cuộc Gọi Video <span>$50</span></li>
                      </ul>
                      <div className="booking-total">
                        <ul className="booking-total-list">
                          <li>
                            <span>Tổng Cộng</span>
                            <span className="total-cost">$160</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Tóm Tắt Đặt Lịch */}
            </div>
          </div>
        </div>
      </div>
      {/* /Nội Dung Trang */}
    </div>
  )
}

export default Checkout;