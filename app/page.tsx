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
  Smartphone,
  Brain,
  Plane,
  Cloud,
  Pen,
  BookOpen,
  PenTool
} from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    { name: "React/Next.js", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "React Native", level: 55 },
    { name: "Supabase", level: 88 },
    { name: "AI Integration", level: 92 },
    { name: "GSAP/Framer Motion", level: 80 },
  ]

  const projects = [
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
      title: "2nd Brain",
      description:
        "SaaS AI study assistant with voice tutor, flashcards, and exam generator. Advanced AI-powered learning platform.",
      icon: Brain,
      badge: "sold",
      flippa: "https://flippa.com/12066875",
      technologies: ["React", "Next.js", "AI SDK", "Supabase", "Voice API", "Payment Integration"],
      liveUrl: "https://2nd-brain-lilac.vercel.app",
      image: "/2nd-brain.png",
    },
    {
      title: "Travel~I",
      description:
        "Cross-platform web app for trip planning, bookings, and interactive UI/UX. Complete travel companion.",
      icon: Plane,
      badge: "sold",
      flippa: "https://flippa.com/12103094",
      technologies: ["React", "Next.js", "Maps API", "AI SDK", "Supabase"],
      liveUrl: "https://travel-i.app",
      image: "/travel-i.png",
    },
    {
      title: "StudyForge",
      description:
        "Create intelligent flashcards, generate adaptive quizzes, and track your progress",
      icon: BookOpen,
      badge: "sold",
      flippa: "https://flippa.com/12202677",
      technologies: ["React", "Next.js", "Groq API", "AI SDK", "Supabase", "Stripe"],
      liveUrl: "https://study-forge.app",
      image: "/studyforge.png",
    },
    {
      title: "Travel~I Android App",
      description:
        "Native Android version of the Travel~I trip planning app. Seamless bookings, AI itinerary planning, and offline access for travelers.",
      icon: Plane,
      badge: "sold",
      technologies: ["React Native", "Expo", "Maps API", "Android", "AI SDK"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.maxmalshan.traveli",
      image: "/traveli-android.png",
    },
    {
      title: "QuillGlow",
      description:
        "AI-powered study workspace for notes, flashcards, quizzes, and planning.",
      icon: PenTool,
      badge: "Live",
      technologies: ["React", "Next.js", "Gemini API", "Youtube API", "Google Custom Search API", "AI SDK", "Supabase", "Stripe"],
      liveUrl: "https://quillglow.com",
      image: "/quillglow.png",
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
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground/800 bg-clip-text text-transparent">
              Malshan Dissanayaka
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Full-Stack Developer
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 font-light">
              AI & SaaS Specialist | Building the Future of Web & Mobile
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
              Passionate Full-Stack Developer with expertise in AI-powered SaaS applications and mobile development. I
              specialize in creating innovative solutions that bridge the gap between cutting-edge technology and user
              experience.
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
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Web Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Modern React & Next.js applications</p>
                </Card>
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Smartphone className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Mobile Apps</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Cross-platform React Native solutions</p>
                </Card>
              </div>
              <Card className="p-6">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Technologies I Work With</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "React Native",
                    "Supabase",
                    "Cursor AI IDE",
                    "AI SDK",
                    "GSAP",
                    "Framer Motion",
                    "TypeScript",
                    "Tailwind CSS",
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
              Showcasing my expertise in AI-powered SaaS applications and mobile development
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
                        {project.badge === "Live" && (
                          <Badge
                            className="ml-2 text-xs border-yellow-600 bg-yellow-100 text-yellow-800"
                            style={{
                              borderWidth: "1.5px",
                              backgroundColor: "#fefce8", // Tailwind yellow-100
                              color: "#d97706", // Tailwind yellow-800
                              borderColor: "#f59e0b", // Tailwind yellow-600
                            }}
                          >
                            Live
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
                        <Button size="sm" variant="ghost" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>

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
          <div className="flex justify-center mt-8">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="flex items-center gap-2"
            >
              <a
                href="https://github.com/Malshan20?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                More Works
              </a>
            </Button>
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
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can create something amazing together.
            </p>
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
                  <span className="text-gray-700 dark:text-gray-300">malshandissanayaka246@gmail.com
</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-gray-700 dark:text-gray-300">Available Worldwide</span>
                </div>
              </div>

              {/* ... existing social buttons ... */}
              <div className="flex gap-4 pt-6">
                <Button size="sm" variant="outline" asChild>
                  <a href="https://github.com/Malshan20" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/maleeshamalshan" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://x.com/Ma_malshan" target="_blank" rel="noopener noreferrer">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    X(Twitter)
                  </a>

                </Button>
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
                  <h4 className="text-2xl font-bold text-accent mb-2">Let's Create Something Amazing!</h4>
                  <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-4 max-w-md">
                    🚀 I’m always open to new opportunities, collaborations, and creative ideas.<br />
                    <span className="font-semibold text-accent">Drop me a line</span> via email or connect on social media.<br />
                    <span className="inline-block mt-2 animate-pulse text-accent font-semibold">Your next big project starts here.</span>
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
            © {new Date().getFullYear()} Malshan Dissanayaka. Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  )
}
