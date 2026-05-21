import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import LoggedInNav from "./LoggedInNav";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { user } = useContext(AuthContext);

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
      `px-4 py-2 transition ${
        isActive ? "text-[#7065F0]" : "text-black  hover:text-[#7065F0]"
      }`;

  if (user) {
  
    return <LoggedInNav />;
  }

  return (
    <div className="w-full px-5 py-6 lg:px-[100px] lg:py-[33px] border-b border-gray-200">
      <div className="flex justify-between items-center">
        {/* logo */}
        <NavLink to="/">
          <img
            className="w-[137px] h-[40px] cursor-pointer"
            src="/images/logo.svg"
            alt="logo"
          />
        </NavLink>
    

        {/* desktop nav */}
        <div className="hidden lg:flex gap-[44px] text-[18px] items-center">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/properties" className={navLinkClass}>
            Properties
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        {/* desktop buttons */}
        <div className="hidden lg:flex gap-[18px] items-center">
          <NavLink to="/login">
            <button className="px-6 py-3 text-[#7065F0]">Login</button>
          </NavLink>
          <NavLink to="/signup">
            <button className="px-6 py-3 bg-[#7065F0] text-white rounded-[8px]">
              Sign up
            </button>
          </NavLink>
        </div>

        {/* mobile hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl w-8 h-8 flex items-center justify-center"
          >
            <span
              className={`inline-block transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}
            >
              {open ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col mt-8 gap-6 text-[18px] text-center pb-6">
          <NavLink to="/" end onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-[#7065F0]" : "hover:text-[#7065F0] transition-colors"}>
            Home
          </NavLink>
          <NavLink to="/properties" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-[#7065F0]" : "hover:text-[#7065F0] transition-colors"}>
            Properties
          </NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-[#7065F0]" : "hover:text-[#7065F0] transition-colors"}>
            About Us
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-[#7065F0]" : "hover:text-[#7065F0] transition-colors"}>
            Contact Us
          </NavLink>

          <div className="flex flex-col gap-3 mt-2 items-center">
            <NavLink to="/login" onClick={() => setOpen(false)} className="w-full max-w-[400px]">
              <button className="w-full px-6 py-3 text-[#7065F0] border border-[#7065F0] rounded-[8px]">
                Login
              </button>
            </NavLink>
            <NavLink to="/signup" onClick={() => setOpen(false)} className="w-full max-w-[400px]">
              <button className="w-full px-6 py-3 bg-[#7065F0] text-white rounded-[8px]">
                Sign up
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
