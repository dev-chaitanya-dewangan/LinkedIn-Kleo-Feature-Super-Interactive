"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    quote: "ContentAI helped me increase engagement by 200% on LinkedIn. The content feels authentic to my voice.",
    fullQuote: "ContentAI has been a game-changer for my content strategy. The tool learns my writing style and helps me create posts that resonate with my audience. Within the first month, I saw a 200% increase in engagement on LinkedIn, and my posts were being shared across multiple networks. The AI doesn't just generate generic content—it understands the nuances of my brand voice and industry."
  },
  {
    id: 2,
    name: "David Kim",
    role: "Growth Manager",
    company: "ScaleCo",
    quote: "Finally, an AI tool that understands context and doesn't produce generic content.",
    fullQuote: "I've tried multiple AI content tools, but none have delivered like ContentAI. It understands context, industry jargon, and nuances in a way that other tools simply can't. The platform learns from my top-performing content and creates variations that maintain the same impact. My content now feels more authentic and resonates better with my target audience."
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Content Creator",
    company: "Creative Minds",
    quote: "The personalization features are incredible. It's like having a co-writer who knows me.",
    fullQuote: "ContentAI has revolutionized my content creation process. It acts like a personal co-writer who understands my tone, style, and audience preferences. The tool analyzes my best-performing posts and creates content that matches the same level of engagement. I've been able to maintain consistency in my posting schedule without sacrificing quality. The personalization features are truly incredible."
  },
  {
    id: 4,
    name: "James Wilson",
    role: "CEO",
    company: "InnovateX",
    quote: "ContentAI saved me 10+ hours per week while improving quality of output.",
    fullQuote: "As a CEO, time is my most valuable resource. ContentAI has saved me over 10 hours per week while simultaneously improving the quality of my content output. The AI understands my business goals and creates content that aligns with my strategic messaging. I can now focus on high-level strategy while knowing my content presence is being maintained at the highest level."
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Digital Strategist",
    company: "GlobalReach",
    quote: "The AI learns and evolves with my content preferences. It's getting better every day.",
    fullQuote: "What sets ContentAI apart is how it learns and evolves with my content preferences. Unlike other tools that generate the same generic content, this platform adapts to my feedback and continuously improves. It's getting better every day, and the content it creates now is indistinguishable from what I would write myself. The continuous learning feature makes it worth every penny."
  },
  {
    id: 6,
    name: "Alex Thompson",
    role: "Social Media Manager",
    company: "BrandBoost",
    quote: "Improved our content engagement by 150% in just 3 months. Worth every penny.",
    fullQuote: "Our team was skeptical about AI content tools, but ContentAI exceeded our expectations. In just 3 months, we've seen a 150% improvement in our content engagement metrics. The AI understands our brand voice and creates content that resonates with our target audience. The ROI has been exceptional, and the tool has paid for itself through increased leads and conversions."
  }
];

export const WallOfLove = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Wall of Love
        </motion.h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our users are saying.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className={`bg-white p-6 rounded-xl border border-gray-100 shadow-sm cursor-pointer transition-all duration-300 ${
                expandedId === testimonial.id ? 'bg-blue-50 border-blue-200' : 'hover:shadow-md hover:border-gray-200'
              }`}
              onClick={() => toggleExpand(testimonial.id)}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 5px 10px -5px rgba(0, 0, 0, 0.04)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="font-bold text-gray-700">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-3">
                "{testimonial.quote}"
              </p>
              
              {expandedId === testimonial.id && (
                <motion.p 
                  className="text-gray-600 text-sm mt-3 pt-3 border-t border-gray-100"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {testimonial.fullQuote}
                </motion.p>
              )}
              
              <div className="mt-4 text-sm text-gray-500 transition-all duration-300">
                {expandedId === testimonial.id ? 'Show less' : 'Click to expand'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};