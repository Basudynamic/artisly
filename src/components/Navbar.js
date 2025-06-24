"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700">Artistly</h1>
      <div className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link href="/artists" className="text-gray-700 hover:text-blue-600">Artists</Link>
        <Link href="/onboard" className="text-gray-700 hover:text-blue-600">Onboard</Link>
        <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
      </div>
    </nav>
  );
}
