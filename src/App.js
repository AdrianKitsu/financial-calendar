import React from "react";
import MonthSelector from "./components/MonthSelector";
import PnLIndicator from "./components/PnLIndicator";
import ProfitFactorIndicator from "./components/ProfitFactorIndicator";
import TradeWinPercentageIndicator from "./components/TradeWinPercentageIndicator";
import Calendar from "./components/Calendar";
import "./globalStyles.css";
import classes from "./App.module.css";
import { useState } from "react";

function App() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleMonthChange = (newMonth) => {
    setCurrentMonth(newMonth);
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
          <MonthSelector
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
          />
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
        <section className={classes.calendarSection}>
          <Calendar currentMonth={currentMonth} />
        </section>
      </div>
    </>
  );
}

export default App;
