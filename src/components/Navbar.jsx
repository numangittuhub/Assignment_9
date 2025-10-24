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
      <nav className="navbar bg-base-100 shadow-lg">
        <div className="container mx-auto">
          <div className="flex-1">
            <Link to="/" className="text-2xl font-bold text-green-600">
              GreenNest
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 hidden md:flex">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/plants">Plants</Link></li>
              {user ? (
                <>
                  <li><Link to="/profile">My Profile</Link></li>
                  <li>
                    <div className="dropdown dropdown-end">
                      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        {user.photoURL ? (
                          <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full" />
                        ) : (
                          <FaUserCircle className="text-2xl" />
                        )}
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li><span>{user.displayName || "User"}</span></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                      </ul>
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/signup">Register</Link></li>
                </>
              )}
            </ul>
            <div className="md:hidden">
              <button
                className="btn btn-square btn-ghost"
                onClick={() => setIsOpen(!isOpen)}
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <ul className="menu menu-vertical bg-base-100 w-full md:hidden">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/plants" onClick={() => setIsOpen(false)}>Plants</Link></li>
            {user ? (
              <>
                <li><Link to="/profile" onClick={() => setIsOpen(false)}>My Profile</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </>
            ) : (
              <>
                <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
                <li><Link to="/signup" onClick={() => setIsOpen(false)}>Register</Link></li>
              </>
            )}
          </ul>
        )}
      </nav>
    );
  };

  export default Navbar;