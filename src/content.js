// All site text, one entry per language. Taken from the EN / DE / FR CVs; IT / ES are translations of EN.
const stack = ['TypeScript', 'Node.js', 'React', 'REST APIs', 'Git / GitHub'];

export const languages = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'fr', label: 'FR' },
  { code: 'it', label: 'IT' },
  { code: 'es', label: 'ES' },
];

export const content = {
  en: {
    nav: { projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    online: 'Online',
    theme: { light: 'Switch to light mode', dark: 'Switch to dark mode' },
    hero: {
      chip: 'Full-Stack & AI Agent Engineer',
      status: 'Open to work · Germany',
      role: 'Full-Stack Software Engineer',
      tagline:
        'Full-stack developer who enjoys owning a product end to end — from backend APIs to the dashboards people actually use. I build with JavaScript and TypeScript, and I\'m currently exploring how AI agents can automate real workflows rather than just answer questions.',
      stats: [
        { label: 'Location', value: 'Germany', tone: 'cyan' },
        { label: 'Stack', value: 'TS / Node / React', tone: 'purple' },
        { label: 'Languages', value: 'FR · EN · DE', tone: 'green' },
      ],
      cv: 'Download CV',
    },
    project: {
      chip: 'Featured project',
      period: 'June – July 2026 · Freelance',
      name: 'Gastronome.tn',
      kind: 'AI-Driven Restaurant Platform',
      description:
        'A restaurant / food-service platform with an admin dashboard and an AI agent integrated into platform workflows.',
      topology: 'System topology',
      topologyMeta: '4 modules',
      modules: [
        { tag: 'Client', name: 'React Admin Dashboard', desc: 'Administration dashboard for the platform' },
        { tag: 'API core', name: 'Node.js REST API', desc: 'Backend services in TypeScript' },
        { tag: 'Intelligence', name: 'AI Agent', desc: 'Supports & automates platform workflows' },
        { tag: 'Back-office', name: 'Internal Portal', desc: 'Back-office for day-to-day operations' },
      ],
      demo: {
        title: 'App demo',
        meta: 'React Native · Expo',
        screens: [
          { label: 'Restaurants', title: 'Product catalogue', desc: 'Search, browse categories, flash deals and one-tap add to cart.' },
          { label: 'Restaurants', title: 'Live order tracking', desc: 'Step-by-step delivery status from order placed to delivered.' },
          { label: 'Admin', title: 'Admin portal', desc: 'Platform overview and pending orders to confirm or refuse.' },
        ],
      },
      ownership: 'Architecture ownership & milestones',
      bullets: [
        'Designed and built the backend and REST API powering the platform.',
        'Built the administration dashboard and internal back-office.',
        'Integrated an AI agent to support and automate platform workflows.',
        'Owned technical and architectural decisions throughout the project.',
      ],
      stack,
      repo: 'Repository',
      live: 'Live site',
    },
    cargo: {
      chip: 'Pair project · MVP',
      period: '2026',
      name: 'CarGo',
      kind: 'Shipping Marketplace',
      description:
        'A web marketplace connecting people who need to ship cargo with transporters. Shippers post offers with route, weight and size; transporters browse, apply, and get accepted directly — no brokers.',
      demo: {
        title: 'Website demo',
        meta: 'React · Express · MySQL',
        screens: [
          { label: 'Public', title: 'Landing page', desc: 'Value proposition, how it works and sign-up for both roles.' },
          { label: 'Shipper', title: 'Shipper dashboard', desc: 'Post offers, see stats and accept or reject transporter applications.' },
          { label: 'Transporter', title: 'Transporter dashboard', desc: 'Search available offers, apply with a message and follow application status.' },
        ],
      },
      bullets: [
        'Two roles (shipper / transporter) with JWT authentication and bcrypt-hashed passwords.',
        'REST API in Express with Sequelize models for users, offers and applications on MySQL.',
        'Offer lifecycle: create, search, delete, apply, then accept or reject applicants.',
        'Animated React + Vite frontend built with Framer Motion.',
      ],
      stack: ['React', 'Vite', 'Node.js', 'Express', 'Sequelize', 'MySQL', 'JWT'],
      repo: 'Repository',
    },
    batta: {
      chip: 'Team project · RBK',
      period: 'May 2026',
      name: 'Batta.tn',
      kind: 'Live Auction Platform',
      description:
        'An online auction platform where users list items, bid in real time against a countdown, chat during live lots, and keep a watchlist — with an admin dashboard to moderate users and reported listings.',
      demo: {
        title: 'Website demo',
        meta: 'React · NestJS · PostgreSQL',
        screens: [
          { label: 'Public', title: 'Home page', desc: 'Featured live lot, live auctions grid with countdowns and categories.' },
          { label: 'Bidder', title: 'Live auction room', desc: 'Real-time bid activity, place-bid panel and live chat for a single lot.' },
          { label: 'Admin', title: 'Admin dashboard', desc: 'Platform stats, weekly activity chart and reported auctions to review.' },
        ],
      },
      bullets: [
        'NestJS backend with JWT authentication, bcrypt password hashing and a guarded current-user decorator.',
        'Prisma schema on PostgreSQL covering users, auctions, bids, auto-bids, chat, watchlists, reviews and reports.',
        'React 19 + Tailwind CSS frontend: home, auction detail, live auction room, user and admin dashboards.',
        'Scoped as a team from user stories, including bidding rules, outbid/winning notifications and auto-bidding.',
      ],
      stack: ['React', 'Tailwind CSS', 'NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'JWT'],
      repo: 'Repository',
    },
    skills: {
      title: 'Technical skills matrix',
      meta: '6 domains',
      groups: [
        { label: 'Languages', items: ['JavaScript', 'TypeScript'] },
        { label: 'Frontend', items: ['React', 'React Native', 'Vite', 'Tailwind CSS'] },
        { label: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'Socket.IO'] },
        { label: 'AI & Automation', items: ['AI Agent Integration', 'Workflow Automation', 'OpenAI Vision'] },
        { label: 'Tools & Integrations', items: ['Git', 'GitHub', 'Stripe'] },
        { label: 'Databases & ORM', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'Sequelize'] },
      ],
      focus: 'Current focus',
    },
    education: {
      title: 'Education',
      items: [
        { name: 'Full-Stack Development with AI Integration', school: 'RBK', status: 'Completed', done: true },
        { name: 'Computer Science', school: 'University of Applied Sciences Emden/Leer, Germany', period: '2017 – 2022', status: 'Paused' },
      ],
    },
    langs: {
      title: 'Language proficiency',
      footnote: 'Working daily across three languages',
      items: [
        { name: 'French', code: 'FR', level: 'Working proficiency', pct: 70 },
        { name: 'English', code: 'EN', level: 'Fluent', pct: 100 },
        { name: 'German', code: 'DE', level: 'Fluent', pct: 100 },
      ],
    },
    contact: {
      role: 'Full-Stack Software Engineer · Germany',
      copy: 'Copy email',
      copied: 'Copied!',
      cv: 'Download CV',
    },
    footer: 'Built with React.',
  },

  de: {
    nav: { projects: 'Projekte', skills: 'Skills', contact: 'Kontakt' },
    online: 'Online',
    theme: { light: 'Zum hellen Modus wechseln', dark: 'Zum dunklen Modus wechseln' },
    hero: {
      chip: 'Full-Stack- & KI-Agent-Entwickler',
      status: 'Offen für neue Stellen · Deutschland',
      role: 'Full-Stack-Softwareentwickler',
      tagline:
        'Full-Stack-Entwickler, der gerne ein Produkt vollständig eigenverantwortlich betreut — von Backend-APIs bis zu Dashboards, die im Alltag wirklich genutzt werden. Ich entwickle mit JavaScript und TypeScript und beschäftige mich aktuell damit, wie KI-Agenten reale Arbeitsabläufe automatisieren können, statt nur Fragen zu beantworten.',
      stats: [
        { label: 'Standort', value: 'Deutschland', tone: 'cyan' },
        { label: 'Stack', value: 'TS / Node / React', tone: 'purple' },
        { label: 'Sprachen', value: 'FR · EN · DE', tone: 'green' },
      ],
      cv: 'Lebenslauf herunterladen',
    },
    project: {
      chip: 'Ausgewähltes Projekt',
      period: 'Juni – Juli 2026 · Freiberuflich',
      name: 'Gastronome.tn',
      kind: 'KI-gestützte Gastronomie-Plattform',
      description:
        'Eine Plattform für die Gastronomie mit Admin-Dashboard und einem in die Arbeitsabläufe integrierten KI-Agenten.',
      topology: 'Systemarchitektur',
      topologyMeta: '4 Module',
      modules: [
        { tag: 'Client', name: 'React Admin-Dashboard', desc: 'Administrations-Dashboard der Plattform' },
        { tag: 'API-Kern', name: 'Node.js REST-API', desc: 'Backend-Dienste in TypeScript' },
        { tag: 'Intelligenz', name: 'KI-Agent', desc: 'Unterstützt & automatisiert Arbeitsabläufe' },
        { tag: 'Back-Office', name: 'Internes Portal', desc: 'Back-Office für den Tagesbetrieb' },
      ],
      demo: {
        title: 'App-Demo',
        meta: 'React Native · Expo',
        screens: [
          { label: 'Restaurants', title: 'Produktkatalog', desc: 'Suche, Kategorien, Flash-Deals und Warenkorb mit einem Tipp.' },
          { label: 'Restaurants', title: 'Live-Sendungsverfolgung', desc: 'Lieferstatus Schritt für Schritt – von der Bestellung bis zur Zustellung.' },
          { label: 'Admin', title: 'Admin-Portal', desc: 'Plattformübersicht und offene Bestellungen zum Bestätigen oder Ablehnen.' },
        ],
      },
      ownership: 'Architekturverantwortung & Meilensteine',
      bullets: [
        'Konzeption und Entwicklung des Backends und der REST-API der Plattform.',
        'Entwicklung des Administrations-Dashboards und des internen Back-Office.',
        'Integration eines KI-Agenten zur Unterstützung und Automatisierung von Arbeitsabläufen.',
        'Eigenverantwortliche technische und architektonische Entscheidungen über das gesamte Projekt hinweg.',
      ],
      stack,
      repo: 'Repository',
      live: 'Live-Seite',
    },
    cargo: {
      chip: 'Pair-Projekt · MVP',
      period: '2026',
      name: 'CarGo',
      kind: 'Transport-Marktplatz',
      description:
        'Ein Web-Marktplatz, der Menschen mit Frachtbedarf und Transporteure zusammenbringt. Versender veröffentlichen Angebote mit Route, Gewicht und Größe; Transporteure bewerben sich und werden direkt angenommen – ohne Vermittler.',
      demo: {
        title: 'Website-Demo',
        meta: 'React · Express · MySQL',
        screens: [
          { label: 'Öffentlich', title: 'Landingpage', desc: 'Nutzenversprechen, Ablauf und Registrierung für beide Rollen.' },
          { label: 'Versender', title: 'Versender-Dashboard', desc: 'Angebote erstellen, Statistiken sehen und Bewerbungen annehmen oder ablehnen.' },
          { label: 'Transporteur', title: 'Transporteur-Dashboard', desc: 'Angebote durchsuchen, mit Nachricht bewerben und den Status verfolgen.' },
        ],
      },
      bullets: [
        'Zwei Rollen (Versender / Transporteur) mit JWT-Authentifizierung und bcrypt-gehashten Passwörtern.',
        'REST-API mit Express und Sequelize-Modellen für Nutzer, Angebote und Bewerbungen auf MySQL.',
        'Angebots-Lebenszyklus: erstellen, suchen, löschen, bewerben, Bewerber annehmen oder ablehnen.',
        'Animiertes Frontend mit React, Vite und Framer Motion.',
      ],
      stack: ['React', 'Vite', 'Node.js', 'Express', 'Sequelize', 'MySQL', 'JWT'],
      repo: 'Repository',
    },
    batta: {
      chip: 'Teamprojekt · RBK',
      period: 'Mai 2026',
      name: 'Batta.tn',
      kind: 'Live-Auktionsplattform',
      description:
        'Eine Online-Auktionsplattform: Nutzer stellen Artikel ein, bieten in Echtzeit gegen einen Countdown, chatten während Live-Auktionen und führen eine Merkliste – mit Admin-Dashboard zur Moderation von Nutzern und gemeldeten Angeboten.',
      demo: {
        title: 'Website-Demo',
        meta: 'React · NestJS · PostgreSQL',
        screens: [
          { label: 'Öffentlich', title: 'Startseite', desc: 'Hervorgehobene Live-Auktion, Auktionsraster mit Countdowns und Kategorien.' },
          { label: 'Bieter', title: 'Live-Auktionsraum', desc: 'Gebote in Echtzeit, Bietpanel und Live-Chat zu einem Los.' },
          { label: 'Admin', title: 'Admin-Dashboard', desc: 'Plattformstatistiken, Wochenaktivität und gemeldete Auktionen zur Prüfung.' },
        ],
      },
      bullets: [
        'NestJS-Backend mit JWT-Authentifizierung, bcrypt-Passwort-Hashing und geschütztem Current-User-Decorator.',
        'Prisma-Schema auf PostgreSQL für Nutzer, Auktionen, Gebote, Auto-Gebote, Chat, Merklisten, Bewertungen und Meldungen.',
        'Frontend mit React 19 und Tailwind CSS: Startseite, Auktionsdetail, Live-Auktion, Nutzer- und Admin-Dashboard.',
        'Im Team anhand von User Stories geplant, u. a. Bietregeln, Überboten-/Gewinnbenachrichtigungen und Auto-Bieten.',
      ],
      stack: ['React', 'Tailwind CSS', 'NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'JWT'],
      repo: 'Repository',
    },
    skills: {
      title: 'Technische Fähigkeiten',
      meta: '6 Bereiche',
      groups: [
        { label: 'Programmiersprachen', items: ['JavaScript', 'TypeScript'] },
        { label: 'Frontend', items: ['React', 'React Native', 'Vite', 'Tailwind CSS'] },
        { label: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'Socket.IO'] },
        { label: 'KI & Automatisierung', items: ['KI-Agent-Integration', 'Workflow-Automatisierung', 'OpenAI Vision'] },
        { label: 'Tools & Integrationen', items: ['Git', 'GitHub', 'Stripe'] },
        { label: 'Datenbanken & ORM', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'Sequelize'] },
      ],
      focus: 'Aktueller Fokus',
    },
    education: {
      title: 'Ausbildung',
      items: [
        { name: 'Full-Stack-Entwicklung mit KI-Integration', school: 'RBK', status: 'Abgeschlossen', done: true },
        { name: 'Informatik', school: 'Hochschule Emden/Leer, Deutschland', period: '2017 – 2022', status: 'Pausiert' },
      ],
    },
    langs: {
      title: 'Sprachkenntnisse',
      footnote: 'Täglich in drei Sprachen unterwegs',
      items: [
        { name: 'Französisch', code: 'FR', level: 'Gute Kenntnisse', pct: 70 },
        { name: 'Englisch', code: 'EN', level: 'Fließend', pct: 100 },
        { name: 'Deutsch', code: 'DE', level: 'Fließend', pct: 100 },
      ],
    },
    contact: {
      role: 'Full-Stack-Softwareentwickler · Deutschland',
      copy: 'E-Mail kopieren',
      copied: 'Kopiert!',
      cv: 'Lebenslauf herunterladen',
    },
    footer: 'Mit React entwickelt.',
  },

  fr: {
    nav: { projects: 'Projets', skills: 'Compétences', contact: 'Contact' },
    online: 'En ligne',
    theme: { light: 'Passer en mode clair', dark: 'Passer en mode sombre' },
    hero: {
      chip: 'Ingénieur Full-Stack & Agents IA',
      status: 'Disponible · Allemagne',
      role: 'Ingénieur Full-Stack',
      tagline:
        'Développeur Full-Stack qui aime porter un produit de bout en bout — des API backend aux tableaux de bord réellement utilisés au quotidien. Je développe avec JavaScript et TypeScript, et j\'explore actuellement comment les agents IA peuvent automatiser de vrais workflows plutôt que se limiter à répondre à des questions.',
      stats: [
        { label: 'Localisation', value: 'Allemagne', tone: 'cyan' },
        { label: 'Stack', value: 'TS / Node / React', tone: 'purple' },
        { label: 'Langues', value: 'FR · EN · DE', tone: 'green' },
      ],
      cv: 'Télécharger le CV',
    },
    project: {
      chip: 'Projet phare',
      period: 'Juin – Juillet 2026 · Freelance',
      name: 'Gastronome.tn',
      kind: 'Plateforme de restauration pilotée par l\'IA',
      description:
        'Une plateforme pour la restauration avec un tableau de bord d\'administration et un agent IA intégré aux workflows de la plateforme.',
      topology: 'Architecture du système',
      topologyMeta: '4 modules',
      modules: [
        { tag: 'Client', name: 'Dashboard admin React', desc: 'Tableau de bord d\'administration' },
        { tag: 'Cœur API', name: 'API REST Node.js', desc: 'Services backend en TypeScript' },
        { tag: 'Intelligence', name: 'Agent IA', desc: 'Soutient & automatise les workflows' },
        { tag: 'Back-office', name: 'Portail interne', desc: 'Back-office pour l\'activité quotidienne' },
      ],
      demo: {
        title: 'Démo de l\'app',
        meta: 'React Native · Expo',
        screens: [
          { label: 'Restaurants', title: 'Catalogue produits', desc: 'Recherche, catégories, offres flash et ajout au panier en un geste.' },
          { label: 'Restaurants', title: 'Suivi de commande en direct', desc: 'Statut de livraison étape par étape, de la commande à la livraison.' },
          { label: 'Admin', title: 'Portail admin', desc: 'Vue d\'ensemble de la plateforme et commandes à confirmer ou refuser.' },
        ],
      },
      ownership: 'Responsabilité de l\'architecture & jalons',
      bullets: [
        'Conception et développement du backend et de l\'API REST de la plateforme.',
        'Développement du tableau de bord d\'administration et du back-office interne.',
        'Intégration d\'un agent IA pour soutenir et automatiser les workflows de la plateforme.',
        'Responsable des décisions techniques et architecturales tout au long du projet.',
      ],
      stack,
      repo: 'Dépôt',
      live: 'Site en ligne',
    },
    cargo: {
      chip: 'Projet en binôme · MVP',
      period: '2026',
      name: 'CarGo',
      kind: 'Marketplace de transport',
      description:
        'Une marketplace web qui met en relation les personnes ayant une marchandise à expédier et des transporteurs. Les expéditeurs publient des offres (trajet, poids, taille) ; les transporteurs postulent et sont acceptés directement, sans intermédiaire.',
      demo: {
        title: 'Démo du site',
        meta: 'React · Express · MySQL',
        screens: [
          { label: 'Public', title: 'Page d\'accueil', desc: 'Proposition de valeur, fonctionnement et inscription pour les deux rôles.' },
          { label: 'Expéditeur', title: 'Tableau de bord expéditeur', desc: 'Publier des offres, suivre les stats et accepter ou refuser les candidatures.' },
          { label: 'Transporteur', title: 'Tableau de bord transporteur', desc: 'Rechercher des offres, postuler avec un message et suivre le statut.' },
        ],
      },
      bullets: [
        'Deux rôles (expéditeur / transporteur) avec authentification JWT et mots de passe hachés avec bcrypt.',
        'API REST Express avec des modèles Sequelize pour utilisateurs, offres et candidatures sur MySQL.',
        'Cycle de vie des offres : créer, rechercher, supprimer, postuler, puis accepter ou refuser.',
        'Frontend React + Vite animé avec Framer Motion.',
      ],
      stack: ['React', 'Vite', 'Node.js', 'Express', 'Sequelize', 'MySQL', 'JWT'],
      repo: 'Dépôt',
    },
    batta: {
      chip: 'Projet d\'équipe · RBK',
      period: 'Mai 2026',
      name: 'Batta.tn',
      kind: 'Plateforme d\'enchères en direct',
      description:
        'Une plateforme d\'enchères en ligne : les utilisateurs mettent des objets en vente, enchérissent en temps réel face à un compte à rebours, discutent pendant les ventes en direct et gèrent une liste de suivi — avec un tableau de bord admin pour modérer utilisateurs et annonces signalées.',
      demo: {
        title: 'Démo du site',
        meta: 'React · NestJS · PostgreSQL',
        screens: [
          { label: 'Public', title: 'Page d\'accueil', desc: 'Lot en direct mis en avant, grille d\'enchères avec comptes à rebours et catégories.' },
          { label: 'Enchérisseur', title: 'Salle d\'enchère en direct', desc: 'Activité des enchères en temps réel, panneau d\'enchère et chat en direct.' },
          { label: 'Admin', title: 'Tableau de bord admin', desc: 'Statistiques, activité hebdomadaire et enchères signalées à examiner.' },
        ],
      },
      bullets: [
        'Backend NestJS avec authentification JWT, hachage bcrypt et décorateur d\'utilisateur courant protégé.',
        'Schéma Prisma sur PostgreSQL : utilisateurs, enchères, offres, enchères auto, chat, listes de suivi, avis et signalements.',
        'Frontend React 19 + Tailwind CSS : accueil, détail d\'enchère, salle en direct, tableaux de bord utilisateur et admin.',
        'Périmètre défini en équipe à partir de user stories : règles d\'enchère, notifications de surenchère/victoire, enchères auto.',
      ],
      stack: ['React', 'Tailwind CSS', 'NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'JWT'],
      repo: 'Dépôt',
    },
    skills: {
      title: 'Compétences techniques',
      meta: '6 domaines',
      groups: [
        { label: 'Langages', items: ['JavaScript', 'TypeScript'] },
        { label: 'Frontend', items: ['React', 'React Native', 'Vite', 'Tailwind CSS'] },
        { label: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'Socket.IO'] },
        { label: 'IA & Automatisation', items: ['Intégration d\'agents IA', 'Automatisation de workflows', 'OpenAI Vision'] },
        { label: 'Outils & Intégrations', items: ['Git', 'GitHub', 'Stripe'] },
        { label: 'Bases de données & ORM', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'Sequelize'] },
      ],
      focus: 'Focus actuel',
    },
    education: {
      title: 'Formation',
      items: [
        { name: 'Développement Full-Stack avec Intégration IA', school: 'RBK', status: 'Terminée', done: true },
        { name: 'Informatique', school: 'Université des Sciences Appliquées d\'Emden/Leer, Allemagne', period: '2017 – 2022', status: 'En pause' },
      ],
    },
    langs: {
      title: 'Niveau de langues',
      footnote: 'Trois langues au quotidien',
      items: [
        { name: 'Français', code: 'FR', level: 'Niveau professionnel', pct: 70 },
        { name: 'Anglais', code: 'EN', level: 'Courant', pct: 100 },
        { name: 'Allemand', code: 'DE', level: 'Courant', pct: 100 },
      ],
    },
    contact: {
      role: 'Ingénieur Full-Stack · Allemagne',
      copy: 'Copier l\'e-mail',
      copied: 'Copié !',
      cv: 'Télécharger le CV',
    },
    footer: 'Développé avec React.',
  },

  it: {
    nav: { projects: 'Progetti', skills: 'Competenze', contact: 'Contatti' },
    online: 'Online',
    theme: { light: 'Passa alla modalità chiara', dark: 'Passa alla modalità scura' },
    hero: {
      chip: 'Ingegnere Full-Stack & Agenti IA',
      status: 'Disponibile · Germania',
      role: 'Ingegnere Software Full-Stack',
      tagline:
        'Sviluppatore full-stack a cui piace seguire un prodotto dall\'inizio alla fine — dalle API backend alle dashboard che le persone usano davvero. Lavoro con JavaScript e TypeScript e al momento sto esplorando come gli agenti IA possano automatizzare flussi di lavoro reali, invece di limitarsi a rispondere alle domande.',
      stats: [
        { label: 'Sede', value: 'Germania', tone: 'cyan' },
        { label: 'Stack', value: 'TS / Node / React', tone: 'purple' },
        { label: 'Lingue', value: 'FR · EN · DE', tone: 'green' },
      ],
      cv: 'Scarica CV',
    },
    project: {
      chip: 'Progetto in evidenza',
      period: 'Giugno – Luglio 2026 · Freelance',
      name: 'Gastronome.tn',
      kind: 'Piattaforma per la ristorazione basata sull\'IA',
      description:
        'Una piattaforma per la ristorazione con dashboard di amministrazione e un agente IA integrato nei flussi di lavoro della piattaforma.',
      topology: 'Architettura del sistema',
      topologyMeta: '4 moduli',
      modules: [
        { tag: 'Client', name: 'Dashboard admin React', desc: 'Dashboard di amministrazione della piattaforma' },
        { tag: 'Core API', name: 'API REST Node.js', desc: 'Servizi backend in TypeScript' },
        { tag: 'Intelligenza', name: 'Agente IA', desc: 'Supporta e automatizza i flussi di lavoro' },
        { tag: 'Back-office', name: 'Portale interno', desc: 'Back-office per le attività quotidiane' },
      ],
      demo: {
        title: 'Demo dell\'app',
        meta: 'React Native · Expo',
        screens: [
          { label: 'Ristoranti', title: 'Catalogo prodotti', desc: 'Ricerca, categorie, offerte lampo e aggiunta al carrello con un tocco.' },
          { label: 'Ristoranti', title: 'Tracciamento ordini in tempo reale', desc: 'Stato della consegna passo dopo passo, dall\'ordine alla consegna.' },
          { label: 'Admin', title: 'Portale admin', desc: 'Panoramica della piattaforma e ordini in attesa da confermare o rifiutare.' },
        ],
      },
      ownership: 'Responsabilità dell\'architettura & traguardi',
      bullets: [
        'Progettazione e sviluppo del backend e dell\'API REST della piattaforma.',
        'Sviluppo della dashboard di amministrazione e del back-office interno.',
        'Integrazione di un agente IA per supportare e automatizzare i flussi di lavoro della piattaforma.',
        'Responsabile delle decisioni tecniche e architetturali per tutta la durata del progetto.',
      ],
      stack,
      repo: 'Repository',
      live: 'Sito live',
    },
    cargo: {
      chip: 'Progetto in coppia · MVP',
      period: '2026',
      name: 'CarGo',
      kind: 'Marketplace per il trasporto merci',
      description:
        'Un marketplace web che mette in contatto chi deve spedire merci con i trasportatori. I mittenti pubblicano offerte con percorso, peso e dimensioni; i trasportatori si candidano e vengono accettati direttamente, senza intermediari.',
      demo: {
        title: 'Demo del sito',
        meta: 'React · Express · MySQL',
        screens: [
          { label: 'Pubblico', title: 'Landing page', desc: 'Proposta di valore, funzionamento e registrazione per entrambi i ruoli.' },
          { label: 'Mittente', title: 'Dashboard mittente', desc: 'Pubblica offerte, consulta le statistiche e accetta o rifiuta le candidature.' },
          { label: 'Trasportatore', title: 'Dashboard trasportatore', desc: 'Cerca offerte, candidati con un messaggio e segui lo stato delle candidature.' },
        ],
      },
      bullets: [
        'Due ruoli (mittente / trasportatore) con autenticazione JWT e password cifrate con bcrypt.',
        'API REST in Express con modelli Sequelize per utenti, offerte e candidature su MySQL.',
        'Ciclo di vita delle offerte: creare, cercare, eliminare, candidarsi, poi accettare o rifiutare.',
        'Frontend React + Vite animato con Framer Motion.',
      ],
      stack: ['React', 'Vite', 'Node.js', 'Express', 'Sequelize', 'MySQL', 'JWT'],
      repo: 'Repository',
    },
    batta: {
      chip: 'Progetto di team · RBK',
      period: 'Maggio 2026',
      name: 'Batta.tn',
      kind: 'Piattaforma di aste dal vivo',
      description:
        'Una piattaforma di aste online dove gli utenti mettono in vendita oggetti, fanno offerte in tempo reale contro un conto alla rovescia, chattano durante le aste dal vivo e gestiscono una lista dei preferiti — con una dashboard admin per moderare utenti e annunci segnalati.',
      demo: {
        title: 'Demo del sito',
        meta: 'React · NestJS · PostgreSQL',
        screens: [
          { label: 'Pubblico', title: 'Home page', desc: 'Lotto dal vivo in evidenza, griglia delle aste con conti alla rovescia e categorie.' },
          { label: 'Offerente', title: 'Sala d\'asta dal vivo', desc: 'Offerte in tempo reale, pannello per offrire e chat dal vivo per un singolo lotto.' },
          { label: 'Admin', title: 'Dashboard admin', desc: 'Statistiche, attività settimanale e aste segnalate da esaminare.' },
        ],
      },
      bullets: [
        'Backend NestJS con autenticazione JWT, hashing delle password con bcrypt e decorator dell\'utente corrente protetto.',
        'Schema Prisma su PostgreSQL per utenti, aste, offerte, offerte automatiche, chat, preferiti, recensioni e segnalazioni.',
        'Frontend React 19 + Tailwind CSS: home, dettaglio asta, sala d\'asta dal vivo, dashboard utente e admin.',
        'Perimetro definito in team a partire da user story, tra cui regole d\'offerta, notifiche di rilancio/vittoria e offerte automatiche.',
      ],
      stack: ['React', 'Tailwind CSS', 'NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'JWT'],
      repo: 'Repository',
    },
    skills: {
      title: 'Competenze tecniche',
      meta: '6 aree',
      groups: [
        { label: 'Linguaggi', items: ['JavaScript', 'TypeScript'] },
        { label: 'Frontend', items: ['React', 'React Native', 'Vite', 'Tailwind CSS'] },
        { label: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'API REST', 'Socket.IO'] },
        { label: 'IA & Automazione', items: ['Integrazione di agenti IA', 'Automazione dei flussi di lavoro', 'OpenAI Vision'] },
        { label: 'Strumenti & Integrazioni', items: ['Git', 'GitHub', 'Stripe'] },
        { label: 'Database & ORM', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'Sequelize'] },
      ],
      focus: 'Focus attuale',
    },
    education: {
      title: 'Formazione',
      items: [
        { name: 'Sviluppo Full-Stack con integrazione IA', school: 'RBK', status: 'Completato', done: true },
        { name: 'Informatica', school: 'Università di Scienze Applicate di Emden/Leer, Germania', period: '2017 – 2022', status: 'In pausa' },
      ],
    },
    langs: {
      title: 'Competenze linguistiche',
      footnote: 'Lavoro ogni giorno in tre lingue',
      items: [
        { name: 'Francese', code: 'FR', level: 'Buona conoscenza professionale', pct: 70 },
        { name: 'Inglese', code: 'EN', level: 'Fluente', pct: 100 },
        { name: 'Tedesco', code: 'DE', level: 'Fluente', pct: 100 },
      ],
    },
    contact: {
      role: 'Ingegnere Software Full-Stack · Germania',
      copy: 'Copia email',
      copied: 'Copiato!',
      cv: 'Scarica CV',
    },
    footer: 'Realizzato con React.',
  },

  es: {
    nav: { projects: 'Proyectos', skills: 'Habilidades', contact: 'Contacto' },
    online: 'En línea',
    theme: { light: 'Cambiar a modo claro', dark: 'Cambiar a modo oscuro' },
    hero: {
      chip: 'Ingeniero Full-Stack y de Agentes IA',
      status: 'Disponible · Alemania',
      role: 'Ingeniero de Software Full-Stack',
      tagline:
        'Desarrollador full-stack al que le gusta encargarse de un producto de principio a fin — desde las APIs del backend hasta los paneles que la gente usa de verdad. Trabajo con JavaScript y TypeScript, y actualmente exploro cómo los agentes de IA pueden automatizar flujos de trabajo reales en lugar de limitarse a responder preguntas.',
      stats: [
        { label: 'Ubicación', value: 'Alemania', tone: 'cyan' },
        { label: 'Stack', value: 'TS / Node / React', tone: 'purple' },
        { label: 'Idiomas', value: 'FR · EN · DE', tone: 'green' },
      ],
      cv: 'Descargar CV',
    },
    project: {
      chip: 'Proyecto destacado',
      period: 'Junio – Julio 2026 · Freelance',
      name: 'Gastronome.tn',
      kind: 'Plataforma de restauración impulsada por IA',
      description:
        'Una plataforma para restaurantes y hostelería con un panel de administración y un agente de IA integrado en los flujos de trabajo de la plataforma.',
      topology: 'Arquitectura del sistema',
      topologyMeta: '4 módulos',
      modules: [
        { tag: 'Cliente', name: 'Panel de administración React', desc: 'Panel de administración de la plataforma' },
        { tag: 'Núcleo API', name: 'API REST Node.js', desc: 'Servicios backend en TypeScript' },
        { tag: 'Inteligencia', name: 'Agente IA', desc: 'Apoya y automatiza los flujos de trabajo' },
        { tag: 'Back-office', name: 'Portal interno', desc: 'Back-office para la operativa diaria' },
      ],
      demo: {
        title: 'Demo de la app',
        meta: 'React Native · Expo',
        screens: [
          { label: 'Restaurantes', title: 'Catálogo de productos', desc: 'Búsqueda, categorías, ofertas flash y añadir al carrito con un toque.' },
          { label: 'Restaurantes', title: 'Seguimiento de pedidos en vivo', desc: 'Estado de la entrega paso a paso, desde el pedido hasta la entrega.' },
          { label: 'Admin', title: 'Portal de administración', desc: 'Resumen de la plataforma y pedidos pendientes para confirmar o rechazar.' },
        ],
      },
      ownership: 'Responsabilidad de la arquitectura e hitos',
      bullets: [
        'Diseñé y desarrollé el backend y la API REST de la plataforma.',
        'Desarrollé el panel de administración y el back-office interno.',
        'Integré un agente de IA para apoyar y automatizar los flujos de trabajo de la plataforma.',
        'Asumí las decisiones técnicas y de arquitectura durante todo el proyecto.',
      ],
      stack,
      repo: 'Repositorio',
      live: 'Sitio en vivo',
    },
    cargo: {
      chip: 'Proyecto en pareja · MVP',
      period: '2026',
      name: 'CarGo',
      kind: 'Marketplace de transporte de mercancías',
      description:
        'Un marketplace web que conecta a quienes necesitan enviar mercancías con transportistas. Los remitentes publican ofertas con ruta, peso y tamaño; los transportistas se postulan y son aceptados directamente, sin intermediarios.',
      demo: {
        title: 'Demo del sitio',
        meta: 'React · Express · MySQL',
        screens: [
          { label: 'Público', title: 'Página de inicio', desc: 'Propuesta de valor, cómo funciona y registro para ambos roles.' },
          { label: 'Remitente', title: 'Panel del remitente', desc: 'Publicar ofertas, ver estadísticas y aceptar o rechazar postulaciones.' },
          { label: 'Transportista', title: 'Panel del transportista', desc: 'Buscar ofertas, postularse con un mensaje y seguir el estado de las postulaciones.' },
        ],
      },
      bullets: [
        'Dos roles (remitente / transportista) con autenticación JWT y contraseñas cifradas con bcrypt.',
        'API REST en Express con modelos Sequelize para usuarios, ofertas y postulaciones sobre MySQL.',
        'Ciclo de vida de las ofertas: crear, buscar, eliminar, postularse y luego aceptar o rechazar.',
        'Frontend React + Vite animado con Framer Motion.',
      ],
      stack: ['React', 'Vite', 'Node.js', 'Express', 'Sequelize', 'MySQL', 'JWT'],
      repo: 'Repositorio',
    },
    batta: {
      chip: 'Proyecto en equipo · RBK',
      period: 'Mayo 2026',
      name: 'Batta.tn',
      kind: 'Plataforma de subastas en vivo',
      description:
        'Una plataforma de subastas online donde los usuarios publican artículos, pujan en tiempo real contra una cuenta atrás, chatean durante los lotes en vivo y guardan una lista de seguimiento — con un panel de administración para moderar usuarios y anuncios denunciados.',
      demo: {
        title: 'Demo del sitio',
        meta: 'React · NestJS · PostgreSQL',
        screens: [
          { label: 'Público', title: 'Página de inicio', desc: 'Lote en vivo destacado, cuadrícula de subastas con cuentas atrás y categorías.' },
          { label: 'Pujador', title: 'Sala de subasta en vivo', desc: 'Pujas en tiempo real, panel para pujar y chat en vivo de un lote.' },
          { label: 'Admin', title: 'Panel de administración', desc: 'Estadísticas, actividad semanal y subastas denunciadas para revisar.' },
        ],
      },
      bullets: [
        'Backend NestJS con autenticación JWT, hash de contraseñas con bcrypt y decorador protegido del usuario actual.',
        'Esquema Prisma sobre PostgreSQL para usuarios, subastas, pujas, pujas automáticas, chat, listas de seguimiento, reseñas y denuncias.',
        'Frontend React 19 + Tailwind CSS: inicio, detalle de subasta, sala en vivo y paneles de usuario y administración.',
        'Alcance definido en equipo a partir de historias de usuario, incluidas reglas de puja, avisos de puja superada/victoria y pujas automáticas.',
      ],
      stack: ['React', 'Tailwind CSS', 'NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'JWT'],
      repo: 'Repositorio',
    },
    skills: {
      title: 'Habilidades técnicas',
      meta: '6 áreas',
      groups: [
        { label: 'Lenguajes', items: ['JavaScript', 'TypeScript'] },
        { label: 'Frontend', items: ['React', 'React Native', 'Vite', 'Tailwind CSS'] },
        { label: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'APIs REST', 'Socket.IO'] },
        { label: 'IA y automatización', items: ['Integración de agentes IA', 'Automatización de flujos de trabajo', 'OpenAI Vision'] },
        { label: 'Herramientas e integraciones', items: ['Git', 'GitHub', 'Stripe'] },
        { label: 'Bases de datos y ORM', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'Sequelize'] },
      ],
      focus: 'Enfoque actual',
    },
    education: {
      title: 'Formación',
      items: [
        { name: 'Desarrollo Full-Stack con integración de IA', school: 'RBK', status: 'Completado', done: true },
        { name: 'Informática', school: 'Universidad de Ciencias Aplicadas de Emden/Leer, Alemania', period: '2017 – 2022', status: 'En pausa' },
      ],
    },
    langs: {
      title: 'Nivel de idiomas',
      footnote: 'Trabajo a diario en tres idiomas',
      items: [
        { name: 'Francés', code: 'FR', level: 'Nivel profesional', pct: 70 },
        { name: 'Inglés', code: 'EN', level: 'Fluido', pct: 100 },
        { name: 'Alemán', code: 'DE', level: 'Fluido', pct: 100 },
      ],
    },
    contact: {
      role: 'Ingeniero de Software Full-Stack · Alemania',
      copy: 'Copiar email',
      copied: '¡Copiado!',
      cv: 'Descargar CV',
    },
    footer: 'Hecho con React.',
  },
};
