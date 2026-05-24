import { TextGlitch } from "@/components/text-glitch-effect";

export default function GlitchText() {
  return (
    <main className="overflow-hidden md:mx-80 mx-20">
      <div className="container">
        <TextGlitch text="VISION" hoverText="FIRST" delay={0} />
        <TextGlitch text="ACTION" hoverText="ALWAYS" href="https://lab.xubh.top/" delay={0.2} />
      </div>
    </main>
  )
}
