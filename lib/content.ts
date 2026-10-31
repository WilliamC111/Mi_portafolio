export const profile = {
  name: "William Cely López",
  role: "Ingeniero de Sistemas y Computación",
  location: "Bogotá, Colombia",
  email: "william.d.cely@gmail.com",
  phone: "+57 313 362 0731",
  github: "https://github.com/WilliamC111",
  linkedin: "https://linkedin.com/in/williamcelylopez",
};

export const projects = [
  {
    number: "01",
    name: { es: "E&S Boutique", en: "E&S Boutique" },
    category: {
      es: "E-commerce · Producto digital",
      en: "E-commerce · Digital product",
    },
    description: {
      es: "Tienda en línea con catálogo público y panel de administración. Integra autenticación, gestión de productos e imágenes con Firebase.",
      en: "Online store with a public catalog and admin dashboard, integrating Firebase authentication, product management, and image storage.",
    },
    stack: ["JavaScript", "Firebase", "Firestore", "Storage"],
    href: "https://es-boutique.web.app/",
    repo: "https://github.com/WilliamC111/ES_BOUTIQUE",
    visual: "boutique",
    visualLabel: { es: "E&S / colección", en: "E&S / collection" },
  },
  {
    number: "02",
    name: { es: "EcoAgromatic", en: "EcoAgromatic" },
    category: {
      es: "Web · Tecnología para el agro",
      en: "Web · Agricultural technology",
    },
    description: {
      es: "Sitio corporativo para una empresa de soluciones de automatización agrícola, energía solar, instalaciones eléctricas e hidroponía.",
      en: "Corporate website for a company delivering agricultural automation, solar energy, electrical installation, and hydroponic solutions.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://ecoagromatic.com/",
    repo: "https://github.com/WilliamC111/ecoagromatic",
    visual: "agro",
    visualLabel: {
      es: "Tecnología que cultiva futuro",
      en: "Technology growing the future",
    },
  },
  {
    number: "03",
    name: { es: "Pet-Center", en: "Pet-Center" },
    category: { es: "Software · Gestión", en: "Software · Management" },
    description: {
      es: "Aplicación de equipo para administrar un centro de mascotas, con persistencia en base de datos relacional.",
      en: "Team-built application for managing a pet care center, with relational database persistence.",
    },
    stack: ["Java", "MySQL", "JDK 17"],
    href: "https://github.com/WilliamC111/Pet-Center",
    visual: "pet",
    visualLabel: { es: "Gestión de mascotas", en: "Pet care management" },
  },
  {
    number: "04",
    name: { es: "Simulación Monte Carlo", en: "Monte Carlo Simulation" },
    category: { es: "Python · Modelado", en: "Python · Modeling" },
    description: {
      es: "Simulación de carreras de caballos mediante el método Monte Carlo, una aproximación computacional a experimentos aleatorios.",
      en: "Horse-race simulation using the Monte Carlo method, a computational approach to random experiments.",
    },
    stack: ["Python", "Monte Carlo"],
    href: "https://github.com/WilliamC111/Simulacion-Montecarlo-Carreras-de-Caballo",
    visual: "data",
    visualLabel: { es: "MÉTODO MONTE CARLO", en: "MONTE CARLO METHOD" },
  },
  {
    number: "05",
    name: { es: "Chatbot por corpus", en: "Corpus-based chatbot" },
    category: {
      es: "Python · Procesamiento de lenguaje",
      en: "Python · Language processing",
    },
    description: {
      es: "Chatbot de escritorio que consulta corpus temáticos en JSON y encuentra preguntas similares para responder.",
      en: "Desktop chatbot that queries topic-based JSON corpora and matches similar questions to find responses.",
    },
    stack: ["Python", "Tkinter", "JSON", "difflib"],
    href: "https://github.com/WilliamC111/Chatbot-py-gen",
    repo: "https://github.com/WilliamC111/Chatbot-py-gen",
    visual: "chatbot",
    visualLabel: { es: "PREGUNTA / RESPUESTA", en: "QUESTION / ANSWER" },
  },
  {
    number: "06",
    name: { es: "Gestión de taquilla", en: "Cinema ticket management" },
    category: {
      es: "Java · Aplicación de escritorio",
      en: "Java · Desktop application",
    },
    description: {
      es: "Aplicación de escritorio para administrar películas, salas, horarios, sillas y venta de entradas, organizada en modelo, presentador y vistas.",
      en: "Desktop application for managing movies, rooms, showtimes, seats, and ticket sales, organized into model, presenter, and view layers.",
    },
    stack: ["Java", "Swing", "MVP"],
    href: "https://github.com/WilliamC111/Cine",
    repo: "https://github.com/WilliamC111/Cine",
    visual: "cinema",
    visualLabel: { es: "PELÍCULA / SALA / FUNCIÓN", en: "MOVIE / ROOM / SHOWTIME" },
  },
];

export const experience = [
  {
    date: { es: "Ene — Jul 2026", en: "Jan — Jul 2026" },
    company: "Avianca",
    role: {
      es: "Practicante · Gerencia de Contabilidad de Ingresos",
      en: "Intern · Revenue Accounting Management",
    },
    details: {
      es: [
        "Seguimiento de incidentes y documentación para apoyar su resolución oportuna.",
        "Gestión y seguimiento de Product Backlog Items en un equipo ágil.",
        "Pruebas funcionales de plataformas internas y coordinación con equipos técnicos.",
      ],
      en: [
        "Tracked and documented incidents to support timely resolution.",
        "Managed and tracked Product Backlog Items within an agile team.",
        "Ran functional tests on internal platforms and coordinated findings with technical teams.",
      ],
    },
  },
  {
    date: { es: "Jun 2023 — Sep 2024", en: "Jun 2023 — Sep 2024" },
    company: "Velero",
    role: {
      es: "Elicitación y desarrollo",
      en: "Requirements elicitation & development",
    },
    details: {
      es: [
        "Elicitación de requisitos, negociación con clientes y elaboración de casos de uso.",
        "Gestión de bases de datos relacionales, revisión de consultas y atención de tickets.",
        "Participación en desarrollo backend dentro de un equipo Scrum.",
      ],
      en: [
        "Elicited requirements, negotiated with clients, and prepared use cases.",
        "Managed relational databases, reviewed queries, and handled support tickets.",
        "Contributed to backend development within a Scrum team.",
      ],
    },
  },
];

export const skills = [
  {
    title: { es: "Desarrollo de software", en: "Software development" },
    items: ["Java", "Spring Boot", "JavaScript", "Vue.js"],
  },
  {
    title: { es: "Analítica de datos", en: "Data analytics" },
    items: ["Power BI", "Python", "SQL"],
  },
  {
    title: {
      es: "Bases de datos e IT",
      en: "Databases & IT",
    },
    items: ["MySQL", "Oracle", "SQL Server", "MongoDB", "Redis", "Docker"],
  },
  {
    title: { es: "Colaboración", en: "Collaboration" },
    items: [
      "Elicitación de requisitos",
      "Agile",
      "Git y GitHub",
    ],
  },
];

export const certifications = [
  {
    name: { es: "Data Analytics Essentials", en: "Data Analytics Essentials" },
    issuer: "Cisco Networking Academy",
    year: "2025",
  },
  {
    name: {
      es: "Introduction to Cybersecurity",
      en: "Introduction to Cybersecurity",
    },
    issuer: "Cisco Networking Academy",
    year: "2025",
  },
  {
    name: { es: "English for IT", en: "English for IT" },
    issuer: "Cisco Networking Academy · Open EDG",
    year: "2025",
  },
  {
    name: { es: "Networking Basics", en: "Networking Basics" },
    issuer: "Cisco Networking Academy",
    year: "2024",
  },
];
