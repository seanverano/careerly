import React, { useState } from "react";
import { Search, MapPin, X, Loader2 } from "lucide-react";

const LocationInput = ({ onLocationSelect, value, onChange }) => {
  const [searchTerm, setSearchTerm] = useState(value || "");
  const [locationOptions, setLocationOptions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (term) => {
    setError(null);
    setSearchTerm(term);
    onChange(term);

    if (!term.trim()) {
      setLocationOptions([]);
      setShowDropdown(false);
      return;
    }

    setIsSearching(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/v1/jobs/search-locations`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ term }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch locations");
      }

      const data = await response.json();

      if (!data.locationResults || data.locationResults.length === 0) {
        setError("No locations found");
        setLocationOptions([]);
        setShowDropdown(false);
        return;
      }

      setLocationOptions(data.locationResults);
      setShowDropdown(true);
    } catch (error) {
      console.error("Error fetching location data:", error);
      setError(error.message || "Unable to search locations");
      setLocationOptions([]);
      setShowDropdown(false);
    } finally {
      setIsSearching(false);
    }
  };

  const handleLocationSelect = (location) => {
    const locationParts = location.name.split(", ");
    const selectResult = {
      type: "Geography",
      address: {
        municipality: locationParts[0],
        countrySubdivisionName: locationParts[1] || "",
        country: locationParts[locationParts.length - 1],
      },
    };

    setSearchTerm(location.name);
    onChange(location.name);
    onLocationSelect(selectResult);
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for your location (e.g., Cebu)"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => {
            if (searchTerm && locationOptions.length > 0) {
              setShowDropdown(true);
            }
          }}
          className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#019A63]"
        />
        {isSearching ? (
          <Loader2
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 animate-spin"
            size={20}
          />
        ) : (
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        )}
        {searchTerm && (
          <button
            onClick={() => {
              setSearchTerm("");
              onChange("");
              setLocationOptions([]);
              setShowDropdown(false);
              setError(null);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <X size={20} className="text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}

      {showDropdown && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {locationOptions.map((location) => (
            <div
              key={location.id || location.name}
              onClick={() => handleLocationSelect(location)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
            >
              <MapPin size={20} className="mr-2 text-[#019A63]" />
              <div>
                <p className="font-semibold">{location.name}</p>
                <p className="text-xs text-gray-500">{location.type}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationInput;
