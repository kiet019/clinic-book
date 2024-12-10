import React from 'react';
import AdminSidebar from './AdminSidebar'; // Import AdminSidebar

const AdminHeader = () => {
  return (
    <div className="header">
      <AdminSidebar /> {/* Always display the sidebar */}
      {/* Logo */}
      <div className="header-left">
        <a href="index.html" className="logo">
          <img src="../assets/admin/assets/img/logo.png" alt="Logo" />
        </a>
        <a href="index.html" className="logo logo-small">
          <img src="../assets/admin/assets/img/logo-small.png" alt="Logo" width="30" height="30" />
        </a>
      </div>
      {/* /Logo */}

      <div className="top-nav-search">
        <form>
          <input type="text" className="form-control" placeholder="Tìm Kiếm Ở Đây" />
          <button className="btn" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      {/* Mobile Menu Toggle */}
      <a className="mobile_btn" id="mobile_btn">
        <i className="fa fa-bars"></i>
      </a>
      {/* /Mobile Menu Toggle */}

      {/* Header Right Menu */}
      <ul className="nav user-menu">
        {/* Notifications */}
        <li className="nav-item dropdown noti-dropdown">
          <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
            <i className="fe fe-bell"></i> <span className="badge badge-pill">3</span>
          </a>
          <div className="dropdown-menu notifications">
            <div className="topnav-dropdown-header">
              <span className="notification-title">Thông Báo</span>
              <a href="javascript:void(0)" className="clear-noti"> Xóa Tất Cả </a>
            </div>
            <div className="noti-content">
              <ul className="notification-list">
                {/* Notification items */}
                <li className="notification-message">
                  <a href="#">
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img className="avatar-img rounded-circle" alt="User Image" src="../assets/admin/assets/img/doctors/doctor-thumb-01.jpg" />
                      </span>
                      <div className="media-body">
                        <p className="noti-details"><span className="noti-title">Dr. Ruby Perrin</span> Schedule <span className="noti-title">Cuộc Hẹn Của Cô Ấy</span></p>
                        <p className="noti-time"><span className="notification-time">4 phút trước</span></p>
                      </div>
                    </div>
                  </a>
                </li>
                {/* Thêm các notification khác tương tự */}
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="#">Xem Tất Cả Thông Báo</a>
            </div>
          </div>
        </li>
        {/* /Notifications */}

        {/* User Menu */}
        <li className="nav-item dropdown has-arrow">
          <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
            <span className="user-img"><img className="rounded-circle" src="../assets/admin/assets/img/profiles/avatar-01.jpg" width="31" alt="Ryan Taylor" /></span>
          </a>
          <div className="dropdown-menu">
            <div className="user-header">
              <div className="avatar avatar-sm">
                <img src="../assets/admin/assets/img/profiles/avatar-01.jpg" alt="User Image" className="avatar-img rounded-circle" />
              </div>
              <div className="user-text">
                <h6>Ryan Taylor</h6>
                <p className="text-muted mb-0">Administrator</p>
              </div>
            </div>
            <a className="dropdown-item" href="profile.html">Thông Tin Của Tôi</a>
            <a className="dropdown-item" href="settings.html">Cài Đặt</a>
            <a className="dropdown-item" href="/login">Đăng Xuất</a>
          </div>
        </li>
        {/* /User Menu */}
      </ul>
      {/* /Header Right Menu */}
    </div>
  );
}

export default AdminHeader;