import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDay } from "../redux/actions";

const DatePicker = () => {
  const dispatch = useDispatch();
  const selectedDay = useSelector((state) => state.selectedDay);

  return (
    <div className="date-picker">
      <input
        type="date"
        value={selectedDay}
        onChange={(e) => dispatch(setSelectedDay(e.target.value))}
      />
    </div>
  );
};

export default DatePicker;
