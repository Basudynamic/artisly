export default function FilterBlock({ filters, setFilters }) {
  return (
    <div className="bg-white p-4 shadow rounded-xl mb-6 flex flex-wrap gap-4">
      {/* Category Filter */}
      <select
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, category: e.target.value }))
        }
        className="w-full sm:w-auto px-4 py-2 rounded-md bg-white text-gray-800 text-sm border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        <option value="">All Categories</option>
        <option value="Singer">Singer</option>
        <option value="Dancer">Dancer</option>
        <option value="DJ">DJ</option>
        <option value="Speaker">Speaker</option>
      </select>

      {/* Location Filter */}
      <select
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, location: e.target.value }))
        }
        className="w-full sm:w-auto px-4 py-2 rounded-md bg-white text-gray-800 text-sm border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        <option value="">All Locations</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hyderabad">Hyderabad</option>
      </select>

      {/* Price Filter */}
      <select
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, price: e.target.value }))
        }
        className="w-full sm:w-auto px-4 py-2 rounded-md bg-white text-gray-800 text-sm border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        <option value="">All Price Ranges</option>
        <option value="$300 - $800">$300 - $800</option>
        <option value="$500 - $1000">$500 - $1000</option>
        <option value="$700 - $1200">$700 - $1200</option>
        <option value="$1000 - $1500">$1000 - $1500</option>
      </select>
    </div>
  );
}
