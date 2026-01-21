"use client";

import React from 'react';
import { personalInfo } from '../data/content';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
      <div className="max-w-4xl w-full text-center">
        {/* Animated Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Full-Stack Developer • AI Enthusiast
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Building for the internet with <span className="text-primary">Imagination.</span>
          </h1>
        </motion.div>

        {/* The Einstein Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-lg text-muted italic leading-relaxed">
            "{personalInfo.quote}"
          </p>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a 
            href="#experience" 
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300"
          >
            View My Builds
          </a>
          <a 
            href="#contact" 
            className="border border-neutral-800 px-8 py-3 rounded-full font-semibold hover:border-white transition-all duration-300"
          >
            Let's Collaborate
          </a>
        </motion.div>
      </div>
    </section>
  );
}