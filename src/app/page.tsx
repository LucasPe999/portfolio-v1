import { BackgroundSection } from "@/components/home/background-section";
import { ContactSection } from "@/components/home/contact-section";
import { MapPreview } from "@/components/home/map-preview";
import { QuestsSection } from "@/components/home/quests-section";
import { SkillsSection } from "@/components/home/skills-section";
import { TopNav } from "@/components/home/top-nav";

export default function Home() {
  return (
    <main
      id="inicio"
      className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(21,59,28,0.24),rgba(1,3,2,0.88)_28%,#010302_70%)] text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(107,217,107,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(107,217,107,0.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]" />
      <div className="pointer-events-none absolute inset-x-[18%] top-10 h-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(107,217,107,0.18),transparent_72%)] blur-3xl" />

      <section className="relative flex min-h-screen w-full flex-col pt-[76px] lg:pt-20">
        <TopNav />
        <MapPreview />
        <SkillsSection />
        <QuestsSection />
        <BackgroundSection />
        <ContactSection />
      </section>
    </main>
  );
}
