import React, { useEffect, useState } from "react";
import { DoctorSidebar } from "../components/Sidebar/DoctorSidebar";
import {
  splitTime,
  groupAndSortTimeSlots,
  transformTimeSchedule,
} from "../lib/date";
import { apiFetch } from "../lib/apiFetch";
import { useSnackbar } from "notistack";
import { useGetCurrentDoctorTimeslots } from "../hook/useGetCurrentDoctorTimeSlots";
import { useSearchParams } from "react-router-dom";

const listTimeBreak = [10, 30, 45, 60];
const formatDay = {
  monday: "Thứ Hai",
  tuesday: "Thứ Ba",
  wednesday: "Thứ Tư",
  thursday: "Thứ Năm",
  friday: "Thứ Sáu",
  saturday: "Thứ Bảy",
  sunday: "Chủ Nhật",
};

const initValue = {
  timeSchedule: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  },
};

function ScheduleTimings() {
  const [searchParams] = useSearchParams(); // Lấy searchParams
  const maDoctor = searchParams.get("maDoctor");

  const [timeBreak, setTimeBreak] = useState(10);
  const [updateDay, setUpdateDate] = useState("monday");
  const [timeArray, setTimeArray] = useState(initValue.timeSchedule);
  const [isLoading, setIsLoading] = useState(false);

  const { data } = useGetCurrentDoctorTimeslots();

  useEffect(
    (e) => {
      if (data && data.length > 0) {
        setTimeArray(transformTimeSchedule(groupAndSortTimeSlots(data)));
      }
    },
    [data]
  );

  const { enqueueSnackbar } = useSnackbar();

  const handleAddTime = (day) => {
    const times1 = splitTime("7:00", "11:30", timeBreak);
    const times2 = splitTime("13:00", "17:00", timeBreak);

    const newTimes = [...times1, ...times2];

    setTimeArray({ ...timeArray, [day]: newTimes });
  };

  const handleRemoveTime = (day, index) => {
    setTimeArray((prevTimeArray) => {
      const updatedDayArray = [...prevTimeArray[day]];
      updatedDayArray.splice(index, 1);

      return {
        ...prevTimeArray,
        [day]: updatedDayArray,
      };
    });
  };

  const handleCreateTimeslot = async () => {
    try {
      setIsLoading(true);
      const { data, status } = await apiFetch("/doctors/generateTimeSlots", {
        method: "POST",
        body: JSON.stringify({ timeSchedule: timeArray }),
      });
      if (!status) {
        throw new Error(data);
      }
      enqueueSnackbar("Tạo thành công", { variant: "success" });
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/Home">Trang Chủ</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Lịch
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Lịch</h2>
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
              <DoctorSidebar />
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Lịch</h4>
                      <div className="profile-box">
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label>Thời Gian</label>
                              <select
                                className="select form-control"
                                value={timeBreak}
                                onChange={(e) => {
                                  setTimeBreak(+e.target.value);
                                }}
                              >
                                {listTimeBreak.map((data) => (
                                  <option key={data} value={data}>
                                    {data} phút
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="card schedule-widget mb-0">
                              {/* Schedule Header */}
                              <div className="schedule-header">
                                {/* Schedule Nav */}
                                <div className="schedule-nav">
                                  <ul className="nav nav-tabs nav-justified">
                                    {Object.entries(timeArray).map(([data]) => (
                                      <li className="nav-item">
                                        <a
                                          onClick={() => {
                                            setUpdateDate(data);
                                          }}
                                          className="nav-link"
                                          data-toggle="tab"
                                          href={`#slot_${data}`}
                                        >
                                          {formatDay[data]}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                {/* /Schedule Nav */}
                              </div>
                              {/* /Schedule Header */}

                              {/* Schedule Content */}
                              <div className="tab-content schedule-cont">
                                <div className="tab-pane fade show active">
                                  <h4 className="card-title d-flex justify-content-between">
                                    <span>Khung Giờ</span>
                                  </h4>
                                  <div className="doc-times">
                                    {timeArray[updateDay].length === 0 && (
                                      <div
                                        style={{
                                          width: "100%",
                                          display: "flex",
                                          alignItems: "flex-end",
                                          justifyContent: "space-between",
                                        }}
                                      >
                                        <p className="text-muted mb-0">
                                          Không Có
                                        </p>
                                        <a
                                          className="edit-link"
                                          data-toggle="modal"
                                          href="#add_time_slot"
                                          onClick={() => {
                                            handleAddTime(updateDay);
                                          }}
                                        >
                                          <i className="fa fa-plus-circle"></i>{" "}
                                          Thêm Khung
                                        </a>
                                      </div>
                                    )}
                                    {timeArray[updateDay].map((e, index) => {
                                      return (
                                        <div
                                          className="doc-slot-list"
                                          key={index}
                                        >
                                          {e[0]} - {e[1]}
                                          <a
                                            href="javascript:void(0)"
                                            className="delete_schedule"
                                            onClick={() => {
                                              handleRemoveTime(
                                                updateDay,
                                                index
                                              );
                                            }}
                                          >
                                            <i className="fa fa-times"></i>
                                          </a>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                              {/* /Schedule Content */}
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "right",
                                marginTop: 10,
                              }}
                            >
                              <button
                                disabled={isLoading}
                                className="btn btn-primary btn-block btn-sm login-btn"
                                style={{ maxWidth: 150 }}
                                onClick={handleCreateTimeslot}
                              >
                                Tạo lịch
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
}

export default ScheduleTimings;
{
  /* <p className="text-muted mb-0">Không Có</p> */
}
{
  /* <a className="edit-link" data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle"></i> Thêm Khung</a> */
}
