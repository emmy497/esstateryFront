import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface ImageWrapperProps {
  children: ReactNode;
}

const ImageWrapper = ({ children }: ImageWrapperProps) => {
  return (
    <div className="w-full min-h-screen bg-white lg:bg-[#F7FBFE] flex justify-center items-center px-4">
      <div className="w-full max-w-6xl  lg:min-w-[1253px]  flex flex-col md:flex-row  ">
        {/* LEFT SIDE */}
        {children}

        {/* RIGHT SIDE IMAGE */}
        <div className="hidden lg:bg-[url('/images/login-image.jpg')] bg-cover bg-center lg:block relative w-[50%] rounded-xl h-[521px] my-auto">
          <div className="absolute inset-0 bg-black/20"></div>
          <NavLink to="/">
            <img
              src="/images/logo-light.png"
              className="absolute top-3 right-4 w-[137px] h-[40px] z-20"
              alt="logo"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ImageWrapper;
