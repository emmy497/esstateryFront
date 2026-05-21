import AboutCard from "./AboutCard";
import Button from "./Button";
import TestimonialCard from "./TestimonialCard";

const Ab = () => {
  return (
    <div className="bg-[#F7FBFE] px-5 md:px-12 lg:px-[100px] pb-16 lg:pb-[220px]">
      <div className="pt-[56px] mb-[80px] flex flex-col lg:flex-row items-center gap-8">
        <img
          src="/images/about-image.png"
          className="w-full max-w-[458px] h-auto lg:h-[302px] object-cover lg:mr-[73px] shrink-0"
          alt=""
        />
        <div className="py-[18px]">
          <h3 className="text-[#FF7A37] text-[18px]">About Us</h3>
          <h4 className="text-[24px] lg:text-[32px] text-[#202020] font-[500] mb-[12px]">
            Where Property Meets Simplicity
          </h4>
          <p className="text-[16px] lg:text-[18px] font-[400] mb-[44px]">
            We are a modern real estate platform built to simplify the way
            people buy, rent, and sell properties. Our goal is to remove the
            stress, confusion, and unnecessary costs often associated with
            property transactions by creating a seamless and transparent
            experience for everyone.
          </p>
          <div className="w-[143px] h-[37px]">
            <Button title="Learn More" />
          </div>
        </div>
      </div>

      <div className="pb-[80px]">
        <h3 className="text-[#FF7A37] text-[18px] font-[500] text-center">
          Why Choose Us
        </h3>
        <h4 className="text-center">Why Choose Estatery</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[40px]">
          <AboutCard
            title="Fast & Easy Process"
            icon="/images/bolt.png"
            paragraph="From searching to listing, everything is designed to be simple, quick, and hassle-free."
          />
          <AboutCard
            title="Direct Communication"
            icon="/images/hands.png"
            paragraph="Connect instantly with landlords, buyers, or sellers without delays or middlemen."
          />
          <AboutCard
            title="Verified Listings "
            icon="/images/safe.png"
            paragraph="Every property goes through a verification process to ensure you’re browsing genuine"
          />
        </div>
      </div>

      <div className="">
        <h2 className="text-[#FF7A37] text-center text-[18px] font-[500] mb-[6px]">
          Testimonials
        </h2>
        <p className="text-center text-[24px] lg:text-[32px] font-[500] mb-[40px]">
          What Our Satisfied Clients Says
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[80px] lg:mb-[112px]">
          <TestimonialCard
            image="/images/juice.png"
            paragraph={`"Finding a place used to be stressful, but this platform made it so easy. I was able to browse, connect, and move in within days"`}
            category="Renter"
            name="Shina Martins"
          />
          <TestimonialCard
            image="/images/juice.png"
            paragraph={`"Finding a place used to be stressful, but this platform made it so easy. I was able to browse, connect, and move in within days"`}
            category="Renter"
            name="Shina Martins"
          />
          <TestimonialCard
            image="/images/juice.png"
            paragraph={`"Finding a place used to be stressful, but this platform made it so easy. I was able to browse, connect, and move in within days"`}
            category="Renter"
            name="Shina Martins"
          />
        </div>

        <div className="relative w-full bg-[url('/images/testimonial-image.jpg')] bg-cover h-[400px] md:h-[500px] lg:h-[581px] flex justify-center items-center">
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative w-[90%] max-w-[573px] bg-white/30 backdrop-blur-md px-6 py-10 md:p-20 text-white text-center">
            <h3 className="text-[24px] md:text-[32px] mb-4">No Spam Promise</h3>
            <p className="text-[15px] md:text-[18px]">
              Are you a landlord? Discover ways to increase your home's value
              and get listed.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-[31px]">
              <input
                className="flex-1 border rounded-lg border-white px-3 py-2 bg-transparent placeholder:text-white/70 text-white"
                type="text"
                placeholder="Enter your email"
              />
              <div className="sm:w-[109px]">
                <Button title="Submit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ab;
