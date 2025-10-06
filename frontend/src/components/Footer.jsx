import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-8 px-8">
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="mb-4 md:mb-0">
          <h3 className="font-bold mb-2">IELTS Institute</h3>
          <p>Email: contact@ieltsinstitute.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
        <div className="flex space-x-4">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#features" className="hover:text-blue-400">Features</a>
          <a href="#testimonials" className="hover:text-blue-400">Testimonials</a>
        </div>
      </div>
      <p className="text-center mt-6 text-gray-400">&copy; 2025 IELTS Institute. All rights reserved.</p>
    </footer>
  );
}
