import Footer from "@/component/Layout/Footer";
import Header from "@/component/Layout/Header";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
