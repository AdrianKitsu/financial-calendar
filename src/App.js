import React from "react";
import MonthSelector from "./components/MonthSelector";
import PnLIndicator from "./components/PnLIndicator";
import ProfitFactorIndicator from "./components/ProfitFactorIndicator";
import TradeWinPercentageIndicator from "./components/TradeWinPercentageIndicator";
import "./globalStyles.css";
import classes from "./App.module.css";

function App() {
  const handleMonthChange = (newMonth) => {
    // You can use this to fetch or change data based on the selected month
  };
  // Temporary hardcoded values for demonstration
  const netPnL = 500; // Example Net P&L

  const totalProfit = 1000; // Example total profit
  const totalLoss = 500; // Example total loss

  const numWinningTrades = 30; // Example number of winning trades
  const totalTrades = 50; // Example total number of trades

  return (
    <>
      <div className={classes.App}>
        <section className={classes.monthChangeSection}>
          <MonthSelector onMonthChange={handleMonthChange} />
        </section>
        <section className={classes.investmentStats}>
          <PnLIndicator netPnL={netPnL} />
          <ProfitFactorIndicator
            totalProfit={totalProfit}
            totalLoss={totalLoss}
          />
          <TradeWinPercentageIndicator
            numWinningTrades={numWinningTrades}
            totalTrades={totalTrades}
          />
        </section>
      </div>
    </>
  );
}

export default App;
