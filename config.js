// ============================================================
//  config.js — Edit YOUR info here. Don't touch app.js!
// ============================================================

const CONFIG = {

  // ---------- Personal Info ----------
  name: "Abdul Rahoof",
  title: "Aspiring Full Stack Developer",
  tagline: "Building the Web, One Project at a Time.",
  bio: [
    "I'm a <strong>BCA student</strong> and passionate <strong>Frontend Developer</strong> from Tamil Nadu, now leveling up toward full-stack development.",
    "I create responsive, user-friendly web apps — from static sites to practical tools with offline support and real-world integrations like WhatsApp ordering.",
    "Open to <strong>freelancing</strong>, small business web solutions, collaborations, and learning opportunities."
  ],
  heroDesc: "I build clean, responsive, and professional web apps that solve real-world problems. BCA student from Tamil Nadu leveling up every day.",
  badge: "Open to Freelancing & Collaborations",
  photo: "images/rah.jpg",

  // ---------- Contact ----------
  contact: {
    email: "gmail-rahoof.codes@gmail.com",
    github: "https://github.com/Rahoof-Codes",
    linkedin: "https://www.linkedin.com/in/abdul-rahoof-25a1983b6",
    githubUsername: "Rahoof-Codes",
    linkedinName: "Abdul Rahoof",
  },

  // ---------- Education ----------
  education: {
    college: "Government Arts and Science College, Oddanchathram",
    degree: "Bachelor of Computer Applications (BCA) — Currently Pursuing",
    focus: "Web Development, Programming Fundamentals & Building Practical Applications",
  },

  // ---------- Skills ----------
  skills: [
    {
      title: "Web Development",
      icon: "🌐",
      tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design"],
      highlight: false,
      learning: false,
    },
    {
      title: "Programming",
      icon: "⚡",
      tags: ["Problem Solving", "Logic Building"],
      highlight: false,
      learning: false,
    },
    {
      title: "Tools & Deployment",
      icon: "🛠️",
      tags: ["Git & GitHub", "VS Code", "Vercel", "SPCK Editor"],
      highlight: false,
      learning: false,
    },
    {
      title: "Currently Exploring",
      icon: "🚀",
      tags: ["React.js", "Backend Basics", "LocalStorage / Offline Apps"],
      highlight: true,
      learning: true,
    },
  ],

  // ---------- Projects ----------
  projects: [
    {
      num: "01",
      title: "Modern-Mart Textile",
      desc: "Serverless e-commerce site for a textile shop — clean UI, product catalog, and instant WhatsApp order redirection. Fully responsive & mobile-first.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      live: "https://modern-martin.vercel.app/",
      code: "https://github.com/Rahoof-Codes/Modern-Mart",
      image: "images/mart.jpg",
    },
    {
      num: "02",
      title: "Tea Hub Billing App",
      desc: "Mobile-friendly POS + inventory system for a tea & bakes shop. Features billing, receipt generation, stock tracking, and offline support via LocalStorage.",
      tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
      live: "https://billing-intwqo5y5-rahoofpros-projects.vercel.app/",
      code: "https://github.com/Rahoof-Codes/tea-hub-billing-app",
      image: "images/bill.jpg",
    },
  ],

  // ---------- What I'm Building (WIP) ----------
  wip: {
    name: "J.A.R.V.I.S",
    tagline: "My own Tony Stark AI. Private. Local. Real.",
    description: "A personal AI assistant that runs offline on my machine for full privacy — no ChatGPT, no data leaks. On mobile, it hits my own cloud server so I control everything end to end.",
    status: "In Progress",
    progress: 60, // percentage
    features: [
      { icon: "🧠", title: "Local LLM Brain",     desc: "Ollama + 7B model (~5GB). Runs on my own CPU/GPU — thinks offline, zero cloud dependency." },
      { icon: "🎙️", title: "Real Voice I/O",      desc: "Faster-Whisper for speech-to-text. Piper TTS speaks back. Feels like a real assistant." },
      { icon: "📱", title: "Tiny Mobile App",     desc: "Under 50MB APK. Just UI + voice capture. Sends to my VPS — no fat model on your phone." },
      { icon: "🔒", title: "Self-Hosted & Secure", desc: "My own VPS + GPU server. Auth-protected API. No subscriptions, no data sold. Ever." },
    ],
    tech: ["Ollama", "LLaMA 7B", "Faster-Whisper", "Piper TTS", "Python", "REST API", "React Native", "VPS / GPU"],
    github: "https://github.com/Rahoof-Codes",
  },
};
