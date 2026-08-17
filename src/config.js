// ============================================================
//  config.js — Edit YOUR info here. Don't touch app.js!
// ============================================================

export const CONFIG = {

  // ---------- Personal Info ----------
  name: "Abdul Rahoof",
  title: "AI Engineer | Full Stack Developer",
  tagline: "Building Intelligent Systems, One Agent at a Time.",
  bio: [
    "Hi, I'm Abdul Rahoof — a BCA student pivoting from full-stack web development into AI Engineering. I've shipped production React apps, CRM platforms, and POS systems for real clients. Now I'm channelling that engineering muscle into autonomous multi-agent pipelines, LLM guardrails, red-teaming, and cloud-native AI infrastructure on AWS. My goal: build AI systems that are not just smart, but safe, observable, and production-ready."
  ],
  heroDesc: "I architect production-grade AI systems — multi-agent pipelines, LLM guardrails, and cloud-native infrastructure on AWS. BCA student from Tamil Nadu leveling up every day.",
  badge: "Moving to AI Engineer 🤖",
  photo: "images/rah.jpg",
  photo2: "images/rahab.jpg",
  resumePath: "Abdul_Rahoof_Resume.docx",

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
    degree: "Bachelor of Computer Applications (BCA) — Currently Pursuing",
    focus: "AI Engineering, Full-Stack Development & Building Production-Ready Systems",
  },

  // ---------- Skills ----------
  skills: [
    {
      title: "AI & LLM Engineering",
      icon: "🧠",
      tags: ["LangGraph", "LangSmith", "AWS Bedrock", "Guardrails", "Red Teaming (PyRIT)"],
      highlight: true,
      learning: true,
    },
    {
      title: "Web Development",
      icon: "🌐",
      tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Responsive Design"],
      highlight: false,
      learning: false,
    },
    {
      title: "Backend & Cloud",
      icon: "☁️",
      tags: ["Node.js", "Express", "PostgreSQL", "Supabase", "AWS", "Terraform"],
      highlight: false,
      learning: false,
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      tags: ["Git & GitHub", "GitHub Actions CI/CD", "Docker", "VS Code", "Vercel"],
      highlight: false,
      learning: false,
    },
  ],

  // ---------- Projects ----------
  projects: [
    {
      num: "01",
      title: "ClientOS — CRM",
      desc: "A private full-stack Client Management System built with React, Tailwind CSS 4.0, and Supabase. Features role-based access for Admin and Staff, dual client types (Monthly & One-Time), payment tracking, outstanding balance counter, and CSV export.",
      tech: ["React", "Tailwind CSS 4", "Supabase", "PostgreSQL"],
      live: "https://client-management-system-kohl-six.vercel.app",
      code: "https://github.com/Rahoof-Codes/Client-Management-System",
      image: "images/crm.jpg",
      character: "🗂️",
    },
    {
      num: "02",
      title: "Modern-Mart Textile",
      desc: "Serverless e-commerce site for a textile shop — clean UI, product catalog, and instant WhatsApp order redirection. Fully responsive & mobile-first.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      live: "https://modern-martin.vercel.app/",
      code: "https://github.com/Rahoof-Codes/Modern-Mart",
      image: "images/mart.jpg",
      character: "🧑‍💼",
    },
    {
      num: "03",
      title: "Tea Hub Billing App",
      desc: "A fast, mobile-first Point-of-Sale (POS) and billing web app designed to streamline daily transactions, track inventory, and manage revenue using a lightweight serverless backend.[ Username:admin ; Password:admin1234 ].",
      tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
      live: "https://rahoof-codes.github.io/tea-hub-billing-app/",
      code: "https://github.com/Rahoof-Codes/tea-hub-billing-app",
      image: "images/bill.jpg",
      character: "🧾",
    },
    {
      num: "04",
      title: "EMPIRE CONSTRUCTION",
      desc: "A front-end website template designed for a construction business, Empire Construction.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      live: "https://empire-construction-ten.vercel.app/",
      code: "https://github.com/Rahoof-Codes/empire-construction",
      image: "images/construct.jpg",
      character: "👷",
    },
    {
      num: "05",
      title: "J.A.R.V.I.S — AI Assistant ✅",
      desc: "A self-hosted, offline AI assistant running Gemma 4 (4B parameters) locally — real voice I/O with Faster-Whisper & Piper TTS, a tiny mobile app under 50MB, and a fully auth-protected VPS backend. Zero cloud dependency, zero data leaks. Project completed.",
      tech: ["Ollama", "Gemma 4 - E 4B", "Faster-Whisper", "Piper TTS", "Python", "REST API", "React Native"],
      live: "",
      code: "https://github.com/Rahoof-Codes/JARVIS",
      image: "images/jarvis.jpg",
      character: "🤖",
      completed: true,
    },
  ],
  

  // ---------- What I'm Building (WIP) ----------
  wip: {
    name: "Multi-Agent AI Research Platform",
    tagline: "4-Agent Pipeline · AWS Guardrails · Red Teaming · Production-Grade",
    description: "A production-grade autonomous research platform where a 4-agent LangGraph pipeline (Search → Summarize → Write → Verify) processes any topic end-to-end, with every request passing through AWS Bedrock Guardrails, a TensorZero LLM gateway with GPT-4o/Groq fallback, and a three-tier memory system — Redis session memory (STM), pgvector long-term memory (LTM), and semantic caching.",
    status: "In Progress",
    progress: 45, // percentage
    features: [
      { icon: "🤖", title: "4-Agent LangGraph Pipeline", desc: "Search → Summarize → Write → Verify. Fully autonomous end-to-end research with structured output." },
      { icon: "🛡️", title: "AWS Bedrock Guardrails",     desc: "Every LLM call passes through content filters, PII redaction, and policy enforcement on AWS." },
      { icon: "🧠", title: "3-Tier Memory System",       desc: "Redis STM for sessions, pgvector LTM for long-term recall, and semantic caching for speed." },
      { icon: "🔴", title: "PyRIT Red Team Dashboard",   desc: "Continuous adversarial stress-testing: jailbreak, XPIA, crescendo, and skeleton key attacks." },
    ],
    tech: ["LangGraph", "LangSmith", "AWS Bedrock", "TensorZero", "GPT-4o", "Groq", "Redis", "pgvector", "PyRIT", "Terraform", "GitHub Actions"],
    github: "https://github.com/Rahoof-Codes",
  },
};
