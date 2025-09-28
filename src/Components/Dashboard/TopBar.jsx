import NotificationsPopover from "./NotificationsPopover";
import { NavLink } from "react-router-dom";

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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline"
            }
            >
            Dashboard
          </NavLink>
          <NavLink
            to="/holdings"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline"
            }
          >
            Holdings
          </NavLink>
          <NavLink
            to="/accounts"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline"
            }
          >
            Accounts
          </NavLink>
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline"
            }
          >
            Transactions
          </NavLink>
        </div>
      </div>
    </div>
  );
}
