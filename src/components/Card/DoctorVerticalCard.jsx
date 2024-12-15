import { StarRating } from "../Rating/StartRating";

export const DoctorVerticalCard = ({ doctor, handleChangeRating }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="doctor-widget">
          <div className="doc-info-left">
            <div className="doctor-img">
              <a href={`/doctorProfile?maDoctor=${doctor.doctorId}`}>
                <img
                  src="assets/img/doctors/doctor-thumb-01.jpg"
                  className="img-fluid"
                  alt="Hình Ảnh Người Dùng"
                />
              </a>
            </div>
            <div className="doc-info-cont">
              <h4 className="doc-name">
                <a href={`/doctorProfile?maDoctor=${doctor.doctorId}`}>
                  {doctor.doctorName}
                </a>
              </h4>
              <p className="doc-speciality">
                <p className="speciality">{doctor.bio}</p>
              </p>
              <h5 className="doc-department">
                <img
                  src="assets/img/specialities/specialities-05.png"
                  className="img-fluid"
                  alt="Chuyên Khoa"
                />
                {doctor.department}
              </h5>
              <StarRating
                rating={doctor?.rating}
                onRatingChange={handleChangeRating}
              />
              <div className="clinic-details">
                <p className="doc-location">
                  <i className="fas fa-map-marker-alt"></i> {doctor.address}
                </p>
                <ul className="clinic-gallery">
                  <li>
                    <a
                      href="assets/img/features/feature-01.jpg"
                      data-fancybox="gallery"
                    >
                      <img
                        src="assets/img/features/feature-01.jpg"
                        alt="Feature"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="assets/img/features/feature-02.jpg"
                      data-fancybox="gallery"
                    >
                      <img
                        src="assets/img/features/feature-02.jpg"
                        alt="Feature"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="assets/img/features/feature-03.jpg"
                      data-fancybox="gallery"
                    >
                      <img
                        src="assets/img/features/feature-03.jpg"
                        alt="Feature"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="assets/img/features/feature-04.jpg"
                      data-fancybox="gallery"
                    >
                      <img
                        src="assets/img/features/feature-04.jpg"
                        alt="Feature"
                      />
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
                <li>
                  <i className="far fa-thumbs-up"></i> {doctor.phoneNumber}
                </li>
                <li>
                  <i className="far fa-comment"></i> 17 Feedback
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i> {doctor.address}
                </li>
                <li>
                  <i className="far fa-money-bill-alt"></i> $300 - $1000
                </li>
              </ul>
            </div>
            <div className="clinic-booking">
              <a
                className="view-pro-btn"
                href={`/doctorProfile?maDoctor=${doctor.doctorId}`}
              >
                Xem Hồ Sơ
              </a>
              <a
                className="apt-btn"
                href={`/Booking?maDoctor=${doctor.doctorId}`}
              >
                Đặt Lịch Hẹn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
