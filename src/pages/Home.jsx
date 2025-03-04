import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DoctorCard } from "../components/Card/DoctorCard";
import { useGetListDoctor } from "../hook/useGetListDoctor";

function Home() {
  const { data, isFetching } = useGetListDoctor();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div>
      {/* Home Banner */}
      <section className="section section-search">
        <div className="container-fluid">
          <div className="banner-wrapper">
            <div className="banner-header text-center">
              <h1>Tìm Bác Sĩ, Đặt Lịch Hẹn</h1>
              <p>
                Tìm kiếm những bác sĩ, phòng khám & bệnh viện tốt nhất gần bạn.
              </p>
            </div>
            {/* Search */}
            <div className="search-box">
              <form action="templateshub.net">
                <div className="form-group search-location">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm Kiếm Địa Điểm"
                  />
                  <span className="form-text">Dựa trên vị trí của bạn</span>
                </div>
                <div className="form-group search-info">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm Bác Sĩ, Phòng Khám, Bệnh Viện, Bệnh Tật, v.v."
                  />
                  <span className="form-text">
                    Ví dụ: Nha Khoa hoặc Kiểm Tra Đường Huyết
                  </span>
                </div>
                <button type="submit" className="btn btn-primary search-btn">
                  <i className="fas fa-search"></i> <span>Tìm Kiếm</span>
                </button>
              </form>
            </div>
            {/* /Search */}
          </div>
        </div>
      </section>
      {/* /Home Banner */}

      {/* Popular Section */}
      <section className="section section-doctor">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-header ">
                <h2>Đặt Lịch Bác Sĩ Của Chúng Tôi</h2>
                <p>Lorem Ipsum là văn bản giả mạo đơn giản</p>
              </div>
              <div className="about-content">
                <p>
                  Đó là một thực tế đã được thiết lập lâu dài rằng một độc giả
                  sẽ bị phân tâm bởi nội dung có thể đọc được của một trang khi
                  nhìn vào bố cục của nó. Điểm của việc sử dụng Lorem Ipsum.
                </p>
                <p>
                  Các biên tập viên trang web hiện nay sử dụng Lorem Ipsum làm
                  văn bản mẫu mặc định của họ, và một tìm kiếm cho 'lorem ipsum'
                  sẽ phát hiện ra nhiều trang web vẫn còn trong giai đoạn đầu.
                  Nhiều phiên bản đã phát triển qua nhiều năm, đôi khi
                </p>
                <a href="javascript:;">Đọc Thêm..</a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="doctor-slider slider">
                <Slider {...settings}>
                  {!isFetching &&
                    data &&
                    data.map((e, index) => (
                      <DoctorCard doctor={e} index={index} />
                    ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Popular Section */}

      {/* Latest News Section */}
      <section className="section section-news">
        <div className="container-fluid">
          <div className="section-header text-center">
            <h2>Tin Tức Mới Nhất</h2>
            <p className="sub-title">
              Cập nhật với tin tức và bài viết mới nhất của chúng tôi
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div
                className="news-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "15px",
                  padding: "20px",
                  backgroundColor: "#fff",
                  marginBottom: "20px",
                }}
              >
                <div
                  className="news-img"
                  style={{ flex: "1", textAlign: "center" }}
                >
                  <img
                    src="assets/img/doctors/doctor-02.jpg"
                    className="img-fluid"
                    alt="Tin Tức"
                    style={{
                      borderRadius: "15px",
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  className="news-content"
                  style={{ flex: "2", paddingLeft: "20px" }}
                >
                  <h5>Mở Phòng Khám Mới</h5>
                  <p>
                    Chúng tôi rất vui mừng thông báo về việc mở phòng khám mới
                    của chúng tôi tại trung tâm thành phố.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Đọc Thêm
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="news-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "15px",
                  padding: "20px",
                  backgroundColor: "#fff",
                  marginBottom: "20px",
                }}
              >
                <div
                  className="news-img"
                  style={{ flex: "1", textAlign: "center" }}
                >
                  <img
                    src="assets/img/doctors/doctor-02.jpg"
                    className="img-fluid"
                    alt="Tin Tức"
                    style={{
                      borderRadius: "15px",
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  className="news-content"
                  style={{ flex: "2", paddingLeft: "20px" }}
                >
                  <h5>Mẹo Sức Khỏe Mùa Đông</h5>
                  <p>
                    Tìm hiểu cách giữ gìn sức khỏe trong những tháng mùa đông
                    lạnh giá với các mẹo từ chuyên gia của chúng tôi.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Đọc Thêm
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="news-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "15px",
                  padding: "20px",
                  backgroundColor: "#fff",
                  marginBottom: "20px",
                }}
              >
                <div
                  className="news-img"
                  style={{ flex: "1", textAlign: "center" }}
                >
                  <img
                    src="assets/img/doctors/doctor-02.jpg"
                    className="img-fluid"
                    alt="Tin Tức"
                    style={{
                      borderRadius: "15px",
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  className="news-content"
                  style={{ flex: "2", paddingLeft: "20px" }}
                >
                  <h5>Cập Nhật Về Vắc Xin COVID-19</h5>
                  <p>
                    Giữ thông tin về các cập nhật mới nhất về vắc xin COVID-19
                    và tình trạng sẵn có.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Đọc Thêm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Latest News Section */}

      {/* Contact Us Section */}
      <section className="section section-contact">
        <div className="container">
          <div className="section-header text-center">
            <h2>Liên Hệ</h2>
            <p className="sub-title">
              Chúng Tôi Rất Vui Khi Nghe Từ Bạn! Vui Lòng Điền Form Bên Dưới Để
              Liên Hệ.
            </p>
          </div>
          <div
            className="profile-widget"
            style={{
              display: "flex",
              alignItems: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "15px",
              padding: "20px",
              backgroundColor: "#fff",
            }}
          >
            <div className="doc-img" style={{ flex: "1", textAlign: "center" }}>
              <img
                src="assets/img/doctors/doctor-02.jpg"
                className="img-fluid"
                alt="Contact"
                style={{
                  borderRadius: "15px",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div
              className="pro-content"
              style={{ flex: "2", paddingLeft: "20px" }}
            >
              <form className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên Của Bạn"
                    style={{
                      marginBottom: "15px",
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Của Bạn"
                    style={{
                      marginBottom: "15px",
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Tin Nhắn Của Bạn"
                    style={{
                      marginBottom: "15px",
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      width: "100%",
                    }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    padding: "10px 20px",
                    borderRadius: "5px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  Gửi Tin Nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* /Contact Us Section */}
    </div>
  );
}

export default Home;
