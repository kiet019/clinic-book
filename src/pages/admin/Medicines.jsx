import React, { useState } from "react";
import { useGetListMedichine } from "../../hook/useGetListMedicine";
import { useSnackbar } from "notistack";
import { useFormik } from "formik";
import { apiFetch } from "../../lib/apiFetch";

function Medicines() {
  const { data, refetch } = useGetListMedichine();
  const { enqueueSnackbar } = useSnackbar();

  const [isUpdate, setIsUpdate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  const handleAddClick = () => {
    setValues({
      name: "",
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

  const handleAdd = async (value) => {
    try {
      setIsLoading(true);
      const { data, status } = await apiFetch("/medicines", {
        method: "POST",
        body: JSON.stringify(value),
      });
      if (!status) {
        throw new Error(data);
      }
      enqueueSnackbar("Tạo thành công", { variant: "success" });
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
      const { data, status } = await apiFetch(
        "/medicines/" + values.medicineId,
        {
          method: "PUT",
          body: JSON.stringify(value),
        }
      );
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
      const { data, status } = await apiFetch("/medicines/" + id, {
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
      name: "string",
      description: "string",
      stock: 0,
      manufacturer: "string",
      unitPrice: 0,
      expirationDate: "string",
    },
    onSubmit: !isUpdate ? handleAdd : handleUpdate,
  });

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-7 col-auto">
                <h3 className="page-title">Thuốc</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Thuốc</li>
                </ul>
              </div>
              <div className="col-sm-5 col">
                <button
                  onClick={handleAddClick}
                  className="btn btn-primary float-right mt-2"
                >
                  Thêm
                </button>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="datatable table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Tên thuốc</th>
                          <th>Hạn sử dụng</th>
                          <th>Nhà cung cấp</th>
                          <th className="text-right">Số lượng</th>
                          <th className="text-right">Giá</th>
                          <th>Mô tả</th>
                          <th className="text-right">Hành Động</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data &&
                          data.map((e, index) => (
                            <tr key={index}>
                              <td>{e.medicineId}</td>
                              <td>{e.name}</td>
                              <td>{e.expirationDate}</td>
                              <td>{e.manufacturer}</td>
                              <td className="text-right">{e.stock}</td>
                              <td className="text-right">{e.unitPrice}</td>
                              <td>{e.description}</td>
                              <td className="text-right">
                                <button
                                  onClick={() => handleEditClick(e)}
                                  className="btn btn-sm btn-info"
                                >
                                  Sửa
                                </button>
                                <button
                                  data-toggle="modal"
                                  onClick={() => {
                                    setDeleteId(e.medicineId);
                                  }}
                                  className="btn btn-sm btn-danger"
                                >
                                  Xóa
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}

      {/* Add Modal */}
      {isUpdate !== null && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          aria-hidden="true"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Thêm Chuyên Khoa</h5>
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
                    <div className="row form-row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>
                            Tên Thuốc <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>
                            Số lượng <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={values.stock}
                            name="stock"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="form-group">
                          <label>Nhà cung cấp</label>
                          <input
                            type="text"
                            value={values.manufacturer}
                            name="manufacturer"
                            onChange={handleChange}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label>
                            Bio <span className="text-danger">*</span>
                          </label>
                          <textarea
                            type="text"
                            value={values.description}
                            onChange={handleChange}
                            name="description"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Giá</label>
                          <input
                            type="number"
                            value={values.unitPrice}
                            name="unitPrice"
                            onChange={handleChange}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Hạn sử dụng</label>
                          <div className="cal-icon">
                            <input
                              type="string"
                              className="form-control datetimepicker"
                              placeholder="yyyy-MM-dd"
                              value={values.expirationDate}
                              name="expirationDate"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Lưu Thay Đổi
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* /Add Modal */}

    </>
  );
}

export default Medicines;
