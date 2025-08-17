import LeftSidebar from "@/component/Layout/LeftSidebar";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <main className="flex">
      <LeftSidebar />
      <Outlet />
    </main>
  );
}
