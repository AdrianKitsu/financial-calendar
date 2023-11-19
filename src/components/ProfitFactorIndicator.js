import React from "react";
import classes from "./ProfitFactorIndicator.module.css";

const ProfitFactorIndicator = ({ totalProfit, totalLoss }) => {
  // Calculate profit factor (ensure no division by zero)
  const profitFactor = totalLoss !== 0 ? totalProfit / totalLoss : "N/A";

  // Simple bar representation of the profit factor
  const profitFactorBarWidth = Math.min(100, profitFactor * 20); // Scale for display

  return (
    <div className={classes.Card}>
      <p className={classes.profitFactorTitle}>Profit Factor: {profitFactor}</p>
      <div className={classes.profitFactorBar}>
        <div
          style={{
            width: "90%",
            backgroundColor: "rgb(217, 15, 48)",
            height: "15px",
          }}
        >
          <div
            style={{
              width: `${profitFactorBarWidth}%`,
              backgroundColor: "rgb(23, 163, 23)",
              height: "15px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfitFactorIndicator;
