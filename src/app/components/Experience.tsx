"use client";

import React from 'react';
import { experience } from '../data/content';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tighter mb-4">Professional Growth</h2>
          <p className="text-muted max-w-xl">
            My journey at Abbey AI, moving from foundational web architecture to 
            engineering intelligent, AI-driven solutions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass p-8 relative overflow-hidden group hover:glass-hover transition-all duration-500"
            >
              {/* Decorative background glow for the active AI role */}
              {item.role.includes("AI") && (
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all" />
              )}

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Briefcase className="text-primary" size={20} />
                    {item.role}
                  </h3>
                  <p className="text-primary font-medium">{item.company}</p>
                </div>
                <div className="flex items-center gap-2 text-muted text-sm bg-white/5 px-3 py-1 rounded-full w-fit">
                  <Calendar size={14} />
                  {item.period}
                </div>
              </div>

              <p className="text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}