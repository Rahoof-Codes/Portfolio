// ============================================================
//  config.js — Edit YOUR info here. Don't touch app.js!
// ============================================================

const CONFIG = {

  // ---------- Personal Info ----------
  name: "Abdul Rahoof",
  title: "Aspiring Full Stack Developer",
  tagline: "Building the Web, One Project at a Time.",
  bio: [
    "Hi, I'm Abdul Rahoof. I'm a second-year BCA student focused on full-stack web development. I spend my time working with React, Java, and JavaScript. A few real-world projects have been set up recently, like a bakery billing system and an online store. The main goal is to help local shops and schools go digital. Right now, I'm open to freelance work to keep building those solutions. When I'm not coding, I'm usually reading self-improvement books."
  ],
  heroDesc: "I build clean, responsive, and professional web apps that solve real-world problems. BCA student from Tamil Nadu leveling up every day.",
  badge: "Open to Freelancing & Collaborations",
  photo: "images/rah.jpg",
  photo2: "images/rahab.jpg",

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
      character: "🧑‍💼",
    },
    {
      num: "02",
      title: "Tea Hub Billing App",
      desc: "A fast, mobile-first Point-of-Sale (POS) and billing web app designed to streamline daily transactions, track inventory, and manage revenue using a lightweight serverless backend.[ Username:admin ; Password:admin1234 ].",
      tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
      live: "https://rahoof-codes.github.io/tea-hub-billing-app/",
      code: "https://github.com/Rahoof-Codes/tea-hub-billing-app",
      image: "images/bill.jpg",
      character: "🧾",
    },
    {
      num: "03",
      title: "EMPIRE CONSTRUCTION",
      desc: "A front-end website template designed for a construction business, Empire Construction.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      live: "https://empire-construction-ten.vercel.app/",
      code: "https://github.com/Rahoof-Codes/empire-construction",
      image: "images/construct.jpg",
      character: "👷",
    },
     {
      num: "04",
      title: "Doctor Appoinment",
      desc: "🏥 A modern doctor appointment booking web app built with Next.js 14, Supabase & Tailwind CSS. Book appointments instantly via WhatsApp — no forms, no waiting rooms.",
      tech: ["Next.js", "Typescript", "Tailwind CSS","Supabase"],
      live: "https://doctor-appointmentin.vercel.app/",
      code: "https://github.com/Rahoof-Codes/Doctor-Appointment.git",
      image: "images/doctor.jpg",
      character: "👨‍⚕️",
    },
    {
  num: "05",
  title: "LexDesk",
  desc: "⚖️ A full-stack advocate management suite to manage cases, hearings, billing & legal documents. Built with React, Node.js & PostgreSQL — deployed live.",
  tech: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma"],
  live: "https://lexdesk-cyan.vercel.app",
  code: "https://github.com/Rahoof-Codes/lexdesk",
  image: "images/lexdesk.jpg",
  character: "👨‍⚖️",
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
