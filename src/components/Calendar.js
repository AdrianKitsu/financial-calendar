import React, { useState } from "react";
import TradeForm from "./TradeForm";
import SelectedCalendarDayPopup from "./SelectedCalendarDayPopup";

const Calendar = ({ currentMonth }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [tradeData, setTradeData] = useState({}); // Format: { 'YYYY-MM-DD': { trades: [{ stock: '', profit: '' }], log: '' } }

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const saveTradeData = (date, data) => {
    setTradeData({ ...tradeData, [date]: data });
    setSelectedDate(null); // Close the form after saving
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
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{renderDates()}</div>
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
