# Trento RP — Sito del server

Sito statico in HTML/CSS/JS puro, senza framework: basta aprire i file `.html` in un browser, oppure caricare l'intera cartella su un hosting qualsiasi (anche gratuito, es. Netlify, GitHub Pages).

## Struttura dei file

```
trento-rp/
├── index.html         → Home
├── chi-siamo.html      → Chi siamo
├── fazioni.html         → Fazioni e lavori
├── regole.html          → Regolamento
├── whitelist.html       → Come entrare / candidatura
├── contatti.html        → Discord, staff, contatti
├── css/style.css        → Tutto lo stile del sito (colori, font, layout)
├── js/script.js         → Menu mobile e animazioni
└── images/
    ├── logo.svg          → Logo (usato in header e footer)
    ├── favicon.svg        → Icona della scheda del browser
    ├── hero-skyline.svg   → Sfondo delle sezioni "hero"
    ├── divider-skyline.svg → Divisore a cresta montana tra le sezioni
    └── castello.svg        → Illustrazione del castello (pagine Home e Chi siamo)
```

Ogni pagina è un file separato, come richiesto: puoi modificarle una alla volta senza toccare le altre.

## Come cambiare il nome del server

Il nome "Trento RP" compare in più punti. Cerca e sostituisci il testo "Trento RP" in ogni file `.html` (con Trova e Sostituisci del tuo editor, es. VS Code, funziona su tutti i file insieme).
Ricorda di aggiornare anche il testo dentro `images/logo.svg` e `images/favicon.svg` (vedi sotto).

## Come cambiare il logo

Apri `images/logo.svg` con un editor di testo (o con Figma/Inkscape/Illustrator):
- cambia il testo `TRENTO` e `ROLEPLAY` con il nome che preferisci;
- oppure sostituisci l'intero contenuto del file con un tuo logo, mantenendo lo stesso nome file `logo.svg` così non serve modificare le pagine HTML.

Se preferisci usare un'immagine raster (PNG/JPG) invece di un SVG:
1. carica il tuo file in `images/`, ad esempio `logo.png`;
2. in ogni pagina HTML cerca tutte le occorrenze di `images/logo.svg` e sostituiscile con `images/logo.png`.

## Come cambiare il favicon (l'icona con il nome nella scheda del browser)

Apri `images/favicon.svg` e cambia le lettere `TR` con le iniziali del tuo server. È già impostato per essere leggero e compatibile con tutti i browser moderni.

## Come cambiare le altre immagini

Tutte le immagini sono in `images/` e sono pensate per essere sostituite facilmente:
- **hero-skyline.svg** — sfondo scuro con profilo delle Dolomiti, usato in cima a ogni pagina.
- **castello.svg** — illustrazione del Castello del Buonconsiglio, usata in Home e Chi siamo.
- **divider-skyline.svg** — la sottile linea a cresta montana che separa le sezioni: è l'elemento distintivo del sito, meglio non rimuoverlo del tutto, ma puoi modificarne il colore.

Per usare foto vere al posto dei disegni:
1. carica la foto in `images/` (es. `hero-foto.jpg`);
2. nel file HTML della pagina interessata, cerca il tag `<img src="images/hero-skyline.svg" ...>` e cambia il percorso in `images/hero-foto.jpg`.

## Come cambiare il colore del sito

Tutto il sito usa variabili colore definite in cima al file `css/style.css`:

```css
:root {
  --rose: #c56969;        /* colore principale */
  --rose-dark: #9c4f4f;   /* variante scura, usata per hover */
  --rose-soft: #e3bdbd;   /* variante chiara, sfondi tenui */
  --stone-dark: #211d1c;  /* sfondo scuro */
  --stone-cream: #f4ece1; /* sfondo chiaro */
  --pine: #55684f;        /* verde accento secondario */
  --ink: #2a2422;         /* colore testo */
}
```

Cambiando `--rose` cambi il colore principale ovunque nel sito (bottoni, link, dettagli). Non serve toccare nient'altro.

## Aggiungere una nuova pagina

1. Duplica uno dei file `.html` esistenti (es. `contatti.html`).
2. Cambia il contenuto tra `<section>` e `</section>`.
3. Aggiungi un link alla nuova pagina nel menu `<ul class="nav-links">` di **tutte** le pagine, e nel footer se vuoi che compaia anche lì.

## Font utilizzati

I font (Fraunces, Manrope, IBM Plex Mono) sono caricati da Google Fonts tramite link nel tag `<head>` di ogni pagina — servono una connessione internet per essere visualizzati correttamente. Per cambiarli, modifica il link `fonts.googleapis.com` e le variabili `--font-display`, `--font-body`, `--font-mono` in `css/style.css`.
