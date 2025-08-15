import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <main className="bg-gray-100 flex-1">
      <Outlet />
    </main>
  );
}
