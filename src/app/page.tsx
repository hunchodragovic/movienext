// pages/index.tsx (Home Page)
import React from "react";

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Website</h1>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded">
            <h3 className="font-medium mb-2">Latest Technology Trends</h3>
            <p className="text-gray-600">
              Explore the cutting-edge innovations shaping our digital future.
            </p>
            <button className="mt-3 text-blue-600 hover:underline">
              Read more
            </button>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-medium mb-2">Design Principles</h3>
            <p className="text-gray-600">
              Learn about the fundamental design concepts that create
              exceptional user experiences.
            </p>
            <button className="mt-3 text-blue-600 hover:underline">
              Read more
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Updates</h2>
        <ul className="space-y-3">
          <li className="border-b pb-3">
            <span className="text-sm text-gray-500">April 10, 2025</span>
            <p>New business strategy resources added</p>
          </li>
          <li className="border-b pb-3">
            <span className="text-sm text-gray-500">April 8, 2025</span>
            <p>Updated technology section with latest AI developments</p>
          </li>
          <li>
            <span className="text-sm text-gray-500">April 5, 2025</span>
            <p>Added new design case studies</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
