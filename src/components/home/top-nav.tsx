"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Skills", href: "#skills" },
  { label: "Quests", href: "#quests" },
  { label: "Background", href: "#" },
  { label: "Contato", href: "#" },
];

const trackedSections = [
  { id: "inicio", href: "#inicio" },
  { id: "skills", href: "#skills" },
  { id: "quests", href: "#quests" },
];

export function TopNav() {
  const [activeHref, setActiveHref] = useState("#inicio");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lockUntilRef = useRef(0);
  const lockedHrefRef = useRef<string | null>(null);

  const handleNavClick =
    (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (!href.startsWith("#") || href === "#") {
        setIsMobileMenuOpen(false);
        return;
      }

      event.preventDefault();
      const target = document.querySelector(href);

      if (target instanceof HTMLElement) {
        lockedHrefRef.current = href;
        lockUntilRef.current = Date.now() + 700;
        setActiveHref(href);
        setIsMobileMenuOpen(false);
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", href);
      }
    };

  useEffect(() => {
    const updateActiveItem = () => {
      if (Date.now() < lockUntilRef.current && lockedHrefRef.current) {
        setActiveHref(lockedHrefRef.current);
        return;
      }

      const marker = window.scrollY + 140;
      let currentHref = "#inicio";

      for (const section of trackedSections) {
        const element = document.getElementById(section.id);

        if (element && marker >= element.offsetTop) {
          currentHref = section.href;
        }
      }

      setActiveHref(currentHref);
    };

    updateActiveItem();
    window.addEventListener("scroll", updateActiveItem, { passive: true });
    window.addEventListener("resize", updateActiveItem);
    window.addEventListener("hashchange", updateActiveItem);

    return () => {
      window.removeEventListener("scroll", updateActiveItem);
      window.removeEventListener("resize", updateActiveItem);
      window.removeEventListener("hashchange", updateActiveItem);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#2b2b2b] bg-[rgba(1,3,2,0.82)] px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-[237px] lg:py-0">
      <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(107,217,107,0.22),transparent)]" />

      <div className="mx-auto flex w-full max-w-[1920px] flex-col gap-4 lg:h-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center">
            <Image
              src="/icons/logo-lucasxp.svg"
              alt="Lucas XP UI/UX Designer"
              width={140}
              height={32}
              className="h-auto w-[140px]"
            />
          </div>

          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="group relative flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line-strong)] bg-[linear-gradient(180deg,rgba(5,28,11,0.96),rgba(1,10,4,0.9))] shadow-[0_0_18px_rgba(107,217,107,0.18)] transition hover:border-[var(--accent-soft)] hover:shadow-[0_0_22px_rgba(107,217,107,0.26)] lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="absolute inset-[1px] rounded-[15px] bg-[linear-gradient(180deg,rgba(107,217,107,0.08),transparent_55%)]" />
            <span className="relative flex h-4 w-[18px] flex-col justify-between">
              <span
                className={`h-[2px] w-full rounded-full bg-[var(--accent-soft)] transition duration-300 ${
                  isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-full rounded-full bg-[var(--accent-soft)] transition duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[2px] w-full rounded-full bg-[var(--accent-soft)] transition duration-300 ${
                  isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <nav className="hidden h-full items-center gap-[54px] lg:flex">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleNavClick(item.href)}
                className={`relative flex h-full items-start pt-7 font-[family:var(--font-display)] text-[13px] font-normal uppercase tracking-[0.24em] transition ${
                  isActive
                    ? "text-white"
                    : "text-[#5A6A60] opacity-40 hover:opacity-100 hover:text-white"
                }`}
              >
                {item.label}
                {isActive ? (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-[44px] -translate-x-1/2 bg-[var(--accent-soft)] shadow-[0_0_12px_rgba(107,217,107,0.7)]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[var(--accent-soft)] bg-[radial-gradient(circle_at_top,rgba(107,217,107,0.24),rgba(0,18,0,0.96))] shadow-[0_0_14px_rgba(107,217,107,0.3)]">
            <Image
              src="/avatar.png"
              alt="Lucas Pereira"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[72px] z-40 bg-[rgba(0,0,0,0.55)] backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-4 top-[calc(100%+14px)] z-50 rounded-[28px] border border-[var(--line-strong)] bg-[linear-gradient(180deg,rgba(3,18,7,0.96),rgba(1,8,3,0.96))] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.45),0_0_24px_rgba(107,217,107,0.08)] lg:hidden"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(107,217,107,0.38),transparent)]" />
              <div className="rounded-[22px] border border-white/6 bg-[radial-gradient(circle_at_top,rgba(107,217,107,0.1),transparent_58%)] p-3">
                <p className="hud-label text-[10px] tracking-[0.28em] text-[var(--accent-soft)]">
                  Navigation
                </p>
                <div className="mt-3 space-y-2">
                  {navItems.map((item) => {
                    const isActive = activeHref === item.href;

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={handleNavClick(item.href)}
                        className={`flex items-center justify-between rounded-2xl border px-4 py-3 font-[family:var(--font-display)] text-[13px] uppercase tracking-[0.18em] transition ${
                          isActive
                            ? "border-[var(--accent-soft)] bg-[rgba(107,217,107,0.12)] text-white shadow-[0_0_22px_rgba(107,217,107,0.16)]"
                            : "border-white/8 bg-white/[0.02] text-white/68 hover:border-[var(--line-strong)] hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className="text-[var(--accent-soft)]/70">/</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
