import PawPrint from "@/component/ui/Icons/PawPrint";
import clsx from "clsx";
import { Link } from "react-router";

export default function Header() {
  return (
    <header
      className={clsx([
        "fixed",
        "top-0",
        "left-0",
        "right-0",
        "h-16",
        "bg-white",
        "border-b",
        "border-gray-200",
        "shadow-sm",
        "z-50",
        "flex",
        "items-center",
        "justify-between",
        "px-6",
      ])}
    >
      <nav className="flex items-center gap-4">
        <Link
          to="/"
          className="flex items-center gap-4"
        >
          <PawPrint className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-semibold text-gray-900">Cat App</span>
        </Link>
        <Link
          to="/dashboard"
          className="text-gray-900"
        >
          Dashboard
        </Link>
      </nav>
    </header>
  );
}
