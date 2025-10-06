import React from "react";

export default function TestimonialCard({ name, text, image }) {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <p className="italic mb-4">"{text}"</p>
      <div className="flex items-center">
        <img src={image} alt={name} className="w-10 h-10 rounded-full mr-3" />
        <span className="font-semibold">{name}</span>
      </div>
    </div>
  );
}
