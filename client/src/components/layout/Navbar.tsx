import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-blue-700"
        >
          LawConnect
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-700"
                : "font-medium text-gray-600 hover:text-blue-700 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/lawyers"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-700"
                : "font-medium text-gray-600 hover:text-blue-700 transition"
            }
          >
            Lawyers
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-700"
                : "font-medium text-gray-600 hover:text-blue-700 transition"
            }
          >
            Login
          </NavLink>

          <Link
            to="/register"
            className="rounded-lg bg-blue-700 px-5 py-2 font-medium text-white transition hover:bg-blue-800"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;