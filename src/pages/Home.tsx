/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Shield, 
  HeartPulse, 
  Skull, 
  Briefcase, 
  Copy, 
  Check, 
  ExternalLink, 
  Users, 
  MapPin, 
  Activity, 
  Sparkles,
  ArrowRight,
  Tv
} from "lucide-react";
import { SERVER_CONFIG, SERVER_FACTIONS } from "../config/assets";

interface HomeProps {
  onNavigate: (pageId: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [copied, setCopied] = useState(false);

  const copyIp = () => {
    navigator.clipboard.writeText(SERVER_CONFIG.robloxGameId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getFactionIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield": return <Shield className="w-6 h-6 text-[#c56969]" />;
      case "HeartPulse": return <HeartPulse className="w-6 h-6 text-[#c56969]" />;
      case "Skull": return <Skull className="w-6 h-6 text-[#c56969]" />;
      case "Briefcase": return <Briefcase className="w-6 h-6 text-[#c56969]" />;
      default: return <Shield className="w-6 h-6 text-[#c56969]" />;
    }
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden rounded-3xl bg-neutral-950 text-white">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img 
            src={SERVER_CONFIG.heroBgUrl} 
            alt="Trento Landscape" 
            className="w-full h-full object-cover opacity-35 scale-105 transform hover:scale-100 transition-transform duration-10000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
          <div className="absolute inset-0 bg-radial-vignette"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 py-12">
          {/* Tag Line */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#c56969]/15 border border-[#c56969]/30 px-4 py-1.5 rounded-full text-[#c56969] text-xs font-semibold uppercase tracking-wider backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trentino Roblox Roleplay</span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight leading-tight uppercase">
              VIVI <span className="text-[#c56969] block sm:inline">TRENTO</span><br className="hidden sm:inline" /> COME MAI PRIMA
            </h1>
            <p className="text-neutral-300 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
              {SERVER_CONFIG.tagline}
            </p>
          </motion.div>

          {/* Quick Action Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
          >
            <button
              onClick={() => onNavigate("entrare")}
              className="w-full sm:w-auto bg-[#c56969] hover:bg-[#b05a5a] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-[#c56969]/25 flex items-center justify-center gap-2 hover:translate-y-[-2px] cursor-pointer"
            >
              <span>Gioca Ora (Whitelist)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={SERVER_CONFIG.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 hover:border-neutral-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:translate-y-[-2px]"
            >
              <Users className="w-4 h-4 text-indigo-400" />
              <span>Unisciti al Discord</span>
            </a>
          </motion.div>

          {/* Live Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10"
          >
            {/* Stat 1: Server Status */}
            <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-2xl p-4 flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Activity className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold block">Stato Server</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5 text-base">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
                  ONLINE
                </span>
              </div>
            </div>

            {/* Stat 2: Active Players */}
            <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-2xl p-4 flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-[#c56969]/10 border border-[#c56969]/20 flex items-center justify-center text-[#c56969]">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold block">Giocatori Attivi</span>
                <span className="text-white font-bold text-base">
                  {SERVER_CONFIG.averagePlayers} <span className="text-neutral-500 text-sm">/ {SERVER_CONFIG.slots} slots</span>
                </span>
              </div>
            </div>

            {/* Stat 3: Quick Connect */}
            <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-2xl p-4 flex items-center justify-between text-left">
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                  <Tv className="w-6 h-6" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold block">ID Gioco Roblox</span>
                  <span className="text-white font-mono text-xs block truncate">{SERVER_CONFIG.robloxGameId}</span>
                </div>
              </div>
              <button 
                onClick={copyIp}
                className="bg-neutral-800 hover:bg-neutral-700 hover:text-white border border-neutral-700 p-2.5 rounded-xl transition-all text-neutral-400 shrink-0 cursor-pointer"
                title="Copia ID del gioco Roblox"
              >
                {copied ? <Check className="w-4.5 h-4.5 text-emerald-400" /> : <Copy className="w-4.5 h-4.5" />}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section - Presentazione Trento */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c56969]">Dettagli Unici</span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-neutral-900 dark:text-white leading-tight uppercase">
              La Città di Trento, <br className="hidden sm:inline" />Riprodotta con Cura
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-lg">
            {SERVER_CONFIG.description}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-neutral-50 dark:bg-neutral-900 p-5 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/40">
              <div className="inline-flex items-center gap-2 text-neutral-900 dark:text-white font-bold mb-2">
                <MapPin className="w-5 h-5 text-[#c56969]" />
                <span>Mappa Personalizzata</span>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Cartellonistica italiana, negozi storici del centro, l'Adige e le ripide salite del Bondone per gli appassionati di derapate.
              </p>
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-900 p-5 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/40">
              <div className="inline-flex items-center gap-2 text-neutral-900 dark:text-white font-bold mb-2">
                <Users className="w-5 h-5 text-[#c56969]" />
                <span>Comunità Solida</span>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Uno staff maturo e severo nel valutare le azioni assicura un roleplay serio e di alta qualità, lontano dai classici server di scontro.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <button 
              onClick={() => onNavigate("galleria")}
              className="inline-flex items-center gap-2 text-[#c56969] hover:text-[#b05a5a] font-bold transition-all hover:underline cursor-pointer"
            >
              <span>Sfoglia le foto di Trento RP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Visual Graphic Representation of City Features */}
        <div className="relative group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#c56969] to-orange-400 rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200/50 dark:border-neutral-800 bg-white dark:bg-neutral-950 aspect-video shadow-xl">
            <img 
              src="https://picsum.photos/seed/trentoview/900/500" 
              alt="Trento Roleplay gameplay preview" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Glassmorphic overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-white flex items-center justify-between">
              <div>
                <span className="text-xs text-neutral-400 uppercase tracking-widest font-semibold block">Piazza Duomo di Trento</span>
                <span className="font-bold text-sm">Zona Sicura di Socializzazione</span>
              </div>
              <span className="text-xs bg-[#c56969] px-2.5 py-1 rounded-full font-bold">100% Custom</span>
            </div>
          </div>
        </div>
      </section>

      {/* Factions Section (Le Fazioni del Server) */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#c56969]">Scegli la tua fazione</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-neutral-900 dark:text-white uppercase">
            Le Fazioni Principali
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            Che tu voglia servire lo Stato, soccorrere le persone o creare la tua organizzazione criminale, Trento RP ha lo script adatto alle tue esigenze.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVER_FACTIONS.map((faction, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between hover:translate-y-[-2px] relative overflow-hidden group"
            >
              {/* Type Badge */}
              <div className="absolute top-6 right-6">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  faction.type === "legal" 
                    ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                    : faction.type === "illegal"
                    ? "bg-rose-500/10 text-rose-500 border border-rose-500/20"
                    : "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                }`}>
                  {faction.type === "legal" ? "Legale" : faction.type === "illegal" ? "Illegale" : "Neutro"}
                </span>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center">
                  {getFactionIcon(faction.iconName)}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white uppercase tracking-tight">{faction.name}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">{faction.description}</p>
                </div>

                <ul className="space-y-1.5 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                  {faction.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-xs text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#c56969] rounded-full shrink-0"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-neutral-900 dark:bg-neutral-950 border border-neutral-800 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
        {/* Soft decorative light */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#c56969]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white uppercase tracking-tight">
            Pronto a scrivere la tua storia?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Unisciti a decine di altri giocatori che popolano quotidianamente le strade di Trento. Scopri le fazioni, partecipa al provino ed entra in azione!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate("entrare")}
              className="w-full sm:w-auto bg-[#c56969] hover:bg-[#b05a5a] text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2 hover:translate-y-[-1px] cursor-pointer"
            >
              <span>Come Iniziare</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate("fazioni")}
              className="w-full sm:w-auto bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:translate-y-[-1px] cursor-pointer"
            >
              <span>Vedi le Fazioni</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
