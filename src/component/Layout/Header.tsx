import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-5">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className="text-xl font-bold text-gray-900"
              >
                Starter
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-gray-900"
                >
                  About
                </Link>
                <Link
                  to="/components"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Components
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="https://github.com"
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
