import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainLayout from '@/components/Layout/MainLayout';
import ServiceDetail from '@/components/ServiceDetail';

const servicesData = {
  lavatrice: {
    title: "Riparazione Lavatrici a Milano",
    description: "Servizio professionale di riparazione lavatrici a Milano e provincia con interventi rapidi e prezzi competitivi. Tecnici specializzati per tutti i modelli e marche.",
    keywords: "riparazione lavatrici Milano, assistenza lavatrice Milano, tecnico lavatrici, riparare lavatrice",
    imageUrl: "/images/lavatrice.webp",
    bulletPoints: [
      "Intervento entro 24 ore in tutta Milano e provincia",
      "Tecnici specializzati con esperienza pluriennale su tutte le marche",
      "Preventivi gratuiti e senza impegno",
      "Riparazione direttamente a domicilio",
      "Garanzia di 12 mesi su ricambi e manodopera",
      "Utilizzo di ricambi originali o di qualità equivalente"
    ],
    commonProblems: [
      {
        title: "La lavatrice non scarica l'acqua",
        description: "Potrebbe essere causato da un filtro ostruito, una pompa di scarico guasta o un problema al tubo di scarico. I nostri tecnici possono diagnosticare e risolvere rapidamente il problema."
      },
      {
        title: "La lavatrice perde acqua",
        description: "Le cause possono essere molteplici: guarnizioni consumate, manicotti danneggiati, problemi alla vasca o alla pompa. Interveniamo con una diagnosi precisa per evitare danni all'abitazione."
      },
      {
        title: "La lavatrice non centrifuga",
        description: "Questo problema può essere causato da un carico sbilanciato, problemi al motore o alla scheda elettronica. Il nostro servizio include la diagnosi e la riparazione di questi componenti."
      },
      {
        title: "La lavatrice non si accende",
        description: "Potrebbe trattarsi di un problema elettrico, alla scheda madre o all'interruttore. Abbiamo l'attrezzatura e l'esperienza per individuare e risolvere il guasto."
      },
      {
        title: "La lavatrice fa rumore eccessivo",
        description: "Cuscinetti usurati, tamburo danneggiato o oggetti estranei possono causare questo problema. I nostri tecnici sono in grado di intervenire su qualsiasi componente del sistema."
      }
    ],
    brands: [
        "Samsung", "Grundig", "Whirlpool", "Electrolux", "Hisense", "Siemens", "Indesit", "Candy", "Ariston", "Hoover", "Beko", "Zanussi", "AEG", "Bauknecht", "Ignis", "Hotpoint", "Smeg", "Haier", "Bosch", "Miele", "LG"
    ],
    faqItems: [
      {
        question: "Quanto costa riparare una lavatrice?",
        answer: "Il costo dipende dal tipo di guasto. Forniamo sempre un preventivo gratuito prima di procedere con la riparazione. In media, una riparazione standard può variare dai 60€ ai 180€, inclusi manodopera e ricambi."
      },
      {
        question: "Quando conviene riparare invece di sostituire la lavatrice?",
        answer: "Di solito conviene riparare se la lavatrice ha meno di 6-7 anni, se il costo della riparazione è inferiore al 50% del prezzo di un nuovo elettrodomestico, e se i pezzi di ricambio sono facilmente reperibili."
      },
      {
        question: "Quanto tempo richiede una riparazione?",
        answer: "La maggior parte delle riparazioni viene completata in un singolo intervento che dura tra 1 e 2 ore. Per guasti più complessi o che richiedono ordinazione di ricambi specifici potrebbe essere necessario un secondo appuntamento."
      }
    ]
  },
  lavastoviglie: {
    title: "Riparazione Lavastoviglie a Milano",
    description: "Assistenza e riparazione professionale di lavastoviglie a Milano e provincia. Intervento rapido su tutti i modelli e marche con garanzia sulle riparazioni.",
    keywords: "riparazione lavastoviglie Milano, assistenza lavastoviglie Milano, tecnico lavastoviglie, riparare lavastoviglie",
    imageUrl: "/images/lavastoviglie.webp",
    bulletPoints: [
      "Intervento entro 24 ore in tutta Milano e provincia",
      "Tecnici specializzati con esperienza pluriennale su tutte le marche",
      "Preventivi gratuiti e senza impegno",
      "Riparazione direttamente a domicilio",
      "Garanzia di 12 mesi su ricambi e manodopera",
      "Utilizzo di ricambi originali o di qualità equivalente"
    ],
    commonProblems: [
      {
        title: "La lavastoviglie non si avvia",
        description: "Potrebbe essere un problema elettrico, di alimentazione o della scheda elettronica. I nostri tecnici sono in grado di diagnosticare e riparare guasti a questi componenti."
      },
      {
        title: "La lavastoviglie perde acqua",
        description: "Le cause più comuni sono guarnizioni danneggiate, problemi alla pompa o al circuito idraulico. Interveniamo rapidamente per evitare danni all'abitazione."
      },
      {
        title: "I piatti non vengono puliti bene",
        description: "Potrebbe dipendere dai bracci irroratori ostruiti, dalla pompa di lavaggio, dal filtro sporco o dalla resistenza difettosa. Ripariamo o sostituiamo i componenti necessari."
      },
      {
        title: "La lavastoviglie non scarica l'acqua",
        description: "Spesso causato da filtri intasati, pompa di scarico difettosa o ostruzioni nei tubi. Il nostro intervento risolve questi problemi ripristinando il corretto funzionamento."
      },
      {
        title: "La lavastoviglie fa rumore eccessivo",
        description: "Potrebbe essere causato dalla pompa, dal motore o da oggetti estranei. I nostri tecnici individuano la causa del rumore e procedono con la riparazione appropriata."
      }
    ],
    brands: [
        "Samsung", "Grundig", "Whirlpool", "Electrolux", "Hisense", "Siemens", "Indesit", "Candy", "Ariston", "Hoover", "Beko", "Zanussi", "AEG", "Bauknecht", "Ignis", "Hotpoint", "Smeg", "Haier", "Bosch", "Miele", "LG"
    ],
    faqItems: [
      {
        question: "Quanto costa riparare una lavastoviglie?",
        answer: "Il costo dipende dal tipo di guasto. Forniamo sempre un preventivo gratuito prima di procedere con la riparazione. In media, una riparazione standard può variare dai 70€ ai 200€, inclusi manodopera e ricambi."
      },
      {
        question: "Quando conviene riparare invece di sostituire la lavastoviglie?",
        answer: "Di solito conviene riparare se la lavastoviglie ha meno di 6-7 anni, se il costo della riparazione è inferiore al 50% del prezzo di un nuovo elettrodomestico, e se i pezzi di ricambio sono facilmente reperibili."
      },
      {
        question: "Quanto tempo richiede la riparazione?",
        answer: "La maggior parte delle riparazioni viene completata in un singolo intervento che dura tra 1 e 2 ore. Per guasti più complessi potrebbe essere necessario un secondo appuntamento."
      }
    ]
  },
  frigorifero: {
    title: "Riparazione Frigoriferi a Milano",
    description: "Assistenza e riparazione professionale di frigoriferi a Milano. Intervento rapido su tutti i modelli e marche di frigoriferi e congelatori.",
    keywords: "riparazione frigorifero Milano, assistenza frigoriferi Milano, tecnico frigoriferi, riparare frigorifero",
    imageUrl: "/images/frigo_2.webp",
    bulletPoints: [
      "Intervento rapido entro 24 ore in tutta Milano e provincia",
      "Tecnici certificati F-GAS per la gestione dei gas refrigeranti",
      "Preventivi gratuiti e senza impegno",
      "Riparazione direttamente a domicilio",
      "Garanzia di 12 mesi su ricambi e manodopera",
      "Assistenza su frigoriferi domestici e commerciali di tutte le marche"
    ],
    commonProblems: [
      {
        title: "Il frigorifero non raffredda abbastanza",
        description: "Può essere causato da perdite di gas refrigerante, problemi al compressore o al termostato. I nostri tecnici certificati F-GAS possono intervenire su tutti questi componenti."
      },
      {
        title: "Il frigorifero fa rumore eccessivo",
        description: "Potrebbe indicare problemi al compressore, al ventilatore o alla serpentina. Diagnostichiamo la causa e procediamo con la riparazione appropriata."
      },
      {
        title: "Si forma troppo ghiaccio nel congelatore",
        description: "Le cause più comuni sono problemi alla guarnizione della porta, al termostato o al sistema di sbrinamento automatico. Interveniamo per ripristinare il corretto funzionamento."
      },
      {
        title: "Il frigorifero perde acqua all'interno o all'esterno",
        description: "Spesso causato da ostruzioni nel sistema di drenaggio o problemi allo sbrinamento. Il nostro intervento risolve questi problemi prevenendo danni maggiori."
      },
      {
        title: "Il frigorifero non si accende",
        description: "Potrebbe trattarsi di un problema elettrico, al termostato o alla scheda elettronica. I nostri tecnici sono in grado di diagnosticare e riparare guasti a questi componenti."
      }
    ],
    brands: [
        "Samsung", "Grundig", "Whirlpool", "Electrolux", "Hisense", "Siemens", "Indesit", "Candy", "Ariston", "Hoover", "Beko", "Zanussi", "AEG", "Bauknecht", "Ignis", "Hotpoint", "Smeg", "Haier", "Bosch", "Miele", "LG"
    ],
    faqItems: [
      {
        question: "Quanto costa riparare un frigorifero?",
        answer: "Il costo dipende dal tipo di guasto. Forniamo sempre un preventivo gratuito prima di procedere. In media, una riparazione standard può variare dai 80€ ai 250€, inclusi manodopera e ricambi."
      },
      {
        question: "È possibile riparare un frigorifero che perde gas?",
        answer: "Sì, i nostri tecnici sono certificati F-GAS e possono individuare la perdita, ripararla e ricaricare il gas refrigerante secondo le normative vigenti per la protezione ambientale."
      },
      {
        question: "Quanto tempo richiede la riparazione di un frigorifero?",
        answer: "La maggior parte delle riparazioni viene completata in un singolo intervento che dura tra 1 e 3 ore. Per guasti più complessi o che richiedono ordinazione di ricambi specifici potrebbe essere necessario un secondo appuntamento."
      }
    ]
  },
  forno: {
    title: "Riparazione Forni a Milano",
    description: "Assistenza e riparazione professionale di forni elettrici e a gas a Milano. Intervento tecnico qualificato su tutti i modelli e marche.",
    keywords: "riparazione forni Milano, assistenza forno Milano, tecnico forni, riparare forno elettrico",
    imageUrl: "/images/forno.webp",
    bulletPoints: [
      "Intervento entro 24 ore in tutta Milano e provincia",
      "Tecnici qualificati per forni elettrici e a gas",
      "Preventivi gratuiti e senza impegno",
      "Riparazione direttamente a domicilio",
      "Garanzia di 12 mesi su ricambi e manodopera",
      "Certificazioni per interventi in sicurezza su impianti a gas"
    ],
    commonProblems: [
      {
        title: "Il forno non si accende",
        description: "Potrebbe essere un problema elettrico, alla scheda di controllo o all'accensione (nei forni a gas). I nostri tecnici sono in grado di diagnosticare e riparare guasti a questi componenti."
      },
      {
        title: "Il forno non scalda abbastanza",
        description: "Spesso causato da resistenze difettose, termostato guasto o problemi alla ventilazione. Interveniamo per ripristinare la corretta temperatura di cottura."
      },
      {
        title: "Le funzioni del forno non funzionano correttamente",
        description: "Potrebbe dipendere dalla scheda elettronica, dai selettori o dai sensori di temperatura. Ripariamo o sostituiamo i componenti necessari per ripristinare tutte le funzionalità."
      },
      {
        title: "La porta del forno non si chiude bene",
        description: "Generalmente causato da cerniere danneggiate o guarnizioni usurate. Il nostro intervento previene dispersioni di calore e consumi energetici eccessivi."
      },
      {
        title: "La luce interna del forno non funziona",
        description: "Oltre alla semplice sostituzione della lampadina, potrebbe essere necessario intervenire sul portalampada o sul circuito elettrico. I nostri tecnici risolvono qualsiasi problema di illuminazione."
      }
    ],
    brands: [
        "Samsung", "Grundig", "Whirlpool", "Electrolux", "Hisense", "Siemens", "Indesit", "Candy", "Ariston", "Hoover", "Beko", "Zanussi", "AEG", "Bauknecht", "Ignis", "Hotpoint", "Smeg", "Haier", "Bosch", "Miele", "LG"
    ],
    faqItems: [
      {
        question: "È pericoloso usare un forno che non funziona correttamente?",
        answer: "Sì, soprattutto per i forni a gas. Problemi all'impianto possono causare perdite di gas o combustione imperfetta con produzione di monossido di carbonio. Anche nei forni elettrici, malfunzionamenti possono portare a rischi elettrici o surriscaldamenti."
      },
      {
        question: "Quanto costa riparare un forno?",
        answer: "Il costo dipende dal tipo di guasto e dal modello. Forniamo sempre un preventivo gratuito prima di procedere. In media, una riparazione standard può variare dai 70€ ai 180€, inclusi manodopera e ricambi."
      },
      {
        question: "È possibile riparare un forno incassato senza rimuoverlo?",
        answer: "Nella maggior parte dei casi, i nostri tecnici sono in grado di riparare forni da incasso senza estrarli completamente dai mobili, grazie ad attrezzature specializzate e tecniche di intervento specifiche."
      }
    ]
  },
  asciugatrice: {
    title: "Riparazione Asciugatrici a Milano",
    description: "Assistenza e riparazione professionale di asciugatrici a Milano. Intervento tecnico qualificato su tutti i modelli e marche.",
    keywords: "riparazione asciugatrici Milano, assistenza asciugatrice Milano, tecnico asciugatrici, riparare asciugatrice",
    imageUrl: "/images/asciugatrice.webp",
    bulletPoints: [
      "Intervento entro 24 ore in tutta Milano e provincia",
      "Tecnici qualificati per tutti i tipi di asciugatrici",
      "Preventivi gratuiti e senza impegno",
      "Riparazione direttamente a domicilio",
      "Garanzia di 12 mesi su ricambi e manodopera",
      "Competenza su modelli a pompa di calore e a condensazione"
    ],
    commonProblems: [
      {
        title: "L'asciugatrice non si accende",
        description: "Potrebbe essere un problema di alimentazione elettrica, alla scheda o ai circuiti. I nostri tecnici possono diagnosticare e risolvere tutti i guasti elettrici."
      },
      {
        title: "L'asciugatrice non scalda",
        description: "Spesso causato da problemi alla resistenza, al termostato o alla pompa di calore. Interveniamo per ripristinare la corretta temperatura di asciugatura."
      },
      {
        title: "L'asciugatrice non asciuga completamente",
        description: "Potrebbe dipendere dai sensori di umidità, dal filtro ostruito o da problemi al sistema di condensa. Ripariamo tutti i componenti necessari per un'asciugatura efficiente."
      },
      {
        title: "L'asciugatrice fa rumori anomali",
        description: "Generalmente causato da cuscinetti usurati, cinghie danneggiate o oggetti estranei. Il nostro intervento ripristina il funzionamento silenzioso dell'elettrodomestico."
      },
      {
        title: "Errori sul display dell'asciugatrice",
        description: "Diagnostichiamo e risolviamo tutti i codici di errore, intervenendo sulla scheda elettronica, sui sensori o sui componenti danneggiati segnalati dal sistema."
      }
    ],
    brands: [
        "Samsung", "Grundig", "Whirlpool", "Electrolux", "Hisense", "Siemens", "Indesit", "Candy", "Ariston", "Hoover", "Beko", "Zanussi", "AEG", "Bauknecht", "Ignis", "Hotpoint", "Smeg", "Haier", "Bosch", "Miele", "LG"
    ],
    faqItems: [
      {
        question: "Quanto costa riparare un'asciugatrice?",
        answer: "Il costo dipende dal tipo di guasto e dal modello. Forniamo sempre un preventivo gratuito prima di procedere. In media, una riparazione standard può variare dai 70€ ai 200€, inclusi manodopera e ricambi."
      },
      {
        question: "Quando conviene riparare un'asciugatrice invece di sostituirla?",
        answer: "Di solito conviene riparare se l'asciugatrice ha meno di 5-6 anni, se il costo della riparazione è inferiore al 40-50% del prezzo di un nuovo elettrodomestico, e se i pezzi di ricambio sono facilmente reperibili."
      },
      {
        question: "Quanto tempo richiede una riparazione di asciugatrice?",
        answer: "La maggior parte delle riparazioni viene completata in un singolo intervento che dura tra 1 e 2 ore. Per guasti più complessi o che richiedono ordinazione di ricambi specifici potrebbe essere necessario un secondo appuntamento."
      }
    ]
  },
    "piano-cottura": {
    title: "Riparazione Piani Cottura a Milano",
      description: "Assistenza e riparazione professionale di piani cottura a gas, elettrici e a induzione a Milano. Intervento tecnico qualificato su tutti i modelli e marche.",
      keywords: "riparazione piani cottura Milano, assistenza piano cottura Milano, tecnico piani cottura, riparare piano cottura",
      imageUrl: "/images/pianocottura.webp",
      bulletPoints: [
          "Intervento entro 24 ore in tutta Milano e provincia",
          "Tecnici qualificati per piani cottura a gas, elettrici e a induzione",
          "Preventivi gratuiti e senza impegno",
          "Riparazione direttamente a domicilio",
          "Garanzia di 12 mesi su ricambi e manodopera",
          "Certificazioni per interventi in sicurezza su impianti a gas"
    ],
      commonProblems: [
          {
              title: "I fuochi non si accendono",
              description: "Potrebbe essere un problema alle candelette di accensione, al sistema elettrico o alle valvole del gas. I nostri tecnici sono qualificati per intervenire su tutti questi componenti."
          },
          {
              title: "Le piastre elettriche non scaldano",
              description: "Spesso causato da resistenze bruciate, termostati difettosi o problemi ai circuiti elettrici. Interveniamo per ripristinare la corretta funzionalità di riscaldamento."
          },
          {
              title: "Il piano a induzione non funziona",
              description: "Potrebbe dipendere dalla scheda elettronica, dai sensori o dal sistema di controllo touch. Ripariamo tutti i componenti elettronici dei moderni piani a induzione."
          },
          {
              title: "Perdite di gas dal piano cottura",
              description: "Problema serio che richiede intervento immediato. I nostri tecnici certificati possono individuare e riparare qualsiasi perdita nel sistema gas in totale sicurezza."
          },
          {
              title: "I comandi del piano cottura non rispondono",
              description: "Generalmente causato da problemi ai selettori, alla scheda elettronica o ai sensori touch. Il nostro intervento ripristina il pieno controllo dell'elettrodomestico."
          }
    ],
      brands: [
          "Samsung", "Grundig", "Whirlpool", "Electrolux", "Hisense", "Siemens", "Indesit", "Candy", "Ariston", "Hoover", "Beko", "Zanussi", "AEG", "Bauknecht", "Ignis", "Hotpoint", "Smeg", "Haier", "Bosch", "Miele", "LG"
    ],
      faqItems: [
          {
              question: "È pericoloso usare un piano cottura che non funziona correttamente?",
              answer: "Sì, soprattutto per i piani cottura a gas. Problemi all'impianto possono causare perdite di gas pericolose. Anche nei piani elettrici e a induzione, malfunzionamenti possono portare a rischi elettrici o surriscaldamenti."
          },
          {
              question: "Quanto costa riparare un piano cottura?",
              answer: "Il costo dipende dal tipo di guasto e dal modello. Forniamo sempre un preventivo gratuito prima di procedere. In media, una riparazione standard può variare dai 60€ ai 160€, inclusi manodopera e ricambi."
          },
          {
              question: "È possibile riparare un piano cottura incassato senza rimuoverlo?",
              answer: "Nella maggior parte dei casi, i nostri tecnici sono in grado di riparare piani cottura da incasso senza estrarli completamente, grazie ad attrezzature specializzate e tecniche di intervento specifiche."
          }
    ]
  },
    congelatore: {
    title: "Riparazione Congelatori a Milano",
      description: "Assistenza e riparazione professionale di congelatori verticali e orizzontali a Milano. Intervento rapido su tutti i modelli e marche.",
      keywords: "riparazione congelatori Milano, assistenza congelatore Milano, tecnico congelatori, riparare congelatore",
      imageUrl: "/images/frigo_2.webp",
      bulletPoints: [
          "Intervento rapido entro 24 ore in tutta Milano e provincia",
          "Tecnici certificati F-GAS per la gestione dei gas refrigeranti",
          "Preventivi gratuiti e senza impegno",
          "Riparazione direttamente a domicilio",
          "Garanzia di 12 mesi su ricambi e manodopera",
          "Assistenza su congelatori domestici e commerciali di tutte le marche"
    ],
      commonProblems: [
          {
              title: "Il congelatore non congela abbastanza",
              description: "Può essere causato da perdite di gas refrigerante, problemi al compressore o al termostato. I nostri tecnici certificati F-GAS possono intervenire su tutti questi componenti."
          },
          {
              title: "Il congelatore fa rumore eccessivo",
              description: "Potrebbe indicare problemi al compressore, al ventilatore o alla serpentina. Diagnostichiamo la causa e procediamo con la riparazione appropriata per un funzionamento silenzioso."
          },
          {
              title: "Si forma troppo ghiaccio sulle pareti",
              description: "Le cause più comuni sono problemi alla guarnizione della porta, al termostato o al sistema di sbrinamento automatico. Interveniamo per ripristinare il corretto funzionamento."
          },
          {
              title: "Il congelatore perde acqua",
              description: "Spesso causato da ostruzioni nel sistema di drenaggio o problemi allo sbrinamento. Il nostro intervento risolve questi problemi prevenendo danni all'abitazione."
          },
          {
              title: "Il congelatore non si accende",
              description: "Potrebbe trattarsi di un problema elettrico, al termostato o alla scheda elettronica. I nostri tecnici sono in grado di diagnosticare e riparare guasti a questi componenti."
          }
    ],
      brands: [
          "Samsung", "Grundig", "Whirlpool", "Electrolux", "Hisense", "Siemens", "Indesit", "Candy", "Ariston", "Hoover", "Beko", "Zanussi", "AEG", "Bauknecht", "Ignis", "Hotpoint", "Smeg", "Haier", "Bosch", "Miele", "LG"
    ],
      faqItems: [
          {
              question: "Quanto costa riparare un congelatore?",
              answer: "Il costo dipende dal tipo di guasto. Forniamo sempre un preventivo gratuito prima di procedere. In media, una riparazione standard può variare dai 80€ ai 250€, inclusi manodopera e ricambi."
          },
          {
              question: "È possibile riparare un congelatore che perde gas?",
              answer: "Sì, i nostri tecnici sono certificati F-GAS e possono individuare la perdita, ripararla e ricaricare il gas refrigerante secondo le normative vigenti per la protezione ambientale."
          },
          {
              question: "Quando conviene riparare un congelatore invece di sostituirlo?",
              answer: "Di solito conviene riparare se il congelatore ha meno di 8-10 anni, se il costo della riparazione è inferiore al 50% del prezzo di un nuovo elettrodomestico, e se i pezzi di ricambio sono facilmente reperibili."
          }
    ]
  }
};

const ServizioDetail = () => {
  const { servizioId } = useParams<{servizioId: string}>();
  
  const servizio = servizioId && servicesData[servizioId as keyof typeof servicesData] 
    ? servicesData[servizioId as keyof typeof servicesData] 
    : null;
  
  if (!servizio) {
    return (
      <MainLayout>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Servizio non trovato</h1>
          <p className="text-lg mb-8">Il servizio richiesto non è disponibile.</p>
          <a href="/" className="btn-primary">Torna alla Homepage</a>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout
      title={servizio.title}
      description={servizio.description}
      keywords={servizio.keywords}
    >
      <Helmet>
        <title>{servizio.title}</title>
        <meta name="description" content={servizio.description} />
        <meta name="keywords" content={servizio.keywords} />
      </Helmet>
      
      <ServiceDetail 
        title={servizio.title}
        description={servizio.description}
        imageUrl={servizio.imageUrl}
        bulletPoints={servizio.bulletPoints}
        commonProblems={servizio.commonProblems}
        brands={servizio.brands}
        faqItems={servizio.faqItems}
      />
    </MainLayout>
  );
};

export default ServizioDetail;
