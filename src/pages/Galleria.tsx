/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, Image as ImageIcon, X, MapPin, ZoomIn, Info, ExternalLink } from "lucide-react";
import { GALLERY_IMAGES, GalleryImage } from "../config/assets";

export default function Galleria() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryImage["category"] | "all">("all");
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const categories: { value: GalleryImage["category"] | "all"; label: string }[] = [
    { value: "all", label: "Tutte le foto" },
    { value: "citta", label: "Città e Scorci" },
    { value: "frazioni", label: "Fazioni e Lavori" },
    { value: "veicoli", label: "Auto e Tuning" },
    { value: "eventi", label: "Eventi & Raduni" }
  ];

  const filteredImages = selectedCategory === "all" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#c56969]/10 border border-[#c56969]/20 px-3 py-1 rounded-full text-[#c56969] text-xs font-semibold uppercase tracking-wider">
          <Camera className="w-3.5 h-3.5" />
          <span>Scatti dalla città</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-sans font-black text-neutral-900 dark:text-white uppercase tracking-tight">
          Galleria Fotografica
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl text-sm sm:text-base leading-relaxed">
          Esplora la bellezza e il realismo della città di Trento e dei suoi dintorni alpini catturati direttamente in gioco dai nostri cittadini e fotografi ufficiali.
        </p>
      </div>

      {/* Category Pills Filter */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-neutral-100 dark:border-neutral-800">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedCategory === cat.value 
                ? "bg-[#c56969] text-white shadow-md shadow-[#c56969]/10" 
                : "bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={image.id}
              onClick={() => setActiveImage(image)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl border border-neutral-200/50 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* Image element */}
              <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-neutral-950">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay indicator */}
                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white/95 text-neutral-900 p-3 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ZoomIn className="w-5 h-5 text-[#c56969]" />
                  </div>
                </div>

                {/* Category label */}
                <div className="absolute top-3 left-3 bg-neutral-950/60 backdrop-blur-md px-2.5 py-1 rounded-lg text-[9px] font-bold text-white uppercase tracking-wider border border-white/10">
                  {image.category === "citta" ? "Città" : image.category === "frazioni" ? "Fazione" : image.category === "veicoli" ? "Veicolo" : "Raduno"}
                </div>
              </div>

              {/* Info footer */}
              <div className="p-4 space-y-1">
                <h3 className="font-bold text-neutral-900 dark:text-white text-sm tracking-tight truncate group-hover:text-[#c56969] transition-colors">
                  {image.title}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Community Upload Note */}
      <section className="bg-neutral-50 dark:bg-neutral-900 p-6 sm:p-8 rounded-3xl border border-neutral-200/50 dark:border-neutral-800/40 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl text-left">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#c56969] font-bold uppercase">
            <ImageIcon className="w-4 h-4" />
            <span>Diventa fotografo ufficiale</span>
          </div>
          <h3 className="font-bold text-neutral-900 dark:text-white text-base">Vuoi vedere i tuoi scatti pubblicati sul sito?</h3>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">
            I membri Whitelist attivi possono pubblicare le proprie foto di gioco nel canale Discord <strong>#scatti-citta</strong>. Le foto più belle e realistiche verranno inserite direttamente in questa galleria!
          </p>
        </div>
        <a 
          href="https://discord.gg/trentorp" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#c56969] hover:bg-[#b05a5a] text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shrink-0 flex items-center gap-1.5"
        >
          <span>Canale Discord #scatti-citta</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </section>

      {/* Lightbox Modal (AnimatePresence) */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/90 backdrop-blur-sm"
          >
            <div className="relative w-full max-w-4xl bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 flex flex-col max-h-[90vh]">
              {/* Close Button */}
              <button 
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-neutral-800 text-white p-2 rounded-full border border-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Main Image View */}
              <div className="flex-1 overflow-hidden bg-black flex items-center justify-center relative min-h-[40vh]">
                <img 
                  src={activeImage.url} 
                  alt={activeImage.title}
                  className="max-w-full max-h-[60vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Detail Info Panel */}
              <div className="p-6 bg-neutral-900 text-white space-y-3 border-t border-neutral-800">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase bg-[#c56969]/20 text-[#c56969] border border-[#c56969]/30 px-2.5 py-0.5 rounded-full">
                        {activeImage.category === "citta" ? "Città" : activeImage.category === "frazioni" ? "Fazione" : activeImage.category === "veicoli" ? "Veicolo" : "Raduno"}
                      </span>
                      <span className="text-xs text-neutral-400 font-bold font-mono">ID: #{activeImage.id}</span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight">{activeImage.title}</h2>
                  </div>
                  <a
                    href={activeImage.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white text-xs flex items-center gap-1.5 hover:underline"
                  >
                    <span>Vedi immagine originale</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">
                  {activeImage.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
