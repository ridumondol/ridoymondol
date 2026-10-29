export interface AboutInterest {
  /** Short label shown as the card heading, e.g. "Tech Explorer" */
  title: string;
  /** One or two sentences describing the interest and its connection to work */
  description: string;
  /** Single emoji used as the visual icon */
  emoji: string;
}

export interface AboutContent {
  intro: string;
  journey: string;
  journeyHighlights?: string[];
  workStyle: string;
  whatImInto: {
    title: string;
    description: string;
  }[];
  interests: AboutInterest[];
  biggerPicture: string;
  tagline: string;
  personalityNote: string;
}

export interface PersonalInfo {
  name: string;
  brandName: string;
  designation: string;
  roles: string[];
  tagline: string;
  /** Short bio used in Hero and other quick-summary spots — do not remove */
  bio: string;
  /** Expanded About-section copy — edit via data/portfolioData.ts */
  aboutContent: AboutContent;
  dob: string;
  email: string;
  phone: string;
  whatsapp: string;
  whatsappUrl: string;
  location: string;
  languages: string;
  freelanceStatus: string;
  profileImage: string;
  profileImageFallback: string;
  resumeUrl: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    facebook: string;
  };
  stats: {
    projectsCompleted: string;
    yearsExperience: string;
    clientUsers: string;
    happyClients: string;
  };
}

export interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Tools";
  level: "Advanced" | "Proficient" | "Familiar";
  proficiency: number;
  description: string;
}

export interface EducationHighlight {
  label: string;
  value: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  duration: string;
  status: string;
  location?: string;
  description: string;
  highlights?: EducationHighlight[];
  achievements: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  type: "Full-Time" | "Contract" | "Internship" | "Freelance" | "Independent";
  status?: string;
  summary?: string;
  description: string;
  paragraphs?: string[];
  highlights?: string[];
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  isClientProject?: boolean;
  techStack: string[];
  challenges: string;
  futurePlans: string;
  keyFeatures: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: SkillItem[];
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Ridoy Mondol",
    brandName: "Ridoy",
    designation: "Full Stack Developer",
    roles: [
      "Full Stack Developer",
      "Frontend Specialist",
      "React & Next.js Engineer",
      "UI/UX Focused Creator",
    ],
    tagline:
      "Crafting clean, user-focused interfaces and high-performance digital experiences with modern web technologies.",
    bio: "I am an aspiring web developer with a genuine passion for technology and modern web design. I focus on building responsive, user-friendly web applications with clean code, while continuously expanding my technical skills toward becoming a skilled Full-Stack Developer.",

    // ─── ABOUT SECTION COPY ────────────────────────────────────────────────
    aboutContent: {
      intro:
        "Hey, I'm Ridoy 👋 — an aspiring web developer who loves building things that look clean, feel intuitive, and actually solve problems. My tech journey is fueled by genuine curiosity, a passion for creative design, and an obsession with continuous learning. I'm currently focused on turning ideas into interactive digital experiences with modern web technologies, taking things one line of code at a time.",

      journey:
        "My interest in programming started with a simple question: how does the web actually work? That curiosity quickly turned into late-night coding sessions, breaking things, and learning how to fix them. As a beginner, I believe the best way to learn is by doing—building personal projects from the ground up, debugging real errors, and experimenting with modern tooling. Every challenge I encounter is just another opportunity to sharpen my problem-solving skills and write cleaner, more maintainable code.",

      journeyHighlights: [
        "Curiosity-driven exploration of core web technologies",
        "Hands-on building of personal web apps and interactive tools",
        "Deep debugging, problem-solving, and continuous refactoring",
      ],

      workStyle:
        "I'm genuinely excited about modern frontend development and the craft of user experience. I focus on turning ideas into responsive, accessible web applications that feel smooth and natural on any screen.",

      whatImInto: [
        {
          title: "Responsive Websites",
          description: "Crafting fluid layouts with Tailwind CSS that adapt seamlessly across mobile, tablet, and desktop.",
        },
        {
          title: "Modern User Interfaces",
          description: "Designing clean, high-contrast, visually appealing UI with polished micro-interactions.",
        },
        {
          title: "Reusable Components",
          description: "Architecting modular, predictable React.js and Next.js components with clean state handling.",
        },
        {
          title: "Practical Web Apps",
          description: "Translating concepts into functional digital products powered by JavaScript and modern APIs.",
        },
      ],

      interests: [
        {
          title: "Tech Explorer",
          emoji: "🚀",
          description:
            "Always curious about emerging technologies, modern developer tools, and frameworks shaping the future of web software.",
        },
        {
          title: "Creative Mindset",
          emoji: "✨",
          description:
            "Passionate about clean aesthetics, smooth UI interactions, and creating thoughtful, delightful user experiences.",
        },
        {
          title: "Growth Mode: ON",
          emoji: "🌱",
          description:
            "Showing up with consistency every day—learning something new, refining fundamentals, and building better habits.",
        },
      ],

      biggerPicture:
        "My long-term ambition is to grow into a skilled, high-impact Full-Stack Developer. While I'm building a strong frontend foundation with React and Next.js, I'm actively expanding into backend systems, databases, and API design. I want to collaborate with talented developers, contribute to meaningful projects, and build digital products that leave a lasting, positive impression.",

      tagline: "Still learning. Always building. Never settling.",

      personalityNote:
        '"Still learning. Always building. Never settling." — Building with curiosity, consistency, and a passion for modern digital craft.',
    },
    // ───────────────────────────────────────────────────────────────────────
    dob: "Dec 15, 2002",
    email: "mondolridoy406@gmail.com",
    phone: "01709861464",
    whatsapp: "01709861464",
    whatsappUrl: "https://wa.me/8801709861464",
    location: "Dhaka, Bangladesh",
    languages: "English, Bengali",
    freelanceStatus: "Available",
    profileImage: "/images/Confident-Coastal-Suit-Portrait.png",
    profileImageFallback: "https://github.com/ridumondol.png",
    resumeUrl: "/resume.pdf",
    socialLinks: {
      github: "https://github.com/ridumondol",
      linkedin: "https://www.linkedin.com/in/ridu47/?isSelfProfile=true",
      twitter: "https://x.com/ridoy406yt",
      facebook: "https://www.facebook.com/ridu.47",
    },
    stats: {
      projectsCompleted: "10+",
      yearsExperience: "1+",
      clientUsers: "55k",
      happyClients: "99+",
    },
  },

  skills: [
    {
      name: "React.js",
      category: "Frontend",
      level: "Advanced",
      proficiency: 92,
      description: "Custom hooks, state machines, reconciliation, and modern JSX component trees.",
    },
    {
      name: "Next.js (App Router)",
      category: "Frontend",
      level: "Advanced",
      proficiency: 90,
      description: "Server/Client Components, dynamic routes, Turbopack, and SSR optimizations.",
    },
    {
      name: "TypeScript",
      category: "Frontend",
      level: "Proficient",
      proficiency: 85,
      description: "Strict types, generic interfaces, union types, and type-safe refactoring.",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      level: "Advanced",
      proficiency: 94,
      description: "Mobile-first responsive utilities, custom tokens, and dark theme design.",
    },
    {
      name: "JavaScript (ES6+)",
      category: "Frontend",
      level: "Advanced",
      proficiency: 92,
      description: "Closures, async/await, event loop, and modern ECMAScript standards.",
    },
    {
      name: "HTML5 & Accessibility",
      category: "Frontend",
      level: "Advanced",
      proficiency: 95,
      description: "Semantic elements, ARIA attributes, and accessible keyboard navigation.",
    },
    {
      name: "Node.js & Express",
      category: "Backend",
      level: "Proficient",
      proficiency: 84,
      description: "Asynchronous runtime, middleware architecture, routing, and error handlers.",
    },
    {
      name: "MongoDB & Mongoose",
      category: "Backend",
      level: "Proficient",
      proficiency: 82,
      description: "Document models, schema validation, indexing, and aggregation pipelines.",
    },
    {
      name: "RESTful API Architecture",
      category: "Backend",
      level: "Advanced",
      proficiency: 88,
      description: "CRUD endpoints, status codes, payload validation, and token authentication.",
    },
    {
      name: "Git & GitHub",
      category: "Tools",
      level: "Advanced",
      proficiency: 92,
      description: "Branching workflows, Pull Requests, merge resolution, and repo administration.",
    },
    {
      name: "VS Code & Tooling",
      category: "Tools",
      level: "Advanced",
      proficiency: 94,
      description: "Integrated debugging, linters, Prettier configuration, and snippets.",
    },
    {
      name: "Vercel & Netlify",
      category: "Tools",
      level: "Advanced",
      proficiency: 92,
      description: "Automated Git pushes, continuous integration, and serverless edge functions.",
    },
  ],

  education: [
    {
      degree: "Diploma in Computer Science & Technology (Diploma Engineering)",
      field: "Computer Science & Technology",
      institution: "Habiganj Polytechnic Institute",
      duration: "2024 – Present",
      status: "Ongoing",
      location: "Habiganj, Sylhet, Bangladesh",
      description:
        "Building a rigorous understanding of computer programming, software engineering fundamentals, data structures, algorithm design, and modern full-stack web architectures.",
      highlights: [
        { label: "Core Focus", value: "Software & Web Engineering" },
        { label: "Key Studies", value: "Full Stack Developer" },
        { label: "Practical Goal", value: "Full-Stack Application Design" },
      ],
      achievements: [
        "Core Focus: Software & Web Engineering",
        "Key Studies: Full Stack Developer",
        "Practical Goal: Full-Stack Application Design",
      ],
    },
  ],

  experience: [
    {
      role: "Frontend Developer | Aspiring Software Engineer",
      company: "Independent Development & Personal Projects",
      location: "Remote / Self-Directed",
      duration: "2025 – Present",
      type: "Independent",
      status: "Current / Independent",
      summary:
        "Motivated and detail-oriented aspiring Frontend Developer focused on building modern, responsive, and user-centric web applications. Proficient in applying core web development concepts and continuously expanding technical expertise in HTML, CSS, JavaScript, React.js, and Next.js.",
      description:
        "Motivated and detail-oriented aspiring Frontend Developer focused on building modern, responsive, and user-centric web applications. Proficient in applying core web development concepts and continuously expanding technical expertise in HTML, CSS, JavaScript, React.js, and Next.js.",
      paragraphs: [
        "Experienced in developing personal projects that demonstrate practical implementation of frontend technologies, reusable component architecture, responsive UI design, and problem-solving skills. Committed to writing clean, maintainable code and following modern development practices.",
        "Passionate about continuous learning, exploring emerging technologies, and creating meaningful digital experiences. Seeking opportunities to contribute technical skills, collaborate with development teams, and grow into a professional software developer.",
      ],
      highlights: [
        "Responsive UI Design",
        "Reusable Components",
        "Clean Code",
        "Continuous Learning",
      ],
      responsibilities: [
        "Architecting modern, responsive frontend web applications with React.js, Next.js, and Tailwind CSS.",
        "Implementing reusable component architecture, clean state handling, and accessible semantic markup.",
        "Writing clean, maintainable code following modern development practices and performance standards.",
        "Continuously exploring emerging web technologies, algorithms, and full-stack software paradigms.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "HTML5 / CSS3",
        "Git & GitHub",
      ],
    },
  ],

  projects: [
    {
      id: "bazar-check",
      name: "Bazar Check",
      badge: "Market & Commodity Tracker",
      shortDescription:
        "A modern web application to check, track, and manage market commodity prices with real-time calculations.",
      fullDescription:
        "Bazar Check is an intuitive, responsive web application designed to solve everyday market budgeting and commodity price transparency challenges. Users can browse categorized grocery and essential items, check current estimated rates, track price fluctuations, filter items by category, and generate consolidated shopping calculations.",
      image: "/images/projects/bazar-check.svg",
      liveUrl: "https://bazar-check-lac.vercel.app/",
      githubUrl: "https://github.com/ridumondol/Bazar-Check",
      isClientProject: true,
      techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
      challenges:
        "Ensuring instant UI responsiveness during live item recalculations and price updates across dynamic lists without unnecessary component re-renders. Designing a fluid, touch-friendly mobile layout that functions effortlessly for users shopping on the move in crowded markets.",
      futurePlans:
        "Integrating secure user authentication for saving personal market lists, adding historical commodity price trend analytics charts with Chart.js, supporting multi-market price comparisons, and enabling automated push/email notifications when essential prices drop.",
      keyFeatures: [
        "Instant search and dynamic commodity category filtering",
        "Live budget & expense calculator with auto-updating totals",
        "100% mobile-first responsive layout optimized for handheld usage",
        "Bold dark aesthetic with high-contrast accessibility",
        "Fast serverless hosting deployed on Vercel with zero latency",
      ],
    },
    {
      id: "fitlog",
      name: "FitLog Workout Library",
      badge: "Health & Fitness Tracker",
      shortDescription:
        "A fitness and workout tracking library allowing users to log exercises, customize routines, and track progress.",
      fullDescription:
        "FitLog Workout Library is a modern fitness tracking application engineered to help fitness enthusiasts, gym-goers, and athletes organize their daily routines, track weight/reps progression across exercises, and log workout consistency seamlessly.",
      image: "/images/projects/fitlog.svg",
      liveUrl: "https://fitlog-workout-library-iota.vercel.app/",
      githubUrl: "https://github.com/ridumondol/fitlog-workout-library",
      isClientProject: true,
      techStack: ["React", "TypeScript", "Tailwind CSS", "Local Storage", "Vercel"],
      challenges:
        "Structuring nested hierarchical data models (workouts -> exercise sessions -> sets & reps) with seamless client-side persistence using LocalStorage, preventing state desynchronization or data loss during rapid mobile input.",
      futurePlans:
        "Integrating nutritional & caloric tracking, interactive progress charts with Chart.js, audio interval timers for resting periods between sets, and cloud database synchronization across multiple devices.",
      keyFeatures: [
        "Custom workout routine builder and exercise categorizer",
        "Interactive set/rep counters with instant validation",
        "Persistent client-side storage for zero-latency offline gym usage",
        "Sleek visual progress indicators and exercise search",
        "One-click routine reset and duplication features",
      ],
    },
    {
      id: "devstack",
      name: "DevStack Builder",
      badge: "Developer Utility Platform",
      shortDescription:
        "A specialized developer utility helping engineers configure, organize, and categorize tech stacks.",
      fullDescription:
        "DevStack Builder is an interactive developer tool designed for engineers, tech leads, and project managers to assemble, visualize, and export tech stacks for modern software projects. Users can pick technologies across frontend, backend, database, DevOps, and testing layers.",
      image: "/images/projects/devstack.svg",
      liveUrl: "https://my-devstack-builder.netlify.app/",
      githubUrl: "https://github.com/ridumondol/assignment-5",
      isClientProject: true,
      techStack: ["React", "JavaScript", "Modular Architecture", "Netlify"],
      challenges:
        "Managing dynamic multi-selection states across disparate categories simultaneously while ensuring zero layout shifting and modular separation of state logic.",
      futurePlans:
        "Adding one-click configuration exports in JSON, YAML, Docker Compose, and README markdown formats, alongside community stack sharing.",
      keyFeatures: [
        "Multi-category technological stack selector and organizer",
        "Instant stack architecture overview with compatibility badges",
        "Fast client-side rendering with lightweight bundle footprint",
        "One-click sharing and deployment configurations",
        "Automated deployment on Netlify with continuous delivery",
      ],
    },
  ],
};
