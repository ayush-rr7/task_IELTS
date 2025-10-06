import React from 'react';
// import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:px-8 bg-white shadow-md">
      <img src="c054ea29-2ba8-4af7-b4ba-d8d07489f8ec-1wm.png" alt="Logo" className="h-12 w-12 mb-2 sm:mb-0" />
      <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 items-center">
        <li><a href="#home" className="hover:text-blue-500">Home</a></li>
        <li><a href="#features" className="hover:text-blue-500">Features</a></li>
        <li><a href="#testimonials" className="hover:text-blue-500">Testimonials</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
      <a href="/Enrollment" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2 sm:mt-0">Enroll Now</a>
    </nav>
  );
}
export default Nav