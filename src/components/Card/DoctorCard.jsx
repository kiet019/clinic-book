import { StarRating } from "../Rating/StartRating";

export const DoctorCard = ({ doctor, handleChangeRating }) => {
  return (
    <div className="profile-widget">
      <div className="doc-img">
        <a href={`/doctorProfile?maDoctor=${doctor.doctorId}`}>
          <img
            className="img-fluid"
            alt="User Image"
            src="assets/img/doctors/doctor-01.jpg"
          />
        </a>
        <a href="javascript:void(0)" className="fav-btn">
          <i className="far fa-bookmark"></i>
        </a>
      </div>
      <div className="pro-content">
        <h3 className="title">
          <a href={`/doctorProfile?maDoctor=${doctor.doctorId}`}>
            {doctor.doctorName}
          </a>
          <i className="fas fa-check-circle verified"></i>
        </h3>
        <p className="speciality">{doctor.bio}</p>
        <StarRating
          rating={doctor?.rating}
          onRatingChange={handleChangeRating}
        />
        <ul className="available-info">
          <li>
            <i className="fas fa-map-marker-alt"></i> Florida, USA
          </li>
          <li>
            <i className="far fa-clock"></i> Có mặt vào Thứ Sáu, 22 Tháng 3
          </li>
          <li>
            <i className="far fa-money-bill-alt"></i> $300 - $1000
            <i
              className="fas fa-info-circle"
              data-toggle="tooltip"
              title="Lorem Ipsum"
            ></i>
          </li>
        </ul>
        <div className="row row-sm">
          <div className="col-6">
            <a
              href={`/doctorProfile?maDoctor=${doctor.doctorId}`}
              className="btn view-btn"
            >
              Xem Hồ Sơ
            </a>
          </div>
          <div className="col-6">
            <a
              href={`/Booking?maDoctor=${doctor.doctorId}`}
              className="btn book-btn"
            >
              Đặt Lịch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
