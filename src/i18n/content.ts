export type Lang = "en" | "es";

export const content = {
  en: {
    nav: {
      links: [
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "About me", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
      name: "Santiago Gómez",
      langToggle: {
        en: "EN",
        es: "ES",
      },
    },

    hero: {
      roleBadge: "Front-End Developer",
      heading:
        "I build responsive React apps with clean interfaces and practical user flows.",
      headingHighlight: "React apps",
      intro:
        "I’m a front-end developer focused on React, TypeScript, and Tailwind CSS. I create responsive, clear, and maintainable interfaces, combining a strong user experience with reusable components and solid client-side logic. I build digital products designed to solve real problems, with close attention to design, code organization, and the quality of the final user experience.",
      ctaProjects: "View Projects",
      ctaContact: "Contact / Links",
      focusTitle: "What I Focus On",
      focusLead:
        "Practical interfaces that are easy to use, understand, and maintain.",
      focusList: [
        "Responsive React applications",
        "Clean UI and reusable components",
        "Client-side data, routing, and state",
      ],
    },

    about: {
      title: "About me",
      paragraphs: [
        "I’m a front-end developer and a programming student from Argentina. I work primarily with React, TypeScript, and Tailwind CSS, creating responsive applications with clear interfaces, reusable components, and a maintainable code structure.",
        "My projects include a wardrobe tracker, a Formula 1 dashboard, and a Blackjack game. In these projects, I implemented navigation between views, client-side data handling, interactive state management, and client-side logic.",
        "I’m interested in building digital products that are intuitive, functional, and visually consistent. I pay close attention to user experience, component organization, and code clarity, with the goal of contributing solid solutions as part of a front-end team.",
      ],
    },

    projects: {
      title: "Projects",
      subtitle:
        "Selected React projects focused on responsive interfaces, data organization, and interactive user flows.",
      items: {
        "wardrobe-tracker": {
          name: "Wardrobe Tracker",
          description:
            "Wardrobe Tracker is a responsive React application for managing a personal wardrobe. It includes clothing and wishlist management, organized views, and a simple dashboard that gives users a quick overview of their collection and planned purchases.",
        },
        "formula-1": {
          name: "Formula 1",
          description:
            "Formula 1 is a fan-made React application that displays current-season information in a clear and organized interface, including race results, standings, drivers, teams, circuits, and the race calendar.",
        },
        blackjack: {
          name: "Blackjack",
          description:
            "Blackjack is a React card-game application that simulates a classic Blackjack table. Users can add virtual money, place bets, receive cards, and play against the dealer through a simple interactive game flow.",
        },
      },
      statusLabels: {
        live: "Live",
        "in-progress": "In progress",
        archived: "Archived",
        concept: "Concept",
      },
      links: {
        website: "Website",
        github: "GitHub",
        techStack: "Tech stack:",
      },
    },

    skills: {
      title: "Skills",
      subtitle: "Core tools and strengths that power my builds.",
      groups: {
        "front-end": {
          title: "Front-end",
          description:
            "Building responsive interfaces with modern React and strong web fundamentals.",
        },
        "ui-styling": {
          title: "UI & Styling",
          description:
            "Creating clean layouts, reusable visual patterns, and responsive designs.",
        },
        "react-ecosystem": {
          title: "React Ecosystem",
          description:
            "Structuring React apps with routing, reusable components, and client-side data.",
        },
        tools: {
          title: "Tools",
          description:
            "Working with the tools needed to build, version, and deploy front-end projects.",
        },
      },
    },

    contact: {
      title: "Contact / Links",
      subtitle: "Best places to reach me and see more of my work.",
      methods: {
        linkedin: {
          label: "LinkedIn",
          hint: "Professional profile",
          action: "Open",
        },
        github: {
          label: "GitHub",
          hint: "Projects and source code",
          action: "Open",
        },
        email: { label: "Email", hint: "Reach me by email", action: "Copy" },
        cv: { label: "CV", hint: "Open my resume", action: "Open" },
      },
      copyFeedback: { success: "Email copied", error: "Copy failed" },
    },

    footer: {
      text: `(c) ${new Date().getFullYear()} Santi. Built with React + TypeScript.`,
    },

    meta: {
      title: "Santiago Gómez | Front-End Developer",
      description:
        "Front-end developer focused on React, TypeScript, responsive interfaces, and practical web applications.",
    },
  },

  es: {
    nav: {
      links: [
        { label: "Proyectos", href: "#projects" },
        { label: "Habilidades", href: "#skills" },
        { label: "Sobre mí", href: "#about" },
        { label: "Contacto", href: "#contact" },
      ],
      name: "Santiago Gómez",
      langToggle: {
        en: "EN",
        es: "ES",
      },
    },

    hero: {
      roleBadge: "Desarrollador Front-End",
      heading:
        "Construyo aplicaciones React responsivas con interfaces claras y flujos de usuario prácticos.",
      headingHighlight: "aplicaciones React",
      intro:
        "Soy un desarrollador Front-End enfocado en React, TypeScript y Tailwind CSS. Creo interfaces responsivas, claras y mantenibles, combinando una buena experiencia de usuario con componentes reutilizables y una lógica sólida del lado del cliente. Desarrollo productos digitales pensados para resolver problemas reales, con atención al diseño, la organización del código y la calidad de la experiencia final.",
      ctaProjects: "Ver Proyectos",
      ctaContact: "Contacto / Enlaces",
      focusTitle: "En qué me enfoco",
      focusLead:
        "Interfaces prácticas que son fáciles de usar, entender y mantener.",
      focusList: [
        "Aplicaciones React responsivas",
        "UI limpia y componentes reutilizables",
        "Datos del lado del cliente, enrutamiento y estado",
      ],
    },

    about: {
      title: "Sobre mí",
      paragraphs: [
        "Soy un desarrollador Front-End y estudiante de programación de Argentina. Trabajo principalmente con React, TypeScript y Tailwind CSS, creando aplicaciones responsivas con interfaces claras, componentes reutilizables y una estructura de código mantenible.",
        "Entre mis proyectos se encuentran un gestor de guardarropa, un panel de Fórmula 1 y un juego de Blackjack. En ellos implementé navegación entre vistas, consumo y manejo de datos, estados interactivos y lógica del lado del cliente.",
        "Me interesa construir productos digitales que sean intuitivos, funcionales y visualmente consistentes. Presto especial atención a la experiencia de usuario, la organización de los componentes y la claridad del código, con el objetivo de aportar soluciones sólidas dentro de un equipo Front-End.",
      ],
    },

    projects: {
      title: "Proyectos",
      subtitle:
        "Proyectos seleccionados en React enfocados en interfaces responsivas, organización de datos y flujos interactivos.",
      items: {
        "wardrobe-tracker": {
          name: "Wardrobe Tracker",
          description:
            "Wardrobe Tracker es una aplicación React responsiva para gestionar un guardarropa personal. Incluye gestión de prendas y wishlist, vistas organizadas y un panel que ofrece un resumen rápido de la colección y compras planificadas.",
        },
        "formula-1": {
          name: "Formula 1",
          description:
            "Formula 1 es una aplicación fan-made en React que muestra información de la temporada actual en una interfaz clara y organizada, incluyendo resultados de carreras, posiciones, pilotos, equipos, circuitos y calendario.",
        },
        blackjack: {
          name: "Blackjack",
          description:
            "Blackjack es una aplicación de cartas en React que simula una mesa clásica de Blackjack. Los usuarios pueden agregar dinero virtual, realizar apuestas, recibir cartas y jugar contra el crupier mediante un flujo interactivo simple.",
        },
      },
      statusLabels: {
        live: "En vivo",
        "in-progress": "En curso",
        archived: "Archivado",
        concept: "Concepto",
      },
      links: {
        website: "Sitio",
        github: "GitHub",
        techStack: "Stack:",
      },
    },

    skills: {
      title: "Habilidades",
      subtitle: "Herramientas y fortalezas que uso en mis proyectos.",
      groups: {
        "front-end": {
          title: "Front-end",
          description:
            "Construcción de interfaces responsivas con React moderno y sólidos fundamentos web.",
        },
        "ui-styling": {
          title: "UI y Estilos",
          description:
            "Creación de diseños limpios, patrones visuales reutilizables y diseños responsivos.",
        },
        "react-ecosystem": {
          title: "Ecosistema React",
          description:
            "Estructuración de aplicaciones React con enrutamiento, componentes reutilizables y datos del lado del cliente.",
        },
        tools: {
          title: "Herramientas",
          description:
            "Trabajo con las herramientas necesarias para construir, versionar y desplegar proyectos Front-End.",
        },
      },
    },

    contact: {
      title: "Contacto",
      subtitle: "Los mejores lugares para contactarme y ver más de mi trabajo.",
      methods: {
        linkedin: {
          label: "LinkedIn",
          hint: "Perfil profesional",
          action: "Abrir",
        },
        github: {
          label: "GitHub",
          hint: "Proyectos y código fuente",
          action: "Abrir",
        },
        email: {
          label: "Email",
          hint: "Contactame por email",
          action: "Copiar",
        },
        cv: { label: "CV", hint: "Abrir mi currículum", action: "Abrir" },
      },
      copyFeedback: { success: "Email copiado", error: "Error al copiar" },
    },

    footer: {
      text: `(c) ${new Date().getFullYear()} Santi. Built with React + TypeScript.`,
    },

    meta: {
      title: "Santiago Gómez | Desarrollador Front-End",
      description:
        "Desarrollador Front-End enfocado en React, TypeScript, interfaces responsivas y aplicaciones web prácticas.",
    },
  },
} as const;

export type Content = (typeof content)["en"];
