import React from 'react';

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="footer">
        
        {/* Footer Top */}
        <div className="footer-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6">
              
                {/* Footer Widget */}
                <div className="footer-widget footer-about">
                  <div className="footer-logo">
                    <img src="assets/img/footer-logo.png" alt="logo" />
                  </div>
                  <div className="footer-about-content">
                    <p>Chúng tôi cung cấp dịch vụ chăm sóc sức khỏe tốt nhất cho bạn.</p>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li>
                          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        </li>
                        <li>
                          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        </li>
                        <li>
                          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Footer Widget */}
                
              </div>
              
              <div className="col-lg-3 col-md-6">
              
                {/* Footer Widget */}
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Bệnh Nhân</h2>
                  <ul>
                    <li><a href="/Search"><i className="fas fa-angle-double-right"></i> Tìm Kiếm Bác Sĩ</a></li>
                    <li><a href="/login"><i className="fas fa-angle-double-right"></i> Đăng Nhập</a></li>
                    <li><a href="/Register"><i className="fas fa-angle-double-right"></i> Đăng Ký</a></li>
                    <li><a href="/Booking"><i className="fas fa-angle-double-right"></i> Đặt Lịch</a></li>
                  </ul>
                </div>
                {/* /Footer Widget */}
                
              </div>
              
              <div className="col-lg-3 col-md-6">
              
                {/* Footer Widget */}
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Bác Sĩ</h2>
                  <ul>
                    <li><a href="/Appointments"><i className="fas fa-angle-double-right"></i> Cuộc Hẹn</a></li>
                    <li><a href="/Chat"><i className="fas fa-angle-double-right"></i> Bot Chat</a></li>
                    <li><a href="/login"><i className="fas fa-angle-double-right"></i> Đăng Nhập</a></li>
                    <li><a href="/register"><i className="fas fa-angle-double-right"></i> Đăng Ký</a></li>
                    <li><a href="/doctorDashboard"><i className="fas fa-angle-double-right"></i> Bác Sĩ Dashboard</a></li>
                  </ul>
                </div>
                {/* /Footer Widget */}
                
              </div>
              
              <div className="col-lg-3 col-md-6">
              
                {/* Footer Widget */}
                <div className="footer-widget footer-contact">
                  <h2 className="footer-title">Liên Hệ Chúng Tôi</h2>
                  <div className="footer-contact-info">
                    <div className="footer-address">
                      <span><i className="fas fa-map-marker-alt"></i></span>
                      <p>1234 Nguyễn Văn Cừ, Quận 5, TP.HCM</p>
                    </div>
                    <p>
                      <i className="fas fa-phone-alt"></i>
                      +84 123 456 78
                    </p>
                    <p className="mb-0">
                      <i className="fas fa-envelope"></i>
                      clinicbooking@example.com
                    </p>
                  </div>
                </div>
                {/* /Footer Widget */}
                
              </div>
              
            </div>
          </div>
        </div>
        {/* /Footer Top */}
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container-fluid">
          
            {/* Copyright */}
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="copyright-text">
                    <p className="mb-0"><a href="#">C1SE.62</a></p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                
                  {/* Copyright Menu */}
                  <div className="copyright-menu">
                    <ul className="policy-menu">
                      <li><a href="term-condition.html">Điều Khoản và Điều Kiện</a></li>
                      <li><a href="privacy-policy.html">Chính Sách Bảo Mật</a></li>
                    </ul>
                  </div>
                  {/* /Copyright Menu */}
                  
                </div>
              </div>
            </div>
            {/* /Copyright */}
            
          </div>
        </div>
        {/* /Footer Bottom */}
        
      </footer>
      {/* /Footer */}
    </div>
  );
}

export default Footer;
