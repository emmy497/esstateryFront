import Navbar from "./Navbar";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const HeadR = () => {
    return (
      <div>
        <Navbar />

        <section className="w-full flex justify-center">
          <div
            className="
          w-full 
         px-4
         lg:px-0
          my-[50px]
          lg:my-[125px] 
          lg:mx-[100px] 
          flex 
          flex-col 
          lg:flex-row
          gap-10
          
        "
          >
            {/* left */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="lg:max-w-[542px] text-center lg:text-left">
                <h1 className="font-bold text-[32px] lg:text-[48px]">
                  Buy, Rent or Sell Your Property Easily
                </h1>

                <p className="mt-[16px] text-[16px] lg:text-[18px] max-w-[472px] text-[#403F3F] mx-auto lg:mx-0">
                  A great platform to buy, sell, or even rent your properties
                  without any commissions.
                </p>

                <div className="w-[203px] mt-[44px] mx-auto lg:mx-0">
                  <NavLink to="/properties">
                    <Button title="Browse Properties" />
                  </NavLink>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start max-w-[490px] gap-[20px] lg:gap-[40px] mt-[54px]">
                  <div className="flex flex-col text-center lg:text-start">
                    <h2 className="text-[24px] lg:text-[32px] font-medium">
                      50k+
                    </h2>
                    <h4 className="text-[16px] lg:text-[20px] font-normal text-[#403F3F]">
                      Happy Renters
                    </h4>
                  </div>

                  <div className="flex flex-col text-center lg:text-start">
                    <h2 className="text-[24px] lg:text-[32px] font-medium">
                      100k+
                    </h2>
                    <h4 className="text-[16px] lg:text-[20px] font-normal text-[#403F3F]">
                      Active Users
                    </h4>
                  </div>

                  <div className="flex flex-col text-center lg:text-start">
                    <h2 className="text-[24px] lg:text-[32px] font-medium">
                      1k+
                    </h2>
                    <h4 className="text-[16px] lg:text-[20px] font-normal text-[#403F3F]">
                      Properties Listed
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 ">
              <img
                src="/images/head.png"
                className="
                w-full 
                max-w-[500px] 
                lg:max-w-none
                lg:h-[434px] 
                object-cover 
                rounded-[22px]
              "
                alt="hero"
              />
            </div>
          </div>
        </section>
      </div>
    );
}

export default HeadR