import React, { useState } from 'react';

function Appointment() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentAppointment, setCurrentAppointment] = useState({ doctorName: '', speciality: '', patientName: '', appointmentTime: '', status: '', amount: '' });

  const handleAddClick = () => {
    setCurrentAppointment({ doctorName: '', speciality: '', patientName: '', appointmentTime: '', status: '', amount: '' }); // Reset thông tin cho cuộc hẹn mới
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleAddAppointment = (e) => {
    e.preventDefault();
    // Xử lý thêm cuộc hẹn mới ở đây
    console.log('Added Appointment:', currentAppointment);
    setIsAddModalOpen(false);
  };

  const handleDeleteAppointment = (appointmentId) => {
    // Xử lý xóa cuộc hẹn ở đây
    console.log('Deleted Appointment:', appointmentId);
  };

  return (
    <>
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12 d-flex justify-content-between align-items-center">
              <h3 className="page-title">Danh sách cuộc hẹn</h3>
              <button onClick={handleAddClick} className="btn btn-primary">Thêm cuộc hẹn</button>
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
                        <th>Tên bệnh nhân</th>
                        <th>Thời gian hẹn</th>
                        <th>Trạng thái</th>
                        <th>Số tiền</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dr. Alice Smith</td>
                        <td>Pediatrics</td>
                        <td>John Doe</td>
                        <td>10 Mar 2023 <br /><small>10:00 AM</small></td>
                        <td>Đã xác nhận</td>
                        <td>$100.00</td>
                        <td>
                          <button className="btn btn-sm btn-danger" onClick={() => handleDeleteAppointment(1)}>Xóa</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Dr. Bob Johnson</td>
                        <td>Oncology</td>
                        <td>Jane Smith</td>
                        <td>15 Apr 2023 <br /><small>01:30 PM</small></td>
                        <td>Đang chờ</td>
                        <td>$150.00</td>
                        <td>
                          <button className="btn btn-sm btn-danger" onClick={() => handleDeleteAppointment(2)}>Xóa</button>
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

    {/* Add Appointment Modal */}
    {isAddModalOpen && (
      <div className="modal fade show" style={{ display: 'block' }} aria-hidden="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Appointment</h5>
              <button type="button" className="close" onClick={handleCloseAddModal} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddAppointment}>
                <div className="form-group">
                  <label>Tên bác sĩ</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentAppointment.doctorName}
                    onChange={(e) => setCurrentAppointment({ ...currentAppointment, doctorName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Chuyên khoa</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentAppointment.speciality}
                    onChange={(e) => setCurrentAppointment({ ...currentAppointment, speciality: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Tên bệnh nhân</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentAppointment.patientName}
                    onChange={(e) => setCurrentAppointment({ ...currentAppointment, patientName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Thời gian hẹn</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentAppointment.appointmentTime}
                    onChange={(e) => setCurrentAppointment({ ...currentAppointment, appointmentTime: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Trạng thái</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentAppointment.status}
                    onChange={(e) => setCurrentAppointment({ ...currentAppointment, status: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Số tiền</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentAppointment.amount}
                    onChange={(e) => setCurrentAppointment({ ...currentAppointment, amount: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Lưu cuộc hẹn</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )}
    {/* /Add Appointment Modal */}
    </>
  );
}

export default Appointment;