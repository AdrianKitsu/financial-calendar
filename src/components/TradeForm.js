import React, { useState, useEffect, useRef } from "react";

const TradeForm = ({ date, onSave, onClose }) => {
  const [trades, setTrades] = useState([{ stock: "", profit: "" }]);
  const [log, setLog] = useState("");

  const handleTradeChange = (index, field, value) => {
    const newTrades = [...trades];
    newTrades[index][field] = value;
    setTrades(newTrades);
  };

  const handleAddTrade = () => {
    setTrades([...trades, { stock: "", profit: "" }]);
  };

  const handleDeleteTrade = (index) => {
    const newTrades = trades.filter((_, idx) => idx !== index);
    setTrades(newTrades);
  };

  const handleSave = () => {
    onSave(date, { trades, log });
    onClose();
  };

  //form closure
  const formRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={formRef}
      style={{ position: "relative", border: "1px solid black", padding: 10 }}
    >
      <button
        onClick={onClose}
        style={{ position: "absolute", top: 0, right: 0 }}
      >
        X
      </button>
      <h3>Trade Details for {date}</h3>
      {trades.map((trade, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Stock traded"
            value={trade.stock}
            onChange={(e) => handleTradeChange(index, "stock", e.target.value)}
          />
          <input
            type="number"
            placeholder="Profit or Loss"
            value={trade.profit}
            onChange={(e) => handleTradeChange(index, "profit", e.target.value)}
          />
          {trades.length > 1 && (
            <button onClick={() => handleDeleteTrade(index)}>Delete</button>
          )}
        </div>
      ))}
      <button onClick={handleAddTrade}>+</button>
      <br />
      <textarea
        value={log}
        onChange={(e) => setLog(e.target.value)}
        placeholder="Enter log here"
      ></textarea>
      <br />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default TradeForm;
