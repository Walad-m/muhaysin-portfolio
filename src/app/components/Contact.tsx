"use client";

import React from 'react';
import { contactInfo } from '../data/content';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tighter mb-4">Let's Collaborate</h2>
          <p className="text-muted">Have a great idea for a digital product? I'm ready to get it done.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="p-3 glass text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs font-mono text-muted uppercase">Email</p>
                <p className="text-lg font-medium">{contactInfo.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 glass text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-mono text-muted uppercase">Location</p>
                <p className="text-lg font-medium">{contactInfo.location}</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href={contactInfo.linkedin} target="_blank" className="p-3 glass hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={contactInfo.github} target="_blank" className="p-3 glass hover:text-primary transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* Quick Action Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass p-8 bg-primary/5 border-primary/20 flex flex-col justify-center items-center text-center"
          >
            <h3 className="text-xl font-bold mb-4">Ready to build?</h3>
            <p className="text-muted mb-8 text-sm">
              I'm currently seeking opportunities in technology and entrepreneurship.
            </p>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all"
            >
              <Send size={18} />
              Shoot me a Message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}