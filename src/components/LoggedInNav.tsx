import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import ListingRequestModal from "./ListingRequestModal";
import LogoutModal from "./LogoutModal";
import { LogOut } from "lucide-react";

const LoggedInNav = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [showListingModal, setShowListingModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const firstName = user?.fullName?.split(" ")[0] || "User";
  const isAdmin = user?.role === "admin";

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 transition ${
      isActive ? "text-[#7065F0]" : "text-black hover:text-[#7065F0]"
    }`;

  return (
    <div className="w-full px-5 py-6 lg:px-[100px] lg:py-[33px] border-b border-gray-100">
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
          <NavLink
            to="/properties"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            Properties
          </NavLink>
          <NavLink
            to="/saved-properties"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            Saved Properties
          </NavLink>
          <NavLink
            to="/contact"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            Contact Us
          </NavLink>
          <button
            onClick={() => setShowListingModal(true)}
            className={navLinkClass({ isActive: false })}
          >
            List Property
          </button>
        </div>

        {/* desktop profile */}
        <div className="hidden lg:flex gap-[12px] items-center relative">
          <button
            type="button"
            onClick={() => setProfileOpen((current) => !current)}
            className="flex items-center gap-3 rounded-[16px]"
          >
            <img
              className="rounded-full w-[45px] h-[45px] object-cover"
              src={user?.avatar || "/images/UserProfile.png"}
              alt="user"
            />
            <p className="text-sm text-black">Hello {firstName}</p>
            <img
              className="w-[16px] h-[8px]"
              src="/images/arrowdown.png"
              alt="arrow"
            />
          </button>

          <div
            className={`absolute right-0 top-full z-10 mt-2 w-[220px] overflow-hidden rounded-[16px] border border-[#E1E1E1] bg-white shadow-xl p-[20px] transition-all duration-200 origin-top-right ${
              profileOpen
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
              <NavLink
                to="/account-settings"
                onClick={() => setProfileOpen(false)}
                className="block px-4 py-3 text-left text-sm text-black hover:bg-[#F5F5FF]"
              >
                Account Settings
              </NavLink>

              {/*  ADMIN ONLY */}
              {isAdmin && (
                <NavLink
                  to="/dashboard"
                  onClick={() => setProfileOpen(false)}
                  className="block px-4 py-3 text-left text-sm text-black hover:bg-[#F5F5FF]"
                >
                  Dashboard
                </NavLink>
              )}

              <button
                type="button"
                onClick={() => { setProfileOpen(false); setShowLogoutModal(true); }}
                className="w-full px-4 py-3 text-left text-sm text-red-500"
              >
                Logout
              </button>
            </div>
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
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col mt-8 gap-6 text-[18px] text-center pb-4">
          <NavLink to="/properties" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-[#7065F0]" : "hover:text-[#7065F0] transition-colors"}>
            Properties
          </NavLink>
          <NavLink to="/saved-properties" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-[#7065F0]" : "hover:text-[#7065F0] transition-colors"}>
            Saved Properties
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-[#7065F0]" : "hover:text-[#7065F0] transition-colors"}>
            Contact Us
          </NavLink>
          <button
            onClick={() => {
              setShowListingModal(true);
              setOpen(false);
            }}
            className="text-[18px] hover:text-[#7065F0] transition-colors"
          >
            List Property
          </button>

          {/*  OPTIONAL: show My Properties on mobile too */}
          {isAdmin && (
            <NavLink to="/dashboard" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-[#7065F0]" : "hover:text-[#7065F0] transition-colors"}>
              Dashboard
            </NavLink>
          )}

          <div className="flex flex-col gap-3 mt-4">
            <button
              type="button"
              onClick={() => { setOpen(false); setShowLogoutModal(true); }}
              className="flex items-center justify-center gap-3 px-4 py-3 rounded-lg w-full text-red-500 hover:bg-red-50 transition-all"
            >
              <LogOut size={20} />
              Log Out
            </button>
          </div>
        </div>
      </div>
      <ListingRequestModal
        isOpen={showListingModal}
        onClose={() => setShowListingModal(false)}
      />

      {showLogoutModal && (
        <LogoutModal
          onConfirm={() => { logout(); setShowLogoutModal(false); }}
          onCancel={() => setShowLogoutModal(false)}
        />
      )}
    </div>
  );
};

export default LoggedInNav;
