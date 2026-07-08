/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Users, 
  BookOpen, 
  FileText, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  Download,
  AlertCircle,
  ExternalLink
} from "lucide-react";
import { SERVER_CONFIG } from "../config/assets";

interface ComeEntrareProps {
  onNavigate: (pageId: string) => void;
}

export default function ComeEntrare({ onNavigate }: ComeEntrareProps) {
  // Quiz State
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  const quizQuestions = [
    {
      question: "Che cos'è il 'Meta-gaming'?",
      options: [
        "Sconfiggere un altro giocatore Roblox senza un motivo valido di gioco.",
        "Utilizzare informazioni ottenute fuori dal gioco (es. messaggi privati Discord o video YouTube) all'interno del roleplay.",
        "Guidare una macchina sportiva in cima a un monte arrampicandosi sulle rocce di Roblox.",
        "Rapinare un furgone blindato in-game senza complici o ostaggi."
      ],
      correctIndex: 1,
      explanation: "Esatto! Il Meta-gaming consiste nell'usare informazioni Out-Of-Character (OOC) per trarne vantaggio In-Character (IC) all'interno del gioco Roblox."
    },
    {
      question: "Ti trovi in auto e tre rapinatori armati ti bloccano la strada puntandoti delle armi. Cosa devi fare?",
      options: [
        "Eseguire il reset del personaggio Roblox per sfuggire rapidamente all'azione.",
        "Scendere e cercare di sparare a tutti saltando freneticamente con il tuo avatar.",
        "Arrenderti immediatamente, temere per la tua vita (Value of Life) e cooperare con i rapinatori.",
        "Iniziare a insultarli in chat OOC e chiudere immediatamente la scheda di Roblox."
      ],
      correctIndex: 2,
      explanation: "Corretto! La regola del 'Valore della Vita' impone che il tuo personaggio Roblox agisca come una persona reale che teme per la propria vita di fronte a una minaccia armata."
    },
    {
      question: "Che cosa si intende con la regola 'New Life Rule' (NLR)?",
      options: [
        "Creare un nuovo account Roblox secondario per ricominciare da zero.",
        "Comprare una nuova villa o un veicolo VIP con i Robux.",
        "Cambiare fazione legale passando dai Carabinieri ai Vigili del Fuoco.",
        "In caso di sconfitta del tuo avatar e rianimazione all'Ospedale Santa Chiara, dimenticare l'azione precedente e non tornare in zona per 15 minuti."
      ],
      correctIndex: 3,
      explanation: "Perfetto! La NLR stabilisce che una volta rianimati all'ospedale di Trento, non si ha alcuna memoria degli eventi passati e non si può rientrare nell'area per 15 minuti."
    }
  ];

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;
    
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    setSelectedAnswer(null);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setQuizFinished(false);
    setQuizStarted(false);
  };

  const score = answers.reduce((acc, ans, idx) => {
    return ans === quizQuestions[idx].correctIndex ? acc + 1 : acc;
  }, 0);

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#c56969]">Guida all'accesso</span>
        <h1 className="text-3xl sm:text-5xl font-sans font-black text-neutral-900 dark:text-white uppercase tracking-tight">
          Come entrare in Whitelist
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl text-sm sm:text-base leading-relaxed">
          Trento RP è un server Whitelist ad accesso selezionato. Questo ci permette di mantenere un livello di roleplay elevato e una community educata e rispettosa. Segui questi passi per entrare a far parte della città!
        </p>
      </div>

      {/* Steps Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Step 1 */}
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800 p-6 rounded-2xl relative">
          <div className="absolute top-6 right-6 text-neutral-200 dark:text-neutral-800 font-sans font-black text-4xl select-none">01</div>
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 dark:text-white text-base uppercase tracking-tight">Entra in Discord</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
                La nostra community vive su Discord. Lì riceverai comunicazioni ufficiali, notifiche sul server e potrai aprire ticket di supporto.
              </p>
            </div>
            <a 
              href={SERVER_CONFIG.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#c56969] hover:underline"
            >
              <span>Entra nel server Discord</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800 p-6 rounded-2xl relative">
          <div className="absolute top-6 right-6 text-neutral-200 dark:text-neutral-800 font-sans font-black text-4xl select-none">02</div>
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#c56969]/10 flex items-center justify-center text-[#c56969]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 dark:text-white text-base uppercase tracking-tight">Gruppo Roblox</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
                L'unione al nostro Gruppo Roblox ufficiale è fondamentale per ricevere i gradi in-game delle fazioni e sbloccare auto speciali.
              </p>
            </div>
            <a 
              href={SERVER_CONFIG.robloxGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#c56969] hover:underline"
            >
              <span>Unisciti al Gruppo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800 p-6 rounded-2xl relative">
          <div className="absolute top-6 right-6 text-neutral-200 dark:text-neutral-800 font-sans font-black text-4xl select-none">03</div>
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 dark:text-white text-base uppercase tracking-tight">Invia la Whitelist</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
                Su Discord, compila il form di ammissione rispondendo alle domande di scenario e dimostrando di conoscere il nostro regolamento.
              </p>
            </div>
            <span className="text-xs text-neutral-400 italic">Disponibile su Discord</span>
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800 p-6 rounded-2xl relative">
          <div className="absolute top-6 right-6 text-neutral-200 dark:text-neutral-800 font-sans font-black text-4xl select-none">04</div>
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 dark:text-white text-base uppercase tracking-tight">Gioca a Trento RP</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
                Una volta approvato, riceverai il ruolo Whitelist in gioco! Connettiti tramite l'ID gioco Roblox e scrivi la tua storia trentina!
              </p>
            </div>
            <a 
              href={SERVER_CONFIG.robloxGameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-emerald-500 hover:underline"
            >
              <span>Vedi pagina Roblox</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Quiz Section - Simulatore di Provino */}
      <section className="bg-neutral-50 dark:bg-neutral-900 rounded-3xl border border-neutral-200/50 dark:border-neutral-800 p-6 sm:p-10 space-y-8">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white uppercase tracking-tight">Mettiti alla prova: Simulatore di Provino</h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">
            Vuoi scoprire se sei pronto per superare il provino ufficiale del server? Rispondi a queste 3 domande di esempio basate sulle nostre regole!
          </p>
        </div>

        {!quizStarted ? (
          <div className="bg-white dark:bg-neutral-950 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-850 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <h3 className="font-bold text-neutral-900 dark:text-white text-base">Inizia il quiz di simulazione</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-md">
                Nessuna pressione! È solo una simulazione interattiva per aiutarti ad imparare le regole fondamentali di Trento RP.
              </p>
            </div>
            <button 
              onClick={() => setQuizStarted(true)}
              className="bg-[#c56969] hover:bg-[#b05a5a] text-white px-6 py-3 rounded-xl font-bold transition-all shrink-0 cursor-pointer text-sm"
            >
              Avvia simulatore quiz
            </button>
          </div>
        ) : quizFinished ? (
          <div className="bg-white dark:bg-neutral-950 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-850 text-center space-y-6">
            <div className="mx-auto w-16 h-16 rounded-full bg-[#c56969]/10 flex items-center justify-center">
              {score === quizQuestions.length ? (
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              ) : (
                <AlertCircle className="w-10 h-10 text-orange-500" />
              )}
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white uppercase">
                {score === quizQuestions.length ? "Complimenti! Sei un esperto!" : "Puoi fare di meglio!"}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Hai risposto correttamente a <strong className="text-[#c56969]">{score} su {quizQuestions.length}</strong> domande.
              </p>
            </div>

            {score < quizQuestions.length ? (
              <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-md mx-auto">
                Ti consigliamo di rileggere il regolamento per chiarire i concetti che hai sbagliato prima di compilare il modulo ufficiale di Trento RP.
              </p>
            ) : (
              <p className="text-xs text-emerald-500 font-semibold max-w-md mx-auto">
                Hai un'eccellente conoscenza delle regole! Sei pronto per inoltrare la tua candidatura ufficiale sul nostro Discord.
              </p>
            )}

            <div className="flex justify-center gap-4 pt-2">
              <button
                onClick={resetQuiz}
                className="bg-neutral-100 dark:bg-neutral-850 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-5 py-2.5 rounded-xl font-bold transition-all text-xs cursor-pointer"
              >
                Riprova il quiz
              </button>
              <a
                href={SERVER_CONFIG.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c56969] hover:bg-[#b05a5a] text-white px-5 py-2.5 rounded-xl font-bold transition-all text-xs flex items-center gap-1.5"
              >
                <span>Fai domanda ufficiale</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-850 space-y-6">
            {/* Progress indicator */}
            <div className="flex justify-between items-center text-xs text-neutral-400 font-bold">
              <span>DOMANDA {currentQuestion + 1} DI {quizQuestions.length}</span>
              <span className="text-[#c56969]">SIMULATORE TRENTO RP</span>
            </div>
            
            {/* ProgressBar */}
            <div className="w-full bg-neutral-100 dark:bg-neutral-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-[#c56969] h-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              ></div>
            </div>

            {/* Question Text */}
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white leading-snug">
              {quizQuestions[currentQuestion].question}
            </h3>

            {/* Options list */}
            <div className="grid grid-cols-1 gap-3">
              {quizQuestions[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswerSelect(idx)}
                  className={`w-full text-left p-4 rounded-xl text-sm border transition-all cursor-pointer flex justify-between items-center ${
                    selectedAnswer === idx 
                      ? "bg-[#c56969]/5 border-[#c56969] text-neutral-900 dark:text-white font-semibold" 
                      : "bg-neutral-50 dark:bg-neutral-900/40 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 text-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  <span>{option}</span>
                  <div className={`w-4 h-4 rounded-full border shrink-0 flex items-center justify-center ${
                    selectedAnswer === idx ? "border-[#c56969]" : "border-neutral-300 dark:border-neutral-700"
                  }`}>
                    {selectedAnswer === idx && <div className="w-2 bg-[#c56969] h-2 rounded-full"></div>}
                  </div>
                </button>
              ))}
            </div>

            {/* Footer with action */}
            <div className="flex justify-end pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                  selectedAnswer === null
                    ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-400 cursor-not-allowed"
                    : "bg-[#c56969] hover:bg-[#b05a5a] text-white shadow-md shadow-[#c56969]/10"
                }`}
              >
                <span>{currentQuestion === quizQuestions.length - 1 ? "Fine Quiz" : "Prossima Domanda"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Downloads Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white uppercase tracking-tight">Requisiti e Programmi Necessari</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800 p-5 rounded-2xl flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs bg-indigo-500/10 text-indigo-500 px-2.5 py-1 rounded-full font-bold">1</span>
              <h3 className="font-bold text-neutral-900 dark:text-white text-base">Roblox Player</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                È necessario avere l'applicazione ufficiale di Roblox installata. Puoi giocare a Trento RP da PC, Smartphone, Tablet o Console!
              </p>
            </div>
            <a 
              href="https://www.roblox.com/download"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#c56969] font-bold hover:underline pt-4"
            >
              <span>Scarica Roblox</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800 p-5 rounded-2xl flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs bg-orange-500/10 text-orange-500 px-2.5 py-1 rounded-full font-bold">2</span>
              <h3 className="font-bold text-neutral-900 dark:text-white text-base">Account Roblox</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Devi possedere un account Roblox attivo. Per una migliore interazione con le chat vocali e di testo, è consigliato un account +13.
              </p>
            </div>
            <a 
              href="https://www.roblox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#c56969] font-bold hover:underline pt-4"
            >
              <span>Crea Account Roblox</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800 p-5 rounded-2xl flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs bg-emerald-500/10 text-emerald-500 px-2.5 py-1 rounded-full font-bold">3</span>
              <h3 className="font-bold text-neutral-900 dark:text-white text-base">Discord Client</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Indispensabile per completare la Whitelist, coordinarsi con le fazioni in tempo reale ed essere aggiornati sulle novità.
              </p>
            </div>
            <a 
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#c56969] font-bold hover:underline pt-4"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Scarica Discord</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
