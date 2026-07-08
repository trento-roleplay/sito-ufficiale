/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Shield, 
  HeartPulse, 
  Skull, 
  Briefcase, 
  ArrowRight, 
  Plus, 
  Building, 
  Users, 
  Car, 
  Crosshair, 
  Compass,
  AlertTriangle,
  Flame,
  FileText
} from "lucide-react";
import { SERVER_FACTIONS, SERVER_CONFIG } from "../config/assets";

export default function Fazioni() {
  const [activeTab, setActiveTab] = useState<"all" | "legal" | "illegal" | "neutral">("all");
  const [selectedFaction, setSelectedFaction] = useState<typeof SERVER_FACTIONS[0] | null>(null);

  const filteredFactions = activeTab === "all" 
    ? SERVER_FACTIONS 
    : SERVER_FACTIONS.filter(faction => faction.type === activeTab);

  const getFactionIcon = (iconName: string, className = "w-6 h-6 text-[#c56969]") => {
    switch (iconName) {
      case "Shield": return <Shield className={className} />;
      case "HeartPulse": return <HeartPulse className={className} />;
      case "Skull": return <Skull className={className} />;
      case "Briefcase": return <Briefcase className={className} />;
      default: return <Shield className={className} />;
    }
  };

  const getFactionImage = (iconName: string) => {
    switch (iconName) {
      case "Shield": return "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop"; // Police theme
      case "HeartPulse": return "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop"; // Ambulance theme
      case "Skull": return "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop"; // Underworld theme
      case "Briefcase": return "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop"; // Enterprise theme
      default: return "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop";
    }
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#c56969]/10 border border-[#c56969]/20 px-3 py-1 rounded-full text-[#c56969] text-xs font-semibold uppercase tracking-wider">
          <Building className="w-3.5 h-3.5" />
          <span>Scegli il tuo destino</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-sans font-black text-neutral-900 dark:text-white uppercase tracking-tight">
          Fazioni & Organizzazioni
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl text-sm sm:text-base leading-relaxed">
          Trento Roleplay offre un sistema economico e sociale diviso in fazioni strutturate. Scegli se schierarti con la legge, fondare la tua impresa o comandare la malavita locale.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-neutral-100 dark:border-neutral-800">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === "all" 
              ? "bg-[#c56969] text-white shadow-md shadow-[#c56969]/10" 
              : "bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
          }`}
        >
          Tutte le fazioni
        </button>
        <button
          onClick={() => setActiveTab("legal")}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === "legal" 
              ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/10" 
              : "bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
          }`}
        >
          Legali
        </button>
        <button
          onClick={() => setActiveTab("neutral")}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === "neutral" 
              ? "bg-amber-600 text-white shadow-md shadow-amber-600/10" 
              : "bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
          }`}
        >
          Lavori & Imprese
        </button>
        <button
          onClick={() => setActiveTab("illegal")}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === "illegal" 
              ? "bg-rose-600 text-white shadow-md shadow-rose-600/10" 
              : "bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
          }`}
        >
          Illegali & Gang
        </button>
      </div>

      {/* Grid of Factions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredFactions.map((faction, idx) => (
          <div 
            key={idx}
            className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
          >
            {/* Visual Cover Header */}
            <div className="relative h-48 bg-neutral-950 overflow-hidden">
              <img 
                src={getFactionImage(faction.iconName)} 
                alt={faction.name}
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-900 via-transparent to-transparent"></div>
              
              {/* Floating Badge Type */}
              <div className="absolute top-4 right-4">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md ${
                  faction.type === "legal" 
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : faction.type === "illegal"
                    ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                    : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                }`}>
                  {faction.type === "legal" ? "Statale Legale" : faction.type === "illegal" ? "Illegale Sotto Copertura" : "Impresa Privata"}
                </span>
              </div>

              {/* Icon */}
              <div className="absolute bottom-4 left-6 w-14 h-14 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl flex items-center justify-center shadow-lg">
                {getFactionIcon(faction.iconName, "w-7 h-7 text-[#c56969]")}
              </div>
            </div>

            {/* Faction Content Body */}
            <div className="p-6 space-y-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white uppercase tracking-tight">
                  {faction.name}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                  {faction.description}
                </p>
              </div>

              {/* Custom Perks or Details list */}
              <div className="space-y-4 pt-4 border-t border-neutral-150 dark:border-neutral-800">
                <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block">Dotazioni & Caratteristiche</span>
                <div className="grid grid-cols-1 gap-2.5">
                  {faction.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 text-xs text-neutral-600 dark:text-neutral-400">
                      <div className="w-1.5 h-1.5 bg-[#c56969] rounded-full shrink-0"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA action bottom */}
            <div className="px-6 pb-6 pt-2">
              <button 
                onClick={() => setSelectedFaction(faction)}
                className="w-full bg-neutral-50 hover:bg-[#c56969]/10 dark:bg-neutral-950 dark:hover:bg-neutral-850 border border-neutral-200 dark:border-neutral-800 hover:border-[#c56969]/30 text-neutral-700 dark:text-neutral-300 hover:text-[#c56969] py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Requisiti ed Info</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Propose a Faction Banner */}
      <section className="bg-neutral-900 dark:bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#c56969]/5 blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c56969] flex items-center gap-1">
              <Flame className="w-3.5 h-3.5" />
              <span>Crea il tuo impero</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-sans font-black text-white uppercase">Hai in mente un progetto o una gang?</h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Trento RP supporta lo spirito di iniziativa! Se hai un gruppo di amici e un concept ben strutturato per un'azienda, un'officina o una famiglia criminale, puoi presentare un dossier su Discord per ricevere script e mappatura personalizzati.
            </p>
          </div>
          <a 
            href={SERVER_CONFIG.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c56969] hover:bg-[#b05a5a] text-white text-xs font-bold px-6 py-3.5 rounded-xl transition-all shadow-md shrink-0 flex items-center gap-1.5"
          >
            <span>Invia Progetto Fazione</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Faction Detail Modal */}
      <AnimatePresence>
        {selectedFaction && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 space-y-6 text-left shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center shadow">
                    {getFactionIcon(selectedFaction.iconName, "w-6 h-6 text-[#c56969]")}
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-neutral-900 dark:text-white uppercase tracking-tight">{selectedFaction.name}</h2>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-bold">Trento RP Faction System</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedFaction(null)}
                  className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer"
                >
                  <Plus className="w-5 h-5 rotate-45" />
                </button>
              </div>

              {/* Informative Grid Checklist */}
              <div className="space-y-4">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  Le ammissioni a questa fazione sono regolate direttamente dal Capo Fazione in gioco o tramite concorsi ufficiali comunicati sul nostro Discord.
                </p>

                <div className="bg-neutral-50 dark:bg-neutral-950 rounded-2xl p-4 border border-neutral-150 dark:border-neutral-800/60 space-y-3.5">
                  <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">Requisiti di Ammissione:</span>
                  
                  <div className="grid grid-cols-1 gap-2.5 text-xs text-neutral-600 dark:text-neutral-400">
                    <div className="flex items-start gap-2.5">
                      <div className="p-0.5 bg-emerald-500/10 rounded text-emerald-500 mt-0.5">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-neutral-800 dark:text-neutral-200 block">Status Whitelist</strong>
                        <span>È obbligatorio aver superato il provino d'ingresso al server prima di candidarsi.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="p-0.5 bg-blue-500/10 rounded text-blue-500 mt-0.5">
                        <FileText className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-neutral-800 dark:text-neutral-200 block">Fedina Penale</strong>
                        {selectedFaction.type === "legal" ? (
                          <span>Candidato incensurato. Nessun precedente penale grave in gioco negli ultimi 15 giorni.</span>
                        ) : selectedFaction.type === "illegal" ? (
                          <span>Nessun vincolo, ma è richiesta estrema prudenza e segretezza per evitare l'arresto.</span>
                        ) : (
                          <span>Nessun vincolo, idoneità lavorativa generale e assenza di provvedimenti amministrativi.</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="p-0.5 bg-amber-500/10 rounded text-amber-500 mt-0.5">
                        <AlertTriangle className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-neutral-800 dark:text-neutral-200 block">Età e Conoscenza Regole</strong>
                        <span>È richiesta la piena padronanza del regolamento RP specifico e rispetto della gerarchia interna.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => setSelectedFaction(null)}
                  className="bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center"
                >
                  Indietro
                </button>
                <a
                  href={SERVER_CONFIG.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#c56969] hover:bg-[#b05a5a] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <span>Candidati su Discord</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
