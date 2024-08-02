import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaBars, FaTimes, FaSignOutAlt, FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut, signedUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // Close menu when a menu item is clicked
  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  const options = (
    <>
      <li className="flex items-center px-4 text-purple-800 font-semibold hover:text-purple-500">
        <Link to="/" onClick={handleMenuItemClick}>Home</Link>
      </li>
      <li className="flex items-center px-4 text-purple-800 font-semibold hover:text-purple-500">
        <Link to="/events" onClick={handleMenuItemClick}>All Events</Link>
      </li>
      {user?.email ? (
        <>
          <li className="flex items-center px-4 text-purple-800 font-semibold hover:text-purple-500">
            <Link to="/createevent" onClick={handleMenuItemClick}>Create Event</Link>
          </li>
          <li className="flex items-center px-4 text-purple-800 font-semibold hover:text-purple-500">
            <Link to={`/myevent`} onClick={handleMenuItemClick}>My Event</Link>
          </li>
          <li className="flex items-center px-4 text-purple-800 font-semibold hover:text-purple-500">
            <Link to="/registeredevent" onClick={handleMenuItemClick}>Registered Event</Link>
          </li>
          <li className="flex items-center px-4 text-purple-800 font-semibold hover:text-purple-500">
            <button onClick={() => { handleMenuItemClick(); handleLogout(); }} className="flex items-center">
              <FaSignOutAlt className="mr-2" /> Log Out
            </button>
          </li>
        </>
      ) : (
        <li className="flex items-center px-4 text-purple-800 font-semibold hover:text-purple-500">
          <Link to="/login" className="flex items-center" onClick={handleMenuItemClick}>
            <FaSignInAlt className="mr-2" /> Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-gray-100 sticky top-0 rounded mb-8 lg:mb-12">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/">
            <img src="/logo.png" alt="Logo" className="h-10 w-32 rounded-lg" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-purple-800 font-semibold focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white shadow-lg transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} z-50`}>
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)}>
              <FaTimes size={24} className="text-purple-800" />
            </button>
          </div>
          <ul className="flex flex-col items-center mt-8">
            {options}
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-grow items-center">
          <ul className="flex flex-row lg:space-x-4 space-x-2">
            {options}
          </ul>
        </div>

        {/* User Profile or Sign Up */}
        <div className="hidden lg:flex items-center group">
          {user?.email ? (
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative flex items-center"
            >
              {signedUser?.photo ? (
                <>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={signedUser.photo}
                    alt={signedUser.name}
                  />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs rounded py-1 px-2 hidden group-hover:block">
                    {user.email}
                  </div>
                </>
              ) : (
                <>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="/profile logo.png"
                    alt="Profile"
                  />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs rounded py-1 px-2 hidden group-hover:block">
                    {user.email}
                  </div>
                </>
              )}
            </button>
          ) : (
            <Link
              className="flex items-center px-4 text-purple-800 font-semibold hover:text-purple-500"
              to="/signup"
            >
              <FaUserPlus className="mr-2" /> Sign Up
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
