import React from "react";

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition text-center">
      <img src={icon} alt={title} className="w-45 h-45 mx-auto mb-4" />
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
