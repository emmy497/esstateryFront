import About from "../components/About";
import HeadR from "../components/HeadR";
import Footer from "../components/Footer";
import Button from "../components/Button";
import PropertyCard from "../components/PropertyCard";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import { type House } from "../types/House";
import { getProperties } from "../api/Properties";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getProperties({ status: "active" });

        setHouses(data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <HeadR />

      {/* Featured Properties - Limited to 3 */}
      <div className="bg-[#F1F0FE] pt-[70px] lg:px-[100px]">
        <div className="flex flex-col lg:flex-row text-center gap-4 justify-between items-center mb-[41px]">
          <h3 className="text-[32px]">Featured Properties</h3>
          <NavLink to="/properties">
            <Button  title="View All" />
          </NavLink>
        </div>

        {loading ? (
          <div className="flex justify-center py-10">
            <Spinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[50px] pb-[74px] px-[20px] lg:px-0 mx-auto">
            {houses.map((house) => (
              <PropertyCard key={house._id} house={house} />
            ))}
          </div>
        )}
      </div>

      <About />

      <Footer />
    </div>
  );
};

export default Home;
