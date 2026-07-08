/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// CENTRALIZED CONFIGURATION FOR TRENTO ROLEPLAY
// You can easily change images, logos, links, rules, and staff members here!

export const SERVER_CONFIG = {
  name: "Trento Roleplay [Roblox]",
  shortName: "Trento RP",
  tagline: "La migliore esperienza di Gioco di Ruolo italiano su Roblox",
  description: "Trento Roleplay è un'esperienza Roblox italiana di ultima generazione. Ambientato nella città reale di Trento, offre un'economia realistica, fazioni regolate, forze dell'ordine attive e un'esperienza di gioco di ruolo seria, immersiva e accessibile direttamente da Roblox su PC, Mobile, Tablet e Console.",
  
  // Connection and Community Links
  robloxGameId: "182746352", // Roblox Place ID
  robloxGameUrl: "https://www.roblox.com/games/182746352/Trento-Roleplay-Italia",
  robloxGroupUrl: "https://www.roblox.com/groups/12345678/Trento-RP-Community",
  discordUrl: "https://discord.gg/trentorp", // Replace with your Discord link
  instagramUrl: "https://instagram.com/trento_rp_roblox",
  tiktokUrl: "https://tiktok.com/@trentorproblox",
  
  // Simulated or live server data
  slots: 50,
  averagePlayers: 42,
  
  // LOGO CONFIGURATION
  // Simply change the path below to your new logo image (supports relative paths or external URLs)
  logoUrl: "/src/assets/images/trento_rp_logo_1783547951983.jpg",
  
  // HERO BANNER CONFIGURATION
  // Change this to replace the main background image of the homepage
  heroBgUrl: "/src/assets/images/trento_rp_hero_1783547964432.jpg",
};

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: "frazioni" | "citta" | "eventi" | "veicoli";
  description: string;
}

// GALLERY IMAGES
// Feel free to replace these URLs with your custom screenshots from the server!
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    url: "https://picsum.photos/seed/trentopolice/800/600",
    title: "Polizia Locale in Piazza Duomo",
    category: "frazioni",
    description: "Pattugliamento quotidiano della Polizia Locale per mantenere l'ordine nella storica Piazza Duomo di Trento."
  },
  {
    id: "2",
    url: "https://picsum.photos/seed/trentomedics/800/600",
    title: "Soccorso Sanitario Trentino Emergente",
    category: "frazioni",
    description: "L'equipe del 118 risponde tempestivamente alle emergenze stradali e sanitarie della comunità."
  },
  {
    id: "3",
    url: "https://picsum.photos/seed/trentocity/800/600",
    title: "Castello del Buonconsiglio",
    category: "citta",
    description: "La fedele riproduzione del Castello del Buonconsiglio, punto d'incontro e area di interesse storico."
  },
  {
    id: "4",
    url: "https://picsum.photos/seed/trentocar/800/600",
    title: "Raduno Auto al Parco del Bondone",
    category: "eventi",
    description: "Appassionati di motori si riuniscono sui tornanti del Monte Bondone per esibire i propri bolidi."
  },
  {
    id: "5",
    url: "https://picsum.photos/seed/trentomecanic/800/600",
    title: "Officina Meccanica 'Ganz'",
    category: "veicoli",
    description: "Preparazioni sportive, riparazioni e tuning personalizzati all'officina autorizzata di Trento Nord."
  },
  {
    id: "6",
    url: "https://picsum.photos/seed/trentonight/800/600",
    title: "La Movida Notturna Trentina",
    category: "eventi",
    description: "Incontri serali, locali aperti e contrabbando silenzioso nei vicoli più bui della città."
  }
];

export interface TeamMember {
  name: string;
  role: "Founder" | "Admin" | "Developer" | "Modder" | "Supporto";
  avatarUrl: string; // Replace with Discord avatar or custom image
  discordTag: string;
  description: string;
}

// STAFF TEAM
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Alex",
    role: "Founder",
    avatarUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=Alex",
    discordTag: "alex_founder",
    description: "Ideatore del progetto, coordina l'intera gestione del server e le pubbliche relazioni."
  },
  {
    name: "Marco (Kratos)",
    role: "Developer",
    avatarUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=Marco",
    discordTag: "marco_dev",
    description: "Sviluppatore capo del server. Si occupa della scrittura degli script e dell'ottimizzazione del codice."
  },
  {
    name: "Giulia",
    role: "Admin",
    avatarUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=Giulia",
    discordTag: "giulia_admin",
    description: "Responsabile dello staff, gestione del regolamento e risoluzione dei ticket di supporto complessi."
  },
  {
    name: "Dave",
    role: "Modder",
    avatarUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=Dave",
    discordTag: "dave_maps",
    description: "Messer 3D e modellatore. Ha ricostruito e adattato la segnaletica e i veicoli in stile Trentino."
  },
  {
    name: "Luca",
    role: "Supporto",
    avatarUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=Luca",
    discordTag: "luca_support",
    description: "Sempre disponibile per aiutare i nuovi arrivati a superare il provino e comprendere i comandi base."
  }
];

export interface ServerFactions {
  name: string;
  description: string;
  iconName: string; // Lucide icon identifier
  type: "legal" | "illegal" | "neutral";
  details: string[];
}

export const SERVER_FACTIONS: ServerFactions[] = [
  {
    name: "Carabinieri & Polizia Locale",
    description: "Mantieni l'ordine pubblico su Roblox, pattuglia le strade del centro storico, effettua posti di blocco sul Bondone ed evita le rapine organizzate.",
    iconName: "Shield",
    type: "legal",
    details: ["Divise e veicoli italiani 3D customizzati", "Gradi e promozioni gestiti tramite Gruppo Roblox", "Caserma dei Carabinieri riprodotta in mesh dettagliate"]
  },
  {
    name: "Soccorso Sanitario & Vigili del Fuoco",
    description: "Presta primo soccorso con strumenti interattivi in-game, intervieni negli incidenti stradali e gestisci le emergenze critiche ambientate in tutto il Trentino.",
    iconName: "HeartPulse",
    type: "legal",
    details: ["Sistema medico interattivo via GUI ed elicotteri", "Mezzi di soccorso reali dei Vigili del Fuoco", "Ospedale Santa Chiara di Trento esplorabile ed attivo"]
  },
  {
    name: "Organizzazioni & Gang Criminali",
    description: "Controlla il mercato nero in-game, pianifica spettacolari rapine a banche e furgoni blindati e difendi il territorio dalle bande rivali.",
    iconName: "Skull",
    type: "illegal",
    details: ["Minigiochi di hacking e scasso scritti in Luau", "Sistema di shooting avanzato ACS / Blizzard", "Rifugi montani e laboratori segreti tra le vette"]
  },
  {
    name: "Lavori Pubblici & Imprese",
    description: "Lavora onestamente per guadagnare monete di gioco. Fai il meccanico per riparare le auto, il camionista, il pescatore o il minatore.",
    iconName: "Briefcase",
    type: "neutral",
    details: ["Officina meccanica con verniciature e cerchioni", "Economia interna e scambi tra player", "Attività commerciali acquistabili e autogestite"]
  }
];

export interface RuleSection {
  title: string;
  icon: string;
  items: {
    rule: string;
    description: string;
    penalty?: string;
  }[];
}

// DETAILED ROLEPLAY RULES (REGOLAMENTO)
export const RULES_DATA: RuleSection[] = [
  {
    title: "Regole Generali Roleplay",
    icon: "BookOpen",
    items: [
      {
        rule: "In Character (IC) vs Out Of Character (OOC)",
        description: "Devi sempre agire come il tuo personaggio. Tutto ciò che accade in gioco deve rimanere in gioco. Non utilizzare informazioni ottenute fuori dal gioco (es. chat Discord o canali social) all'interno del roleplay (Meta-gaming).",
        penalty: "Ban da 1 a 3 giorni per Meta-gaming"
      },
      {
        rule: "Fail Roleplay (FailRP)",
        description: "Compiere azioni irrealistiche o impossibili nella vita reale, come guidare una supercar sulle vette delle Dolomiti arrampicandosi verticalmente, abusare del reset dell'avatar Roblox per sfuggire a un'azione, o saltare da altezze letali continuando a correre.",
        penalty: "Avvertimento (Warn) o Kick"
      },
      {
        rule: "Power-gaming",
        description: "Forzare un'azione a proprio favore sfruttando la chat di gioco o abusando della fisica/glitch di Roblox (es. passare attraverso i muri o forzare un'azione senza dare tempo all'altro giocatore di reagire con i propri comandi).",
        penalty: "Warn o Ban temporaneo"
      },
      {
        rule: "Value of Life (Valore della Vita)",
        description: "Il tuo personaggio deve temere per la propria vita sopra ogni cosa. Se ti trovi con tre rapinatori che ti puntano le armi contro in-game, devi cooperare e non tentare mosse eroiche irrealistiche.",
        penalty: "Ban da 2 giorni"
      }
    ]
  },
  {
    title: "Regole di Combattimento e Crimini",
    icon: "ShieldAlert",
    items: [
      {
        rule: "Deathmatching (DM / RDM)",
        description: "Uccidere o sconfiggere l'avatar di altri giocatori senza un valido motivo di gioco o una motivazione roleplay pregressa.",
        penalty: "Ban da 3 a 7 giorni"
      },
      {
        rule: "Combat Logging (Slog / Leave in azione)",
        description: "Uscire da Roblox (Alt+F4, disconnessione o chiusura dell'app) per evitare di essere arrestato dai Carabinieri, derubato o per non perdere la propria fazione o risorse durante un'azione.",
        penalty: "Ban permanente (appellabile su Discord)"
      },
      {
        rule: "New Life Rule (NLR)",
        description: "Se il tuo avatar muore e rinasci all'Ospedale Santa Chiara di Trento, dimentichi tutti i dettagli dell'azione precedente. Non puoi tornare nella zona dell'accaduto per i successivi 15 minuti.",
        penalty: "Warn o Ban temporaneo"
      },
      {
        rule: "Rapine e Ostaggi",
        description: "Le rapine richiedono la presenza minima di forze dell'ordine in gioco. Gli ostaggi devono cooperare e non possono essere d'accordo in modo OOC con i rapinatori.",
        penalty: "Annullamento dell'azione + Warn"
      }
    ]
  },
  {
    title: "Regolamento della Città di Trento",
    icon: "MapPin",
    items: [
      {
        rule: "Zone Sicure (Green Zones)",
        description: "L'Ospedale Santa Chiara, il Comando dei Carabinieri e il Municipio di Trento sono Zone Sicure. In queste aree Roblox è severamente vietato compiere qualsiasi atto criminale o ostile.",
        penalty: "Ban temporaneo di 5 giorni"
      },
      {
        rule: "Utilizzo della Chat e Canali Vocali",
        description: "È caldamente consigliato l'uso della chat vocale di Roblox se abilitata, o una chat scritta chiara e grammaticalmente corretta per simulare le interazioni reali.",
        penalty: "Mute temporaneo / Kick"
      },
      {
        rule: "Rispetto della Community",
        description: "È severamente vietato qualsiasi insulto discriminatorio, tossicità o bullismo in chat Roblox o su Discord. Rispettate sempre tutti i membri della community.",
        penalty: "Ban permanente immediato"
      }
    ]
  }
];

export const FAQS = [
  {
    question: "Come posso entrare nel server?",
    answer: "È semplicissimo! Unisciti al nostro Gruppo Roblox ufficiale e accedi al nostro server Discord. Troverai il canale #whitelist o #modulo-ammissione per compilare il test ed essere abilitato al gioco serio di Trento RP!"
  },
  {
    question: "Quali requisiti o mod servono per giocare?",
    answer: "Ti basta avere installato Roblox Player sul tuo computer, smartphone, tablet o console! Tutti gli asset personalizzati (le strade di Trento riprodotte in 3D, le auto dei Carabinieri, le ambulanze e i sistemi economici) vengono scaricati ed eseguiti direttamente all'interno di Roblox in tempo reale."
  },
  {
    question: "Cosa posso fare se subisco un'azione FailRP?",
    answer: "Non interrompere mai l'azione in chat! Concludi il roleplay al meglio delle tue possibilità, poi apri una segnalazione tramite ticket sul nostro server Discord, fornendo screenshot o registrazioni video (anche con lo screen recorder di Roblox) come prova."
  },
  {
    question: "Posso creare la mia fazione o azienda personalizzata?",
    answer: "Sì! Se possiedi un gruppo/azienda su Roblox e vuoi integrarlo nella mappa di Trento RP, puoi inviare una proposta dettagliata sul nostro Discord ufficiale. Se approvato, lo staff ti assegnerà la sede, i veicoli custom e i badge di gioco."
  }
];
