export const DoctorChat = ({ doctor, onSelect, isDoctor = true }) => {
  return (
    <a href="javascript:void(0);" className="media" onClick={onSelect}>
      <div className="media-img-wrap">
        <div className="avatar avatar-away">
          <img
            src="assets/img/doctors/doctor-thumb-01.jpg"
            alt="User Image"
            className="avatar-img rounded-circle"
          />
        </div>
      </div>
      <div className="media-body">
        <div>
          <div className="user-name">
            {isDoctor && "Bác sĩ"} {doctor.doctorName}
          </div>
          <div className="user-last-chat">{doctor.bio}</div>
        </div>
        <div>
          <div className="last-chat-time block">2 min</div>
          <div className="badge badge-success badge-pill">15</div>
        </div>
      </div>
    </a>
  );
};
