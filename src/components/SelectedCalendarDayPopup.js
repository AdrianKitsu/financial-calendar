import React from "react";

const SelectedCalendarDayPopup = ({
  className,
  day,
  dateKey,
  tradeData,
  onDayClick,
}) => {
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
      className={className}
      onClick={() => onDayClick(dateKey)}
      style={{
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
