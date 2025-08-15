import Footer from "@/component/Layout/Footer";
import Header from "@/component/Layout/Header";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
