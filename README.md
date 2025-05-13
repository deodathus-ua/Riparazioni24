
# Riparazioni 24 Milano - Documentazione Tecnica

## Panoramica del Progetto

Questo progetto è un sito web per "Riparazioni 24", un'azienda di riparazione elettrodomestici a Milano. Il sito è sviluppato utilizzando le seguenti tecnologie:

- **React** - Framework JavaScript per lo sviluppo dell'interfaccia utente
- **TypeScript** - Superset tipizzato di JavaScript
- **Vite** - Build tool e development server
- **React Router** - Gestione delle rotte dell'applicazione
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn-ui** - Componenti UI riutilizzabili basati su Radix UI
- **Lucide React** - Libreria di icone

## Struttura del Progetto

```
src/
├── components/         # Componenti React riutilizzabili
│   ├── Home/           # Componenti specifici per la home page
│   ├── Layout/         # Componenti di layout (Header, Footer, ecc.)
│   ├── icons/          # Componenti icone personalizzate
│   └── ui/             # Componenti UI generici (shadcn-ui)
├── hooks/              # Custom React hooks
├── lib/                # Utility e funzioni helper
├── pages/              # Componenti pagina
├── App.tsx             # Componente principale dell'app
└── main.tsx            # Entry point dell'applicazione
```

## Pagine Principali

Il sito include le seguenti pagine principali:

1. **Home** (`src/pages/Index.tsx`) - La pagina principale del sito
2. **Chi Siamo** (`src/pages/ChiSiamo.tsx`) - Informazioni sull'azienda
3. **Contatti** (`src/pages/Contatti.tsx`) - Pagina con form di contatto
4. **Dettaglio Servizio** (`src/pages/ServizioDetail.tsx`) - Pagina dettagliata per ogni servizio
5. **Blog** (`src/pages/Blog.tsx`) - Sezione blog del sito
6. **Not Found** (`src/pages/NotFound.tsx`) - Pagina 404

## Struttura di Layout

Il layout principale è definito in `src/components/Layout/MainLayout.tsx` e include:

- **Header** (`src/components/Layout/Header.tsx`) - Barra di navigazione superiore
- **Footer** (`src/components/Layout/Footer.tsx`) - Piè di pagina con informazioni di contatto
- **WhatsApp Button** - Pulsante fisso per contatto WhatsApp

## Componenti Principali della Home Page

La home page è composta da varie sezioni, ciascuna implementata come componente separato:

1. **HeroSection** (`src/components/Home/HeroSection.tsx`) - Banner principale con call to action
2. **ServicesSection** (Non modificabile) - Sezione dei servizi offerti
3. **CTASection** (`src/components/Home/CTASection.tsx`) - Call to action per contattare l'azienda
4. **TestimonialsSection** (`src/components/Home/TestimonialsSection.tsx`) - Recensioni dei clienti
5. **MapSection** (`src/components/Home/MapSection.tsx`) - Mappa con le zone servite

## Routing

Il routing è gestito da React Router in `src/App.tsx`. Ogni route corrisponde a una pagina specifica del sito.

```tsx
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/chi-siamo" element={<ChiSiamo />} />
  <Route path="/contatti" element={<Contatti />} />
  <Route path="/servizi/:servizioId" element={<ServizioDetail />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

## Stili e UI

Il progetto utilizza Tailwind CSS per lo styling, con alcune personalizzazioni definite in `src/index.css`. I colori principali del brand sono:

- Blu primario: `#1e3a8a`
- Verde primario: `#10b981`

I componenti UI riutilizzabili si trovano in `src/components/ui/` e sono basati sulla libreria shadcn-ui.

## SEO e Metadati

L'ottimizzazione SEO è gestita attraverso React Helmet in `src/components/Layout/MainLayout.tsx`. Ogni pagina può avere i propri titoli, descrizioni e parole chiave personalizzati.

## Come Apportare Modifiche

### Modificare una Pagina Esistente

1. Individuare il file della pagina in `src/pages/`
2. Apportare le modifiche necessarie al contenuto o alla struttura
3. Per cambiamenti di stile, utilizzare le classi Tailwind direttamente o modificare `src/index.css`

### Aggiungere una Nuova Pagina

1. Creare un nuovo file in `src/pages/` (es. `NuovaPagina.tsx`)
2. Implementare il componente utilizzando MainLayout per la struttura
3. Aggiungere la route in `src/App.tsx`
4. Aggiungere il link alla nuova pagina nell'header o nel footer se necessario

### Modificare la Navigazione

1. Aprire `src/components/Layout/Header.tsx` per modificare la navigazione principale
2. Aprire `src/components/Layout/Footer.tsx` per modificare i link nel footer

### Aggiungere Nuovi Componenti

1. Creare un nuovo file nella cartella `src/components/` appropriata
2. Implementare il componente utilizzando TypeScript e Tailwind CSS
3. Importare e utilizzare il componente dove necessario

### Modificare i Contenuti della Home Page

1. Individuare la sezione da modificare in `src/components/Home/`
2. Aggiornare i testi, le immagini o la struttura come necessario

## Ottimizzazione Immagini

Per le immagini, è consigliabile:
1. Utilizzare formati moderni come WebP
2. Specificare il corretto aspect ratio
3. Includere attributi alt per l'accessibilità
4. Ottimizzare le dimensioni per il web

## Componenti Read-Only

Alcuni componenti sono impostati come read-only e non possono essere modificati direttamente. Questi includono:

- `src/components/Home/ServicesSection.tsx`
- `src/components/BlogCard.tsx`
- `src/components/ContactForm.tsx`
- Tutti i componenti shadcn-ui in `src/components/ui/`

## Gestione Responsive

Il sito è completamente responsive, con breakpoint definiti secondo lo standard Tailwind:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

Quando si apportano modifiche, verificare sempre il comportamento su dispositivi diversi.

## Build e Deploy

Il progetto utilizza Vite per il build. Per testare localmente:

```sh
npm run dev
```

Per creare una build di produzione:

```sh
npm run build
```

## Contatti e Supporto

Per ulteriori informazioni o assistenza, contattare il team di sviluppo all'indirizzo email: [inserire email]
