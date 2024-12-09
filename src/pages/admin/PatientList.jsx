import React, { useState } from 'react';

function PatientList() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentPatient, setCurrentPatient] = useState({ id: '', name: '', age: '', address: '', phone: '', lastVisit: '' });

  const handleAddClick = () => {
    setCurrentPatient({ id: '', name: '', age: '', address: '', phone: '', lastVisit: '' }); // Đặt lại thông tin cho bệnh nhân mới
    setIsAddModalOpen(true);
  };

  const handleEditClick = (patient) => {
    setCurrentPatient(patient); // Cập nhật thông tin bệnh nhân hiện tại
    setIsEditModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleAddPatient = (e) => {
    e.preventDefault();
    // Xử lý thêm bệnh nhân mới ở đây
    console.log('Đã thêm bệnh nhân:', currentPatient);
    setIsAddModalOpen(false);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Xử lý lưu thay đổi bệnh nhân ở đây
    console.log('Đã cập nhật bệnh nhân:', currentPatient);
    setIsEditModalOpen(false);
  };

  return (
    <>
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Tiêu đề trang */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12 d-flex justify-content-between align-items-center">
              <h3 className="page-title">Danh sách bệnh nhân</h3>
              <button onClick={handleAddClick} className="btn btn-primary">Thêm bệnh nhân</button>
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
                        <th>ID Bệnh Nhân</th>
                        <th>Tên Bệnh Nhân</th>
                        <th>Tuổi</th>
                        <th>Địa Chỉ</th>
                        <th>Điện Thoại</th>
                        <th>Lần Thăm Cuối</th>
                        <th>Hành Động</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>30</td>
                        <td>123 Main St</td>
                        <td>(123) 456-7890</td>
                        <td>01 Jan 2023</td>
                        <td>
                          <button className="btn btn-sm btn-info" onClick={() => handleEditClick({ id: 1, name: 'John Doe', age: 30, address: '123 Main St', phone: '(123) 456-7890', lastVisit: '01 Jan 2023' })}>Sửa</button>
                          <button className="btn btn-sm btn-danger">Xóa</button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>25</td>
                        <td>456 Elm St</td>
                        <td>(987) 654-3210</td>
                        <td>15 Feb 2023</td>
                        <td>
                          <button className="btn btn-sm btn-info" onClick={() => handleEditClick({ id: 2, name: 'Jane Smith', age: 25, address: '456 Elm St', phone: '(987) 654-3210', lastVisit: '15 Feb 2023' })}>Sửa</button>
                          <button className="btn btn-sm btn-danger">Xóa</button>
                        </td>
                      </tr>
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
    {isAddModalOpen && (
      <div className="modal fade show" style={{ display: 'block' }} aria-hidden="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thêm Bệnh Nhân</h5>
              <button type="button" className="close" onClick={handleCloseAddModal} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddPatient}>
                <div className="form-group">
                  <label>Tên Bệnh Nhân</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentPatient.name}
                    onChange={(e) => setCurrentPatient({ ...currentPatient, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Tuổi</label>
                  <input
                    type="number"
                    className="form-control"
                    value={currentPatient.age}
                    onChange={(e) => setCurrentPatient({ ...currentPatient, age: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Địa Chỉ</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentPatient.address}
                    onChange={(e) => setCurrentPatient({ ...currentPatient, address: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Điện Thoại</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentPatient.phone}
                    onChange={(e) => setCurrentPatient({ ...currentPatient, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Lần Thăm Cuối</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentPatient.lastVisit}
                    onChange={(e) => setCurrentPatient({ ...currentPatient, lastVisit: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Lưu Bệnh Nhân</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )}
    {/* /Modal Thêm Bệnh Nhân */}

    {/* Modal Sửa Bệnh Nhân */}
    {isEditModalOpen && (
      <div className="modal fade show" style={{ display: 'block' }} aria-hidden="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sửa Bệnh Nhân</h5>
              <button type="button" className="close" onClick={handleCloseEditModal} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSaveChanges}>
                <div className="form-group">
                  <label>Tên Bệnh Nhân</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentPatient.name}
                    onChange={(e) => setCurrentPatient({ ...currentPatient, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Tuổi</label>
                  <input
                    type="number"
                    className="form-control"
                    value={currentPatient.age}
                    onChange={(e) => setCurrentPatient({ ...currentPatient, age: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Địa Chỉ</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentPatient.address}
                    onChange={(e) => setCurrentPatient({ ...currentPatient, address: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Điện Thoại</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentPatient.phone}
                    onChange={(e) => setCurrentPatient({ ...currentPatient, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Lần Thăm Cuối</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentPatient.lastVisit}
                    onChange={(e) => setCurrentPatient({ ...currentPatient, lastVisit: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Lưu Thay Đổi</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )}
    {/* /Modal Sửa Bệnh Nhân */}
    </>
  );
}

export default PatientList;