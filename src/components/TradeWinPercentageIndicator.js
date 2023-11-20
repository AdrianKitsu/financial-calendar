import React from "react";
import classes from "./css/TradeWinPercentageIndicator.module.css";

const TradeWinPercentageIndicator = ({
  totalTrades,
  winningTrades,
  losingTrades,
}) => {
  // Calculate trade win percentage (ensure no division by zero)
  const winPercentage =
    totalTrades > 0 ? (winningTrades / totalTrades) * 100 : 0;

  // Simple circle representation of the win percentage
  const circleStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  };

  return (
    <div className={classes.Card}>
      <p className={classes.TradeWinPercentageTitle}>
        Trade Win % <p className={classes.winningTrades}>{winningTrades}</p> :
        <p className={classes.losingTrades}>{losingTrades}</p>
      </p>
      <div className={classes.TradeWinPercentagePieChart}>
        <div style={circleStyle}>{winPercentage.toFixed(0)}%</div>
      </div>
    </div>
  );
};

export default TradeWinPercentageIndicator;
