"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const founderTestimonials = [
  {
    id: 1,
    name: "Jake Ward",
    role: "CEO, GrowthHack",
    quote: "ContentAI has transformed how we approach content marketing. It's like having a creative partner that truly understands our brand voice.",
    avatar: "/founder1.jpg",
    linkedin: "https://linkedin.com/in/jakeward"
  },
  {
    id: 2,
    name: "Lara Acosta",
    role: "Founder, ContentLab",
    quote: "The AI learns from our best-performing content and helps us create more of what resonates with our audience. It's been a game-changer.",
    avatar: "/founder2.jpg",
    linkedin: "https://linkedin.com/in/laraacosta"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "CTO, ScaleUp",
    quote: "Implementation was seamless and the ROI was evident within the first month. ContentAI understands context in a way other tools don't.",
    avatar: "/founder3.jpg",
    linkedin: "https://linkedin.com/in/michaelchen"
  }
];

export const FounderTestimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by Founders
        </motion.h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Hear from industry leaders who've transformed their content strategy
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founderTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-gray-700">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-1 group-hover:-translate-y-0">
                  <a 
                    href={testimonial.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors p-2 -m-2"
                    aria-label={`LinkedIn profile of ${testimonial.name}`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};