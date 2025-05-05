import { motion } from "framer-motion";

export function About() {
  return (
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
  );
} 