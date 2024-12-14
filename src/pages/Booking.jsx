import React, { useEffect, useMemo, useState } from "react";
import { getWeekDays, groupAndSortTimeSlots } from "../lib/date";
import { useGetDoctorTimeslots } from "../hook/useGetDoctorTimeSlots";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useGetDoctor } from "../hook/useGetDoctor";
import { StarRating } from "../components/Rating/StartRating";
import { apiFetch } from "../lib/apiFetch";
import { useSnackbar } from "notistack";

const weekDaysOrder = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

const getDateForTimeslot = (timeslot, weekDays) => {
  const [time, day] = timeslot.split("-");

  const matchedDay = weekDays.find(
    (d) => d.dayKey.toUpperCase() === day.toUpperCase()
  );

  if (matchedDay) {
    return {
      bookingDate: matchedDay.bookingDate,
      time: time,
    };
  }
  return null;
};

function Booking() {
  const [searchParams] = useSearchParams(); // Lấy searchParams
  const navigate = useNavigate();
  const maDoctor = searchParams.get("maDoctor");

  const { data } = useGetDoctorTimeslots({ id: maDoctor });
  const { data: doctor } = useGetDoctor({ id: maDoctor });

  const [currentWeek, setCurrentWeek] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleClick = (id) => {
    setSelectedSlot(id);
  };

  const formatWeek = useMemo(() => {
    return getWeekDays(currentWeek);
  }, [currentWeek]);

  const formatTimeslots = useMemo(() => {
    if (data) {
      const groupedSlots = groupAndSortTimeSlots(data);

      // Bảo đảm các ngày trong tuần luôn tồn tại, ngay cả khi không có slot
      const allDays = weekDaysOrder.reduce((acc, day) => {
        acc[day] = groupedSlots[day] || []; // Nếu không có slot, gán mảng rỗng
        return acc;
      }, {});

      return allDays;
    }
    return {};
  }, [data]);

  const handleBooking = async () => {
    try {
      setIsLoading(true);
      if (selectedSlot === "") {
        throw new Error("Phải chọn một ngày");
      }
      const selectedData = getDateForTimeslot(selectedSlot, formatWeek);
      const { data, status } = await apiFetch("/user/booking", {
        method: "POST",
        body: JSON.stringify({
          doctorId: +maDoctor,
          bookingDate: selectedData.bookingDate,
          timeStart: selectedData.time.slice(0, 5),
        }),
      });
      if (!status) {
        throw new Error(data);
      }
      navigate(
        `/bookingSuccess?tenDoctor=${doctor.doctorName}&time=${
          selectedData.bookingDate
        }-${selectedData.time.slice(0, 5)}`
      );
      enqueueSnackbar("Tạo thành công", { variant: "success" });
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (formatTimeslots) {
      console.log(formatWeek);
      console.log(formatTimeslots);
    }
    // console.log(formatWeek);
  }, [formatTimeslots, formatWeek]);

  return (
    <div className="main-wrapper">
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/Home">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Booking
                  </li>
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
                    <a
                      href={"/doctorProfile?maDoctor=" + maDoctor}
                      className="booking-doc-img"
                    >
                      <img
                        src="assets/img/doctors/doctor-thumb-02.jpg"
                        alt="User Image"
                      />
                      {/* doctor */}
                    </a>
                    <div className="booking-info">
                      <h4>
                        <a href={"/doctorProfile?maDoctor=" + maDoctor}>
                          {doctor?.doctorName}
                        </a>
                      </h4>
                      {doctor && <StarRating rating={doctor.rating} />}
                      <p className="text-muted mb-0">
                        <i className="fas fa-map-marker-alt"></i> Newyork, USA
                      </p>
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
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                setCurrentWeek(currentWeek - 1);
                              }}
                            >
                              <i className="fa fa-chevron-left"></i>
                            </a>
                          </li>
                          {formatWeek.map((e, index) => (
                            <li key={index}>
                              <span>{e.day}</span>
                              <span className="slot-date">{e.date}</span>
                            </li>
                          ))}
                          <li className="right-arrow">
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                setCurrentWeek(currentWeek + 1);
                              }}
                            >
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
                          {data &&
                            Object.entries(formatTimeslots).map(
                              ([key, value]) => (
                                <li key={key}>
                                  {value.length > 0 ? (
                                    value.map((e) => {
                                      const slotId = `${e.timeStart}-${key}`; // ID duy nhất
                                      const isSelected =
                                        selectedSlot === slotId; // Kiểm tra xem slot có được chọn hay không
                                      return (
                                        <a
                                          key={slotId}
                                          className={`timing ${
                                            isSelected ? "selected" : ""
                                          }`}
                                          href="#"
                                          onClick={(event) => {
                                            event.preventDefault();
                                            handleClick(slotId);
                                          }}
                                        >
                                          <span>{e.timeStart.slice(0, 5)}</span>{" "}
                                          - <span>{e.timeEnd.slice(0, 5)}</span>
                                        </a>
                                      );
                                    })
                                  ) : (
                                    <p className="no-slot">Không có lịch hẹn</p> // Placeholder cho ngày trống
                                  )}
                                </li>
                              )
                            )}
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
                <a
                  href="#"
                  className="btn btn-primary submit-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    handleBooking();
                  }}
                >
                  Đặt lịch
                </a>
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
