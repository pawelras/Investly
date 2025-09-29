import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Typography,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Import some example Material Icons (replace with what you prefer)
import WarningIcon from "@mui/icons-material/Warning"; 
import WhatshotIcon from "@mui/icons-material/Whatshot"; 
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; 
import ShieldIcon from "@mui/icons-material/Shield";

// Map risk levels to colors + icons
const riskStyles = {
  "High Risk": {
    color: "#fb2c36",
    icon: <WarningIcon />
  },
  Aggressive: {
    color: "orange",
    icon: <WhatshotIcon />
  },
  Balanced: {
    color: "#24A39E",
    icon: <TrendingUpIcon />
  },
  Conservative: {
    color: "#1E3A8A",
    icon: <ShieldIcon />
  }
};

export default function AccountsList() {
  const [accounts, setAccounts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/accounts.json") // 🔹 update this path if needed
      .then((res) => res.json())
      .then((data) => setAccounts(data.accounts))
      .catch((err) => console.error("Error loading accounts:", err));
  }, []);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {accounts.map((acc) => {
        const risk = riskStyles[acc.riskLevel] || { color: "gray", icon: <WarningIcon /> };

        return (
          <Card
            key={acc.name}
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              p: 2,
              gap: 2
            }}
          >
            {/* 1. Risk level with icon */}
            <Box sx={{ flex: "0 0 180px", display: "flex", alignItems: "center" }}>
              <Box sx={{ color: risk.color, mr: 1 }}>{risk.icon}</Box>
              <Typography variant="body1" sx={{ color: risk.color }}>
                {acc.riskLevel}
              </Typography>
            </Box>

            {/* 2. Name + Type */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6">{acc.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                Type: {acc.type}
              </Typography>
            </Box>

            {/* 3. Balance */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="body1">
                Balance: {acc.currency} {acc.balance.toLocaleString()}
              </Typography>
            </Box>

            {/* 4. Dates */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2">Created: {acc.createdDate}</Typography>
              <Typography variant="body2">Last Activity: {acc.lastActivity}</Typography>
            </Box>

            {/* 5. Action button */}
            <Box>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#4F77A3", color: "white" }}
                onClick={() =>
                  navigate(`/transactions?account=${encodeURIComponent(acc.name)}`)
                }
              >
                Transactions
              </Button>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
}
