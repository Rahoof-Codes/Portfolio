// ============================================================
//  config.js — Central Portfolio Data Configuration
// ============================================================

export const CONFIG = {
  // ---------- Personal Info ----------
  name: "Abdul Rahoof",
  title: "AI Engineer | Full Stack Developer",
  tagline: "Building Intelligent Systems, One Agent at a Time.",
  bio: [
    "Hi, I'm Abdul Rahoof — a BCA student pivoting from full-stack web development into AI Engineering. I've shipped production React apps, CRM platforms, and POS systems for real clients.",
    "Now I'm channelling that engineering muscle into autonomous multi-agent pipelines, LLM guardrails, red-teaming, and cloud-native AI infrastructure on AWS. My goal: build AI systems that are not just smart, but safe, observable, and production-ready."
  ],
  heroDesc: "I architect production-grade AI systems — multi-agent pipelines, LLM guardrails, and cloud-native infrastructure on AWS. BCA student from Tamil Nadu leveling up every day.",
  badge: "AI Engineer & Autonomous Systems Builder 🤖",
  photo: "images/rah.jpg",
  photo2: "images/rahab.jpg",
  resumePath: "Abdul_Rahoof_Resume.docx",

  // ---------- System Telemetry ----------
  telemetry: {
    status: "Open to AI & Full-Stack Roles",
    location: "Tamil Nadu, India",
    timezone: "IST (UTC+05:30)",
    currentFocus: "LangGraph Multi-Agent Workflows & AWS Bedrock Guardrails",
    experienceYears: "2+",
    projectsShipped: "5+",
    happyClients: "3+",
  },

  // ---------- Contact ----------
  contact: {
    email: "rahoof.codes@gmail.com",
    github: "https://github.com/Rahoof-Codes",
    linkedin: "https://www.linkedin.com/in/abdul-rahoof-25a1983b6",
    githubUsername: "Rahoof-Codes",
    linkedinName: "Abdul Rahoof",
  },

  // ---------- Education ----------
  education: {
    college: "Government Arts and Science College, Oddanchathram",
    degree: "Bachelor of Computer Applications (BCA)",
    status: "Currently Pursuing",
    focus: "AI Engineering, Full-Stack Architecture & Cloud-Native Production Systems",
    highlights: [
      "Specializing in Autonomous Multi-Agent Systems & Vector Databases",
      "Building client-grade web applications & production-ready cloud APIs",
      "Active open-source builder & continuous technical experimenter"
    ]
  },

  // ---------- Skills & Expertise ----------
  skills: [
    {
      title: "AI & LLM Engineering",
      icon: "Brain",
      category: "ai",
      tags: ["LangGraph", "LangSmith", "AWS Bedrock", "Guardrails", "PyRIT Red-Teaming", "Vector DBs (pgvector)", "Prompt Engineering"],
      highlight: true,
      learning: false,
      level: 90,
    },
    {
      title: "Full Stack & Web Dev",
      icon: "Globe",
      category: "fullstack",
      tags: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3", "REST APIs", "Responsive UI/UX"],
      highlight: false,
      learning: false,
      level: 94,
    },
    {
      title: "Backend, DB & Cloud",
      icon: "Cloud",
      category: "backend",
      tags: ["Node.js", "Express.js", "PostgreSQL", "Supabase", "AWS (Bedrock, S3, IAM)", "Terraform", "Redis"],
      highlight: false,
      learning: false,
      level: 84,
    },
    {
      title: "Tools & DevOps",
      icon: "Wrench",
      category: "devops",
      tags: ["Git & GitHub", "GitHub Actions CI/CD", "Docker", "VS Code", "Vercel", "Linux / Bash"],
      highlight: false,
      learning: false,
      level: 86,
    },
  ],

  // ---------- Projects ----------
  projects: [
    {
      num: "01",
      title: "ClientOS — Enterprise CRM",
      category: "fullstack",
      categoryLabel: "Full Stack",
      desc: "A private full-stack Client Management System built with React, Tailwind CSS, and Supabase. Features role-based access for Admin and Staff, dual client billing cycles (Monthly & One-Time), live revenue tracking, outstanding balance calculations, and CSV reporting.",
      tech: ["React", "Tailwind CSS", "Supabase", "PostgreSQL", "Auth"],
      live: "https://client-management-system-kohl-six.vercel.app",
      code: "https://github.com/Rahoof-Codes/Client-Management-System",
      image: "images/crm.jpg",
      character: "🗂️",
      highlights: [
        "Multi-role security with granular Admin vs Staff permissions",
        "Live financial ledger calculating outstanding balances in real-time",
        "One-click CSV export engine for accounting and client billing"
      ]
    },
    {
      num: "02",
      title: "J.A.R.V.I.S — Private Voice AI",
      category: "ai",
      categoryLabel: "AI & ML",
      desc: "A self-hosted, offline AI assistant running Gemma 4 (4B parameters) locally. Features low-latency voice I/O with Faster-Whisper & Piper TTS, an ultra-lightweight mobile interface under 50MB, and a fully auth-protected VPS backend. Zero cloud dependency, 100% privacy.",
      tech: ["Ollama", "Gemma 4", "Faster-Whisper", "Piper TTS", "Python", "React Native"],
      live: "",
      code: "https://github.com/Rahoof-Codes/JARVIS",
      image: "images/jarvis.jpg",
      character: "🤖",
      completed: true,
      highlights: [
        "100% on-device local execution with zero third-party telemetry",
        "Real-time voice synthesis and STT turnaround under 800ms",
        "Lightweight React Native mobile frontend (<50MB APK)"
      ]
    },
    {
      num: "03",
      title: "Modern-Mart Textile",
      category: "frontend",
      categoryLabel: "E-Commerce",
      desc: "Serverless e-commerce web platform for a textile brand — sleek, mobile-optimized catalog, dynamic inventory showcase, and seamless one-tap WhatsApp checkout and order redirection.",
      tech: ["HTML5", "CSS3", "JavaScript", "WhatsApp API", "Serverless"],
      live: "https://modern-martin.vercel.app/",
      code: "https://github.com/Rahoof-Codes/Modern-Mart",
      image: "images/mart.jpg",
      character: "🧑‍💼",
      highlights: [
        "Instant zero-friction checkout redirected straight to WhatsApp",
        "Lightweight, 100/100 Lighthouse performance score",
        "Fluid catalog filtering by apparel category"
      ]
    },
    {
      num: "04",
      title: "Tea Hub Billing POS App",
      category: "tools",
      categoryLabel: "Tools & POS",
      desc: "A fast, offline-first Point-of-Sale (POS) and billing web app tailored to fast-paced food counters. Tracks daily transactions, item inventory, and real-time revenue analytics with zero external server latency.",
      tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "POS"],
      live: "https://rahoof-codes.github.io/tea-hub-billing-app/",
      code: "https://github.com/Rahoof-Codes/tea-hub-billing-app",
      image: "images/bill.jpg",
      character: "🧾",
      highlights: [
        "Works seamlessly offline using browser LocalStorage caching",
        "Automatic receipt generation with tax and total calculation",
        "Pre-configured demo access: [admin / admin1234]"
      ]
    },
    {
      num: "05",
      title: "Empire Construction",
      category: "frontend",
      categoryLabel: "Frontend",
      desc: "Modern corporate website template designed for heavy construction, architecture, and infrastructure firms featuring project galleries, service breakdowns, and lead capture forms.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
      live: "https://empire-construction-ten.vercel.app/",
      code: "https://github.com/Rahoof-Codes/empire-construction",
      image: "images/construct.jpg",
      character: "👷",
      highlights: [
        "Polished commercial layout with responsive project showcase",
        "Optimized layout, swift page transitions, and contact pipeline"
      ]
    },
  ],

  // ---------- Flagship In-Progress Project ----------
  wip: {
    name: "Multi-Agent AI Research Platform",
    tagline: "4-Agent LangGraph Pipeline · AWS Bedrock Guardrails · PyRIT Red-Teaming",
    description: "A production-grade autonomous research platform where a 4-agent LangGraph pipeline (Search → Summarize → Write → Verify) processes any complex topic end-to-end. Every prompt and generated response passes through AWS Bedrock Guardrails, a TensorZero LLM gateway with GPT-4o/Groq fallback, and a three-tier memory architecture.",
    status: "Active Development",
    progress: 58,
    features: [
      {
        icon: "Bot",
        title: "4-Agent LangGraph Pipeline",
        desc: "Autonomous workflow: Search → Summarize → Write → Verify with structured Pydantic schema validation."
      },
      {
        icon: "ShieldAlert",
        title: "AWS Bedrock Guardrails",
        desc: "Real-time content moderation, PII redaction, prompt injection defense, and policy enforcement on AWS."
      },
      {
        icon: "Layers",
        title: "3-Tier Memory Architecture",
        desc: "Redis STM for session continuity, pgvector LTM for semantic recall, and semantic caching for fast responses."
      },
      {
        icon: "Flame",
        title: "PyRIT Red Team Suite",
        desc: "Continuous automated adversarial stress testing against jailbreaks, XPIA, and crescendo injection vectors."
      },
    ],
    tech: ["LangGraph", "LangSmith", "AWS Bedrock", "TensorZero", "GPT-4o", "Groq", "Redis", "pgvector", "PyRIT", "Terraform", "GitHub Actions"],
    github: "https://github.com/Rahoof-Codes",
  },

  // ---------- Agent Simulator Scenarios ----------
  simulatorScenarios: [
    {
      query: "Analyze LLM Red-Teaming using PyRIT & AWS Bedrock",
      agents: [
        { name: "Search Agent", action: "Querying Arxiv, GitHub PyRIT repo & AWS Bedrock docs...", status: "Found 14 relevant threat models & attack trees." },
        { name: "Summarize Agent", action: "Extracting attack patterns: Crescendo, Skeleton Key & Indirect Injections...", status: "Synthesized 3 core defense strategies." },
        { name: "Writer Agent", action: "Compiling hardened architecture report with Bedrock Guardrails configuration...", status: "Drafted production-grade security blueprint." },
        { name: "Bedrock Guardrail Agent", action: "Validating against PII, policy compliance & automated jailbreak filters...", status: "PASSED: Zero PII detected. Content safety score: 99.4%." }
      ],
      result: "Summary: Autonomous Multi-Agent architectures must implement defense-in-depth: Input filters via AWS Bedrock Guardrails, internal tool call sandboxing via LangGraph conditional edges, and continuous red-teaming with PyRIT to detect emerging jailbreak vectors before production deployment."
    },
    {
      query: "Design a 3-Tier Memory System for LangGraph Agents",
      agents: [
        { name: "Search Agent", action: "Querying Redis cache strategies, PostgreSQL pgvector specs & embedding benchmarks...", status: "Aggregated STM & LTM specs." },
        { name: "Summarize Agent", action: "Structuring memory boundaries: Session Window vs Semantic Long-Term Recall...", status: "Identified dual-tier indexing model." },
        { name: "Writer Agent", action: "Generating unified memory manager interface in Python with connection pooling...", status: "Generated schema & retrieval code." },
        { name: "Bedrock Guardrail Agent", action: "Auditing memory recall boundaries to prevent cross-session data leakage...", status: "PASSED: Strict user tenant isolation verified." }
      ],
      result: "Blueprint: Tier 1 (Redis) holds active scratchpad and recent conversation turns; Tier 2 (pgvector) stores hierarchical embeddings for semantic retrieval across sessions; Tier 3 (Semantic Caching) reduces API costs by 40% on recurring analytical queries."
    },
    {
      query: "Evaluate Local Gemma 4 + Piper TTS for Edge Voice AI",
      agents: [
        { name: "Search Agent", action: "Benchmarking Gemma 4B quantized models & Piper TTS ONNX inference speeds...", status: "Edge performance metrics retrieved." },
        { name: "Summarize Agent", action: "Analyzing memory footprint on 8GB RAM devices & token generation speeds...", status: "Average 24 tokens/sec sustained." },
        { name: "Writer Agent", action: "Formulating offline deployment pipeline with Faster-Whisper real-time audio chunking...", status: "Architecture documented." },
        { name: "Bedrock Guardrail Agent", action: "Validating local security posture & zero external telemetry...", status: "PASSED: 100% offline air-gapped compliance." }
      ],
      result: "Verdict: Gemma 4 (4B) paired with Faster-Whisper and Piper TTS delivers sub-800ms end-to-end voice turnaround on consumer-grade hardware with zero external API fees and total user privacy."
    }
  ],

  // ---------- FAQ for Jarvis Assistant ----------
  faq: [
    {
      question: "Who is Abdul Rahoof?",
      answer: "Abdul Rahoof is an AI Engineer and Full-Stack Developer based in Tamil Nadu, India. He builds production-ready multi-agent systems with LangGraph, Bedrock Guardrails, and cloud-native backends on AWS."
    },
    {
      question: "What is his flagship project?",
      answer: "Abdul's flagship project is the Multi-Agent AI Research Platform — an autonomous 4-agent LangGraph pipeline featuring AWS Bedrock Guardrails, 3-tier memory (Redis + pgvector), and PyRIT red-teaming."
    },
    {
      question: "What are his primary technical skills?",
      answer: "His core stack covers LangGraph, LangSmith, AWS Bedrock, Python, React.js, Tailwind CSS, Node.js, PostgreSQL/Supabase, Docker, Terraform, and GitHub Actions CI/CD."
    },
    {
      question: "Is Abdul available for hire or freelancing?",
      answer: "Yes! Abdul is actively open to AI Engineering and Full-Stack development roles, internships, and freelance projects. Reach him at rahoof.codes@gmail.com."
    },
    {
      question: "What are his education details?",
      answer: "He is currently pursuing his Bachelor of Computer Applications (BCA) at Government Arts and Science College, Oddanchathram, Tamil Nadu."
    }
  ]
};

