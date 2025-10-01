import { useEffect, useState } from "react";
import StockTicker from "./StockTicker";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Ticker() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  async function fetchData() {
    try {
      const res = await fetch("/.netlify/functions/quotes");
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setStocks(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setStocks([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-light"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0.5rem",
        overflow: "hidden",
        transition: "max-height 0.4s ease",
      }}
    >
      {/* Ticker content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {loading ? <p>Loading...</p> : visible && <StockTicker stocks={stocks} />}
      </div>

      {/* Toggle button on the right */}
      <IconButton onClick={() => setVisible(!visible)}>
        {visible ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </div>
  );
}
