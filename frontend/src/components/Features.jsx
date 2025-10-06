import React from "react";
import FeatureCard from "./Cards";
import speaking from "../assets/speakingIcon.jpeg";
import writting from "../assets/writingIcon.jpeg";
import mocktest from "../assets/mockIcon.png";
import ai from "../assets/aiBandIcon.png";



export default function Features() {
  const featureData = [
    { 
      icon:speaking ,
       title: "Speaking Practice", description: "Improve your speaking skills with expert guidance." },
    { 
      icon:writting ,
       title: "Writting Practice", description: "Improve your writting skills with expert guidance." },
    { 
      icon: mocktest, 
      title: "Mock Tests", description: "Take real-like IELTS mock tests to track progress." },
    {
       icon: ai,
        title: "AI Band Score", description: "Get instant AI-based feedback on your performance." }
  ];

  return (
    <section id="features" className="py-16 px-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
      <div className="grid sm:grid-cols-2 gap-8 md:grid-cols-3 gap-12 lg:grid-cols-4 gap-16">
        {featureData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
