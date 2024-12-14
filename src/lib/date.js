import { formatDate } from "date-fns";
export const formatTime = () => {};

export const splitTime = (startTime, endTime, interval) => {
  function timeToMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  }

  function minutesToTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
  }

  const startMinutes = timeToMinutes(startTime);
  const endMinutes = timeToMinutes(endTime);

  const result = [];
  for (let current = startMinutes; current < endMinutes; current += interval) {
    const start = minutesToTime(current);
    const end = minutesToTime(current + interval);
    if (current + interval <= endMinutes) {
      result.push([start, end]);
    }
  }

  return result;
};

export const getWeekDays = (offset = 0) => {
  const daysOfWeek = [
    { label: "Thứ 2", key: "monday" },
    { label: "Thứ 3", key: "tuesday" },
    { label: "Thứ 4", key: "wednesday" },
    { label: "Thứ 5", key: "thursday" },
    { label: "Thứ 6", key: "friday" },
    { label: "Thứ 7", key: "saturday" },
    { label: "Chủ Nhật", key: "sunday" },
  ];

  const currentDate = new Date();
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(
    currentDate.getDate() - currentDate.getDay() + 1 + offset * 7
  );

  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    const dayDate = new Date(startOfWeek);
    dayDate.setDate(startOfWeek.getDate() + i);

    const dayInfo = {
      day: daysOfWeek[i].label,
      bookingDate: formatDate(dayDate, "yyyy-MM-dd"),
      date: dayDate
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
        .toUpperCase(),
      dayKey: daysOfWeek[i].key,
    };
    weekDays.push(dayInfo);
  }

  return weekDays;
};

export const groupAndSortTimeSlots = (timeSlots) => {
  const daysOfWeek = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];

  const grouped = timeSlots.reduce((acc, slot) => {
    const day = slot.dayOfWeek;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(slot);
    return acc;
  }, {});

  daysOfWeek.forEach((day) => {
    if (!grouped[day]) {
      grouped[day] = [];
    }
  });

  for (const day in grouped) {
    grouped[day].sort((a, b) => a.timeStart.localeCompare(b.timeStart));
  }

  return grouped;
};


export const transformTimeSchedule = (inputData) => {
  const daysOfWeek = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  return daysOfWeek.reduce((acc, day) => {
    const dayData = inputData[day.toUpperCase()] || [];

    acc[day] = dayData.map((slot) => [
      slot.timeStart.slice(0, 5),
      slot.timeEnd.slice(0, 5),
    ]);
    return acc;
  }, {});
};


