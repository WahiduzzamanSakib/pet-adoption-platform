import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-blue-600 text-white p-5">
        <h1 className="text-2xl font-bold mb-8">🐾 Dashboard</h1>

        <nav className="space-y-3">
          <div className="p-2 rounded hover:bg-blue-700 cursor-pointer">
            Dashboard
          </div>
          <div className="p-2 rounded hover:bg-blue-700 cursor-pointer">
            My Requests
          </div>
          <div className="p-2 rounded hover:bg-blue-700 cursor-pointer">
            Add Pet
          </div>
          <div className="p-2 rounded hover:bg-blue-700 cursor-pointer">
            My Listings
          </div>
        </nav>
      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">

        {/* TOP BAR */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <div className="text-gray-600">👤 Profile</div>
        </header>

        {/* CONTENT */}
        <main className="p-6">

          {/* STATS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <div className="bg-white p-5 rounded shadow">
              <h3 className="text-gray-500">My Requests</h3>
              <p className="text-2xl font-bold">12</p>
            </div>

            <div className="bg-white p-5 rounded shadow">
              <h3 className="text-gray-500">Add Pet</h3>
              <p className="text-2xl font-bold">➕</p>
            </div>

            <div className="bg-white p-5 rounded shadow">
              <h3 className="text-gray-500">My Listings</h3>
              <p className="text-2xl font-bold">8</p>
            </div>

            <div className="bg-white p-5 rounded shadow">
              <h3 className="text-gray-500">Total Pets</h3>
              <p className="text-2xl font-bold">20</p>
            </div>

          </div>

        </main>
      </div>

    </div>
  );
};

export default DashboardPage;