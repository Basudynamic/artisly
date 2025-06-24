export default function Table({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-xl shadow-md">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3 font-semibold text-sm text-gray-700">Name</th>
            <th className="p-3 font-semibold text-sm text-gray-700">Category</th>
            <th className="p-3 font-semibold text-sm text-gray-700">Location</th>
            <th className="p-3 font-semibold text-sm text-gray-700">Fee</th>
            <th className="p-3 font-semibold text-sm text-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((artist, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="p-3 text-sm text-gray-800">{artist.name}</td>
                <td className="p-3 text-sm text-gray-800">{artist.category}</td>
                <td className="p-3 text-sm text-gray-800">{artist.location}</td>
                <td className="p-3 text-sm text-gray-800">{artist.fee}</td>
                <td className="p-3">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
                    View
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-gray-500 p-4">
                No submissions found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
