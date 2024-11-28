import React from 'react';

function Search() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-8 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/Home">Trang Chủ</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Tìm Kiếm</li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Tìm thấy 2245 kết quả cho: Bác Sĩ Nha Khoa Tại Bangalore</h2>
            </div>
            <div className="col-md-4 col-12 d-md-block d-none">
              <div className="sort-by">
                <span className="sort-title">Sắp xếp theo</span>
                <span className="sortby-fliter">
                  <select className="select">
                    <option>Chọn</option>
                    <option className="sorting">Đánh Giá</option>
                    <option className="sorting">Phổ Biến</option>
                    <option className="sorting">Mới Nhất</option>
                    <option className="sorting">Miễn Phí</option>
                  </select>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      
      {/* Nội Dung Trang */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Bộ Lọc Tìm Kiếm */}
              <div className="card search-filter">
                <div className="card-header">
                  <h4 className="card-title mb-0">Bộ Lọc Tìm Kiếm</h4>
                </div>
                <div className="card-body">
                  <div className="filter-widget">
                    <div className="cal-icon">
                      <input type="text" className="form-control datetimepicker" placeholder="Chọn Ngày" />
                    </div>      
                  </div>
                  <div className="filter-widget">
                    <h4>Giới Tính</h4>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="gender_type" defaultChecked />
                        <span className="checkmark"></span> Bác Sĩ Nam
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="gender_type" />
                        <span className="checkmark"></span> Bác Sĩ Nữ
                      </label>
                    </div>
                  </div>
                  <div className="filter-widget">
                    <h4>Chọn Chuyên Khoa</h4>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="select_specialist" defaultChecked />
                        <span className="checkmark"></span> Tiết Niệu
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="select_specialist" defaultChecked />
                        <span className="checkmark"></span> Thần Kinh
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span className="checkmark"></span> Nha Sĩ
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span className="checkmark"></span> Chỉnh Hình
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span className="checkmark"></span> Tim Mạch
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span className="checkmark"></span> Tim Mạch
                      </label>
                    </div>
                  </div>
                  <div className="btn-search">
                    <button type="button" className="btn btn-block">Tìm Kiếm</button>
                  </div>  
                </div>
              </div>
              {/* /Bộ Lọc Tìm Kiếm */}
            </div>
            
            <div className="col-md-12 col-lg-8 col-xl-9">
              {/* Widget Bác Sĩ */}
              <div className="card">
                <div className="card-body">
                  <div className="doctor-widget">
                    <div className="doc-info-left">
                      <div className="doctor-img">
                        <a href="/doctorProfile">
                          <img src="assets/img/doctors/doctor-thumb-01.jpg" className="img-fluid" alt="Hình Ảnh Người Dùng" />
                        </a>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name"><a href="/doctorProfile">Dr. Ruby Perrin</a></h4>
                        <p className="doc-speciality">MDS - Phẫu Thuật Nha Khoa và Cấy Ghép Răng, BDS</p>
                        <h5 className="doc-department"><img src="assets/img/specialities/specialities-05.png" className="img-fluid" alt="Chuyên Khoa" />Nha Sĩ</h5>
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating">(17)</span>
                        </div>
                        <div className="clinic-details">
                          <p className="doc-location"><i className="fas fa-map-marker-alt"></i> Florida, Hoa Kỳ</p>
                          <ul className="clinic-gallery">
                            <li>
                              <a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
                                <img src="assets/img/features/feature-01.jpg" alt="Feature" />
                              </a>
                            </li>
                            <li>
                              <a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
                                <img src="assets/img/features/feature-02.jpg" alt="Feature" />
                              </a>
                            </li>
                            <li>
                              <a href="assets/img/features/feature-03.jpg" data-fancybox="gallery">
                                <img src="assets/img/features/feature-03.jpg" alt="Feature" />
                              </a>
                            </li>
                            <li>
                              <a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
                                <img src="assets/img/features/feature-04.jpg" alt="Feature" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="clinic-services">
                          <span>Dental Fillings</span>
                          <span> Whitneing</span>
                        </div>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li><i className="far fa-thumbs-up"></i> 98%</li>
                          <li><i className="far fa-comment"></i> 17 Feedback</li>
                          <li><i className="fas fa-map-marker-alt"></i> Florida, Hoa Kỳ</li>
                          <li><i className="far fa-money-bill-alt"></i> $300 - $1000 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i> </li>
                        </ul>
                      </div>
                      <div className="clinic-booking">
                        <a className="view-pro-btn" href="/doctorProfile">Xem Hồ Sơ</a>
                        <a className="apt-btn" href="/Booking">Đặt Lịch Hẹn</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Widget Bác Sĩ */}

              {/* Additional Doctor Widgets can be added here following the same structure */}

              <div className="load-more text-center">
                <a className="btn btn-primary btn-sm" href="javascript:void(0);">Tải Thêm</a>  
              </div>  
            </div>
          </div>
        </div>
      </div>    
      {/* /Nội Dung Trang */}
    </div>
  );
}

export default Search;