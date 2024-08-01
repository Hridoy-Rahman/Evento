import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut, signedUser } = useContext(AuthContext);
  const [hovered, setHovered] = useState(false);
  // console.log(user)

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const options = (
    <>
      <li className="px-4 text-purple-800 font-semibold hover:text-purple-500">
        <Link to="/">Home</Link>
      </li>
      <li className="px-4 text-purple-800 font-semibold hover:text-purple-500">
        <Link to="/events">All Events</Link>
      </li>

      {user?.email ? (
        <>
          <li className="px-4 text-purple-800 font-semibold hover:text-purple-500">
            <Link to="/createevent">Create Event</Link>
          </li>
          <li className="px-4 text-purple-800 font-semibold hover:text-purple-500">
            <Link to={`/myevent`}>My Event</Link>
          </li>
          <li className="px-4 text-purple-800 font-semibold hover:text-purple-500">
            <Link to="/registeredevent">Registered Event</Link>
          </li>
          <li className="px-4 text-purple-800 font-semibold hover:text-purple-500">
            <button onClick={handleLogout}>Log Out</button>
          </li>
        </>
      ) : (
        <li className="px-4 text-purple-800 font-semibold hover:text-purple-500">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="flex justify-between items-center  bg-banner-gradient px-2 py-2 sticky top-0 rounded mb-8 lg:mb-12">
      <div>
        <a href="/">
          <img src="/logo.png" alt="" className="h-10 w-32 rounded-lg" />
        </a>
      </div>
      <div className="">
        <ul className="flex">{options}</ul>
      </div>
      <div>
        {user?.email ? (
          <>
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {signedUser?.photo ? (
                hovered ? (
                  <>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={signedUser.photo}
                      alt={signedUser.name}
                    />
                    <div className="tooltip">{signedUser.name}</div>
                  </>
                ) : (
                  <img
                    className="h-8 w-8 rounded-full"
                    src={signedUser.photo}
                    alt={signedUser.name}
                  />
                )
              ) : (
                <img
                  className="h-8 w-8 rounded-full"
                  src="/profile logo.png"
                  alt=""
                />
              )}
            </button>
          </>
        ) : (
          <Link
            className="px-4 text-purple-800 font-semibold hover:text-purple-500"
            to="/signup"
          >
            Sign Up
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
