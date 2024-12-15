import React, { useState } from "react";
import { getAccessToken, getRole, setAccessToken, setRole } from "../lib/token";
import { useNavigate } from "react-router-dom";

function AdminSidebar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();
  const handleLogout = () => {
    setAccessToken("");
    setRole("");
    navigate("/Login");
  };

  const sidebarStyle = {
    display: "block",
    transition: "all 0.3s ease",
    width: "250px",
    height: "100vh",
    backgroundColor: "#0A5EB0",
    position: "fixed",
    zIndex: 1000,
  };

  return (
    <div>
      {/* Sidebar */}
      <div className="sidebar" id="sidebar" style={sidebarStyle}>
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title"></li>
              <li
                className={activeIndex === 0 ? "active" : ""}
                onClick={() => setActiveIndex(0)}
              >
                <a href="/admin/AdminDashboard">
                  <i className="fe fe-home"></i> <span>Bảng Điều Khiển</span>
                </a>
              </li>
              <li
                className={activeIndex === 1 ? "active" : ""}
                onClick={() => setActiveIndex(1)}
              >
                <a href="/admin/appointment">
                  <i className="fe fe-layout"></i> <span>Khoa</span>
                </a>
              </li>
              <li
                className={activeIndex === 2 ? "active" : ""}
                onClick={() => setActiveIndex(2)}
              >
                <a href="/admin/medicines">
                  <i className="fe fe-users"></i> <span>Thuốc</span>
                </a>
              </li>
              <li
                className={activeIndex === 3 ? "active" : ""}
                onClick={() => setActiveIndex(3)}
              >
                <a href="/admin/DoctorList">
                  <i className="fe fe-user-plus"></i> <span>Bác Sĩ</span>
                </a>
              </li>
              <li
                className={activeIndex === 4 ? "active" : ""}
                onClick={() => setActiveIndex(4)}
              >
                <a href="/admin/PatientList">
                  <i className="fe fe-user"></i> <span>Bệnh Nhân</span>
                </a>
              </li>
              <li
                className={activeIndex === 5 ? "active" : ""}
                onClick={() => setActiveIndex(5)}
              >
                <a href="/admin/TransactionsList">
                  <i className="fe fe-activity"></i> <span>Giao Dịch</span>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="Login"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                  }}
                >
                  Đăng Xuất
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Sidebar */}
    </div>
  );
}

export default AdminSidebar;
