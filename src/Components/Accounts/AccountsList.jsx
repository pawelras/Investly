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
    bg: "rgba(251, 44, 54, 0.08)",
    icon: <WarningIcon fontSize="inherit" />,
  },
  Aggressive: {
    color: "#f97316", // orange-500
    bg: "rgba(249, 115, 22, 0.08)",
    icon: <WhatshotIcon fontSize="inherit" />,
  },
  Balanced: {
    color: "#24A39E",
    bg: "rgba(36, 163, 158, 0.08)",
    icon: <TrendingUpIcon fontSize="inherit" />,
  },
  Conservative: {
    color: "#1E3A8A",
    bg: "rgba(30, 58, 138, 0.08)",
    icon: <ShieldIcon fontSize="inherit" />,
  },
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
    <Box className="pt-6" display="flex" flexDirection="column" gap={2}>
      {accounts.map((acc) => {
        const risk = riskStyles[acc.riskLevel] || { color: "gray", icon: <WarningIcon /> };

        return (
  <Card
  key={acc.name}
  className="rounded-xl"
  sx={{
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    width: "100%",
    alignItems: { xs: "stretch", sm: "center" },
    p: 2,
    gap: 2,
    borderRadius: 3,
  }}
>
  {/* 1. Risk level with icon */}
  <Box
    sx={{
      flex: { xs: "none", sm: "0 0 120px" },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 1,
      backgroundColor: risk.bg,
      borderRadius: "12px",
      py: 2,
    }}
  >
    <Box sx={{ color: risk.color, fontSize: 40, lineHeight: 1 }}>
      {risk.icon}
    </Box>
    <Typography
      variant="body2"
      sx={{ color: risk.color, fontSize: "0.8rem", fontWeight: 500 }}
    >
      {acc.riskLevel}
    </Typography>
  </Box>

  {/* 2. Account details */}
  <Box
    sx={{
      flex: 1,
      textAlign: { xs: "center", sm: "left" }, // ✅ center on mobile
    }}
  >
    <Typography variant="h6">{acc.name}</Typography>
    <Typography variant="body2" color="text.secondary">
      Type: {acc.type}
    </Typography>
  </Box>

  {/* 3. Balance */}
  <Box
    sx={{
      flex: 1,
      textAlign: { xs: "center", sm: "left" }, // ✅ center on mobile
    }}
  >
    <Typography variant="body1">
      Balance: {acc.currency} {acc.balance.toLocaleString()}
    </Typography>
  </Box>

  {/* 4. Dates */}
  <Box
    sx={{
      flex: 1,
      textAlign: { xs: "center", sm: "left" }, // ✅ center on mobile
    }}
  >
    <Typography variant="body2">Created: {acc.createdDate}</Typography>
    <Typography variant="body2">Last Activity: {acc.lastActivity}</Typography>
  </Box>

  {/* 5. Action button */}
  <Box sx={{ textAlign: { xs: "center", sm: "right" }, width: { xs: "100%", sm: "auto" } }}>
    <Button
      fullWidth={{ xs: true, sm: false }} // ❌ MUI Button doesn’t support responsive directly
      variant="outlined"
      onClick={() =>
        navigate(`/transactions?account=${encodeURIComponent(acc.name)}`)
      }
      sx={{
        textTransform: "none",
        fontWeight: 500,
        borderRadius: "8px",
        borderColor: "#4F77A3",
        color: "#4F77A3",
        px: 2.5,
        py: 0.75,
        width: { xs: "100%", sm: "auto" }, // ✅ full width only on mobile
        "&:hover": {
          backgroundColor: "#4F77A3",
          borderColor: "#4F77A3",
          color: "white",
        },
      }}
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
