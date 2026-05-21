import { NavLink, useNavigate } from "react-router-dom";
import { type House } from "../types/House";
import Button from "./Button";
import { useContext, useEffect, useState } from "react";
import { BathIcon, Bed, MapPin } from "lucide-react";
import { AuthContext } from "../context/authContext";
import { toast } from "react-toastify";

interface PropertyCardProps {
  house: House;
  onToggleSaved?: (id: string, isSaved: boolean) => void;
}

const PropertyCard = ({ house, onToggleSaved }: PropertyCardProps) => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);

  // Load saved properties
  useEffect(() => {
    const savedIds = JSON.parse(
      localStorage.getItem("savedProperties") || "[]",
    ) as string[];

    setIsSaved(savedIds.includes(house._id));
  }, [house._id]);

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!token) {
      toast.info("Please log in to save properties");
      navigate("/login");
      return;
    }

    const savedIds = JSON.parse(
      localStorage.getItem("savedProperties") || "[]",
    ) as string[];

    let nextSavedIds: string[];

    if (savedIds.includes(house._id)) {
      nextSavedIds = savedIds.filter((id) => id !== house._id);
    } else {
      nextSavedIds = [...savedIds, house._id];
    }

    const nextSavedState = !savedIds.includes(house._id);

    localStorage.setItem("savedProperties", JSON.stringify(nextSavedIds));
    setIsSaved(nextSavedState);

    if (onToggleSaved) {
      onToggleSaved(house._id, nextSavedState);
    }
  };

  return (
    <NavLink to={`/property/${house._id}`}>
      <div
        className="
          w-full
          cursor-pointer
          h-auto
          rounded-[10px]
          border border-[#D9D9D9]
          shadow-md
          hover:shadow-xl
          group
        "
      >
        {/* Image */}
        <div className="relative w-full h-[200px] sm:h-[231px] overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-t-[10px] group-hover:scale-105 transition-transform duration-300"
            src={house.images[0]}
            alt={house.title}
          />

          <div
            className={`rounded-[20px] ${
              house.category === "rent" ? "bg-[#FF7A37]" : "bg-[#4CAF50]"
            } w-[86px] h-[37px] absolute top-[17px] flex justify-center items-center text-white left-[16px]`}
          >
            For {house.category}
          </div>

          <button
            type="button"
            onClick={toggleFavorite}
            className="absolute top-[15px] right-[16px] rounded-full p-2 bg-white shadow-sm transition cursor-pointer"
          >
            <img
              className="w-[24px] h-[24px]"
              src={isSaved ? "/images/FavoriteHeart.png" : "/images/love.png"}
              alt={isSaved ? "Remove from saved" : "Save property"}
            />
          </button>
        </div>

        {/* Content */}
        <div
          className="
            bg-white
            h-auto
            lg:h-[225px]
            rounded-b-[10px]
            p-[20px]
          "
        >
          <h2 className="text-[20px] text-gray-400 sm:text-[18px] font-semibold group-hover:text-black transition mb-[10px]">
            {house.title}
          </h2>

          <p className="text-sm text-[#403F3F] flex items-center gap-[8px]">
            <MapPin size={20} />
            {house.location}, {house.state}
          </p>

          <div className="flex gap-4 mt-[19px] text-sm mb-[20px]">
            <div className="flex items-center gap-[4px]">
              <Bed size={20} />
              <div>{house.beds} Beds</div>
            </div>

            <div className="flex items-center gap-[4px]">
              <BathIcon size={20} />
              <span>{house.baths} Baths</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <Button title="Details" />
            </div>

            <h3 className="text-sm sm:text-base md:text-md lg:text-lg font-semibold">
              ₦{house.price.toLocaleString()}
            </h3>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default PropertyCard;
