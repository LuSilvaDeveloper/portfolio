import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <Link href="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>
        <Button asChild>
          <a href="/resume.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </Button>
      </div>

      <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-sm border">
        <h1 className="text-3xl font-bold mb-2">John Doe</h1>
        <h2 className="text-xl text-muted-foreground mb-4">Full-Stack Developer</h2>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="text-sm">hello@johndoe.com</div>
          <div className="text-sm">linkedin.com/in/johndoe</div>
          <div className="text-sm">github.com/johndoe</div>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">Summary</h3>
            <p>
              Full-Stack Developer with a background in civil engineering, specializing in building responsive web
              applications with modern JavaScript frameworks. Passionate about creating clean, efficient code and
              intuitive user experiences.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Languages</h4>
                <p className="text-sm">JavaScript, TypeScript, Python, HTML, CSS, SQL</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Frameworks & Libraries</h4>
                <p className="text-sm">React, Next.js, Node.js, Express, Django, Tailwind CSS</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Databases</h4>
                <p className="text-sm">PostgreSQL, MongoDB, MySQL, Redis</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Tools & Platforms</h4>
                <p className="text-sm">Git, Docker, AWS, Firebase, Vercel, CI/CD</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">Experience</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <h4 className="font-medium">Senior Developer</h4>
                  <span className="text-sm text-muted-foreground">2021 - Present</span>
                </div>
                <div className="text-sm font-medium mb-2">Tech Company Inc.</div>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Led development of a real-time employee tracking system used by 50+ companies</li>
                  <li>Architected and implemented authentication API with JWT and OAuth integration</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                  <li>Reduced application load time by 40% through performance optimizations</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <h4 className="font-medium">Web Developer</h4>
                  <span className="text-sm text-muted-foreground">2018 - 2021</span>
                </div>
                <div className="text-sm font-medium mb-2">Digital Solutions LLC</div>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Developed and maintained client websites using React and Node.js</li>
                  <li>Implemented responsive designs and ensured cross-browser compatibility</li>
                  <li>Integrated third-party APIs and payment gateways</li>
                  <li>Collaborated with designers to implement UI/UX improvements</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <h4 className="font-medium">Civil Engineer</h4>
                  <span className="text-sm text-muted-foreground">2015 - 2018</span>
                </div>
                <div className="text-sm font-medium mb-2">Engineering Firm</div>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Designed structural components for commercial and residential projects</li>
                  <li>Developed automation scripts to streamline repetitive calculations</li>
                  <li>Collaborated with cross-functional teams on project delivery</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <h4 className="font-medium">Computer Science</h4>
                  <span className="text-sm text-muted-foreground">2017 - 2019</span>
                </div>
                <div className="text-sm">Langara College</div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <h4 className="font-medium">B.Eng. Civil Engineering</h4>
                  <span className="text-sm text-muted-foreground">2011 - 2015</span>
                </div>
                <div className="text-sm">University of Engineering</div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">Projects</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Clocking System</h4>
                <p className="text-sm mb-1">A modern employee time tracking system with real-time analytics</p>
                <p className="text-sm text-muted-foreground">React, Node.js, MongoDB, Socket.io</p>
              </div>

              <div>
                <h4 className="font-medium">Auth API</h4>
                <p className="text-sm mb-1">A secure authentication and authorization API service</p>
                <p className="text-sm text-muted-foreground">Express, JWT, PostgreSQL, Redis</p>
              </div>

              <div>
                <h4 className="font-medium">Swift Task Manager</h4>
                <p className="text-sm mb-1">iOS productivity app built with Swift (In Development)</p>
                <p className="text-sm text-muted-foreground">Swift, SwiftUI, Core Data, CloudKit</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
