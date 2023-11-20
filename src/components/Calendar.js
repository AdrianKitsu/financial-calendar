import React, { useState } from "react";
import TradeForm from "./TradeForm";
import SelectedCalendarDayPopup from "./SelectedCalendarDayPopup";
import classes from "./css/Calendar.module.css";

const Calendar = ({ currentMonth, tradeData, onUpdateTradeData }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const saveTradeData = (date, data) => {
    const updatedTradeData = { ...tradeData, [date]: data };
    setSelectedDate(null); // Close the form after saving
    onUpdateTradeData(updatedTradeData);
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Render dates for the calendar
  const renderDates = () => {
    const dates = [];
    const daysInMonth = getDaysInMonth(
      currentMonth.getFullYear(),
      currentMonth.getMonth()
    );

    for (let i = 1; i <= daysInMonth; i++) {
      const dateKey = `${currentMonth.getFullYear()}-${String(
        currentMonth.getMonth() + 1
      ).padStart(2, "0")}-${String(i).padStart(2, "0")}`;

      dates.push(
        <SelectedCalendarDayPopup
          className={classes.individualDays}
          key={i}
          day={i}
          dateKey={dateKey}
          tradeData={tradeData}
          onDayClick={handleDateClick}
        />
      );
    }
    return dates;
  };

  return (
    <div className={classes.daysContainer}>
      <div className={classes.daysWrapper}>{renderDates()}</div>
      {selectedDate && (
        <TradeForm
          date={selectedDate}
          onSave={(data) => saveTradeData(selectedDate, data)}
          onClose={() => setSelectedDate(null)}
        />
      )}
    </div>
  );
};

export default Calendar;
