import React from 'react';

function Reviews() {
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
                  <li className="breadcrumb-item active" aria-current="page">Đánh Giá</li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Đánh Giá</h2>
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
                      <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="Hình Ảnh Người Dùng" />
                    </a>
                    <div className="profile-det-info">
                      <h3>Dr. Darren Elder</h3>
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
                      <li>
                        <a href="/scheduleTimings">
                          <i className="fas fa-hourglass-start"></i>
                          <span>Thời Gian Lịch</span>
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
              <div className="doc-review review-listing">
                {/* Review Listing */}
                <ul className="comments-list">
                  {/* Comment List */}
                  <li>
                    <div className="comment">
                      <img className="avatar rounded-circle" alt="Hình Ảnh Người Dùng" src="assets/img/patients/patient.jpg" />
                      <div className="comment-body">
                        <div className="meta-data">
                          <span className="comment-author">Richard Wilson</span>
                          <span className="comment-date">Đánh Giá 2 Ngày Trước</span>
                          <div className="review-count rating">
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <p className="recommended"><i className="far fa-thumbs-up"></i> Đánh giá tốt</p>
                        <p className="comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation.
                          Curabitur non nulla sit amet nisl tempus
                        </p>
                        <div className="comment-reply">
                          <a className="comment-btn" href="#">
                            <i className="fas fa-reply"></i> Trả Lời
                          </a>
                          <p className="recommend-btn">
                            <span>Khuyên không?</span>
                            <a href="#" className="like-btn">
                              <i className="far fa-thumbs-up"></i> Có
                            </a>
                            <a href="#" className="dislike-btn">
                              <i className="far fa-thumbs-down"></i> Không
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Comment Reply */}
                    <ul className="comments-reply">
                      {/* Comment Reply List */}
                      <li>
                        <div className="comment">
                          <img className="avatar rounded-circle" alt="Hình Ảnh Người Dùng" src="assets/img/doctors/doctor-thumb-02.jpg" />
                          <div className="comment-body">
                            <div className="meta-data">
                              <span className="comment-author">Dr. Darren Elder</span>
                              <span className="comment-date">Đánh Giá 3 Ngày Trước</span>
                            </div>
                            <p className="comment-content">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Ut enim ad minim veniam.
                              Curabitur non nulla sit amet nisl tempus
                            </p>
                            <div className="comment-reply">
                              <a className="comment-btn" href="#">
                                <i className="fas fa-reply"></i> Trả Lời
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* /Comment Reply List */}
                    </ul>
                    {/* /Comment Reply */}
                  </li>
                  {/* /Comment List */}

                  {/* Thêm nhiều danh sách bình luận nếu cần */}
                </ul>
                {/* /Comment List */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
}

export default Reviews;