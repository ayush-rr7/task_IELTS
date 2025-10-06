import React from "react";
import TestimonialCard from "./TestimonialCard";
import student1 from "../assets/student1.jpeg";
import student2 from "../assets/student2.png";

export default function Testimonials() {
  const testimonialData = [
    { name: "Riya Sharma", text: "This institute helped me achieve my target score!"
      , image: student2 
      },
    { name: "Ankit Verma", text: "Excellent teaching and AI feedback!", 
      image: student1 
    }
  ];

  return (
    <section id="testimonials" className="py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonialData.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </section>
  );
}
