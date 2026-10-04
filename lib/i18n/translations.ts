export type Language = "es" | "en";

export interface TranslationDictionary {
  nav: {
    home: string;
    tech: string;
    projects: string;
    experience: string;
    education: string;
    contact: string;
    availableForWork: string;
  };
  hero: {
    statusBadge: string;
    name: string;
    title: string;
    coreTech: string;
    description: string;
    statsLine: string;
    primaryCta: string;
    downloadCv: string;
    cvFilename: string;
    cvHref: string;
    location: string;
  };
  techStack: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    categories: {
      backend: {
        title: string;
        description: string;
        skills: string[];
      };
      frontend: {
        title: string;
        description: string;
        skills: string[];
      };
      cloud: {
        title: string;
        description: string;
        skills: string[];
      };
      tools: {
        title: string;
        description: string;
        skills: string[];
      };
    };
  };
  projects: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    liveDemoBadge: string;
    viewDemo: string;
    featured: {
      tag: string;
      title: string;
      organization: string;
      period: string;
      metadata: string;
      description: string;
      highlights: string[];
      tech: string[];
      demoUrl: string;
    };
    items: Array<{
      tag: string;
      title: string;
      organization: string;
      period: string;
      stats?: string;
      description: string;
      highlights: string[];
      tech: string[];
      url?: string;
    }>;
  };
  education: {
    sectionBadge: string;
    title: string;
    institution: string;
    degrees: Array<{
      title: string;
      status: string;
      badgeVariant: "default" | "secondary" | "outline";
    }>;
  };
  contact: {
    sectionBadge: string;
    title: string;
    heading: string;
    subtitle: string;
    email: string;
    linkedin: string;
    location: string;
    availability: string;
    copyEmail: string;
    emailCopied: string;
    sendMessage: string;
    allRightsReserved: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  es: {
    nav: {
      home: "Inicio",
      tech: "Tecnologías",
      projects: "Proyectos",
      experience: "Experiencia",
      education: "Formación",
      contact: "Contacto",
      availableForWork: "Disponible para proyectos",
    },
    hero: {
      statusBadge: "Enfocado en Backend y Arquitectura de Software",
      name: "Ferran Solis Chorvat",
      title: "Desarrollador Full Stack y Analista de Sistemas",
      coreTech: "React · TypeScript · NestJS · PostgreSQL",
      description:
        "Diseño, desarrollo y mantengo sistemas web en producción para organismos públicos y empresas. Me encargo del ciclo completo, desde el relevamiento y modelado de datos hasta el despliegue y soporte continuo. Trabajo con foco en reglas de negocio complejas y consistencia de datos.",
      statsLine:
        "4 hospitales de referencia y 5 servicios regionales en producción · +4.000 solicitudes registradas en un sistema municipal",
      primaryCta: "Explorar Proyectos",
      downloadCv: "Descargar CV",
      cvFilename: "cv-ferran-solis-chorvat.pdf",
      cvHref: "/cv-ferran-solis-chorvat.pdf",
      location: "Argentina",
    },
    techStack: {
      sectionBadge: "Stack Tecnológico",
      title: "Herramientas y Tecnologías",
      subtitle:
        "Tecnologías que utilizo a diario en sistemas en producción.",
      categories: {
        backend: {
          title: "Backend y Datos",
          description: "Arquitectura modular, transaccionalidad y APIs seguras",
          skills: [
            "NestJS",
            "Node.js",
            "REST APIs",
            "WebSockets",
            "PostgreSQL",
            "TypeORM",
            "Prisma",
          ],
        },
        frontend: {
          title: "Frontend",
          description: "Interfaces de alto rendimiento con renderizado optimizado",
          skills: [
            "React",
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "TanStack Query",
            "Material UI",
          ],
        },
        cloud: {
          title: "Cloud y DevOps",
          description: "Infraestructura cloud, serverless y despliegue continuo",
          skills: [
            "Docker",
            "AWS Lambda",
            "AWS RDS",
            "AWS S3",
            "AWS CloudWatch",
            "Vercel",
            "Railway",
          ],
        },
        tools: {
          title: "Herramientas y Prácticas",
          description: "Flujos de trabajo colaborativos y documentación de APIs",
          skills: [
            "Git",
            "GitLab",
            "GitHub",
            "Swagger / OpenAPI",
            "Postman",
            "CI / CD",
            "Domain-Driven Design",
          ],
        },
      },
    },
    projects: {
      sectionBadge: "Experiencia y Proyectos",
      title: "Proyectos",
      subtitle:
        "Sistemas en producción para el sector público y proyectos freelance.",
      liveDemoBadge: "Demo Viva Disponible",
      viewDemo: "Ver Demo Operativa",
      featured: {
        tag: "Proyecto Principal y Demo Operativa",
        title: "Sistema de Gestión y Trazabilidad de Medicamentos Sensibles",
        organization: "Ministerio de Salud del Chaco · Subsecretaría de Articulación Sanitaria",
        period: "2024 – 2026",
        metadata: "2024 – 2026 · Demo disponible",
        description:
          "Desarrollo integral de un sistema para la gestión y trazabilidad de medicamentos sensibles, diseñado para la red sanitaria del interior del Chaco y utilizado en producción por 4 hospitales de referencia y 5 servicios regionales de distribución.",
        highlights: [
          "Centralicé la gestión transaccional de stock, dispensaciones y transferencias entre centros de salud, garantizando trazabilidad completa con auditoría de movimientos.",
          "Automaticé el ingreso de remitos mediante parsing de PDFs con extracción de lotes, vencimientos y cantidades, reduciendo la carga manual con validación previa.",
          "Aseguré el control de acceso y concurrencia por roles y establecimiento en operaciones críticas de dispensación.",
          "Construí la solución de punta a punta con React, TypeScript, NestJS y PostgreSQL, desplegada en AWS Lambda y RDS.",
        ],
        tech: [
          "React",
          "TypeScript",
          "NestJS",
          "PostgreSQL",
          "TypeORM",
          "AWS Lambda",
          "AWS RDS",
          "Vercel",
        ],
        demoUrl: "https://insumos-medicos-demo.vercel.app/",
      },
      items: [
        {
          tag: "Gestión Documental",
          title: "Sistema de Gestión Documental para Compraventa de Vehículos",
          organization: "Proyecto Freelance",
          period: "2024",
          stats: "Automatización y WebSockets",
          description:
            "Plataforma integral orientada a la confección y validación documental automatizada en procesos de compraventa automotriz.",
          highlights: [
            "Automaticé la generación de documentación sobre formularios PDF existentes, implementando posicionamiento, medición y adaptación dinámica del texto al espacio disponible.",
            "Implementé workflows de revisión y validación con notificaciones en tiempo real mediante WebSockets y control de acceso por roles y sucursal.",
          ],
          tech: [
            "NestJS",
            "React",
            "TypeScript",
            "WebSockets",
            "PDF Parsing y Canvas",
            "PostgreSQL",
          ],
        },
        {
          tag: "Sector Público",
          title: "Sistema de Gestión de Solicitudes de Asistencia Social",
          organization: "Municipalidad de San Bernardo",
          period: "2023 – Actualidad",
          stats: "+4.000 solicitudes registradas",
          description:
            "Desarrollo y mantenimiento de un sistema de gestión de solicitudes de asistencia social utilizado en producción desde 2023, con más de 4.000 solicitudes registradas.",
          highlights: [
            "Diseñé un flujo multietapa para recopilar información personal, familiar, habitacional y socioeconómica, con persistencia y recuperación de solicitudes en progreso.",
            "Implementé gestión de documentación privada mediante Amazon S3 y URLs firmadas, generación automática de PDF, roles y seguimiento documental hasta el cierre de cada solicitud.",
            "Responsable del desarrollo full stack, despliegue, evolución y mantenimiento de la aplicación.",
          ],
          tech: [
            "React",
            "Node.js",
            "TypeScript",
            "PostgreSQL",
            "Amazon S3",
            "PDF Generation",
          ],
        },
        {
          tag: "Ámbito Universitario",
          title: "Desarrollador — Área de Sistemas",
          organization: "Universidad Nacional del Chaco Austral",
          period: "2021 – 2024",
          stats: "Equipo de 6 a 8 ingenieros",
          description:
            "Desarrollo y mantenimiento de aplicaciones institucionales de la universidad en un entorno colaborativo y de alta demanda.",
          highlights: [
            "Desarrollé funcionalidades y mejoras sobre aplicaciones institucionales, trabajando tanto en nuevos desarrollos como sobre sistemas existentes en producción.",
            "Realicé relevamiento y refinamiento de requisitos con usuarios y áreas de la universidad, convirtiendo necesidades operativas en funcionalidades.",
            "Trabajé colaborativamente mediante Git/GitLab y ramas de desarrollo, integrando cambios con otros desarrolladores.",
          ],
          tech: [
            "React",
            "Node.js",
            "PostgreSQL",
            "Git / GitLab",
            "REST APIs",
          ],
        },
      ],
    },
    education: {
      sectionBadge: "Formación Académica",
      title: "Educación Universitaria",
      institution: "Universidad Nacional del Chaco Austral (UNCAus)",
      degrees: [
        {
          title: "Analista Universitario en Sistemas",
          status: "Título en trámite",
          badgeVariant: "default",
        },
        {
          title: "Ingeniería en Sistemas de Información",
          status: "En curso",
          badgeVariant: "secondary",
        },
      ],
    },
    contact: {
      sectionBadge: "Contacto Directo",
      title: "Contacto",
      heading: "¿Tenés un proyecto? Escribime.",
      subtitle: "Desarrollo backend y arquitectura de software.",
      email: "ferransolischorvat@gmail.com",
      linkedin: "https://linkedin.com/in/ferran-solis-chorvat",
      location: "Argentina",
      availability: "Disponible para proyectos freelance",
      copyEmail: "Copiar Correo",
      emailCopied: "¡Copiado al portapapeles!",
      sendMessage: "Escribirme un Email",
      allRightsReserved: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      tech: "Tech Stack",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      availableForWork: "Available for new projects",
    },
    hero: {
      statusBadge: "Backend & Software Architecture Focus",
      name: "Ferran Solis Chorvat",
      title: "Full Stack Developer & Systems Analyst",
      coreTech: "React · TypeScript · NestJS · PostgreSQL",
      description:
        "I design, build, and maintain production web systems for public agencies and private companies. I handle the end-to-end lifecycle, from requirements gathering and data modeling to deployment and ongoing support. My focus is on robust business rules and data integrity.",
      statsLine:
        "4 reference hospitals and 5 regional services in production · +4,000 requests registered in a municipal system",
      primaryCta: "Explore Projects",
      downloadCv: "Download CV",
      cvFilename: "cv-ferran-solis-chorvat-en.pdf",
      cvHref: "/cv-ferran-solis-chorvat-en.pdf",
      location: "Argentina",
    },
    techStack: {
      sectionBadge: "Tech Stack",
      title: "Tools & Technologies",
      subtitle:
        "Technologies I work with daily across production systems.",
      categories: {
        backend: {
          title: "Backend & Data",
          description: "Modular architecture, ACID transactions, and secure APIs",
          skills: [
            "NestJS",
            "Node.js",
            "REST APIs",
            "WebSockets",
            "PostgreSQL",
            "TypeORM",
            "Prisma",
          ],
        },
        frontend: {
          title: "Frontend",
          description: "High-performance client interfaces with optimized rendering",
          skills: [
            "React",
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "TanStack Query",
            "Material UI",
          ],
        },
        cloud: {
          title: "Cloud & DevOps",
          description: "Cloud infrastructure, serverless compute, and continuous delivery",
          skills: [
            "Docker",
            "AWS Lambda",
            "AWS RDS",
            "AWS S3",
            "AWS CloudWatch",
            "Vercel",
            "Railway",
          ],
        },
        tools: {
          title: "Tools & Practices",
          description: "Collaborative workflows, API contracts, and domain modeling",
          skills: [
            "Git",
            "GitLab",
            "GitHub",
            "Swagger / OpenAPI",
            "Postman",
            "CI / CD",
            "Domain-Driven Design",
          ],
        },
      },
    },
    projects: {
      sectionBadge: "Experience & Projects",
      title: "Projects",
      subtitle:
        "Production systems for the public sector and freelance clients.",
      liveDemoBadge: "Live Demo Available",
      viewDemo: "View Live Demo",
      featured: {
        tag: "Flagship Project & Live Interactive Demo",
        title: "Sensitive Medication Management & Traceability System",
        organization: "Chaco Ministry of Health · Healthcare Articulation Subsecretariat",
        period: "2024 – 2026",
        metadata: "2024 – 2026 · Demo available",
        description:
          "End-to-end development of an enterprise medication traceability system designed for the provincial healthcare network, operating in production across 4 reference hospitals and 5 regional distribution centers.",
        highlights: [
          "Centralized transactional inventory, dispensing, and inter-facility transfers, ensuring end-to-end traceability with detailed audit logs.",
          "Automated delivery slip intake via structured PDF parsing for batches, expirations, and quantities, cutting manual data entry with pre-save validation.",
          "Enforced role- and facility-scoped authorization along with concurrency controls for critical dispensing operations.",
          "Engineered the full solution end-to-end using React, TypeScript, NestJS, and PostgreSQL, deployed on AWS Lambda and RDS.",
        ],
        tech: [
          "React",
          "TypeScript",
          "NestJS",
          "PostgreSQL",
          "TypeORM",
          "AWS Lambda",
          "AWS RDS",
          "Vercel",
        ],
        demoUrl: "https://insumos-medicos-demo.vercel.app/",
      },
      items: [
        {
          tag: "Document Automation",
          title: "Vehicle Sales Document Management System",
          organization: "Freelance Project",
          period: "2024",
          stats: "Real-time & WebSockets",
          description:
            "Comprehensive platform for legal automotive sales paperwork automation, real-time validation, and branch office workflow management.",
          highlights: [
            "Automated PDF document compilation directly over existing official legal forms with precise coordinates, metric bounds, and text wrapping.",
            "Delivered real-time review workflows with instantaneous WebSocket notifications and branch-segmented access control.",
          ],
          tech: [
            "NestJS",
            "React",
            "TypeScript",
            "WebSockets",
            "PDF Parsing & Canvas",
            "PostgreSQL",
          ],
        },
        {
          tag: "Public Sector",
          title: "Social Assistance Request Management System",
          organization: "San Bernardo Municipality",
          period: "2023 – Present",
          stats: "+4,000 processed requests",
          description:
            "Engineered and maintained a citizen social assistance intake platform in continuous production since 2023, handling over 4,000 requests.",
          highlights: [
            "Designed a multi-stage intake workflow collecting personal, household, and socioeconomic data, with auto-save and draft recovery.",
            "Implemented private document storage via Amazon S3 pre-signed URLs, automated dynamic PDF generation, RBAC, and document lifecycle tracking.",
            "End-to-end responsibility for full stack development, cloud deployment, and continuous feature evolution.",
          ],
          tech: [
            "React",
            "Node.js",
            "TypeScript",
            "PostgreSQL",
            "Amazon S3",
            "PDF Generation",
          ],
        },
        {
          tag: "Higher Education",
          title: "Software Developer — Systems Department",
          organization: "Universidad Nacional del Chaco Austral (UNCAus)",
          period: "2021 – 2024",
          stats: "Team of 6–8 engineers",
          description:
            "Engineered institutional software systems for university staff, faculty, and student administration within an agile development team.",
          highlights: [
            "Engineered core modules and bug fixes across large-scale institutional platforms in daily production.",
            "Conducted user requirement discovery with faculty departments, converting operational demands into resilient features.",
            "Collaborated through Git/GitLab branching strategies, code reviews, and cross-team integration.",
          ],
          tech: [
            "React",
            "Node.js",
            "PostgreSQL",
            "Git / GitLab",
            "REST APIs",
          ],
        },
      ],
    },
    education: {
      sectionBadge: "Academic Background",
      title: "University Education",
      institution: "Universidad Nacional del Chaco Austral (UNCAus)",
      degrees: [
        {
          title: "University Systems Analyst (Analista Universitario en Sistemas)",
          status: "Degree in processing",
          badgeVariant: "default",
        },
        {
          title: "Information Systems Engineering (Ingeniería en Sistemas)",
          status: "In progress",
          badgeVariant: "secondary",
        },
      ],
    },
    contact: {
      sectionBadge: "Direct Contact",
      title: "Contact",
      heading: "Have a project in mind? Get in touch.",
      subtitle: "Backend engineering and software architecture.",
      email: "ferransolischorvat@gmail.com",
      linkedin: "https://linkedin.com/in/ferran-solis-chorvat",
      location: "Argentina",
      availability: "Available for freelance projects",
      copyEmail: "Copy Email",
      emailCopied: "Copied to clipboard!",
      sendMessage: "Send an Email",
      allRightsReserved: "All rights reserved.",
    },
  },
};
