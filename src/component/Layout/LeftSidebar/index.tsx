import BarChartIcon from "@/component/ui/Icons/BarChartIcon";
import ChevronLeft from "@/component/ui/Icons/ChevronLeft";
import HomeIcon from "@/component/ui/Icons/HomeIcon";
import PawPrint from "@/component/ui/Icons/PawPrint";
import clsx from "clsx";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import styles from "./LeftSidebar.module.css";

export default function LeftSidebar() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className={clsx(styles.container, sidebarCollapsed ? "w-20" : "w-64")}>
      <div className="flex h-full flex-col p-6">
        <div className="mb-8 flex items-center gap-2">
          <PawPrint className="h-8 w-8 flex-shrink-0 text-blue-600" />
          {!sidebarCollapsed && (
            <h2 className="text-xl font-bold text-gray-900">Cat Dashboard</h2>
          )}
        </div>
        <nav className="flex-1 space-y-2">
          <Link
            to="/dashboard"
            className={clsx(
              styles.link,
              sidebarCollapsed ? "justify-center" : "gap-3",
              location.pathname === "/dashboard"
                ? "bg-blue-100 text-blue-700"
                : "text-gray-600 hover:bg-gray-100"
            )}
            title={sidebarCollapsed ? "Dashboard" : ""}
          >
            <HomeIcon className="h-5 w-5 flex-shrink-0" />
            {!sidebarCollapsed && "Dashboard"}
          </Link>
          <Link
            to="/dashboard/analytics"
            className={clsx(
              styles.link,
              sidebarCollapsed ? "justify-center" : "gap-3",
              location.pathname === "/dashboard/analytics"
                ? "bg-blue-100 text-blue-700"
                : "text-gray-600 hover:bg-gray-100"
            )}
          >
            <BarChartIcon className="h-5 w-5 flex-shrink-0" />
            {!sidebarCollapsed && "Analytics"}
          </Link>
        </nav>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform">
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="flex items-center justify-center bg-white p-2 shadow-md hover:bg-gray-50"
        >
          <ChevronLeft
            className={clsx(
              "transition-transform duration-300",
              sidebarCollapsed ? "rotate-180" : ""
            )}
          />
        </button>
      </div>
    </div>
  );
}
