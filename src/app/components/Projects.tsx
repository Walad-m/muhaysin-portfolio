"use client";

import React from 'react';
import { projects } from '../data/content';
import { motion } from 'framer-motion';
import { ExternalLink, FolderCode } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tighter mb-4">Featured Builds</h2>
          <p className="text-muted">Transforming imaginative ideas into scalable digital products.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 group hover:border-primary/50 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <FolderCode size={24} />
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    className="text-muted hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                <span className="text-xs font-mono text-primary uppercase tracking-widest">
                  {project.type}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}