import React, { useState } from 'react';

function TransactionsList() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState({ invoiceNumber: '', patientId: '', patientName: '', totalAmount: '', status: '' });

  const handleAddClick = () => {
    setCurrentTransaction({ invoiceNumber: '', patientId: '', patientName: '', totalAmount: '', status: '' }); // Đặt lại thông tin cho giao dịch mới
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();
    // Xử lý thêm giao dịch mới ở đây
    console.log('Đã thêm giao dịch:', currentTransaction);
    setIsAddModalOpen(false);
  };

  const handleDeleteTransaction = (invoiceNumber) => {
    // Xử lý xóa giao dịch ở đây
    console.log('Đã xóa giao dịch:', invoiceNumber);
  };

  return (
    <>
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Tiêu đề trang */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12 d-flex justify-content-between align-items-center">
              <h3 className="page-title">Danh sách giao dịch</h3>
              <button onClick={handleAddClick} className="btn btn-primary">Thêm giao dịch</button>
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
                        <th>Số hóa đơn</th>
                        <th>ID bệnh nhân</th>
                        <th>Tên bệnh nhân</th>
                        <th>Tổng số tiền</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>INV-001</td>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>$100.00</td>
                        <td>Đã thanh toán</td>
                        <td>
                          <button className="btn btn-sm btn-danger" onClick={() => handleDeleteTransaction('INV-001')}>Xóa</button>
                        </td>
                      </tr>
                      <tr>
                        <td>INV-002</td>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>$150.00</td>
                        <td>Đang chờ</td>
                        <td>
                          <button className="btn btn-sm btn-danger" onClick={() => handleDeleteTransaction('INV-002')}>Xóa</button>
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

    {/* Mô-đun thêm giao dịch */}
    {isAddModalOpen && (
      <div className="modal fade show" style={{ display: 'block' }} aria-hidden="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thêm giao dịch</h5>
              <button type="button" className="close" onClick={handleCloseAddModal} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddTransaction}>
                <div className="form-group">
                  <label>Số hóa đơn</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentTransaction.invoiceNumber}
                    onChange={(e) => setCurrentTransaction({ ...currentTransaction, invoiceNumber: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>ID bệnh nhân</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentTransaction.patientId}
                    onChange={(e) => setCurrentTransaction({ ...currentTransaction, patientId: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Tên bệnh nhân</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentTransaction.patientName}
                    onChange={(e) => setCurrentTransaction({ ...currentTransaction, patientName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Tổng số tiền</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentTransaction.totalAmount}
                    onChange={(e) => setCurrentTransaction({ ...currentTransaction, totalAmount: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Trạng thái</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentTransaction.status}
                    onChange={(e) => setCurrentTransaction({ ...currentTransaction, status: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Lưu giao dịch</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )}
    {/* /Mô-đun thêm giao dịch */}
    </>
  );
}

export default TransactionsList;