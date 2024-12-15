import { useGetDoctorProfile } from "../../hook/useGetDoctorProfile";

export const DoctorSidebar = () => {
  const { data } = useGetDoctorProfile();
  return (
    <div className="profile-sidebar">
      <div className="widget-profile pro-widget-content">
        <div className="profile-info-widget">
          <a href="#" className="booking-doc-img">
            <img
              src="assets/img/doctors/doctor-thumb-02.jpg"
              alt="Người Dùng"
            />
          </a>
          <div className="profile-det-info">
            <h3>Bác Sĩ {data?.doctorName}</h3>
            <p className="mb-0" style={{fontSize: 12}}>{data?.bio}</p>
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
            {/* <li>
              <a href="/Appointments">
                <i className="fas fa-calendar-check"></i>
                <span>Lịch Hẹn</span>
              </a>
            </li> */}
            {/* <li>
              <a href="/patientProfile">
                <i className="fas fa-user-injured"></i>
                <span>Bệnh Nhân Của Tôi</span>
              </a>
            </li> */}
            <li className="active">
              <a href="/scheduleTimings">
                <i className="fas fa-hourglass-start"></i>
                <span>Lịch</span>
              </a>
            </li>
            {/* <li>
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
            </li> */}
            <li>
              <a href="/chatDoctor">
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
            {/* <li>
              <a href="social-media.html">
                <i className="fas fa-share-alt"></i>
                <span>Mạng Xã Hội</span>
              </a>
            </li> */}
            <li>
              <a href="doctor/changePassword">
                <i className="fas fa-lock"></i>
                <span>Đổi Mật Khẩu</span>
              </a>
            </li>
            {/* <li>
              <a href="/Home">
                <i className="fas fa-sign-out-alt"></i>
                <span>Đăng Xuất</span>
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};
