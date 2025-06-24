"use client";

import { useEffect, useState } from "react";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";
import Navbar from "@/components/Navbar";

export default function Artists() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    price: ""
  });

  useEffect(() => {
    fetch("/artists.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const filtered = data.filter((artist) => {
    return (
      (!filters.category || artist.category === filters.category) &&
      (!filters.location || artist.location === filters.location) &&
      (!filters.price || artist.price === filters.price)
    );
  });

  return (
    <div className="min-h-screen bg-purple-50 px-4 pb-10">
      <Navbar />
      <h2 className="text-3xl font-bold text-center text-purple-800 my-8">
        🎨 Browse Artists
      </h2>
      <FilterBlock filters={filters} setFilters={setFilters} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.length ? (
          filtered.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">No artists match your filters.</p>
        )}
      </div>
    </div>
  );
}
