import React from "react";
import Sidebar from "./Components/Sidebar";
// import Navbar from "./Components/NavBar";
import Graph from "./Components/Graph";

const MainPage = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        {/* <Navbar /> */}

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-bold mb-2">Sales</h2>
              <p className="text-3xl">2,382</p>
              <p className="text-red-500">-3.65% Since last week</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-bold mb-2">Earnings</h2>
              <p className="text-3xl">$21,300</p>
              <p className="text-green-500">+6.65% Since last week</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-bold mb-2">Visitors</h2>
              <p className="text-3xl">14,212</p>
              <p className="text-green-500">+5.25% Since last week</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-bold mb-2">Orders</h2>
              <p className="text-3xl">64</p>
              <p className="text-red-500">-2.25% Since last week</p>
            </div>
          </div>

          {/* Graph Component */}
          <div className="mt-6">
            <Graph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
