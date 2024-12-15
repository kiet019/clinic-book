import { DoctorSidebar } from "../components/Sidebar/DoctorSidebar";
import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useFormik } from "formik";
import { apiFetch } from "../lib/apiFetch";
import { useGetDoctorProfile } from "../hook/useGetDoctorProfile";
import { useGetListDepartment } from "../hook/useGetListDepartment";

function DoctorProfileSettings() {
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);

  const { data: doctorData } = useGetDoctorProfile();
  const { data: department } = useGetListDepartment();
  const [isInitialized, setIsInitialized] = useState(false);

  const handleRegister = async (value) => {
    try {
      setIsLoading(true);
      const res = await apiFetch("/doctors/updateDoctor", {
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

  const { values, handleChange, handleSubmit, setValues } = useFormik({
    initialValues: {
      doctorName: "",
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      department: "",
      bio: "",
      speciality: "",
      dateOfBirth: "",
    },
    onSubmit: handleRegister,
  });

  useEffect(() => {
    if (doctorData && !isInitialized) {
      setValues({
        doctorName: doctorData.doctorName || "",
        department: doctorData.department || "",
        speciality: doctorData.speciality || "",
        bio: doctorData.bio || "",
        email: doctorData.email || "",
        firstName: doctorData.firstName || "",
        lastName: doctorData.lastName || "",
        phoneNumber: doctorData.phoneNumber || "",
        dateOfBirth: doctorData.dateOfBirth || "",
      });
      setIsInitialized(true);
    }
  }, [doctorData, isInitialized, setValues]);

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
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Profile Sidebar */}
              <DoctorSidebar />
              {/* /Profile Sidebar */}
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9">
              {/* Basic Information */}
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <h4 className="card-title">Thông Tin Cơ Bản</h4>
                    <div className="row form-row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <div className="change-avatar">
                            <div className="profile-img">
                              <img
                                src="assets/img/doctors/doctor-thumb-02.jpg"
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
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Tên Tài Khoản <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={values.doctorName}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            value={values.email}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Họ <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={values.firstName}
                            name="firstName"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Tên <span className="text-danger">*</span>
                          </label>
                          <input type="text" 
                            className="form-control"
                            value={values.lastName}
                            name="lastName"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Số Điện Thoại</label>
                          <input
                            type="text"
                            value={values.phoneNumber}
                            name="phoneNumber"
                            onChange={handleChange}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Khoa</label>
                          <select
                            className="form-control select"
                            value={values.department}
                            name="department"
                            onChange={handleChange}
                          >
                            {department &&
                              department.map((e) => (
                                <option key={e.name} value={e.name}>
                                  {e.name}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>
                            Bio <span className="text-danger">*</span>
                          </label>
                          <textarea
                            type="text"
                            value={values.bio}
                            onChange={handleChange}
                            name="bio"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-0">
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
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Speciality</label>
                          <input
                            type="text"
                            value={values.speciality}
                            name="speciality"
                            onChange={handleChange}
                            className="form-control"
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
                </div>
              </div>
              {/* /Basic Information */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
}

export default DoctorProfileSettings;
