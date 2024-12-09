import { useGetProfile } from "../../hook/useGetProfile";

export const UserSidebar = () => {
  const { data: userProfile } = useGetProfile();
  return (
    <div className="profile-sidebar">
      <div className="widget-profile pro-widget-content">
        <div className="profile-info-widget">
          <a href="#" className="booking-doc-img">
            <img src="assets/img/patients/patient.jpg" alt="User Image" />
          </a>
          <div className="profile-det-info">
            <h3>{userProfile?.firstName} {userProfile?.lastName}</h3>
          </div>
        </div>
      </div>
      <div className="dashboard-widget">
        <nav className="dashboard-menu">
          <ul>
            <li>
              <a href="/userDashboard">
                <i className="fas fa-columns"></i>
                <span>Lịch đã đặt</span>
              </a>
            </li>
            <li>
              <a href="/Chat">
                <i className="fas fa-comments"></i>
                <span>Trò chuyện</span>
                <small className="unread-msg">23</small>
              </a>
            </li>
            <li>
              <a href="/profileSettings">
                <i className="fas fa-user-cog"></i>
                <span>Cài đặt hồ sơ</span>
              </a>
            </li>
            <li className="active">
              <a href="/changePassword">
                <i className="fas fa-lock"></i>
                <span>Đổi mật khẩu</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
