import React, { useEffect, useState } from "react";
import { useGetListUser } from "../../hook/useGetListUser";
import { useSnackbar } from "notistack";
import { useFormik } from "formik";
import { apiFetch } from "../../lib/apiFetch";

function PatientList() {
  const { data, refetch } = useGetListUser();
  const [isUpdate, setIsUpdate] = useState(null);

  const handleAddClick = () => {
    setValues({
      id: 0,
      username: "",
      password: "",
      role: ["USER", "PATIENT"],
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
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
      const { data, status } = await apiFetch("/auth/register", {
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
    try {
      setIsLoading(true);
      const { data, status } = await apiFetch("/user/update", {
        method: "POST",
        body: JSON.stringify(value),
      });
      if (!status) {
        const message = Object.entries(data)[0][1];
        throw new Error(message);
      }
      enqueueSnackbar("Cập nhật thành công", { variant: "success" });
      refetch();
      setIsUpdate(null);
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      const { data, status } = await apiFetch("/user/admin/" + id, {
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

  const handleChangeStatus = async (id) => {
    try {
      setIsLoading(true);
      const { data, status } = await apiFetch("/user/admin/" + id + "/status", {
        method: "PUT",
        body: JSON.stringify({}),
      });
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
      id: 0,
      username: "",
      password: "",
      role: ["USER", "PATIENT"],
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
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
                <h3 className="page-title">Danh sách bệnh nhân</h3>
                <button onClick={handleAddClick} className="btn btn-primary">
                  Thêm bệnh nhân
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
                          <th>Họ</th>
                          <th>Tên</th>
                          <th>Email</th>
                          <th>Địa Chỉ</th>
                          <th>City</th>
                          <th>State</th>
                          <th>zip</th>
                          <th>Quốc Gia</th>
                          <th>BirthDay</th>
                          <th>Nhóm Máu</th>
                          <th>Hành Động</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data &&
                          data.map((e, index) => (
                            <tr key={index}>
                              <td>{e.id}</td>
                              <td>{e.lastName}</td>
                              <td>{e.firstName}</td>
                              <td>{e.email}</td>
                              <td>{e.address}</td>
                              <td>{e.city}</td>
                              <td>{e.state}</td>
                              <td>{e.zip}</td>
                              <td>{e.country}</td>
                              <td>{e.dateOfBirth}</td>
                              <td>{e.bloodgroup}</td>
                              <td>
                                <button
                                  className="btn btn-sm btn-info"
                                  onClick={() => handleEditClick(e)}
                                >
                                  Sửa
                                </button>
                                <button
                                  className="btn btn-sm btn-warning"
                                  onClick={() => {
                                    handleChangeStatus(e.id);
                                  }}
                                >
                                  Khóa
                                </button>
                                <button
                                  className="btn btn-sm btn-danger"
                                  onClick={() => {
                                    handleDelete(e.id);
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

      {/* Modal Thêm Bệnh Nhân */}
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
                  {!isUpdate ? "Thêm" : "Sửa"} Bệnh Nhân
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
                  <div className="row form-row social-login">
                    <div className="form-group form-focus col-6">
                      <label>Họ</label>
                      <input
                        type="text"
                        className="form-control floating"
                        value={values.firstName}
                        name="firstName"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group form-focus col-6">
                      <label>Tên</label>
                      <input
                        type="text"
                        className="form-control floating"
                        value={values.lastName}
                        name="lastName"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group form-focus">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control floating"
                      value={values.email}
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group form-focus">
                    <label>Số Điện Thoại</label>
                    <input
                      type="text"
                      className="form-control floating"
                      value={values.phoneNumber}
                      name="phoneNumber"
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={isLoading}
                  >
                    Lưu Bệnh Nhân
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
                  {!isUpdate ? "Thêm" : "Sửa"} Bệnh Nhân
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
                  <div className="row form-row">
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
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={isLoading}
                  >
                    Lưu Bệnh Nhân
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* /Modal Thêm Bệnh Nhân */}
    </>
  );
}

export default PatientList;
