import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HomeProps {
  scrollToSection: (sectionId: string) => void;
}

export function Home({ scrollToSection }: HomeProps) {
  return (
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
  );
} 