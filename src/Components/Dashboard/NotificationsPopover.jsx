import * as React from "react";
import {
  IconButton,
  Popover,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function NotificationsPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px

  const handleClick = (event) => {
    if (isMobile) {
      setDrawerOpen(true);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setDrawerOpen(false);
  };

  const open = Boolean(anchorEl);

  const notifications = [
    "Your portfolio increased by 2.5%",
    "AAPL stock dividend received",
    "New article: Top 10 Investment Strategies",
    "TSLA stock dropped 3%",
  ];

  return (
    <div>
      {/* Notification Icon */}
      <IconButton color="inherit" onClick={handleClick}>
        <NotificationsIcon />
      </IconButton>

      {/* Desktop Popover */}
      {!isMobile && (
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          PaperProps={{
            sx: { width: 300, p: 1 },
          }}
        >
          <Box sx={{ p: 1 }}>
            <Typography variant="h6" gutterBottom>
              Notifications
            </Typography>
            <Divider sx={{ mb: 1 }} />
            <List dense>
              {notifications.map((text, i) => (
                <ListItem button key={i}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Popover>
      )}

      {/* Mobile Drawer (Bottom Sheet) */}
      {isMobile && (
        <Drawer
          anchor="bottom"
          open={drawerOpen}
          onClose={handleClose}
          PaperProps={{
            sx: {
              height: "50%",
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Notifications
            </Typography>
            <Divider sx={{ mb: 1 }} />
            <List dense>
              {notifications.map((text, i) => (
                <ListItem button key={i}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      )}
    </div>
  );
}
