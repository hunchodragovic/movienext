// pages/about.tsx (About Page)
import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          We are dedicated to providing valuable information and resources
          across technology, design, and business domains. Our goal is to
          empower individuals and organizations with knowledge that drives
          innovation and growth.
        </p>
        <p>
          Founded in 2023, we've grown into a trusted resource for professionals
          and enthusiasts alike, offering insights into emerging trends and
          foundational principles.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-2"></div>
            <h3 className="font-medium">Jane Doe</h3>
            <p className="text-sm text-gray-600">CEO & Founder</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-2"></div>
            <h3 className="font-medium">John Smith</h3>
            <p className="text-sm text-gray-600">CTO</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-2"></div>
            <h3 className="font-medium">Emily Johnson</h3>
            <p className="text-sm text-gray-600">Design Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
