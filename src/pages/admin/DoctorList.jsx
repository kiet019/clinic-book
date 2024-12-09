import React, { useState } from 'react';

function DoctorList() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentDoctor, setCurrentDoctor] = useState({ name: '', speciality: '', memberSince: '', earned: '' });

  const handleAddClick = () => {
    setCurrentDoctor({ name: '', speciality: '', memberSince: '', earned: '' }); // Reset thông tin cho bác sĩ mới
    setIsAddModalOpen(true);
  };

  const handleEditClick = (doctor) => {
    setCurrentDoctor(doctor); // Cập nhật thông tin bác sĩ hiện tại
    setIsEditModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleAddDoctor = (e) => {
    e.preventDefault();
    // Xử lý thêm bác sĩ mới ở đây
    console.log('Đã thêm bác sĩ:', currentDoctor);
    setIsAddModalOpen(false);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Xử lý lưu thay đổi bác sĩ ở đây
    console.log('Đã cập nhật bác sĩ:', currentDoctor);
    setIsEditModalOpen(false);
  };

  return (
    <>
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12 d-flex justify-content-between align-items-center">
              <h3 className="page-title">Danh sách bác sĩ</h3>
              <button onClick={handleAddClick} className="btn btn-primary">Thêm bác sĩ</button>
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
                        <th>Tên bác sĩ</th>
                        <th>Chuyên khoa</th>
                        <th>Thành viên từ</th>
                        <th>Đã kiếm</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.html" className="avatar avatar-sm mr-2">
                              <img className="avatar-img rounded-circle" src="../assets/img/doctors/doctor-thumb-01.jpg" alt="Hình ảnh người dùng" />
                            </a>
                            <a href="profile.html">Dr. Alice Smith</a>
                          </h2>
                        </td>
                        <td>Nhi khoa</td>
                        <td>10 Tháng 3 2020 <br /><small>10.00 AM</small></td>
                        <td>$4500.00</td>
                        <td>
                          <button className="btn btn-sm btn-info" onClick={() => handleEditClick({ name: 'Dr. Alice Smith', speciality: 'Nhi khoa', memberSince: '10 Tháng 3 2020', earned: '$4500.00' })}>Sửa</button>
                          <button className="btn btn-sm btn-danger">Xóa</button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.html" className="avatar avatar-sm mr-2">
                              <img className="avatar-img rounded-circle" src="../assets/img/doctors/doctor-thumb-02.jpg" alt="Hình ảnh người dùng" />
                            </a>
                            <a href="profile.html">Dr. Bob Johnson</a>
                          </h2>
                        </td>
                        <td>Ung thư</td>
                        <td>15 Tháng 4 2021 <br /><small>01.30 PM</small></td>
                        <td>$5200.00</td>
                        <td>
                          <button className="btn btn-sm btn-info" onClick={() => handleEditClick({ name: 'Dr. Bob Johnson', speciality: 'Ung thư', memberSince: '15 Tháng 4 2021', earned: '$5200.00' })}>Sửa</button>
                          <button className="btn btn-sm btn-danger">Xóa</button>
                        </td>
                      </tr>
                      {/* ... existing rows ... */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>			
        </div>
        
      </div>			
    </div>

    {/* Thêm bác sĩ Modal */}
    {isAddModalOpen && (
      <div className="modal fade show" style={{ display: 'block' }} aria-hidden="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thêm bác sĩ</h5>
              <button type="button" className="close" onClick={handleCloseAddModal} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddDoctor}>
                <div className="form-group">
                  <label>Tên bác sĩ</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentDoctor.name}
                    onChange={(e) => setCurrentDoctor({ ...currentDoctor, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Chuyên khoa</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentDoctor.speciality}
                    onChange={(e) => setCurrentDoctor({ ...currentDoctor, speciality: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Thành viên từ</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentDoctor.memberSince}
                    onChange={(e) => setCurrentDoctor({ ...currentDoctor, memberSince: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Đã kiếm</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentDoctor.earned}
                    onChange={(e) => setCurrentDoctor({ ...currentDoctor, earned: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Lưu bác sĩ</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )}
    {/* /Thêm bác sĩ Modal */}

    {/* Sửa bác sĩ Modal */}
    {isEditModalOpen && (
      <div className="modal fade show" style={{ display: 'block' }} aria-hidden="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sửa bác sĩ</h5>
              <button type="button" className="close" onClick={handleCloseEditModal} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSaveChanges}>
                <div className="form-group">
                  <label>Tên bác sĩ</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentDoctor.name}
                    onChange={(e) => setCurrentDoctor({ ...currentDoctor, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Chuyên khoa</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentDoctor.speciality}
                    onChange={(e) => setCurrentDoctor({ ...currentDoctor, speciality: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Thành viên từ</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentDoctor.memberSince}
                    onChange={(e) => setCurrentDoctor({ ...currentDoctor, memberSince: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Đã kiếm</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentDoctor.earned}
                    onChange={(e) => setCurrentDoctor({ ...currentDoctor, earned: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Lưu thay đổi</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )}
    {/* /Sửa bác sĩ Modal */}
    </>
  );
}

export default DoctorList;