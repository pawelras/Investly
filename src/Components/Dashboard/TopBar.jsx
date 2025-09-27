import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function TopBar() {
  return (
    <div className="bg-brand px-50 text-white shadow p-4 flex flex-col gap-2">
      {/* Row 1: bell icon aligned right */}
      <div className="flex justify-end">
        <IconButton aria-label="notifications">
          <NotificationsIcon className="text-white" />
        </IconButton>
      </div>

      {/* Row 2: logo left + nav right */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-4xl font-bold ">Investly</div>

        {/* Navigation */}
        <div className="space-x-6 text-lg">
          <button className="hover:underline">Dashboard</button>
          <button className="hover:underline">Holdings</button>
          <button className="hover:underline">Accounts</button>
          <button className="hover:underline">Transactions</button>
        </div>
      </div>
    </div>
  );
}
