import React from 'react';

function Booking() {
  return (
      <div className="main-wrapper">
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/Home">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Booking</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Đặt Lịch Hẹn</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        
        {/* Page Content */}
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="booking-doc-info">
                      <a href="/doctorProfile" className="booking-doc-img">
                        <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
                      </a>
                      <div className="booking-info">
                        <h4><a href="/doctorProfile">Dr. Darren Elder</a></h4>
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating">35</span>
                        </div>
                        <p className="text-muted mb-0"><i className="fas fa-map-marker-alt"></i> Newyork, USA</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Schedule Widget */}
                <div className="card booking-schedule schedule-widget">
                  {/* Schedule Header */}
                  <div className="schedule-header">
                    <div className="row">
                      <div className="col-md-12">
                        {/* Day Slot */}
                        <div className="day-slot">
                          <ul>
                            <li className="left-arrow">
                              <a href="#">
                                <i className="fa fa-chevron-left"></i>
                              </a>
                            </li>
                            <li>
                              <span>Thứ 2</span>
                              <span className="slot-date">11 Nov <small className="slot-year">2019</small></span>
                            </li>
                            <li>
                              <span>Thứ 3</span>
                              <span className="slot-date">12 Nov <small className="slot-year">2019</small></span>
                            </li>
                            <li>
                              <span>Thứ 4</span>
                              <span className="slot-date">13 Nov <small className="slot-year">2019</small></span>
                            </li>
                            <li>
                              <span>Thứ 5</span>
                              <span className="slot-date">14 Nov <small className="slot-year">2019</small></span>
                            </li>
                            <li>
                              <span>Thứ 6</span>
                              <span className="slot-date">15 Nov <small className="slot-year">2019</small></span>
                            </li>
                            <li>
                              <span>Thứ 7</span>
                              <span className="slot-date">16 Nov <small className="slot-year">2019</small></span>
                            </li>
                            <li>
                              <span>Chủ Nhật</span>
                              <span className="slot-date">17 Nov <small className="slot-year">2019</small></span>
                            </li>
                            <li className="right-arrow">
                              <a href="#">
                                <i className="fa fa-chevron-right"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* /Day Slot */}
                      </div>
                    </div>
                  </div>
                  {/* /Schedule Header */}
                  
                  {/* Schedule Content */}
                  <div className="schedule-cont">
                    <div className="row">
                      <div className="col-md-12">
                        {/* Time Slot */}
                        <div className="time-slot">
                          <ul className="clearfix">
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing selected" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* /Time Slot */}
                      </div>
                    </div>
                  </div>
                  {/* /Schedule Content */}
                </div>
                {/* /Schedule Widget */}
                
                {/* Submit Section */}
                <div className="submit-section proceed-btn text-right">
                  <a href="/Checkout" className="btn btn-primary submit-btn">Tiến Hành Thanh Toán</a>
                </div>
                {/* /Submit Section */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
  );
}

export default Booking;