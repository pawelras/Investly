import Marquee from "react-fast-marquee";
import { Chip } from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

export default function StockTicker({ stocks }) {
  if (!Array.isArray(stocks) || stocks.length === 0) {
    return <div style={{ padding: "1rem" }}>📉 No market data available</div>;
  }

  return (
    <Marquee className="bg-light " gradient={false} speed={40}>
      {stocks.map((s) => {
        const name = s.shortName || s.longName || s.symbol;
        const price = Number(s.regularMarketPrice);
        const change = Number(s.regularMarketChange);
        const changePct = Number(s.regularMarketChangePercent);

        if (isNaN(price)) return null;

        return (
         <Chip
  key={s.symbol}
  icon={change >= 0 ? <ArrowUpward fontSize="small" /> : <ArrowDownward fontSize="small" />}
  label={`${name}: ${price.toFixed(2)} (${changePct.toFixed(2)}%)`}
  sx={{
    m: 0.5,
    fontWeight: 500,
    backgroundColor: "transparent", // 🔹 removes chip background
    color: change >= 0 ? "success.main" : "error.main", // text color
    "& .MuiChip-icon": {
      color: change >= 0 ? "success.main" : "error.main", // arrow color
    },
  }}
/>

        );
      })}
    </Marquee>
  );
}
