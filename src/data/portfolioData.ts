export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  description: string;
  problemStatement: string;
  solutionApproach: string;
  architectureHighlights: string[];
  techStack: string[];
  features: string[];
  implementedStatus: "Implemented & Active" | "Prototype & Architecture Complete" | "Concept & Hackathon Build";
  isCollaborative?: boolean;
  demoUrl?: string;
  githubUrl?: string;
  accentColor: string;
  badge: string;
}

export interface SkillItem {
  name: string;
  category: "Languages" | "Frontend" | "Backend & Database" | "Tools & Workflow";
  level: "Core Foundation" | "Hands-on Development" | "Actively Building";
  highlight: string;
}

export interface HackathonItem {
  title: string;
  event: string;
  organizer: string;
  year: string;
  role: string;
  focus: string;
  description: string;
  verifiedStatus: string;
}

export interface LearningItem {
  title: string;
  institution: string;
  period: string;
  type: "Degree" | "Coursework" | "Technical Focus";
  description: string;
  topics: string[];
}

export const PERSONAL_INFO = {
  name: "Keerthi C.",
  role: "BE Computer Science Engineering Student | Full-Stack Developer | Aspiring Data Analyst",
  headline: "BE Computer Science Engineering Student | Full-Stack Developer | Aspiring Data Analyst",
  institution: "Bapuji Institute of Engineering and Technology (BIET)",
  location: "Davangere, Karnataka, India",
  degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
  graduationYear: "Expected 2027",
  email: "keerthi.c0109@gmail.com",
  github: "https://github.com/KEERC156",
  linkedin: "https://www.linkedin.com/in/keerthi-c-79829332a/",
  aboutBio: `I am a Computer Science and Engineering undergraduate at Bapuji Institute of Engineering and Technology (BIET), Davangere, Karnataka. Driven by a deep curiosity for how software empowers communities, I focus on full-stack web applications, clean system design, and AI-enabled digital solutions.

I thrive in hackathon environments and collaborative sprints—transforming real-world problem statements into working prototypes with structured code, intuitive interfaces, and practical architectures.`,
  coreValues: [
    {
      title: "Practical Problem Solving",
      desc: "Architecting software that addresses tangible societal and business challenges.",
    },
    {
      title: "Engineering Fundamentals",
      desc: "Grounded in algorithms, data structures, and database principles learned at BIET.",
    },
    {
      title: "Collaborative Velocity",
      desc: "Proven teamwork across intense hackathons like Smart India Hackathon (SIH).",
    },
    {
      title: "Continuous Learning",
      desc: "Rapidly mastering emerging tools across modern Next.js, TypeScript, and AI APIs.",
    },
  ],
};

export const SKILLS_DATA: SkillItem[] = [
  // Languages
  { name: "C", category: "Languages", level: "Core Foundation", highlight: "Pointers, memory management, algorithmic foundations" },
  { name: "Python", category: "Languages", level: "Hands-on Development", highlight: "Data scripting, backend prototyping, logic design" },
  { name: "Java", category: "Languages", level: "Core Foundation", highlight: "Object-oriented principles, classes, inheritance" },
  { name: "JavaScript", category: "Languages", level: "Actively Building", highlight: "ES6+, DOM manipulation, asynchronous programming" },
  { name: "TypeScript", category: "Languages", level: "Actively Building", highlight: "Type safety, interfaces, robust component code" },

  // Frontend
  { name: "React", category: "Frontend", level: "Actively Building", highlight: "Hooks, state management, modular component architecture" },
  { name: "Next.js", category: "Frontend", level: "Actively Building", highlight: "App Router, SSR, API routes, Turbopack" },
  { name: "Tailwind CSS", category: "Frontend", level: "Actively Building", highlight: "Utility-first design, dark-mode styling, responsive layouts" },

  // Backend & Database
  { name: "SQL", category: "Backend & Database", level: "Core Foundation", highlight: "Relational queries, schema design, constraints, joins" },
  { name: "Supabase", category: "Backend & Database", level: "Hands-on Development", highlight: "PostgreSQL database, authentication, backend storage" },

  // Tools & Workflow
  { name: "Git", category: "Tools & Workflow", level: "Hands-on Development", highlight: "Version control, branching, committing, merge workflows" },
  { name: "GitHub", category: "Tools & Workflow", level: "Hands-on Development", highlight: "Remote repositories, collaboration, project tracking" },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "orca",
    title: "ORCA",
    subtitle: "Smart India Hackathon Innovation",
    category: "Hackathon Platform",
    tagline: "High-performance collaborative system engineered for rapid data processing and structured team workflows.",
    description:
      "ORCA was conceptualized and developed as an intensive hackathon submission for the Smart India Hackathon (SIH). The system tackles structured problem workflows through modular architecture, efficient state synchronization, and an intuitive user interface.",
    problemStatement:
      "During competitive problem-solving, disparate data streams and fragmented communication lead to operational bottlenecks and delayed decision-making.",
    solutionApproach:
      "Designed a cohesive platform combining modular dashboards, predictable state pipelines, and streamlined data visualization so teams can coordinate actions in real-time.",
    architectureHighlights: [
      "Modular component hierarchy built with Next.js and TypeScript",
      "Low-latency data flow with responsive client-side state caching",
      "Rigorous role coordination designed for multi-stakeholder operational agility",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "RESTful Architecture"],
    features: [
      "Real-time operational dashboard with status tracking",
      "Modular pipeline view for multi-step task execution",
      "Responsive UI optimized for dark mode and low-glare visibility",
      "Built collaboratively within strict hackathon constraints",
    ],
    implementedStatus: "Prototype & Architecture Complete",
    demoUrl: "https://orca-eta-ochre.vercel.app/",
    githubUrl: "https://github.com/Zyphron01/ORCA",
    accentColor: "#38bdf8",
    badge: "Smart India Hackathon",
  },
  {
    id: "mscheme",
    title: "SchemeAI",
    subtitle: "Government Scheme Eligibility Assistant",
    category: "GovTech & Citizen Empowerment",
    tagline: "Empowering citizens to discover and verify welfare schemes through intelligent multi-criteria rule filtering and AI insights.",
    description:
      "A citizen-centric web application designed to bridge the awareness gap between eligible citizens and public government welfare programs. Users input demographic, regional, and socioeconomic criteria to receive precise eligibility matches with step-by-step guidance.",
    problemStatement:
      "Millions of deserving citizens miss out on crucial central and state government schemes due to convoluted criteria, dispersed information portals, and complex documentation requirements.",
    solutionApproach:
      "Developed a centralized eligibility verification engine backed by Supabase PostgreSQL and augmented by Gemini AI to break down complex legal scheme guidelines into plain-language summaries and application paths.",
    architectureHighlights: [
      "Deterministic rule-matching engine evaluating income slabs, demographic filters, and regional quotas",
      "Supabase PostgreSQL schema structuring welfare schemes and qualification criteria",
      "Gemini AI reasoning integration for generating contextual, easy-to-understand eligibility breakdowns",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Gemini AI"],
    features: [
      "Interactive multi-step questionnaire for citizen profiles",
      "Instant eligibility calculation with match scoring",
      "AI-generated scheme summaries and required document checklists",
      "Accessible dark & light visual hierarchy for clear readability",
    ],
    implementedStatus: "Implemented & Active",
    demoUrl: "https://government-scheme-eligibility-assistant-82t3fiy99.vercel.app/eligibility",
    githubUrl: "https://github.com/KEERC156/government-scheme-eligibility-assistant",
    accentColor: "#8b5cf6",
    badge: "Full-Stack + AI",
  },
  {
    id: "smart-kirana",
    title: "Smart Kirana",
    subtitle: "Voice-Assisted Local Retail Platform",
    category: "Retail & Local Commerce",
    tagline: "Modernizing local grocery stores through native voice ordering, real-time bill calculations, and inventory management.",
    description:
      "Smart Kirana is a local-language commerce concept tailored for neighborhood kirana merchants and regional customers. It integrates voice-based product queries and ordering with an automated billing system and back-end stock ledger.",
    problemStatement:
      "Small neighborhood shopkeepers face friction when operating keyboard-heavy digital software, while non-tech-savvy customers struggle with standard e-commerce navigation in English.",
    solutionApproach:
      "Leveraged browser-native Speech Recognition and lightweight backend processing to enable voice-dictated order additions, rapid invoice compilation, and straightforward inventory tracking.",
    architectureHighlights: [
      "Web Speech API integration for local-language speech-to-text token parsing",
      "Python Flask backend handling inventory state updates and bill computations",
      "Explicit separation of tested core ledger features vs. planned speech model extensions",
    ],
    techStack: ["Python / Flask", "JavaScript", "Web Speech API", "HTML5 / CSS3", "Local Inventory Ledger"],
    features: [
      "Voice-dictated order item addition with quantity parsing",
      "Instant bill calculation with tax and discount computation",
      "Inventory ledger showing real-time stock availability",
      "Clear distinction between implemented functionality and planned regional language models",
    ],
    implementedStatus: "Concept & Hackathon Build",
    githubUrl: "https://github.com",
    accentColor: "#10b981",
    badge: "Voice & Retail Tech",
  },
  {
    id: "civicfix",
    title: "CivicFix",
    subtitle: "Smart Civic Issue Reporting & Resolution Platform",
    category: "Civic Tech & Smart City",
    tagline: "Bridging citizens, municipal administrators, and field workers through transparent, GPS-powered civic issue resolution.",
    description:
      "CivicFix is a collaborative full-stack platform connecting citizens who report public infrastructure issues, municipal administrators who prioritize and assign them, and field workers who resolve and submit photographic evidence. Built with transparency and accountability at its core.",
    problemStatement:
      "Public infrastructure issues such as potholes, broken streetlights, and drainage failures often go unreported or unresolved due to the lack of an accessible, trackable, and transparent reporting channel between citizens and municipal bodies.",
    solutionApproach:
      "Designed a tri-role platform architecture where citizens submit geo-tagged reports with photos, administrators manage prioritization and department assignment via a dashboard, and field workers close issues with before-and-after repair evidence. Supabase Row Level Security enforces strict role-based data access.",
    architectureHighlights: [
      "GPS-based location selection with Leaflet and OpenStreetMap interactive maps for precise issue pinpointing",
      "AI-assisted issue triage that assesses severity and suggests categorization automatically",
      "Supabase PostgreSQL with Row Level Security (RLS) enforcing role-based access for Citizens, Admins, and Field Workers",
      "Before-and-after repair evidence upload and comparison via Supabase Storage",
      "Real-time issue status tracking with transparent citizen-facing progress updates",
    ],
    techStack: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Supabase PostgreSQL", "Supabase Auth", "Supabase Storage", "Leaflet", "OpenStreetMap"],
    features: [
      "Citizen portal: report issues with photos, GPS location, and category",
      "GPS-based location selection with interactive Leaflet maps",
      "AI-assisted issue triage and severity assessment",
      "Municipal admin dashboard: prioritize, assign, and manage issues by department",
      "Field-worker task management and repair-evidence uploads",
      "Before-and-after evidence comparison and resolution verification",
      "Role-based access control and Supabase Row Level Security",
    ],
    implementedStatus: "Implemented & Active",
    isCollaborative: true,
    demoUrl: "https://civic-fix-gamma.vercel.app/",
    githubUrl: "https://github.com/Bytecrats/CivicFix",
    accentColor: "#0ea5e9",
    badge: "Collaborative Full-Stack",
  },
];

export const HACKATHONS_DATA: HackathonItem[] = [
  {
    title: "Smart India Hackathon (SIH)",
    event: "Internal Smart India Hackathon (SIH)",
    organizer: "Ministry of Education & AICTE",
    year: "2024 / 2025",
    role: "Team Developer & Full-Stack Prototyper",
    focus: "ORCA Platform Architecture & Rapid Prototyping",
    description:
      "Participated in the internal SIH hackathon, breaking down national problem statements and rapidly prototyping architecture. Collaborated on technical projects and practical software solutions with the team.",
    verifiedStatus: "Confirmed Participation",
  },
  {
    title: "BIET Departmental Hackathons & Code Sprints",
    event: "Institutional Technical Sprints",
    organizer: "Bapuji Institute of Engineering and Technology, Davangere",
    year: "2024 – Present",
    role: "Lead Full-Stack Developer",
    focus: "Citizen Welfare & Practical Community Systems",
    description:
      "Participated in internal coding competitions and project exhibitions, prototyping the Government Scheme Eligibility Assistant and pitching practical solutions for public accessibility.",
    verifiedStatus: "Academic & Campus Innovation",
  },
];

export const LEARNING_DATA: LearningItem[] = [
  {
    title: "B.E. in Computer Science and Engineering",
    institution: "Bapuji Institute of Engineering and Technology (BIET), Davangere",
    period: "2023 – 2027 (Ongoing)",
    type: "Degree",
    description:
      "Acquiring core engineering discipline with coursework in computing fundamentals, discrete mathematics, software engineering practices, and system architecture.",
    topics: ["Data Structures & Algorithms", "Database Management Systems (DBMS)", "Object-Oriented Programming (OOP)", "Computer Networks", "Operating Systems"],
  },
  {
    title: "Full-Stack Development & Modern Web Ecosystems",
    institution: "Self-Directed Project Engineering",
    period: "Continuous",
    type: "Technical Focus",
    description:
      "Deep-diving into production-grade Next.js App Router, TypeScript type modeling, Supabase relational architecture, and generative AI API orchestrations.",
    topics: ["React Hooks & Architecture", "Tailwind CSS Design Systems", "Supabase / PostgreSQL", "RESTful APIs", "Git Version Control"],
  },
];
