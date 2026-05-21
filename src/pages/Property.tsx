import { useState, useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoggedInHeader from "../components/LoggedInHeader";
import PropertiesHeader from "../components/PropertiesHeader";
import Pagination from "../components/Pagination";
import { AuthContext } from "../context/authContext";
import PropertyCard from "../components/PropertyCard";
import ProperyNotFound from "../components/ProperyNotFound";
import Spinner from "../components/Spinner";
import { getProperties } from "../api/Properties";
import { toast } from "react-toastify";

type PropertyTypeFilter = "all" | "rent" | "sale";

const Property = () => {
  const { user } = useContext(AuthContext);

  const [houses, setHouses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const houses = await getProperties({ status: "active" });
        console.log(houses);
        setHouses(houses);
      } catch (error) {
        toast.error("error fetching properties");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const [searchValues, setSearchValues] = useState({
    propertyType: "all" as PropertyTypeFilter,
    budget: "",
    location: "",
  });
  const [appliedSearch, setAppliedSearch] = useState(searchValues);

  const handleSearchChange = (
    field: "propertyType" | "budget" | "location",
    value: string,
  ) => {
    setSearchValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSearch = () => {
    setAppliedSearch(searchValues);
  };

  const handleQuickTypeFilter = (type: PropertyTypeFilter) => {
    setSearchValues((prev) => ({ ...prev, propertyType: type }));
    setAppliedSearch((prev) => ({ ...prev, propertyType: type }));
  };

  const handleClearFilters = () => {
    const defaultValues = { propertyType: "all" as PropertyTypeFilter, budget: "", location: "" };
    setSearchValues(defaultValues);
    setAppliedSearch(defaultValues);
  };

  // Filter logic
  const filteredHouses = houses.filter((house) => {
    if (
      appliedSearch.propertyType !== "all" &&
      house.category !== appliedSearch.propertyType
    ) {
      return false;
    }

    const budgetValue = Number(appliedSearch.budget.replace(/[^0-9]/g, ""));
    if (
      !Number.isNaN(budgetValue) &&
      budgetValue > 0 &&
      house.price > budgetValue
    ) {
      return false;
    }

    const locationQuery = appliedSearch.location.trim().toLowerCase();
    if (locationQuery) {
      const inLocation = house.location.toLowerCase().includes(locationQuery);
      const inState = house.state.toLowerCase().includes(locationQuery);
      if (!inLocation && !inState) {
        return false;
      }
    }

    return true;
  });

  const totalPages = Math.ceil(filteredHouses.length / pageSize);
  const currentHouses = filteredHouses.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [appliedSearch]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {user ? (
        <LoggedInHeader
          searchValues={searchValues}
          onSearchChange={handleSearchChange}
          onSearch={handleSearch}
        />
      ) : (
        <PropertiesHeader
          searchValues={searchValues}
          onSearchChange={handleSearchChange}
          onSearch={handleSearch}
        />
      )}

      <div className="bg-[#F9FAFB] lg:pt-[70px] lg:px-[100px]">
        {filteredHouses.length > 0 && (
          <div className="flex flex-col gap-5  lg:flex-row  justify-between items-center pt-[80px] mb-[50px] px-[20px] lg:px-0">
            <h3>Featured Properties</h3>

            <div className="flex items-center gap-[21px]">
              {/*  All */}
              <button
                onClick={() => handleQuickTypeFilter("all")}
                className={`rounded-[8px] py-[12px] px-[24px] border cursor-pointer ${
                  appliedSearch.propertyType === "all"
                    ? "bg-[#7065F0] text-white"
                    : "border-[#7065F0]"
                }`}
              >
                All
              </button>

              {/*  Rent */}
              <button
                onClick={() => handleQuickTypeFilter("rent")}
                className={`rounded-[8px] py-[12px] px-[24px] border cursor-pointer ${
                  appliedSearch.propertyType === "rent"
                    ? "bg-[#7065F0] text-white"
                    : "border-[#7065F0]"
                }`}
              >
                For Rent
              </button>

              {/*  Sale */}
              <button
                onClick={() => handleQuickTypeFilter("sale")}
                className={`rounded-[8px] py-[12px] px-[24px] border cursor-pointer ${
                  appliedSearch.propertyType === "sale"
                    ? "bg-[#7065F0] text-white"
                    : "border-[#7065F0]"
                }`}
              >
                For Sale
              </button>
            </div>
          </div>
        )}

        {/*  Properties Grid */}
        {filteredHouses.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[50px] pb-[74px] px-[20px] lg:px-0 mx-auto">
              {currentHouses.map((house) => (
                <PropertyCard key={house._id} house={house} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <ProperyNotFound onClearFilters={handleClearFilters} />
        )}
      </div>

      <Footer />
    </>
  );
};

export default Property;
