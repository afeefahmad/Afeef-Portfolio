"use client"

import * as React from "react"
import { Navbar } from "@/components/navbar"
import { TechStackGrid } from "@/components/tech-icons"
import { Mail, Linkedin, Github, ChevronDown } from "lucide-react"

// Intersection Observer hook for animations
function useInView(options = {}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
      }
    }, { threshold: 0.15, ...options })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [options])

  return { ref, isInView }
}

// Section Tag Component
function SectionTag({ children, isVisible }: { children: React.ReactNode; isVisible?: boolean }) {
  return (
    <div className="font-mono text-xs font-medium tracking-wider uppercase text-[var(--accent)] mb-3">
      {children}
    </div>
  )
}

// Section Title Component
function SectionTitle({ children, isVisible }: { children: React.ReactNode; isVisible?: boolean }) {
  return (
    <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] mb-8">
      {children}
    </h2>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 md:px-14 relative overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 items-center gap-12 md:gap-24 relative z-10 pt-20 md:pt-0">
        <div className="hero-content space-y-6">
          <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[var(--text)]">
            Build Digital <span className="text-[var(--accent)]">Experiences</span>
          </h1>
          
          <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-xl">
            Full-stack developer creating beautiful, functional digital solutions. Let's turn your ideas into reality.
          </p>
          
          <div className="flex gap-4 pt-6">
            <a
              href="#projects"
              className="font-sans text-sm font-semibold tracking-wide px-8 py-3 rounded bg-[var(--accent)] text-white hover:bg-[var(--accent)]/90 transition-colors duration-300"
            >
              Explore Work
            </a>
            <a
              href="mailto:afeefzafar2@gmail.com"
              className="font-sans text-sm font-semibold tracking-wide px-8 py-3 rounded border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="hidden md:flex justify-center">
          <div className="relative w-80 h-80 rounded-2xl overflow-hidden border border-[var(--border)] shadow-lg">
            <img
              src="/profile-picture.jpg"
              alt="Afeef Ahmad"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 px-6 md:px-14 max-w-7xl mx-auto">
      <SectionTag isVisible={isInView}>About Me</SectionTag>
      <SectionTitle isVisible={isInView}>Turning Ideas Into Reality</SectionTitle>

      <div className="grid md:grid-cols-2 gap-16 md:gap-20 mt-14">
        <div className="about-text">
          <p className="text-[var(--muted)] text-base font-light leading-relaxed mb-5">
            I&apos;m <strong className="text-[var(--text)] font-medium">Afeef Ahmad</strong>, a passionate Full Stack and AI developer with under one year of professional experience. I enjoy turning ideas into practical, working solutions through clean code, simple design, and strong problem solving.
          </p>
          <p className="text-[var(--muted)] text-base font-light leading-relaxed mb-5">
            I work with modern web technologies like <strong className="text-[var(--text)] font-medium">React, Next.js, Node.js, and Python</strong>, and I&apos;m actively exploring AI-powered systems to build smarter, more interactive applications. I focus on writing maintainable code and creating user-friendly interfaces that feel smooth and intuitive.
          </p>
          <p className="text-[var(--muted)] text-base font-light leading-relaxed mb-8">
            I have hands-on experience building full stack web applications, integrating APIs, and developing AI-based features such as chat systems and automation tools — always learning and improving to stay aligned with modern development practices.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "⚡", label: "Fast Learner", val: "Adapts to new tech quickly" },
              { icon: "🎨", label: "Design-Minded", val: "Pixel-perfect attention" },
              { icon: "🔧", label: "Problem Solver", val: "Loves complex challenges" },
              { icon: "🤝", label: "Collaborative", val: "Team-first mindset" },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-[var(--border)] rounded-md p-4 bg-[var(--surface)] hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-xl mb-2">{item.icon}</div>
                <div className="font-sans text-sm font-semibold text-[var(--text)]">{item.label}</div>
                <div className="text-xs text-[var(--muted)] mt-1">{item.val}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-base text-[var(--muted)] leading-relaxed">
            Currently at <strong className="text-[var(--text)] font-medium">Symtera Technologies</strong>, I contribute to AI-driven conversational systems and real-world software solutions — growing in both frontend and backend development while strengthening my understanding of scalable system design.
          </p>
          <p className="text-base text-[var(--muted)] leading-relaxed">
            Outside of work, I enjoy exploring new technologies, improving UI/UX designs, and working on personal projects that challenge my skills. I&apos;m looking forward to opportunities where I can grow as a developer, contribute to impactful projects, and continue building intelligent digital experiences.
          </p>
        </div>
      </div>
    </section>
  )
}

// Skills Section
function SkillsSection() {
  const { ref, isInView } = useInView()

  const skillsData = [
    {
      category: "Frontend",
      title: "UI Development",
      skills: [
        { name: "React / Next.js", pct: 90 },
        { name: "HTML / CSS", pct: 95 },
        { name: "Tailwind CSS", pct: 88 },
        { name: "TypeScript", pct: 80 },
      ],
    },
    {
      category: "Backend",
      title: "Server & APIs",
      skills: [
        { name: "Node.js / Express", pct: 85 },
        { name: "Python / Django", pct: 75 },
        { name: "REST APIs", pct: 88 },
        { name: "GraphQL", pct: 70 },
      ],
    },
    {
      category: "Data & Cloud",
      title: "Infrastructure",
      skills: [
        { name: "MongoDB", pct: 82 },
        { name: "PostgreSQL", pct: 78 },
        { name: "AWS / Vercel", pct: 72 },
        { name: "Docker", pct: 65 },
      ],
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-24 md:py-32 px-6 md:px-14 bg-[var(--bg2)]">
      <div className="max-w-7xl mx-auto">
        <SectionTag isVisible={isInView}>Skills</SectionTag>
        <SectionTitle isVisible={isInView}>My Tech Arsenal</SectionTitle>

        {/* Tech Stack Logos Grid */}
        <TechStackGrid />

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {skillsData.map((card, cardIndex) => (
            <div
              key={card.category}
              className={`bg-[var(--surface)] border border-[var(--border)] rounded-xl p-7 transition-all duration-600 hover:border-[var(--border2)] hover:shadow-[0_0_30px_var(--glow)] hover:-translate-y-1 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
              }`}
              style={{ transitionDelay: `${cardIndex * 0.1}s` }}
            >
              <div className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-[var(--accent)] mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-[var(--accent)]" />
                {card.category}
              </div>
              <div className="font-sans text-lg font-bold tracking-tight mb-5">
                {card.title}
              </div>
              <div className="flex flex-col gap-3">
                {card.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-[var(--muted)]">{skill.name}</span>
                      <span className="font-mono text-xs text-[var(--accent)]">{skill.pct}%</span>
                    </div>
                    <div className="h-0.5 bg-[var(--border)] rounded overflow-hidden">
                      <div
                        className={`h-full rounded bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] transition-transform duration-1000 origin-left ${
                          isInView ? "scale-x-100" : "scale-x-0"
                        }`}
                        style={{
                          transform: isInView ? `scaleX(${skill.pct / 100})` : "scaleX(0)",
                          transitionDelay: `${cardIndex * 0.1 + skillIndex * 0.1 + 0.2}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Projects Section
function ProjectsSection() {
  const { ref, isInView } = useInView()

  const projects = [
    {
      num: "01",
      title: "LinkedIn B2B Lead Automation",
      desc: "AI-powered lead generation system automating collection, enrichment, scoring, and intelligent classification. Analyzes engagement patterns to identify high-potential prospects and categorize leads into hot, warm, or cold buckets for strategic B2B outreach.",
      fullDesc: "Architected a sophisticated AI-driven LinkedIn automation platform that revolutionizes B2B lead generation through intelligent data processing and advanced classification algorithms. The system automates the complete lead lifecycle—from discovery and enrichment to sophisticated scoring and strategic categorization—enabling organizations to identify and prioritize high-potential prospects with precision. Built with a scalable microservices architecture utilizing Python backends, PostgreSQL databases, and RESTful APIs, the platform processes engagement data in real-time to identify prospects with the highest conversion probability. The AI models classify leads into strategic buckets (hot, warm, cold) based on behavioral patterns, business relevance, and engagement metrics, empowering sales teams to focus on the most promising opportunities. Features controlled data updates, secure processing protocols, and comprehensive audit trails ensuring enterprise-grade reliability and compliance.",
      date: "Apr 2026 - May 2026",
      tags: ["AI / Automation", "Full Stack"],
      tech: ["Python", "PostgreSQL", "APIs", "AI/ML", "Data Engineering"],
      gradient: "linear-gradient(135deg, #0a1628, #0f2847)",
      glow: "rgba(0, 217, 255, 0.2)",
      tagColor: "#00d9ff",
      image: "/linkedin-b2b-automation.jpg",
      features: [
        "Intelligent lead collection and data enrichment",
        "Advanced AI-powered lead scoring engine",
        "Strategic lead classification (hot/warm/cold)",
        "Real-time engagement analysis and tracking",
        "Scalable microservices architecture",
        "Secure data processing with audit trails"
      ]
    },
    {
      num: "02",
      title: "Symtera Chatbot — AI Assistant",
      desc: "An intelligent conversational AI chatbot developed for Symtera Technologies. Features natural language processing, context awareness, and seamless API integration for customer support automation.",
      fullDesc: "Developed an enterprise-grade conversational AI assistant for Symtera Technologies that leverages advanced natural language processing to deliver contextually aware, human-like interactions. The chatbot seamlessly integrates with existing customer support infrastructure through well-architected APIs, automating routine inquiries while maintaining human oversight for complex issues. Built with modern NLP models and reinforcement learning, the system continuously improves response accuracy through user interactions.",
      date: "Jan 2025 - Present",
      tags: ["AI / NLP", "Full Stack"],
      tech: ["React", "Node.js", "AI/ML", "NLP"],
      gradient: "linear-gradient(135deg, #1a0f2e, #2d1a4e)",
      glow: "rgba(147, 51, 234, 0.2)",
      tagColor: "#9333ea",
      image: "/symtera-chatbot.jpg",
      features: [
        "Advanced NLP and language understanding",
        "Context-aware conversations",
        "API integration with support systems",
        "Real-time response generation",
        "Multi-language support capability"
      ]
    },
    {
      num: "03",
      title: "DevSpace — SaaS Dashboard",
      desc: "A comprehensive project management SaaS with real-time collaboration, kanban boards, analytics, and team workspace features.",
      fullDesc: "Built a production-ready project management platform that empowers distributed teams with real-time collaboration capabilities. The platform features intuitive kanban boards, comprehensive task management, team workspaces, and advanced analytics for project insights. Architected with modern React frontend and robust Node.js backend, ensuring scalability and performance.",
      date: "Sep 2024 - Dec 2024",
      tags: ["Full Stack", "SaaS"],
      tech: ["React", "Node.js", "MongoDB", "WebSockets"],
      gradient: "linear-gradient(135deg, #040d1a, #0a1628)",
      glow: "rgba(0, 200, 255, 0.15)",
      tagColor: "var(--accent)",
      image: "/devspace-saas.jpg",
      features: [
        "Real-time team collaboration",
        "Kanban board management",
        "Task assignment and tracking",
        "Project analytics dashboard",
        "Team workspace management"
      ]
    },
    {
      num: "04",
      title: "AI Content Generator",
      desc: "An AI-powered web application that generates blog posts, social media content, and marketing copy using OpenAI's GPT API.",
      fullDesc: "Created an innovative content generation platform powered by OpenAI's GPT models, enabling content creators to generate high-quality blog posts, social media content, and marketing copy at scale. Features intelligent templates, tone customization, and SEO optimization.",
      date: "Jun 2024 - Aug 2024",
      tags: ["AI App"],
      tech: ["Next.js", "OpenAI", "Prisma"],
      gradient: "linear-gradient(135deg, #0d0a1f, #16102e)",
      glow: "rgba(124, 92, 252, 0.2)",
      tagColor: "var(--accent2)",
      image: "/ai-content-generator.jpg",
      features: [
        "AI-powered content generation",
        "Multiple content type templates",
        "Tone and style customization",
        "SEO optimization",
        "Bulk generation capabilities"
      ]
    },
    {
      num: "05",
      title: "ShopFlow — E-Commerce Platform",
      desc: "A full-featured e-commerce platform with product management, Stripe payments, order tracking, and an admin dashboard.",
      fullDesc: "Developed a complete e-commerce solution featuring secure payment processing with Stripe integration, comprehensive product management, real-time order tracking, and an intuitive admin dashboard for business operations.",
      date: "Mar 2024 - May 2024",
      tags: ["E-Commerce"],
      tech: ["React", "Express", "Stripe"],
      gradient: "linear-gradient(135deg, #030f0a, #051a10)",
      glow: "rgba(0, 255, 179, 0.12)",
      tagColor: "var(--accent3)",
      image: "/shopflow-ecommerce.jpg",
      features: [
        "Secure payment processing",
        "Product management system",
        "Order tracking and history",
        "Admin dashboard",
        "Inventory management"
      ]
    },
  ]

  const [selectedProject, setSelectedProject] = React.useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 px-6 md:px-14 max-w-7xl mx-auto">
      <SectionTag isVisible={isInView}>Projects</SectionTag>
      <SectionTitle isVisible={isInView}>Selected Work</SectionTitle>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-14">
        {projects.map((project, i) => (
          <div
            key={project.num}
            onClick={() => setSelectedProject(project)}
            className={`border border-[var(--border)] rounded-xl bg-[var(--surface)] overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-[var(--border2)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] group w-full cursor-pointer ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div
              className="h-48 relative overflow-hidden flex items-center justify-center"
              style={{ background: project.gradient }}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
              )}
              <div
                className="absolute inset-0"
                style={{ background: `radial-gradient(ellipse at 50% 50%, ${project.glow}, transparent 60%)` }}
              />
              <span className="absolute bottom-[-10px] right-5 font-sans text-7xl font-extrabold bg-gradient-to-br from-[var(--accent)]/15 to-[var(--accent2)]/15 bg-clip-text text-transparent leading-none">
                {project.num}
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <div className="font-sans text-lg sm:text-xl font-bold tracking-tight mb-2.5 group-hover:text-[var(--accent)] transition-colors duration-300 line-clamp-2">
                {project.title}
              </div>
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-4 line-clamp-2">{project.desc}</p>
              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] sm:text-[10px] font-medium tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-sm border"
                    style={{
                      color: project.tagColor,
                      background: `${project.tagColor}15`,
                      borderColor: `${project.tagColor}30`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/90 to-transparent" />
            </div>
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <div className="flex justify-between items-center border-t border-[var(--border)] pt-4">
                <div className="flex gap-1.5 flex-wrap">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-sm bg-[var(--surface2)] text-[var(--dim)] border border-[var(--border)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="font-sans text-[10px] sm:text-xs font-semibold text-[var(--accent)] tracking-wider flex items-center gap-1 hover:gap-2 transition-all duration-300 whitespace-nowrap"
                >
                  View →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[var(--surface)] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[var(--border)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with image */}
            <div className="relative h-80 overflow-hidden">
              {selectedProject.image && (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div
                className="absolute inset-0"
                style={{ background: `radial-gradient(ellipse at 50% 50%, ${selectedProject.glow}, transparent 60%)` }}
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--bg)]/80 backdrop-blur flex items-center justify-center text-[var(--text)] hover:bg-[var(--bg)] transition-colors duration-300"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-mono text-[var(--accent)] tracking-wider uppercase mb-2">
                    {selectedProject.date}
                  </p>
                  <h1 className="font-sans text-3xl md:text-4xl font-bold text-[var(--text)]">
                    {selectedProject.title}
                  </h1>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-xs font-medium tracking-wider px-3 py-1.5 rounded-full"
                    style={{
                      color: selectedProject.tagColor,
                      background: `${selectedProject.tagColor}15`,
                      border: `1px solid ${selectedProject.tagColor}30`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Full Description */}
              <p className="text-base text-[var(--muted)] leading-relaxed mb-8">
                {selectedProject.fullDesc}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-sans text-lg font-bold text-[var(--text)] mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-[var(--muted)]">
                      <span className="text-[var(--accent)] font-bold mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-8 pb-8 border-b border-[var(--border)]">
                <h3 className="font-sans text-lg font-bold text-[var(--text)] mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1.5 rounded-md bg-[var(--bg)] text-[var(--muted)] border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href="https://github.com/afeefahmad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans font-semibold text-sm px-6 py-3 rounded-lg bg-[var(--accent)] text-white hover:opacity-90 transition-opacity duration-300"
              >
                View on GitHub
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

// Experience Section
function ExperienceSection() {
  const { ref, isInView } = useInView()

  const workHistory = [
    {
      date: "Mar 2026 — Present",
      title: "AI Development Intern",
      company: "Symtera Technologies · Lahore, PK",
      desc: "Spearheading intelligent conversational AI development and NLP solution architecture. Building the Symtera Chatbot with advanced AI/ML capabilities, seamless API integrations, and enterprise-grade customer support automation. Collaborating with cross-functional teams to deploy production-ready AI systems.",
    },
    {
      date: "Jan 2024 — Aug 2024",
      title: "Frontend Developer",
      company: "Freelance / Remote",
      desc: "Architecting and delivering high-performance web applications for diverse clients across fintech, SaaS, and e-commerce sectors. Specializing in React-based frontends with clean, scalable code. Ensuring pixel-perfect implementations and optimal user experiences.",
    },
    {
      date: "Sep 2023 — May 2024",
      title: "Junior Full-Stack Developer",
      company: "Tech Startup · Lahore, PK",
      desc: "Engineered and maintained production-grade web applications using React, Node.js, and MongoDB. Delivered features in fast-paced agile environment, participating in code reviews, performance optimization, and database schema design. Reduced API response times by 40% through strategic caching.",
    },
    {
      date: "Feb 2023 — Jun 2023",
      title: "Web Developer Intern",
      company: "Digital Agency · Remote",
      desc: "Built responsive landing pages and implemented performance optimization strategies resulting in 35% faster load times. Assisted senior developers with full-stack feature development, participated in debugging complex issues, and contributed to internal tools development.",
    },
  ]

  const education = [
    {
      date: "2021 — 2025",
      title: "B.Sc. Computer Science",
      company: "University · Pakistan",
      desc: "Studying core computer science fundamentals — algorithms, data structures, software engineering, and database systems. Active participant in coding competitions and dev clubs.",
    },
    {
      date: "2023",
      title: "Full-Stack Web Certification",
      company: "freeCodeCamp / Online",
      desc: "Completed 300+ hours of coursework covering responsive web design, JavaScript algorithms, front-end libraries, and API development.",
    },
    {
      date: "2022",
      title: "Meta Front-End Developer",
      company: "Coursera / Meta",
      desc: "Professional certificate covering React, UX fundamentals, version control, and software development lifecycle practices.",
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-24 md:py-32 px-6 md:px-14 bg-[var(--bg2)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-20">
        <div>
          <SectionTag isVisible={isInView}>Experience</SectionTag>
          <SectionTitle isVisible={isInView}>Work History</SectionTitle>

          <div className="mt-14 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-[var(--accent)] before:to-transparent">
            {workHistory.map((item, i) => (
              <div
                key={item.title}
                className={`relative mb-12 transition-all duration-600 hover:translate-x-1 group ${
                  isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                }`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-[var(--bg)] border-2 border-[var(--accent)] shadow-[0_0_12px_var(--glow)] group-hover:scale-125 transition-transform duration-300" />
                <div className="font-mono text-xs text-[var(--accent)] tracking-widest font-semibold mb-2 uppercase">{item.date}</div>
                <div className="font-sans text-lg font-bold tracking-tight mb-1 text-[var(--text)]">{item.title}</div>
                <div className="text-sm text-[var(--muted)] mb-2.5 font-medium">{item.company}</div>
                <div className="text-sm text-[var(--dim)] leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionTag isVisible={isInView}>Education</SectionTag>
          <SectionTitle isVisible={isInView}>Academic Path</SectionTitle>

          <div className="mt-14 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-[var(--accent2)] before:to-transparent">
            {education.map((item, i) => (
              <div
                key={item.title}
                className={`relative mb-12 transition-all duration-600 hover:translate-x-1 group ${
                  isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                }`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-[var(--bg)] border-2 border-[var(--accent2)] shadow-[0_0_12px_var(--glow2)] group-hover:scale-125 transition-transform duration-300" />
                <div className="font-mono text-xs text-[var(--accent2)] tracking-widest font-semibold mb-2 uppercase">{item.date}</div>
                <div className="font-sans text-lg font-bold tracking-tight mb-1 text-[var(--text)]">{item.title}</div>
                <div className="text-sm text-[var(--muted)] mb-2.5 font-medium">{item.company}</div>
                <div className="text-sm text-[var(--dim)] leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    { icon: "/instagram-logo.svg", url: "https://instagram.com/afeef_khokhar", label: "Instagram" },
    { icon: "/gmail-logo.svg", url: "mailto:afeefzafar2@gmail.com", label: "Gmail" },
    { icon: "/twitter-logo.svg", url: "https://twitter.com/afeefahmad57927", label: "Twitter" },
    { icon: "/github-logo.svg", url: "https://github.com/afeefahmad", label: "GitHub", target: "_blank" },
  ]

  return (
    <footer className="relative border-t border-[var(--border)] bg-gradient-to-b from-[var(--bg)] to-[var(--bg3)]/50 px-6 md:px-14 py-12 overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[var(--accent2)]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
          {/* Left: Brand & Description */}
          <div className="flex flex-col justify-start">
            <div className="font-sans text-xl font-black bg-gradient-to-r from-[var(--accent)] via-[var(--accent2)] to-[var(--accent3)] bg-clip-text text-transparent mb-3">
              Afeef Ahmad
            </div>
            <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
              Full-Stack Developer & AI Enthusiast crafting intelligent digital solutions that transform ideas into reality.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent3)] animate-pulse" />
              <span className="text-xs text-[var(--muted)]">Active & Open to Work</span>
            </div>
          </div>

          {/* Center: Quick Email Link */}
          <div className="flex flex-col justify-start">
            <h4 className="font-sans text-sm font-bold text-[var(--text)] mb-4 uppercase tracking-wider">
              Get In Touch
            </h4>
            <a
              href="mailto:afeefzafar2@gmail.com"
              className="group inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#EA4335]/20 to-[#EA4335]/10 border border-[#EA4335]/30 rounded-lg text-sm font-semibold text-[#EA4335] hover:border-[#EA4335] hover:bg-[#EA4335]/30 hover:shadow-[0_8px_20px_rgba(234,67,53,0.15)] transition-all duration-300 w-fit"
            >
              <Mail className="w-4 h-4" />
              <span>Email Us</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
            </a>
            <p className="text-xs text-[var(--dim)] mt-3">afeefzafar2@gmail.com</p>
          </div>

          {/* Right: Social Links */}
          <div className="flex flex-col justify-start">
            <h4 className="font-sans text-sm font-bold text-[var(--text)] mb-4 uppercase tracking-wider">
              Follow Me
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target={social.label === "Gmail" ? "_self" : "_blank"}
                  rel={social.label === "Gmail" ? "" : "noopener noreferrer"}
                  className="w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/15 transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                  title={social.label}
                >
                  <img src={social.icon} alt={social.label} className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-[var(--dim)] font-mono">
            <span>© {currentYear} Afeef Ahmad</span>
            <span className="mx-2">•</span>
            <span>Made with code & passion</span>
          </div>
          
          <div className="text-xs text-[var(--dim)]">
            Lahore, Pakistan 🇵🇰
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main className="bg-[var(--bg)]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <Footer />
    </main>
  )
}
