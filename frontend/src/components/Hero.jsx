import React from "react";
// import heroImg from "../assets/hero-banner.jpg";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center py-16 px-8 bg-gray-50">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Achieve Your Dream</h1>
        <p className="mb-6 text-gray-700 text-xl">Join our expert-led courses and take your IELTS preparation to the next level.</p>
    
      </div>
      <div >
        <a href="#/Course">
        <img src="ielts_masterclass_banner.jpg" alt="Hero Banner" className="rounded shadow-lg  " /></a>
      </div>
    </section>
  );
}
