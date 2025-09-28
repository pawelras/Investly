import NotificationsPopover from "./NotificationsPopover";  

export default function TopBar() {
  return (
    <div className="bg-brand px-50 text-white shadow p-4 flex flex-col gap-2">
      {/* Row 1: bell icon aligned right */}
      <div className="flex justify-end">
        <NotificationsPopover />   {/* 👈 this now handles icon + popover */}
      </div>

      {/* Row 2: logo left + nav right */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-4xl font-bold">Investly</div>

        {/* Navigation */}
        <div className="space-x-6 text-md">
          <button className="hover:underline">Dashboard</button>
          <button className="hover:underline">Holdings</button>
          <button className="hover:underline">Accounts</button>
          <button className="hover:underline">Transactions</button>
        </div>
      </div>
    </div>
  );
}
