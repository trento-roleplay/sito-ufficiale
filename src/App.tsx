/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X, 
  Activity, 
  Check, 
  Copy, 
  Heart, 
  Instagram, 
  MessageSquare, 
  Shield, 
  Camera, 
  Users, 
  ArrowUpRight, 
  ExternalLink,
  ChevronRight,
  BookOpen
} from "lucide-react";

import { SERVER_CONFIG } from "./config/assets";
import Home from "./pages/Home";
import ComeEntrare from "./pages/ComeEntrare";
import Fazioni from "./pages/Fazioni";
import Galleria from "./pages/Galleria";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [copiedIp, setCopiedIp] = useState<boolean>(false);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const copyServerIp = () => {
    navigator.clipboard.writeText(SERVER_CONFIG.robloxGameId);
    setCopiedIp(true);
    setTimeout(() => setCopiedIp(false), 2000);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "fazioni", label: "Fazioni" },
    { id: "entrare", label: "Come Entrare" },
    { id: "galleria", label: "Galleria" }
  ];

  const renderActivePage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={setCurrentPage} />;
      case "fazioni":
        return <Fazioni />;
      case "entrare":
        return <ComeEntrare onNavigate={setCurrentPage} />;
      case "galleria":
        return <Galleria />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100 antialiased font-sans transition-colors duration-300 selection:bg-[#c56969]/30 selection:text-white">
      
      {/* Upper Status Announcement Bar */}
      <div className="bg-neutral-900 border-b border-neutral-800 py-2.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span>Server Whitelist Aperto: effettua il provino su Discord!</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <button 
              onClick={copyServerIp}
              className="hover:text-white font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>ID Gioco: {SERVER_CONFIG.robloxGameId}</span>
              {copiedIp ? (
                <span className="text-emerald-400 text-[10px] font-sans">[ID Copiato!]</span>
              ) : (
                <span className="text-neutral-500 text-[10px] hover:text-[#c56969]">[Copia]</span>
              )}
            </button>
            <span className="text-neutral-700">|</span>
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#c56969]" />
              <span className="text-white font-semibold">{SERVER_CONFIG.averagePlayers}</span>
              <span>Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-850 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo with Name Next To It ("Nome Imparte") */}
          <div 
            onClick={() => setCurrentPage("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Customizable Logo Icon */}
            <div className="relative overflow-hidden w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center p-1 group-hover:border-[#c56969]/60 transition-all duration-300">
              <img 
                src={SERVER_CONFIG.logoUrl} 
                alt="Logo Trento RP" 
                className="w-full h-full object-cover rounded-lg scale-105 group-hover:scale-100 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-950/10 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Logo Name ("Nome Imparte" / Name Next to It) */}
            <div className="leading-none text-left">
              <span className="font-display font-black text-lg sm:text-xl tracking-tight text-white uppercase block">
                {SERVER_CONFIG.shortName.split(" ")[0]}
                <span className="text-[#c56969]"> {SERVER_CONFIG.shortName.split(" ")[1] || "RP"}</span>
              </span>
              <span className="text-[9px] text-neutral-500 uppercase tracking-widest font-semibold block">
                Roleplay Italiano
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  currentPage === item.id 
                    ? "text-[#c56969]" 
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {currentPage === item.id && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#c56969] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Quick Connect Header Button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href={SERVER_CONFIG.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c56969]/10 border border-[#c56969]/20 hover:bg-[#c56969]/15 text-[#c56969] px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Community</span>
            </a>
            <button
              onClick={() => setCurrentPage("entrare")}
              className="bg-[#c56969] hover:bg-[#b05a5a] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1 shadow-md shadow-[#c56969]/10 cursor-pointer"
            >
              <span>Entra</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-400 hover:text-white transition-all cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-neutral-900 border-b border-neutral-800 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors flex justify-between items-center cursor-pointer ${
                    currentPage === item.id 
                      ? "bg-[#c56969]/10 text-[#c56969]" 
                      : "text-neutral-300 hover:bg-neutral-800/40"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-600" />
                </button>
              ))}

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-850">
                <a 
                  href={SERVER_CONFIG.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#c56969]/10 border border-[#c56969]/20 text-[#c56969] py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discord</span>
                </a>
                <button
                  onClick={() => {
                    setCurrentPage("entrare");
                    setMobileMenuOpen(false);
                  }}
                  className="bg-[#c56969] hover:bg-[#b05a5a] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1 shadow-md shadow-[#c56969]/10 cursor-pointer"
                >
                  <span>Unisciti</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-850 pt-16 pb-8 px-4 sm:px-6 mt-16 text-xs text-neutral-400">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Info Column & Brand Name */}
            <div className="space-y-4 md:col-span-2 text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg overflow-hidden bg-neutral-900 border border-neutral-800 p-1">
                  <img 
                    src={SERVER_CONFIG.logoUrl} 
                    alt="Logo Trento RP" 
                    className="w-full h-full object-cover rounded"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-display font-black text-base text-white uppercase tracking-tight">
                  {SERVER_CONFIG.shortName} <span className="text-[#c56969]">Roleplay</span>
                </span>
              </div>
              <p className="text-neutral-500 leading-relaxed max-w-sm">
                Un'esperienza di gioco di ruolo italiana unica, dettagliata e realistica. Unisciti alla comunità di Trento RP e scrivi la tua storia oggi stesso.
              </p>
              
              {/* Social Media Link Buttons */}
              <div className="flex items-center gap-3">
                <a 
                  href={SERVER_CONFIG.discordUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-neutral-900 hover:bg-[#c56969]/10 text-neutral-400 hover:text-[#c56969] p-2.5 rounded-xl border border-neutral-800 hover:border-[#c56969]/30 transition-all"
                  title="Discord"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a 
                  href={SERVER_CONFIG.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-neutral-900 hover:bg-[#c56969]/10 text-neutral-400 hover:text-[#c56969] p-2.5 rounded-xl border border-neutral-800 hover:border-[#c56969]/30 transition-all"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-4 text-left">
              <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">Pagine del sito</h4>
              <ul className="space-y-2 text-neutral-500 font-semibold">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => setCurrentPage(item.id)}
                      className="hover:text-white hover:underline transition-colors cursor-pointer text-left uppercase text-[10px]"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Play/Connect Column */}
            <div className="space-y-4 text-left">
              <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">Unisciti a noi</h4>
              <p className="text-neutral-500 leading-relaxed text-xs">
                Copia il nostro ID Gioco, avvia Roblox e unisciti subito alla partita di Trento RP!
              </p>
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex items-center justify-between">
                <span className="font-mono text-white text-[10px] select-all truncate mr-2">{SERVER_CONFIG.robloxGameId}</span>
                <button
                  onClick={copyServerIp}
                  className="bg-[#c56969]/15 hover:bg-[#c56969]/35 text-[#c56969] px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all shrink-0 cursor-pointer"
                >
                  Copia ID
                </button>
              </div>
            </div>

          </div>

          {/* Credits and Copyright bottom section */}
          <div className="pt-8 border-t border-neutral-850 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-600">
            <span>
              &copy; {new Date().getFullYear()} {SERVER_CONFIG.name}. Tutti i diritti riservati.
            </span>
            <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider">
              <span>Sviluppato con</span>
              <Heart className="w-3 h-3 text-[#c56969] fill-[#c56969]" />
              <span>per il Roleplay Italiano</span>
            </span>
            <div className="text-[10px] text-neutral-700">
              Questo sito non è affiliato con Roblox Corporation.
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
