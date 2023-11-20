import React from "react";

const SelectedCalendarDayPopup = ({ day, dateKey, tradeData, onDayClick }) => {
  const dateData = tradeData[dateKey];
  const totalPL = dateData
    ? dateData.trades.reduce(
        (acc, trade) => acc + parseFloat(trade.profit || 0),
        0
      )
    : 0;
  const backgroundColor = dateData
    ? totalPL >= 0
      ? "lightgreen"
      : "lightcoral"
    : "white";

  return (
    <div
      onClick={() => onDayClick(dateKey)}
      style={{
        margin: 5,
        padding: 5,
        border: "1px solid black",
        backgroundColor: backgroundColor,
      }}
    >
      {day}
      {/* Display trade info if available */}
      {dateData && (
        <div>
          <div>Trades: {dateData.trades.length}</div>
          <div>Total P/L: {totalPL}</div>
        </div>
      )}
    </div>
  );
};

export default SelectedCalendarDayPopup;
