import React, { useState } from 'react';

function Specialities() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentSpeciality, setCurrentSpeciality] = useState({ id: '', name: '', image: '' });

  const handleAddClick = () => {
    setCurrentSpeciality({ id: '', name: '', image: '' }); // Reset thông tin cho chuyên khoa mới
    setIsAddModalOpen(true);
  };

  const handleEditClick = (id, name, image) => {
    setCurrentSpeciality({ id, name, image });
    setIsEditModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Xử lý lưu thay đổi ở đây
    console.log('Saved:', currentSpeciality);
    setIsEditModalOpen(false);
  };

  const handleAddSpeciality = (e) => {
    e.preventDefault();
    // Xử lý thêm chuyên khoa mới ở đây
    console.log('Added:', currentSpeciality);
    setIsAddModalOpen(false);
  };

  return (
    <>
    {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content container-fluid">
				
					{/* Page Header */}
					<div className="page-header">
						<div className="row">
							<div className="col-sm-7 col-auto">
								<h3 className="page-title">Chuyên Khoa</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
									<li className="breadcrumb-item active">Chuyên Khoa</li>
								</ul>
							</div>
							<div className="col-sm-5 col">
								<button onClick={handleAddClick} className="btn btn-primary float-right mt-2">Thêm</button>
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
													<th>Chuyên Khoa</th>
													<th>Hình Ảnh</th>
													<th className="text-right">Hành Động</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>1</td>
													<td>Cardiology</td>
													<td><img src="../assets/img/specialities/specialities-02.png" alt="Cardiology" style={{ width: '50px', height: '50px' }} /></td>
													<td className="text-right">
														<button onClick={() => handleEditClick(1, 'Cardiology', '../assets/img/specialities/specialities-02.png')} className="btn btn-sm btn-info">Sửa</button>
														<a href="#delete_modal" data-toggle="modal" className="btn btn-sm btn-danger">Xóa</a>
													</td>
												</tr>
												<tr>
													<td>2</td>
													<td>Neurology</td>
													<td><img src="../assets/img/specialities/specialities-01.png" alt="Neurology" style={{ width: '50px', height: '50px' }} /></td>
													<td className="text-right">
														<button onClick={() => handleEditClick(2, 'Neurology', '../assets/img/specialities/specialities-01.png')} className="btn btn-sm btn-info">Sửa</button>
														<a href="#delete_modal" data-toggle="modal" className="btn btn-sm btn-danger">Xóa</a>
													</td>
												</tr>
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
			{isAddModalOpen && (
				<div className="modal fade show" style={{ display: 'block' }} aria-hidden="true" role="dialog">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Thêm Chuyên Khoa</h5>
								<button type="button" className="close" onClick={handleCloseAddModal} aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<form onSubmit={handleAddSpeciality}>
									<div className="row form-row">
										<div className="col-12 col-sm-6">
											<div className="form-group">
												<label>Chuyên Khoa</label>
												<input
													type="text"
													className="form-control"
													value={currentSpeciality.name}
													onChange={(e) => setCurrentSpeciality({ ...currentSpeciality, name: e.target.value })}
												/>
											</div>
										</div>
										<div className="col-12 col-sm-6">
											<div className="form-group">
												<label>Hình Ảnh</label>
												<input
													type="file"
													className="form-control"
													onChange={(e) => setCurrentSpeciality({ ...currentSpeciality, image: e.target.files[0] })}
												/>
											</div>
										</div>
									</div>
									<button type="submit" className="btn btn-primary btn-block">Lưu Thay Đổi</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			)}
			{/* /Add Modal */}
			
			{/* Edit Details Modal */}
			{isEditModalOpen && (
				<div className="modal fade show" style={{ display: 'block' }} aria-hidden="true" role="dialog">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Chỉnh Sửa Chuyên Khoa</h5>
								<button type="button" className="close" onClick={handleCloseEditModal} aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<form onSubmit={handleSaveChanges}>
									<div className="row form-row">
										<div className="col-12 col-sm-6">
											<div className="form-group">
												<label>Chuyên Khoa</label>
												<input
													type="text"
													className="form-control"
													value={currentSpeciality.name}
													onChange={(e) => setCurrentSpeciality({ ...currentSpeciality, name: e.target.value })}
												/>
											</div>
										</div>
										<div className="col-12 col-sm-6">
											<div className="form-group">
												<label>Hình Ảnh</label>
												<input
													type="file"
													className="form-control"
													onChange={(e) => setCurrentSpeciality({ ...currentSpeciality, image: e.target.files[0] })}
												/>
											</div>
										</div>
									</div>
									<button type="submit" className="btn btn-primary btn-block">Lưu Thay Đổi</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			)}
			{/* /Edit Details Modal */}
			
			{/* Delete Modal */}
			<div className="modal fade" id="delete_modal" aria-hidden="true" role="dialog">
				<div className="modal-dialog modal-dialog-centered" role="document" >
					<div className="modal-content">
						<div className="modal-body">
							<div className="form-content p-2">
								<h4 className="modal-title">Xóa</h4>
								<p className="mb-4">Bạn có chắc chắn muốn xóa không?</p>
								<button type="button" className="btn btn-primary">Save </button>
								<button type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* /Delete Modal */}
    </>
  );
}

export default Specialities;