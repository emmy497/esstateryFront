import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#0C092C] text-white px-6 py-10 lg:px-[100px]">
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center lg:items-start gap-4">
          <img src="/images/logo-light.png" alt="logo" className="w-32" />
          <h5 className="text-center lg:text-left">Find your dream home</h5>
        </div>

        {/* Navigation + contact */}
        <div className="flex flex-col items-center lg:items-start gap-8">
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/property">Property</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <div className="text-center lg:text-left">
            <h3>+1 891 989-11-91</h3>
            <h3>info@logoipsum.com</h3>
          </div>
        </div>

        {/* Copyright + socials */}
        <div className="flex flex-col items-center lg:items-end gap-6 lg:justify-between">
          <h4 className="opacity-50 text-sm text-center lg:text-right">
            &copy; 2024 - Copyright
          </h4>

          <div className="flex gap-5 items-center">
            <FaInstagram
              size={20}
              className="opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
            />
            <FaFacebook
              size={20}
              className="opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
            />
            <FaYoutube
              size={20}
              className="opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
            />
            <FaXTwitter
              size={20}
              className="opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
