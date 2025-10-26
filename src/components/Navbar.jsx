import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
  };

  return (
    <nav className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-bold text-green-600 flex items-center gap-2"
        >
          <img
            src="https://img.icons8.com/color/48/000000/leaf.png"
            alt="Logo"
            className="w-8 h-8"
          />
          GreenNest
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-3 items-center">
          <li>
            <Link to="/" className="btn btn-ghost text-base">
              Home
            </Link>
          </li>
          <li>
            <Link to="/plants" className="btn btn-ghost text-base">
              Plants
            </Link>
          </li>

          {user ? (
            <>
              <li>
                <Link to="/profile" className="btn btn-ghost text-base">
                  My Profile
                </Link>
              </li>
              <li>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="User"
                        className="w-10 h-10 rounded-full"
                      />
                    ) : (
                      <FaUserCircle className="text-2xl" />
                    )}
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <span className="px-4 py-2">{user.displayName || "User"}</span>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="text-red-500 hover:bg-red-100"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="btn btn-ghost text-base">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="btn btn-primary text-base">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="menu menu-vertical bg-base-100 w-full shadow-lg rounded-b-lg">
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="py-2 px-4 text-base"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/plants"
              onClick={() => setIsOpen(false)}
              className="py-2 px-4 text-base"
            >
              Plants
            </Link>
          </li>

          {user ? (
            <>
              <li>
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="py-2 px-4 text-base"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="py-2 px-4 text-red-500 text-base text-left hover:bg-red-100"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="py-2 px-4 text-base"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="py-2 px-4 text-green-600 text-base"
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
