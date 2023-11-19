import React from "react";
import classes from "./PnLIndicator.module.css";

const PnLIndicator = ({ netPnL }) => {
  const isProfit = netPnL >= 0;
  const pnlColor = isProfit ? "rgb(23, 163, 23)" : "rgb(217, 15, 48)";

  return (
    <div className={classes.Card}>
      <p className={classes.PnLTitle}>Net P&L</p>
      <h2 className={classes.PnLNumber} style={{ color: pnlColor }}>
        {isProfit ? "$" : ""}
        {netPnL}
      </h2>
    </div>
  );
};

export default PnLIndicator;
