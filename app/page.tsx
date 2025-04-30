"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="mr-2"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Lucas Silva</div>
          <nav className="hidden md:flex space-x-6">
            {["home", "about", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize ${
                  activeSection === section
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {section}
              </button>
            ))}
            <ThemeToggle />
            <Button size="sm" variant="outline" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="md:hidden"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24">
        {/* Home Section */}
        <section
          id="home"
          className="py-20 md:py-32 flex flex-col items-center justify-center min-h-[calc(100vh-6rem)]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="mb-8 relative mx-auto w-40 h-40 overflow-hidden rounded-full border-4 border-primary/20">
              <Image
                src="/picture.jpeg?height=160&width=160"
                alt="Profile"
                width={160}
                height={160}
                className="object-cover object-[center_30%]"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Lucas Silva</h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Full-Stack Developer
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              I build modern, responsive web applications with a focus on clean
              code and exceptional user experiences. Passionate about creating
              solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection("projects")}>
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="mt-16 text-muted-foreground"
            >
              <ArrowDown className="mx-auto h-6 w-6" />
            </motion.div>
          </motion.div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              About Me
            </h2>
            <div className="grid md:grid-cols-[2fr_1fr] gap-12">
              <div>
                <p className="text-lg mb-6">
                  My journey into tech began after a career in civil
                  engineering. I discovered my passion for coding while
                  automating repetitive tasks, which led me to pursue formal
                  education at Langara College in Computer Science.
                </p>
                <p className="text-lg mb-6">
                  Today, I specialize in building full-stack web applications
                  with modern technologies. I enjoy solving complex problems and
                  creating intuitive user interfaces that provide exceptional
                  user experiences.
                </p>
                <p className="text-lg">
                  When I am not coding, you can find me exploring hiking
                  trails, experimenting with new recipes, or contributing to
                  open-source projects.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                <div className="space-y-2">
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Frontend</h4>
                    <p className="text-sm text-muted-foreground">
                      React, Next.js, TypeScript, Tailwind CSS
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Backend</h4>
                    <p className="text-sm text-muted-foreground">
                      Node.js, Express, NestJS, PostgreSQL, MongoDB
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Tools & Others</h4>
                    <p className="text-sm text-muted-foreground">
                      Git, Docker, AWS, CI/CD, Jest
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Exploring AI integration to build smarter, more adaptive
                      apps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              My Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project 1 */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card>
                  <CardHeader>
                    <div className="h-48 mb-4 rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Clocking System"
                        width={400}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle>Clocking System</CardTitle>
                    <CardDescription>
                      A modern employee time tracking system with real-time
                      analytics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Developed a full-stack application for businesses to track
                      employee hours, manage shifts, and generate reports.
                      Features include real-time updates, role-based access, and
                      integration with payroll systems.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                        React
                      </span>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                        Node.js
                      </span>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                        MongoDB
                      </span>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                        Socket.io
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href="https://demo-link.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card>
                  <CardHeader>
                    <div className="h-48 mb-4 rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Auth API"
                        width={400}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle>Auth API</CardTitle>
                    <CardDescription>
                      A secure authentication and authorization API service
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Built a robust authentication API with JWT, OAuth, and
                      role-based access control. Features include password
                      reset, email verification, and detailed audit logs for
                      security compliance.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                        Express
                      </span>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                        JWT
                      </span>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                        PostgreSQL
                      </span>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                        Redis
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href="https://demo-link.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        API Docs
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Project 3 */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card>
                  <CardHeader>
                    <div className="h-48 mb-4 rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="iOS App"
                        width={400}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle>Swift Task Manager</CardTitle>
                    <CardDescription>
                      iOS productivity app built with Swift (In Development)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Currently developing a native iOS task management app with
                      Swift and SwiftUI. Features include task categorization,
                      reminders, progress tracking, and cloud synchronization
                      across devices.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                        Swift
                      </span>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                        SwiftUI
                      </span>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                        Core Data
                      </span>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                        CloudKit
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" disabled>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Coming Soon
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Lets Connect
            </h2>
            <p className="text-center text-lg mb-8">
              I am open to freelance opportunities, collaborations, or just a
              friendly chat about tech. Feel free to reach out!
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-muted-foreground" />
                    <a
                      href="mailto:lusilva.dev@icloud.com"
                      className="hover:text-primary"
                    >
                      lusilva.dev@icloud.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 mr-3 text-muted-foreground" />
                    <a
                      href="https://www.linkedin.com/in/lucas-assuncao-silva/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      linkedin.com/in/lucas-assuncao-silva/
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github className="h-5 w-5 mr-3 text-muted-foreground" />
                    <a
                      href="https://github.com/LuSilvaDeveloper"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      github.com/LuSilvaDeveloper
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    className="space-y-4"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const form = e.currentTarget;
                      const name = (
                        form.elements.namedItem("name") as HTMLInputElement
                      ).value;
                      const email = (
                        form.elements.namedItem("email") as HTMLInputElement
                      ).value;
                      const message = (
                        form.elements.namedItem(
                          "message"
                        ) as HTMLTextAreaElement
                      ).value;

                      const res = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ name, email, message }),
                      });

                      if (res.ok) {
                        alert("Message sent!");
                        form.reset();
                      } else {
                        alert("Something went wrong. Please try again.");
                      }
                    }}
                  >
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a href="mailto:lusilva.dev@icloud.com" aria-label="Email">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lucas Silva. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}
