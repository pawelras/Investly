import NotificationsPopover from "../Dashboard/NotificationsPopover";
import { NavLink } from "react-router-dom";
import StockTicker from "./StockTicker";
import Ticker from "./Ticker";
import logo from '../../assets/logo.png';

export default function TopBar() {
  return (
    <div>
    <div className="bg-brand text-white shadow p-4 lg:px-50 flex flex-col gap-2">
      {/* Row 1: bell icon aligned right */}
      <div className="flex justify-end">
        <NotificationsPopover />
      </div>

      {/* Row 2: logo + nav */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
        {/* Logo */}
        <div style={{ letterSpacing: "1px" }} className="text-4xl font-bold"><img width="300" src={logo} alt="Investly Logo" /></div>

        {/* Navigation */}
        <div className="flex  md:flex-row md:space-x-6 text-md gap-2 md:gap-0 mt-2 md:mt-0 justify-between">
          <NavLink
            to="/"
            style={{ letterSpacing: "1px" }}
            className={({ isActive }) =>
              isActive ? "underline font-semibold tracking-[1px]" : "hover:underline tracking-[1px]"
            }
            >
            Dashboard
          </NavLink>
          <NavLink
            to="/holdings"
            className={({ isActive }) =>
              isActive ? "underline font-semibold tracking-[1px]" : "hover:underline tracking-[1px]"
            }
          >
            Holdings
          </NavLink>
          <NavLink
            to="/accounts"
            className={({ isActive }) =>
              isActive ? "underline font-semibold tracking-[1px]" : "hover:underline tracking-[1px]"
            }
          >
            Accounts
          </NavLink>
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              isActive ? "underline font-semibold tracking-[1px]" : "hover:underline tracking-[1px]"
            }
          >
            Transactions
          </NavLink>
        </div>
      </div>
    </div>
    <Ticker />
  </div>
  );
}
