"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import GlassNavbar from "@/components/glass-navbar"
import {
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Code,
  Brain,
  Heart,
  Cloud,
  Pen,
  ListTodo,
  PenTool
} from "lucide-react"

type PortfolioProject = {
  title: string
  description: string
  icon: typeof Cloud
  technologies: string[]
  liveUrl: string
  image: string
  badge?: string
  flippa?: string
}

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    { name: "Backend Architecture & Microservices", level: 95 },
    { name: "AI Agentic Workflow Design", level: 90 },
    { name: "LLM Integration & Orchestration", level: 90 },
    { name: "API Platforms & Event-Driven Systems", level: 85 },
    { name: "Cloud Infrastructure (AWS/GCP/Azure)", level: 75 },
    { name: "Security, Compliance & Reliability", level: 80 },
    { name: "Frontend Development (React, Next.js, Angular)", level: 85 },
  ]

  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Capital One",
      period: "2024 - 2026",
      summary:
        "Led development of a scalable, secure payment platform using Node.js, Python, and AWS, improving transaction reliability and system performance. Built microservices, APIs, and CI/CD pipelines while integrating AI-driven automation and enhancing observability.",
      skills: ["Node.js", "Python", "AWS", "Microservices", "CI/CD", "Observability"],
    },
    {
      role: "Senior Software Engineer",
      company: "Datadog",
      period: "2020 - 2024",
      summary:
        "Built high-performance telemetry and observability systems using Go, Python, and Node.js, improving data ingestion, latency, and scalability across cloud environments. Developed full-stack features with React, optimized backend APIs and databases, and enhanced real-time AWS monitoring",
      skills: ["Go", "Python", "Node.js", "React", "AWS", "Kafka", "Cassandra", "Observability"],
    },
    {
      role: "Software Engineer",
      company: "HCA Healthcare",
      period: "2016 - 2019",
      summary:
        "Developed real-time healthcare data systems and microservices for clinical applications, improving patient data processing and system efficiency. Built secure APIs, ETL pipelines, and containerized solutions for large-scale hospital networks.",
      skills: ["Healthcare Data", "Microservices", "ETL", "APIs", "Docker"],
    },
    {
      role: "Software Engineer",
      company: "Plaid",
      period: "2015 - 2016",
      summary:
        "Built financial data integration services and backend systems for high-volume banking APIs, improving data normalization and performance. Contributed to early frontend and infrastructure automation to support rapid fintech growth.",
      skills: ["Fintech APIs", "Backend Systems", "Data Integration", "Automation"],
    },
  ]

  const projects: PortfolioProject[] = [
    {
      title: "Weather Forecast",
      description:
        "Weather forecast app with engaging interactive elements and visualizations. Smart weather discovery platform.",
      icon: Cloud,
      technologies: ["React", "Weather API", "Next.js"],
      liveUrl: "https://weather-app-bay-three-17.vercel.app",
      image: "/weather.png",
    },
    {
      title: "Taskflow",
      description:
        "A modern, responsive todo app built with Next.js, TypeScript, and Tailwind CSS—focused on productivity and a polished daily task workflow.",
      icon: ListTodo,
      //badge: "Live",
      technologies: ["React", "Productivity", "TypeScript", "Next.js", "Todo App", "Tailwind CSS", "Vercel"],
      liveUrl: "https://taskflow-todo-app-woad.vercel.app",
      image: "/taskflow.png",
    },
    {
      title: "EchoGPT Frontend",
      description:
        "Frontend for EchoGPT, a full-stack conversational AI app with a responsive chat UI, real-time streaming responses, and Firebase-powered authentication.",
      icon: Brain,
      technologies: ["React", "Vite", "Tailwind CSS", "Firebase", "Gemini API"],
      liveUrl: "https://echo-gpt-lang-chain-frontend.vercel.app",
      image: "/echogpt.png",
    },
    {
      title: "Draftly",
      description:
        "AI-powered blog writing agent that runs a multi-agent LangGraph pipeline with Tavily research, parallel writers, and export-ready outputs for multiple publishing platforms.",
      icon: Pen,
      technologies: ["Next.js", "React", "Tailwind CSS", "FastAPI", "LangGraph", "Tavily API", "OpenRouter"],
      liveUrl: "https://draftly-woad.vercel.app",
      image: "/draftly.png",
    },
    {
      title: "Habit-a-Day",
      description:
        "TypeScript health assistant powered by a Claude chatbot for conversational nutrition and physical therapy guidance.",
      icon: Heart,
      badge: "Progress",
      technologies: [
        "TypeScript",
        "Claude API",
        "LLM Agents",
        "Nutrition Guidance",
      ],
      liveUrl: "",
      image: "/habitday.png",
    },

  ]

  return (
    <div className="min-h-screen bg-background">
      <GlassNavbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/10 blur-[130px] rounded-full -z-10 pointer-events-none mix-blend-screen" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground/800 bg-clip-text text-transparent">
              Manny Powell
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Software Engineer at Capital One
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 font-light">
               Web & Mobile Development | AI & SaaS Specialist | Cloud Infrastructure & Observability
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-full"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                See My Work
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* ... existing floating elements ... */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Senior Software Engineer focused on backend platforms and AI agentic workflows. I build microservice
              ecosystems, API-first architectures, and LLM-powered automation pipelines with Node.js, Python, Go, and
              Java to deliver secure, cloud-native systems on AWS, GCP, and Azure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-accent h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Code className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Backend Platform Engineering</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Scalable services, resilient APIs, event streams, and production observability
                  </p>
                </Card>
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Brain className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">AI Agentic Workflows</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Multi-agent orchestration, tool-calling pipelines, and reliable human-in-the-loop automation
                  </p>
                </Card>
              </div>
              <Card className="p-6">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Core Technologies & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Python",
                    "Microservices",
                    "Agentic AI",
                    "LLM Orchestration",
                    "LangChain",
                    "Hugging Face",
                    "n8n",
                    "Tool Calling",
                    "RAG Pipelines",
                    "REST APIs",
                    "AWS",
                    "Docker",
                    "Kubernetes",
                    "Redis",
                    "PostgreSQL",
                    "React",
                    "TypeScript", 
                  ].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 bg-slate-950 text-slate-100 border-y border-slate-800/80 dark:bg-slate-100 dark:text-slate-900 dark:border-slate-200/80"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-50 dark:text-slate-900">Experience</h2>
            <p className="text-lg text-slate-300 dark:text-slate-600 max-w-3xl mx-auto">
              A snapshot of company roles and impact delivered across engineering and operations domains.
            </p>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.role}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow border border-slate-800/60 bg-slate-900/40 text-slate-100 shadow-md dark:border-slate-200 dark:bg-white dark:text-slate-900">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-slate-50 dark:text-slate-900">{experience.role}</h3>
                    <p className="text-xl font-medium text-slate-200 dark:text-slate-800">{experience.company}</p>
                    <p className="text-sm text-slate-400 dark:text-slate-500">{experience.period}</p>
                    <p className="text-slate-300 dark:text-slate-600 leading-relaxed max-w-3xl">{experience.summary}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {experience.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs border border-slate-700/80 bg-slate-800/80 text-slate-100 dark:border-slate-200 dark:bg-slate-100 dark:text-slate-900"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Showcasing my full-stack delivery beyond backend systems, AI-powered products, and polished frontend experiences
            </p>
          </motion.div>

          {/* ... existing projects grid ... */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <project.icon className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-gray-900 dark:text-gray-100">
                      {project.title}
                      <div className="flex gap-2">
                        {project.badge === "listed for sale" && project.flippa && (
                          <a
                            href={project.flippa}
                            target="_blank"
                            rel="noopener noreferrer"
                            tabIndex={-1}
                            style={{ textDecoration: "none" }}
                          >
                            <Badge
                              className="ml-2 text-xs border-green-600 bg-green-100 text-green-800 cursor-pointer"
                              style={{
                                borderWidth: "1.5px",
                                backgroundColor: "#dcfce7", // Tailwind green-100
                                color: "#166534", // Tailwind green-800
                                borderColor: "#16a34a", // Tailwind green-600
                              }}
                              tabIndex={0}
                            >
                              listed for sale
                            </Badge>
                          </a>
                        )}
                        {project.badge === "Progress" && (
                          <Badge
                            className="ml-2 text-xs border-yellow-600 bg-yellow-100 text-yellow-800"
                            style={{
                              borderWidth: "1.5px",
                              backgroundColor: "#fefce8", // Tailwind yellow-100
                              color: "#d97706", // Tailwind yellow-800
                              borderColor: "#f59e0b", // Tailwind yellow-600
                            }}
                          >
                            Progress
                          </Badge>
                        )}
                        {project.badge === "sold" && (
                          <Badge
                            className="ml-2 text-xs border-red-600 bg-red-100 text-red-800"
                            style={{
                              borderWidth: "1.5px",
                              backgroundColor: "#fee2e2", // Tailwind red-100
                              color: "#991b1b", // Tailwind red-800
                              borderColor: "#f87171", // Tailwind red-600
                            }}
                          >
                            sold
                          </Badge>
                        )}
                        {project.liveUrl ? (
                          <Button size="sm" variant="ghost" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        ) : null}

                      </div>
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Let's Work Together
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-gray-700 dark:text-gray-300">mnpowell246@hotmail.com
</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-gray-700 dark:text-gray-300">Available Worldwide</span>
                </div>
              </div>

            </motion.div>

            {/* ... existing contact form ... */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 flex flex-col items-center justify-center bg-gradient-to-br from-accent/30 via-card/80 to-background/80 shadow-2xl border-0">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                    className="mb-6"
                  >
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                      <circle cx="32" cy="32" r="32" fill="#fbbf24" fillOpacity="0.2" />
                      <path d="M32 16C25.3726 16 20 21.3726 20 28C20 34.6274 25.3726 40 32 40C38.6274 40 44 34.6274 44 28C44 21.3726 38.6274 16 32 16ZM32 36C27.5817 36 24 32.4183 24 28C24 23.5817 27.5817 20 32 20C36.4183 20 40 23.5817 40 28C40 32.4183 36.4183 36 32 36Z" fill="#fbbf24" />
                      <circle cx="32" cy="28" r="4" fill="#fbbf24" />
                    </svg>
                  </motion.div>
                  <h4 className="text-2xl font-bold text-accent mb-2">Feel free to reach out to me!</h4>
                  <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-4 max-w-md">
                    🚀 I’m always open to new opportunities, collaborations, and creative ideas.<br />
        
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Manny Powell. Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  )
}
