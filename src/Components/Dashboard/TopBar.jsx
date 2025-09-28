import NotificationsPopover from "./NotificationsPopover";  

export default function TopBar() {
  return (
    <div className="bg-brand text-white shadow p-4 lg:px-50 flex flex-col gap-2">
      {/* Row 1: bell icon aligned right */}
      <div className="flex justify-end">
        <NotificationsPopover />
      </div>

      {/* Row 2: logo + nav */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
        {/* Logo */}
        <div className="text-4xl font-bold">Investly</div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row md:space-x-6 text-md gap-2 md:gap-0 mt-2 md:mt-0">
          <button className="hover:underline">Dashboard</button>
          <button className="hover:underline">Holdings</button>
          <button className="hover:underline">Accounts</button>
          <button className="hover:underline">Transactions</button>
        </div>
      </div>
    </div>
  );
}
