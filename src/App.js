import React from "react";
import MonthSelector from "./components/MonthSelector";
import PnLIndicator from "./components/PnLIndicator";
import ProfitFactorIndicator from "./components/ProfitFactorIndicator";
import TradeWinPercentageIndicator from "./components/TradeWinPercentageIndicator";
import Calendar from "./components/Calendar";
import "./globalStyles.css";
import classes from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [tradeData, setTradeData] = useState({});
  const [totalProfit, setTotalProfit] = useState(0);
  const [totalTrades, setTotalTrades] = useState(0);
  const [winningTrades, setWinningTrades] = useState(0);
  const [losingTrades, setLosingTrades] = useState(0);

  useEffect(() => {
    // Function to calculate and update the state based on tradeData
    const calculateAggregates = () => {
      let profit = 0;
      let trades = 0;
      let wins = 0;
      let losses = 0;

      Object.values(tradeData).forEach((dayData) => {
        dayData.trades.forEach((trade) => {
          const tradeProfit = parseFloat(trade.profit);
          profit += tradeProfit;
          trades++;
          if (tradeProfit > 0) {
            wins++;
          } else if (tradeProfit < 0) {
            losses++; // Increment losses for negative profit
          }
        });
      });

      setTotalProfit(profit);
      setTotalTrades(trades);
      setWinningTrades(wins);
      setLosingTrades(losses); // Update state for losing trades
    };

    calculateAggregates();
  }, [tradeData]);

  const updateTradeData = (newTradeData) => {
    setTradeData(newTradeData);
  };

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleMonthChange = (newMonth) => {
    setCurrentMonth(newMonth);
  };

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
          <PnLIndicator totalProfit={totalProfit} />
          <ProfitFactorIndicator
            totalProfit={totalProfit}
            totalTrades={totalTrades}
          />
          <TradeWinPercentageIndicator
            totalTrades={totalTrades}
            winningTrades={winningTrades}
            losingTrades={losingTrades}
          />
        </section>
        <section className={classes.calendarSection}>
          <Calendar
            currentMonth={currentMonth}
            tradeData={tradeData}
            onUpdateTradeData={updateTradeData}
          />
        </section>
      </div>
    </>
  );
}

export default App;
