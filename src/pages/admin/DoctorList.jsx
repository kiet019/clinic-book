import React, { useState } from "react";
import { useGetListDoctor } from "../../hook/useGetListDoctor";
import { useSnackbar } from "notistack";
import { useFormik } from "formik";
import { apiFetch } from "../../lib/apiFetch";
import { useGetListDepartment } from "../../hook/useGetListDepartment";
import { StarRating } from "../../components/Rating/StartRating";

function DoctorList() {
  const { data, refetch } = useGetListDoctor();
  const [isUpdate, setIsUpdate] = useState(null);
  const { data: department } = useGetListDepartment();
  const handleAddClick = () => {
    setValues({
      bio: "stringstri",
      speciality: "string",
      departmentId: 0,
      username: "string",
      password: "stringst",
      firstName: "string",
      lastName: "string",
      email: "string",
      phoneNumber: "1853102064",
      address: "string",
      city: "string",
      state: "string",
      zip: "string",
      country: "string",
      dateOfBirth: "2024-12-15",
      bloodgroup: "string",
    });
    setIsUpdate(false);
  };

  const handleEditClick = (patient) => {
    setIsUpdate(true);
    setValues(patient);
  };

  const handleCloseModal = () => {
    setIsUpdate(null);
  };

  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (value) => {
    try {
      setIsLoading(true);
      const { data, status } = await apiFetch("/doctors/admin/create", {
        method: "POST",
        body: JSON.stringify(value),
      });
      if (!status) {
        const message = Object.entries(data)[0][1];
        throw new Error(message);
      }
      enqueueSnackbar("Đăng kí thành công", { variant: "success" });
      refetch();
      setIsUpdate(null);
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async (value) => {
    console.log(data);
    try {
      setIsLoading(true);
      const res = await apiFetch("/doctors/admin/" + value.doctorId, {
        method: "PUT",
        body: JSON.stringify(value),
      });
      const { data, status } = res;
      if (!status) {
        const message = Object.entries(data)[0][1];
        throw new Error(message);
      }
      refetch();
      enqueueSnackbar("Đổi thông tin thành công", { variant: "success" });
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (doctorId) => {
    try {
      setIsLoading(true);
      const { data, status } = await apiFetch("/doctors/admin/" + doctorId, {
        method: "DELETE",
      });
      if (!status) {
        throw new Error(data);
      }
      enqueueSnackbar("Xóa thành công", { variant: "success" });
      refetch();
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  const { values, handleChange, handleSubmit, setValues } = useFormik({
    initialValues: {
      bio: "stringstri",
      speciality: "string",
      departmentId: 0,
      username: "string",
      password: "stringst",
      firstName: "string",
      lastName: "string",
      email: "string",
      phoneNumber: "1853102064",
      address: "string",
      city: "string",
      state: "string",
      zip: "string",
      country: "string",
      dateOfBirth: "2024-12-15",
      bloodgroup: "string",
    },
    onSubmit: !isUpdate ? handleRegister : handleUpdate,
  });

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Tiêu đề trang */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12 d-flex justify-content-between align-items-center">
                <h3 className="page-title">Danh sách Bác Sĩ</h3>
                <button onClick={handleAddClick} className="btn btn-primary">
                  Thêm Bác Sĩ
                </button>
              </div>
            </div>
          </div>
          {/* /Tiêu đề trang */}

          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="datatable table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Tên</th>
                          <th>Phone</th>
                          <th>Email</th>
                          <th>Địa Chỉ</th>
                          <th>City</th>
                          <th>State</th>
                          <th>Bio</th>
                          <th>Khoa</th>
                          <th>Speciality</th>
                          <th>Đánh giá</th>
                          <th>Hành Động</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data &&
                          data.map((e, index) => (
                            <tr key={index}>
                              <td>{e.doctorId}</td>
                              <td>{e.doctorName}</td>
                              <td>{e.phoneNumber}</td>
                              <td>{e.email}</td>
                              <td>{e.address}</td>
                              <td>{e.city}</td>
                              <td>{e.state}</td>
                              <td style={{ maxWidth: 200, overflow: "hidden" }}>
                                {e.bio}
                              </td>
                              <td>{e.department}</td>
                              <td>{e.speciality}</td>
                              <td>
                                <StarRating rating={e.rating} />
                              </td>
                              <td>
                                <button
                                  className="btn btn-sm btn-info"
                                  onClick={() => handleEditClick(e)}
                                >
                                  Sửa
                                </button>
                                <button
                                  className="btn btn-sm btn-danger"
                                  onClick={() => {
                                    handleDelete(e.doctorId);
                                  }}
                                >
                                  Xóa
                                </button>
                              </td>
                            </tr>
                          ))}
                        {/* ... các hàng hiện có ... */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Thêm Bác Sĩ */}
      {isUpdate !== null && !isUpdate && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          aria-hidden="true"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {!isUpdate ? "Thêm" : "Sửa"} Bác Sĩ
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group form-focus">
                    <label>Tên đăng nhập</label>
                    <input
                      type="text"
                      className="form-control floating"
                      value={values.username}
                      name="username"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group form-focus">
                    <label>Tạo Mật Khẩu</label>
                    <input
                      type="password"
                      className="form-control floating"
                      value={values.password}
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="row form-row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Địa chỉ</label>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          value={values.address}
                          onChange={handleChange}
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
                          name="email"
                          value={values.email}
                          onChange={handleChange}
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
                        <label>Tên</label>
                        <input
                          type="text"
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
                          value={values.departmentId}
                          name="departmentId"
                          onChange={handleChange}
                        >
                          {department &&
                            department.map((e) => (
                              <option key={e.name} value={e.departmentId}>
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
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={isLoading}
                  >
                    Lưu Bác Sĩ
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {isUpdate !== null && isUpdate && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          aria-hidden="true"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {!isUpdate ? "Thêm" : "Sửa"} Bác Sĩ
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <h4 className="card-title">Thông Tin Cơ Bản</h4>
                  <div className="row form-row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Tên Tài Khoản <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="doctorName"
                          value={values.doctorName}
                          onChange={handleChange}
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
                          name="email"
                          value={values.email}
                          onChange={handleChange}
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
                        <input
                          type="text"
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
                          value={values.departmentId}
                          name="departmentId"
                          onChange={handleChange}
                        >
                          {department &&
                            department.map((e) => (
                              <option key={e.name} value={e.departmentId}>
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
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={isLoading}
                  >
                    Lưu Bác Sĩ
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* /Modal Thêm Bác Sĩ */}
    </>
  );
}

export default DoctorList;
