import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gray-900">ContentAI</h3>
            <p className="text-gray-600 mt-2">Your AI content partner trained on you and grows with you</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center space-x-4 mb-4">
              <a 
                href="https://linkedin.com/company/contentai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Linkedin className="h-6 w-6" />
                </motion.div>
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 ContentAI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};