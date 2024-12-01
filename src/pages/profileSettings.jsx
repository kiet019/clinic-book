import React, { useState } from "react";
import { useSnackbar } from "notistack";
import * as yup from "yup";
import { useFormik } from "formik";
import { apiFetch } from "../lib/apiFetch";

const validate = yup.object().shape({});

function ProfileSettings() {
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (value) => {
    try {
      setIsLoading(true);
      const res = await apiFetch("/user/update", {
        method: "PUT",
        body: JSON.stringify(value),
      });
      const { data, status } = res;
      if (!status) {
        const message = Object.entries(data)[0][1];
        throw new Error(message);
      }
      enqueueSnackbar("Đổi thông tin thành công", { variant: "success" });
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      dateOfBirth: "",
      bloodgroup: "",
    },
    onSubmit: handleRegister,
  });

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
                    <a href="/Home">Trang Chủ</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Cài Đặt Hồ Sơ
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Cài Đặt Hồ Sơ</h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}

      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            {/* Profile Sidebar */}
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <a href="#" className="booking-doc-img">
                      <img
                        src="assets/img/patients/patient.jpg"
                        alt="Hình Ảnh Người Dùng"
                      />
                    </a>
                    <div className="profile-det-info">
                      <h3>Richard Wilson</h3>
                      <div className="patient-details">
                        <h5>
                          <i className="fas fa-birthday-cake"></i> 24 Tháng 7,
                          1983, 38 tuổi
                        </h5>
                        <h5 className="mb-0">
                          <i className="fas fa-map-marker-alt"></i> Newyork, Hoa
                          Kỳ
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-columns"></i>
                          <span>Bảng Điều Khiển</span>
                        </a>
                      </li>
                      <li>
                        <a href="favourites.html">
                          <i className="fas fa-bookmark"></i>
                          <span>Yêu Thích</span>
                        </a>
                      </li>
                      <li>
                        <a href="/Chat">
                          <i className="fas fa-comments"></i>
                          <span>Tin Nhắn</span>
                          <small className="unread-msg">23</small>
                        </a>
                      </li>
                      <li className="active">
                        <a href="/profileSettings">
                          <i className="fas fa-user-cog"></i>
                          <span>Cài Đặt Hồ Sơ</span>
                        </a>
                      </li>
                      <li>
                        <a href="/changePassword">
                          <i className="fas fa-lock"></i>
                          <span>Đổi Mật Khẩu</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* /Profile Sidebar */}

            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  {/* Profile Settings Form */}
                  <form onSubmit={handleSubmit}>
                    <div className="row form-row">
                      <div className="col-12 col-md-12">
                        <div className="form-group">
                          <div className="change-avatar">
                            <div className="profile-img">
                              <img
                                src="assets/img/patients/patient.jpg"
                                alt="Hình Ảnh Người Dùng"
                              />
                            </div>
                            <div className="upload-img">
                              <div className="change-photo-btn">
                                <span>
                                  <i className="fa fa-upload"></i> Tải Ảnh Lên
                                </span>
                                <input type="file" className="upload" />
                              </div>
                              <small className="form-text text-muted">
                                Chấp nhận JPG, GIF hoặc PNG. Kích thước tối đa
                                2MB
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Tên</label>
                          <input
                            type="text"
                            className="form-control"
                            value={values.firstName}
                            name="firstName"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Họ</label>
                          <input
                            type="text"
                            className="form-control"
                            value={values.lastName}
                            name="lastName"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Ngày Sinh</label>
                          <div className="cal-icon">
                            <input
                              type="string"
                              className="form-control datetimepicker"
                              placeholder="yyyy-MM-dd"
                              value={values.dateOfBirth}
                              name="dateOfBirth"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Nhóm Máu</label>
                          <select
                            className="form-control select"
                            value={values.bloodgroup}
                            name="bloodgroup"
                            onChange={handleChange}
                          >
                            <option>
                              <em>Chọn nhóm máu</em>
                            </option>
                            <option>A-</option>
                            <option>A+</option>
                            <option>B-</option>
                            <option>B+</option>
                            <option>AB-</option>
                            <option>AB+</option>
                            <option>O-</option>
                            <option>O+</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            value={values.email}
                            name="email"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Điện Thoại</label>
                          <input
                            type="text"
                            className="form-control"
                            value={values.phoneNumber}
                            name="phoneNumber"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>Địa Chỉ</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="806 Twin Willow Lane"
                            value={values.address}
                            name="address"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Thành Phố</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Old Forge"
                            value={values.city}
                            name="city"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Tiểu Bang</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Newyork"
                            value={values.state}
                            name="state"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Mã Bưu Điện</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="13420"
                            value={values.zip}
                            name="zip"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Quốc Gia</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Hoa Kỳ"
                            value={values.country}
                            name="country"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="submit-section">
                      <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                      >
                        Lưu Thay Đổi
                      </button>
                    </div>
                  </form>
                  {/* /Profile Settings Form */}
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

export default ProfileSettings;
