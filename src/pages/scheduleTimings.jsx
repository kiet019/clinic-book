import React from 'react';

function ScheduleTimings() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/Home">Trang Chủ</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Lịch</li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Lịch</h2>
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
              <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <a href="#" className="booking-doc-img">
                      <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="Người Dùng" />
                    </a>
                    <div className="profile-det-info">
                      <h3>Bác Sĩ</h3>
                      <div className="patient-details">
                        <h5 className="mb-0">BDS, MDS - Phẫu Thuật Miệng và Hàm Mặt</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li>
                        <a href="/doctorDashboard">
                          <i className="fas fa-columns"></i>
                          <span>Bảng Điều Khiển</span>
                        </a>
                      </li>
                      <li>
                        <a href="/Appointments">
                          <i className="fas fa-calendar-check"></i>
                          <span>Lịch Hẹn</span>
                        </a>
                      </li>
                      <li>
                        <a href="/patientProfile">
                          <i className="fas fa-user-injured"></i>
                          <span>Bệnh Nhân Của Tôi</span>
                        </a>
                      </li>
                      <li className="active">
                        <a href="/scheduleTimings">
                          <i className="fas fa-hourglass-start"></i>
                          <span>Lịch</span>
                        </a>
                      </li>
                      <li>
                        <a href="/Invoice">
                          <i className="fas fa-file-invoice"></i>
                          <span>Hóa Đơn</span>
                        </a>
                      </li>
                      <li>
                        <a href="/Reviews">
                          <i className="fas fa-star"></i>
                          <span>Đánh Giá</span>
                        </a>
                      </li>
                      <li>
                        <a href="/Chat">
                          <i className="fas fa-comments"></i>
                          <span>Tin Nhắn</span>
                          <small className="unread-msg">23</small>
                        </a>
                      </li>
                      <li>
                        <a href="/doctorProfileSettings">
                          <i className="fas fa-user-cog"></i>
                          <span>Cài Đặt Hồ Sơ</span>
                        </a>
                      </li>
                      <li>
                        <a href="social-media.html">
                          <i className="fas fa-share-alt"></i>
                          <span>Mạng Xã Hội</span>
                        </a>
                      </li>
                      <li>
                        <a href="doctor-/changePassword">
                          <i className="fas fa-lock"></i>
                          <span>Đổi Mật Khẩu</span>
                        </a>
                      </li>
                      <li>
                        <a href="/Home">
                          <i className="fas fa-sign-out-alt"></i>
                          <span>Đăng Xuất</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/* /Profile Sidebar */}
            </div>
            
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Lịch</h4>
                      <div className="profile-box">
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="form-group">               
                              <label>Thời Gian</label>
                              <select className="select form-control">
                                <option>-</option>
                                <option>15 phút</option>
                                <option selected="selected">30 phút</option>  
                                <option>45 phút</option>
                                <option>1 Giờ</option>
                              </select>
                            </div>
                          </div>
                        </div>     
                        <div className="row">
                          <div className="col-md-12">
                            <div className="card schedule-widget mb-0">
                              {/* Schedule Header */}
                              <div className="schedule-header">
                                {/* Schedule Nav */}
                                <div className="schedule-nav">
                                  <ul className="nav nav-tabs nav-justified">
                                    <li className="nav-item">
                                      <a className="nav-link" data-toggle="tab" href="#slot_sunday">Chủ Nhật</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link active" data-toggle="tab" href="#slot_monday">Thứ Hai</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" data-toggle="tab" href="#slot_tuesday">Thứ Ba</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" data-toggle="tab" href="#slot_wednesday">Thứ Tư</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" data-toggle="tab" href="#slot_thursday">Thứ Năm</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" data-toggle="tab" href="#slot_friday">Thứ Sáu</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" data-toggle="tab" href="#slot_saturday">Thứ Bảy</a>
                                    </li>
                                  </ul>
                                </div>
                                {/* /Schedule Nav */}
                              </div>
                              {/* /Schedule Header */}
                              
                              {/* Schedule Content */}
                              <div className="tab-content schedule-cont">
                                {/* Sunday Slot */}
                                <div id="slot_sunday" className="tab-pane fade">
                                  <h4 className="card-title d-flex justify-content-between">
                                    <span>Khung Giờ</span> 
                                    <a className="edit-link" data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle"></i> Thêm Khung</a>
                                  </h4>
                                  <p className="text-muted mb-0">Không Có</p>
                                </div>
                                {/* /Sunday Slot */}

                                {/* Monday Slot */}
                                <div id="slot_monday" className="tab-pane fade show active">
                                  <h4 className="card-title d-flex justify-content-between">
                                    <span>Khung Giờ</span> 
                                    <a className="edit-link" data-toggle="modal" href="#edit_time_slot"><i className="fa fa-edit mr-1"></i>Sửa</a>
                                  </h4>
                                  
                                  {/* Slot List */}
                                  <div className="doc-times">
                                    <div className="doc-slot-list">
                                      8:00 pm - 11:30 pm
                                      <a href="javascript:void(0)" className="delete_schedule">
                                        <i className="fa fa-times"></i>
                                      </a>
                                    </div>
                                    <div className="doc-slot-list">
                                      11:30 pm - 1:30 pm
                                      <a href="javascript:void(0)" className="delete_schedule">
                                        <i className="fa fa-times"></i>
                                      </a>
                                    </div>
                                    <div className="doc-slot-list">
                                      3:00 pm - 5:00 pm
                                      <a href="javascript:void(0)" className="delete_schedule">
                                        <i className="fa fa-times"></i>
                                      </a>
                                    </div>
                                    <div className="doc-slot-list">
                                      6:00 pm - 11:00 pm
                                      <a href="javascript:void(0)" className="delete_schedule">
                                        <i className="fa fa-times"></i>
                                      </a>
                                    </div>
                                  </div>
                                  {/* /Slot List */}
                                </div>
                                {/* /Monday Slot */}

                                {/* Tuesday Slot */}
                                <div id="slot_tuesday" className="tab-pane fade">
                                  <h4 className="card-title d-flex justify-content-between">
                                    <span>Khung Giờ</span> 
                                    <a className="edit-link" data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle"></i> Thêm Khung</a>
                                  </h4>
                                  <p className="text-muted mb-0">Không Có</p>
                                </div>
                                {/* /Tuesday Slot */}

                                {/* Wednesday Slot */}
                                <div id="slot_wednesday" className="tab-pane fade">
                                  <h4 className="card-title d-flex justify-content-between">
                                    <span>Khung Giờ</span> 
                                    <a className="edit-link" data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle"></i> Thêm Khung</a>
                                  </h4>
                                  <p className="text-muted mb-0">Không Có</p>
                                </div>
                                {/* /Wednesday Slot */}

                                {/* Thursday Slot */}
                                <div id="slot_thursday" className="tab-pane fade">
                                  <h4 className="card-title d-flex justify-content-between">
                                    <span>Khung Giờ</span> 
                                    <a className="edit-link" data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle"></i> Thêm Khung</a>
                                  </h4>
                                  <p className="text-muted mb-0">Không Có</p>
                                </div>
                                {/* /Thursday Slot */}

                                {/* Friday Slot */}
                                <div id="slot_friday" className="tab-pane fade">
                                  <h4 className="card-title d-flex justify-content-between">
                                    <span>Khung Giờ</span> 
                                    <a className="edit-link" data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle"></i> Thêm Khung</a>
                                  </h4>
                                  <p className="text-muted mb-0">Không Có</p>
                                </div>
                                {/* /Friday Slot */}

                                {/* Saturday Slot */}
                                <div id="slot_saturday" className="tab-pane fade">
                                  <h4 className="card-title d-flex justify-content-between">
                                    <span>Khung Giờ</span> 
                                    <a className="edit-link" data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle"></i> Thêm Khung</a>
                                  </h4>
                                  <p className="text-muted mb-0">Không Có</p>
                                </div>
                                {/* /Saturday Slot */}
                              </div>
                              {/* /Schedule Content */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default ScheduleTimings;