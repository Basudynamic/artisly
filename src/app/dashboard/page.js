"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Table from "@/components/Table";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/dashboardData.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pb-10">
      <Navbar />
      <div className="max-w-5xl mx-auto mt-10 px-4">
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          📋 Artist Submissions Dashboard
        </h2>
        <Table data={data} />
      </div>
    </div>
  );
}
