import React from 'react';

function DoctorProfile() {
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
                  <li className="breadcrumb-item active" aria-current="page">Hồ Sơ Bác Sĩ</li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Hồ Sơ Bác Sĩ</h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}

      {/* Nội Dung Trang */}
      <div className="content">
        <div className="container">
          {/* Widget Bác Sĩ */}
          <div className="card">
            <div className="card-body">
              <div className="doctor-widget">
                <div className="doc-info-left">
                  <div className="doctor-img">
                    <img src="assets/img/doctors/doctor-thumb-02.jpg" className="img-fluid" alt="Hình Ảnh Người Dùng" />
                  </div>
                  <div className="doc-info-cont">
                    <h4 className="doc-name">Dr. Darren Elder</h4>
                    <p className="doc-speciality">BDS, MDS - Phẫu Thuật Miệng và Hàm Mặt</p>
                    <p className="doc-department">
                      <img src="assets/img/specialities/specialities-05.png" className="img-fluid" alt="Chuyên Khoa" />
                      Nha Sĩ
                    </p>
                    <div className="rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star"></i>
                      <span className="d-inline-block average-rating">(35)</span>
                    </div>
                    <div className="clinic-details">
                      <p className="doc-location">
                        <i className="fas fa-map-marker-alt"></i> Newyork, Hoa Kỳ - <a href="javascript:void(0);">Lấy Đường Đi</a>
                      </p>
                      <ul className="clinic-gallery">
                        <li>
                          <a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
                            <img src="assets/img/features/feature-01.jpg" alt="Tính Năng" />
                          </a>
                        </li>
                        <li>
                          <a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
                            <img src="assets/img/features/feature-02.jpg" alt="Hình Ảnh Tính Năng" />
                          </a>
                        </li>
                        <li>
                          <a href="assets/img/features/feature-03.jpg" data-fancybox="gallery">
                            <img src="assets/img/features/feature-03.jpg" alt="Tính Năng" />
                          </a>
                        </li>
                        <li>
                          <a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
                            <img src="assets/img/features/feature-04.jpg" alt="Tính Năng" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="clinic-services">
                      <span>Trám Răng</span>
                      <span> Tẩy Trắng Răng</span>
                    </div>
                  </div>
                </div>
                <div className="doc-info-right">
                  <div className="clini-infos">
                    <ul>
                      <li><i className="far fa-thumbs-up"></i> 99%</li>
                      <li><i className="far fa-comment"></i> 35 Phản Hồi</li>
                      <li><i className="fas fa-map-marker-alt"></i> Newyork, Hoa Kỳ</li>
                      <li><i className="far fa-money-bill-alt"></i> $100 mỗi giờ</li>
                    </ul>
                  </div>
                  <div className="doctor-action">
                    <a href="javascript:void(0)" className="btn btn-white fav-btn">
                      <i className="far fa-bookmark"></i>
                    </a>
                    <a href="/Chat" className="btn btn-white msg-btn">
                      <i className="far fa-comment-alt"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-white call-btn" data-toggle="modal" data-target="#voice_call">
                      <i className="fas fa-phone"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-white call-btn" data-toggle="modal" data-target="#video_call">
                      <i className="fas fa-video"></i>
                    </a>
                  </div>
                  <div className="clinic-booking">
                    <a className="apt-btn" href="/Booking">Đặt Lịch Hẹn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Widget Bác Sĩ */}

          {/* Tab Chi Tiết Bác Sĩ */}
          <div className="card">
            <div className="card-body pt-0">
              {/* Menu Tab */}
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <a className="nav-link active" href="#doc_overview" data-toggle="tab">Tổng Quan</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#doc_Reviews" data-toggle="tab">Đánh Giá</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#doc_business_hours" data-toggle="tab">Giờ Làm Việc</a>
                  </li>
                </ul>
              </nav>
              {/* /Menu Tab */}

              {/* Nội Dung Tab */}
              <div className="tab-content pt-0">
                {/* Nội Dung Tổng Quan */}
                <div role="tabpanel" id="doc_overview" className="tab-pane fade show active">
                  <div className="row">
                    <div className="col-md-12 col-lg-9">
                      {/* Chi Tiết Về Bác Sĩ */}
                      <div className="widget about-widget">
                        <h4 className="widget-title">Về Tôi</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                      {/* /Chi Tiết Về Bác Sĩ */}
                    </div>
                  </div>
                </div>
                {/* /Nội Dung Tổng Quan */}

                {/* Nội Dung Địa Điểm */}
                <div role="tabpanel" id="doc_locations" className="tab-pane fade">
                  <div className="row">
                    <div className="col-md-12">
                      {/* Danh Sách Địa Điểm */}
                      <div className="location-list">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="clinic-timing">
                              <div>
                                <p className="timings-days">
                                  <span>Thứ Ba - Thứ Sáu</span>
                                </p>
                                <p className="timings-times">
                                  <span>11:00 AM - 1:00 PM</span>
                                  <span>6:00 PM - 11:00 PM</span>
                                </p>
                              </div>
                              <div>
                                <p className="timings-days">
                                  <span>Thứ Bảy - Chủ Nhật</span>
                                </p>
                                <p className="timings-times">
                                  <span>8:00 AM - 10:00 AM</span>
                                  <span>3:00 PM - 7:00 PM</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* /Giờ Làm Việc */}
                          <div className="col-md-2">
                            <div className="consult-price">
                              $350
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Danh Sách Địa Điểm */}
                    </div>
                  </div>
                </div>
                {/* /Nội Dung Địa Điểm */}

                {/* Nội Dung Đánh Giá */}
                <div role="tabpanel" id="doc_Reviews" className="tab-pane fade">
                  {/* Danh Sách Đánh Giá */}
                  {/* Viết Đánh Giá */}
                  <div className="review-box">
                    <h4 className="widget-title">Đánh Giá</h4>
                    <form>
                      <div className="form-group">
                        <textarea className="form-control" placeholder="Viết Đánh Giá"></textarea>
                      </div>
                      <div className="terms-accept">
                        <div className="custom-checkbox">
                          <input type="checkbox" id="terms_accept" />
                          <label htmlFor="terms_accept">Tôi đã đọc và chấp nhận <a href="#">Điều Khoản &amp; Điều Kiện</a></label>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button type="submit" className="btn btn-primary submit-btn">Thêm Đánh Giá</button>
                      </div>
                    </form>
                  </div>
                  {/* /Viết Đánh Giá */}
                </div>
                {/* /Nội Dung Đánh Giá */}

                {/* Nội Dung Giờ Làm Việc */}
                <div role="tabpanel" id="doc_business_hours" className="tab-pane fade">
                  <div className="row">
                    <div className="col-md-6 offset-md-3">
                      {/* Widget Giờ Làm Việc */}
                      <div className="widget business-widget">
                        <div className="widget-content">
                          <div className="listing-hours">
                            <div className="listing-day current">
                              <div className="day">Hôm Nay <span>5 Nov 2019</span></div>
                              <div className="time-items">
                                <span className="open-status"><span className="badge bg-success-light">Mở Cửa</span></span>
                                <span className="time">07:00 AM - 09:00 PM</span>
                              </div>
                            </div>
                            <div className="listing-day">
                              <div className="day">Thứ Hai</div>
                              <div className="time-items">
                                <span className="time">07:00 AM - 09:00 PM</span>
                              </div>
                            </div>
                            <div className="listing-day">
                              <div className="day">Thứ Ba</div>
                              <div className="time-items">
                                <span className="time">07:00 AM - 09:00 PM</span>
                              </div>
                            </div>
                            <div className="listing-day">
                              <div className="day">Thứ Tư</div>
                              <div className="time-items">
                                <span className="time">07:00 AM - 09:00 PM</span>
                              </div>
                            </div>
                            <div className="listing-day">
                              <div className="day">Thứ Năm</div>
                              <div className="time-items">
                                <span className="time">07:00 AM - 09:00 PM</span>
                              </div>
                            </div>
                            <div className="listing-day">
                              <div className="day">Thứ Sáu</div>
                              <div className="time-items">
                                <span className="time">07:00 AM - 09:00 PM</span>
                              </div>
                            </div>
                            <div className="listing-day closed">
                              <div className="day">Chủ Nhật</div>
                              <div className="time-items">
                                <span className="time"><span className="badge bg-danger-light">Đóng Cửa</span></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Widget Giờ Làm Việc */}
                    </div>
                  </div>
                </div>
                {/* /Nội Dung Giờ Làm Việc */}
              </div>
            </div>
          </div>
          {/* /Nội Dung Chi Tiết Bác Sĩ */}
        </div>
      </div>
      {/* /Nội Dung Trang */}

      {/* Modal Gọi Điện */}
      <div className="modal fade call-modal" id="voice_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/* Cuộc Gọi Đến */}
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <img alt="Hình Ảnh Người Dùng" src="assets/img/doctors/doctor-thumb-02.jpg" className="call-avatar" />
                      <h4>Dr. Darren Elder</h4>
                      <span>Đang Kết Nối...</span>
                    </div>
                    <div className="call-items">
                      <a href="javascript:void(0);" className="btn call-item call-end" data-dismiss="modal" aria-label="Close">
                        <i className="material-icons">call_end</i>
                      </a>
                      <a href="/voiceCall" className="btn call-item call-start">
                        <i className="material-icons">call</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Cuộc Gọi Đến */}
            </div>
          </div>
        </div>
      </div>
      {/* Modal Gọi Điện */}

      {/* Modal Gọi Video */}
      <div className="modal fade call-modal" id="video_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/* Cuộc Gọi Đến */}
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <img className="call-avatar" src="assets/img/doctors/doctor-thumb-02.jpg" alt="Hình Ảnh Người Dùng" />
                      <h4>Dr. Darren Elder</h4>
                      <span>Đang Gọi ...</span>
                    </div>
                    <div className="call-items">
                      <a href="javascript:void(0);" className="btn call-item call-end" data-dismiss="modal" aria-label="Close">
                        <i className="material-icons">call_end</i>
                      </a>
                      <a href="video-call.html" className="btn call-item call-start">
                        <i className="material-icons">videocam</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Cuộc Gọi Đến */}
            </div>
          </div>
        </div>
      </div>
      {/* Modal Gọi Video */}
    </div>
  );
}

export default DoctorProfile;