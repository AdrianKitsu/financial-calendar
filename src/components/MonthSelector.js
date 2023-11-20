import React from "react";
import classes from "./css/MonthSelector.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const MonthSelector = ({ currentMonth, onMonthChange }) => {
  const handleNextMonth = () => {
    const newMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1
    );
    onMonthChange(newMonth);
  };

  const handlePrevMonth = () => {
    const newMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1
    );
    onMonthChange(newMonth);
  };

  const monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  return (
    <div className={classes.monthSelectorContainer}>
      <div className={classes.monthYearWrapper}>
        <p className={classes.currentMonth}>
          {monthNames[currentMonth.getMonth()]}
        </p>
        <p className={classes.currentYear}>{currentMonth.getFullYear()}</p>
      </div>

      <div className={classes.arrowWrapper}>
        <button className={classes.leftArrow} onClick={handlePrevMonth}>
          <IoIosArrowBack />
        </button>
        <button className={classes.rightArrow} onClick={handleNextMonth}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default MonthSelector;
