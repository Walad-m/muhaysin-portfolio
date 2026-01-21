"use client";

import React from 'react';
import { personalInfo } from '../data/content';
import { Code2, Mail, User, Briefcase } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
      <div className="glass px-6 py-4 flex items-center justify-between shadow-2xl">
        {/* Logo / Name */}
        <div className="font-bold tracking-tighter text-lg">
          {personalInfo.name.split(' ')[0].toUpperCase()}
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-muted">
          <a href="#about" className="hover:text-primary transition-colors flex items-center gap-2">
            <User size={16} /> <span className="hidden sm:inline">About</span>
          </a>
          <a href="#experience" className="hover:text-primary transition-colors flex items-center gap-2">
            <Briefcase size={16} /> <span className="hidden sm:inline">Experience</span>
          </a>
          <a href="#contact" className="hover:text-primary transition-colors flex items-center gap-2">
            <Mail size={16} /> <span className="hidden sm:inline">Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}