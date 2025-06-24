export default function ArtistCard({ artist }) {
  return (
    <div className="bg-white p-6 shadow-md rounded-xl">
      <h3 className="text-xl font-semibold text-blue-700">{artist.name}</h3>
      <p className="text-sm text-gray-600 mt-1">Category: {artist.category}</p>
      <p className="text-sm text-gray-600">Location: {artist.location}</p>
      <p className="text-sm text-gray-600 mb-3">Price: {artist.price}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Ask for Quote
      </button>
    </div>
  );
}
