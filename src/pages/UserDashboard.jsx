import React from "react";
import { useGetDoctorAppointment } from "../hook/useGetDoctorAppointment";
import { UserSidebar } from "../components/Sidebar/UserSidebar";
import { useGetUserAppointment } from "../hook/useGetUserAppointment";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const { data } = useGetUserAppointment();
  const navigate = useNavigate()
  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/Home">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Dashboard</h2>
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
              {/* Profile Sidebar */}
              <UserSidebar />
              {/* /Profile Sidebar */}
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9">
              {/* Upcoming Appointment Tab */}
              <div className="tab-pane" id="upcoming-Appointments">
                <div className="card card-table mb-0">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>Tên Bác Sĩ</th>
                            <th>Ngày Hẹn</th>
                            <th>Bắt Đầu</th>
                            <th>Kết Thúc</th>
                            <th>Trạng Thái</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {data &&
                            data.map((e, index) => (
                              <tr
                                key={index}
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  navigate(
                                    `/viewPrescription?appointmentId=${e.appointmentId}`
                                  );
                                }}
                              >
                                <td>
                                  <h2 className="table-avatar">
                                    {e.doctorName}
                                  </h2>
                                </td>
                                <td>{e.date}</td>
                                <td>
                                  <span className="d-block text-info">
                                    {e.timeStart}
                                  </span>
                                </td>
                                <td>
                                  <span className="d-block text-info">
                                    {e.timeEnd}
                                  </span>
                                </td>
                                <td>
                                  <div className="table-action">
                                    {/* <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye"></i> Xem
                                    </a> */}
                                    <a className="btn btn-sm bg-success-light">
                                      {e.status}
                                    </a>
                                    {/* <a
                                      href="javascript:void(0);"
                                      className="btn btn-sm bg-danger-light"
                                    >
                                      <i className="fas fa-times"></i> Hủy
                                    </a> */}
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Upcoming Appointment Tab */}

              {/* Today Appointment Tab */}
              {/* <div className="tab-pane" id="today-Appointments">
                <div className="card card-table mb-0">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>Tên Bệnh Nhân</th>
                            <th>Ngày Hẹn</th>
                            <th>Mục Đích</th>
                            <th>Loại</th>
                            <th className="text-center">
                              Số Tiền Đã Thanh Toán
                            </th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="/patientProfile"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/patients/patient2.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="/patientProfile">
                                  Travis Trimble <span>#PT0002</span>
                                </a>
                              </h2>
                            </td>
                            <td>
                              1 Tháng 11, 2019{" "}
                              <span className="d-block text-info">
                                1:00 Chiều
                              </span>
                            </td>
                            <td>Khám Tổng Quát</td>
                            <td>Bệnh Nhân Mới</td>
                            <td className="text-center">$75</td>
                            <td className="text-right">
                              <div className="table-action">
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-sm bg-info-light"
                                >
                                  <i className="far fa-eye"></i> Xem
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-sm bg-success-light"
                                >
                                  <i className="fas fa-check"></i> Chấp Nhận
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-sm bg-danger-light"
                                >
                                  <i className="fas fa-times"></i> Hủy
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* /Today Appointment Tab */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
}

export default UserDashboard;
