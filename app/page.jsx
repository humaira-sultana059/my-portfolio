import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/AnimatedBackground"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      {/* ✅ Animated Background Layer */}
      {/* <AnimatedBackground /> */}
      <Skills />
      <Projects />
      {/* <About /> */}
      <Experience />
      <Contact />
    </main>
  )
}
