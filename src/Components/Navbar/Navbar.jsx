import { useState } from "react";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You are Successfully Logged out",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  if (loading) {
    <Loading></Loading>;
  }

  const navbar = (
    <>
      <div className="text-md flex flex-col lg:flex-row gap-2">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        {user && (
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        )}
      </div>
    </>
  );

  const loginButton = (
    <>
      <Link to="login">
        <button
          className="middle none center rounded-lg bg-gradient-to-tr from-[#FDB913] to-[#27BDBE] py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#FDB913] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
          type="button"
          data-ripple-light="true"
        >
          <span className="text-black">Login</span>
        </button>
      </Link>
    </>
  );

  const logOutButton = (
    <>
      <Link to="login">
        <button
          onClick={handleLogOut}
          className="middle none center rounded-lg bg-gradient-to-tr from-[#0064A5] to-[#27BDBE] py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#FDB913] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
          type="button"
          data-ripple-light="true"
        >
          <span>Logout</span>
        </button>
      </Link>
    </>
  );

  return (
    <div className="navbar bg-none lg:max-w-7xl mx-auto ">
      {/* Start */}
      <div className="nav navbar-start">

        {/* Logo */}
        <div className="flex flex-col justify-center items-center">
              <img className="w-20" src={logo} alt="Logo" />
              <a
                href="#"
                className="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased"
              >
                <span className=" text-xl font-semibold uppercase">Course Manage</span>
              </a>
            </div>
      </div>
      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navbar}
        </ul>
      </div>

      {/* End */}
      <div className="navbar-end pr-2 lg:pr-0">
        {
              user? <>
              <div className="flex flex-row gap-2 items-center">
                <span>{user.displayName}</span>
                <span className="hidden lg:flex">{logOutButton}</span>
              </div>
              </>
              :
              // Right Button (Login Button)
              <span className="hidden lg:flex">{loginButton}</span>
            }
      </div>

      {/*Dropdown Mobile Menu*/}
      <div className="dropdown">
          <div onClick={() => setIsOpen(!isOpen)} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          {isOpen === true ? (
                  <FaTimes className="text-lg" />
                ) : (
                  <FaAlignJustify className="text-lg"></FaAlignJustify>
                )
          }
          </div>
          <ul
            tabIndex={0}
            className={`${isOpen ? "" : "hidden"} menu menu-sm dropdown-content mt-6 -ml-40 w-56 z-[1] p-2 shadow bg-base-100 rounded-box  `}
          >
            {navbar}
            <span className="ml-2 mt-2">
              {
                user? logOutButton : loginButton
              }
            </span>
          </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
