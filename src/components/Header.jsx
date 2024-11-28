import React from 'react';

function Header() {
  return <div>
      {/* Header */}
      <header className="header">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="javascript:void(0);">
              <span className="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </a>
            <a href="/Home" className="navbar-brand logo">
              <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
            </a>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <a href="/Home" className="menu-logo">
                <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
              </a>
              <a id="menu_close" className="menu-close" href="javascript:void(0);">
                <i className="fas fa-times"></i>
              </a>
            </div>
            <ul className="main-nav">
              <li className="active">
                <a href="/Home">Trang Chủ</a>
              </li>
              <li className="has-submenu">
                <a href="#">Bác Sĩ <i className="fas fa-chevron-down"></i></a>
                <ul className="submenu">
                  <li><a href="/doctorDashboard">Bác Sĩ Dashboard</a></li>
                  <li><a href="/Appointments">Cuộc Hẹn</a></li>
                  <li><a href="/scheduleTimings">Lịch</a></li>
                  <li><a href="/patientProfile">Hồ Sơ Bệnh Nhân</a></li>
                  <li><a href="/Chat">Trò Chuyện</a></li>
                  <li><a href="/Invoice">Hóa Đơn</a></li>
                  <li><a href="/doctorProfileSettings">Cài Đặt Hồ Sơ Bác Sĩ</a></li>
                  <li><a href="/Reviews">Đánh Giá</a></li>
                  <li><a href="/register">Đăng Ký Bác Sĩ</a></li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="#">Bệnh Nhân <i className="fas fa-chevron-down"></i></a>
                <ul className="submenu">
                  <li><a href="/Search">Tìm Kiếm Bác Sĩ</a></li>
                  <li><a href="/doctorProfile">Hồ Sơ Bác Sĩ</a></li>
                  <li><a href="/Booking">Đặt Lịch</a></li>
                  <li><a href="/Checkout">Thanh Toán</a></li>
                  <li><a href="/bookingSuccess">Đặt Lịch Thành Công</a></li>
                  <li><a href="/Chat">Trò Chuyện</a></li>
                  <li><a href="/profileSettings">Cài Đặt Hồ Sơ</a></li>
                  <li><a href="/changePassword">Đổi Mật Khẩu</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            <li className="nav-item contact-item">
              <div className="header-contact-img">
                <i className="far fa-hospital"></i>
              </div>
              <div className="header-contact-detail">
                <p className="contact-header">Liên Hệ</p>
                <p className="contact-info-header"> +84 123 456 78</p>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link header-login" href="/login">Đăng Nhập / Đăng Ký </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* /Header */}

  </div>;
}

export default Header;
