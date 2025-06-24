import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <Navbar />
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">
          Discover & Book Top Performing Artists 🎤
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Artistly.com is a platform for Event Planners and Artist Managers to connect. Browse, shortlist, and request bookings seamlessly.
        </p>
        <a href="/artists">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Explore Artists
          </button>
        </a>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-20">
        {["Singers", "Dancers", "Speakers", "DJs"].map((cat) => (
          <div
            key={cat}
            className="bg-white shadow-xl p-6 rounded-xl text-center hover:scale-105 transition"
          >
            <h3 className="text-lg font-semibold text-purple-700">{cat}</h3>
            <p className="text-gray-500 text-sm mt-2">Explore amazing {cat.toLowerCase()} now</p>
          </div>
        ))}
      </section>
    </div>
  );
}
