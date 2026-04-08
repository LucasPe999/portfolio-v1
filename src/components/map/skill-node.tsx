"use client";

import Image from "next/image";

type SkillNodeProps = {
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  glow: string;
  positionClass: string;
  isActive: boolean;
  onClick: () => void;
};

export function SkillNode({
  title,
  subtitle,
  icon,
  color,
  glow,
  positionClass,
  isActive,
  onClick,
}: SkillNodeProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`group absolute z-10 flex w-[156px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 text-center transition duration-300 ${positionClass}`}
    >
      <span
        className={`relative flex h-[76px] w-[76px] items-center justify-center rounded-full border-4 bg-[rgba(0,18,0,0.33)] transition duration-300 ${
          isActive ? "scale-[1.03]" : "group-hover:scale-[1.03]"
        }`}
        style={{
          borderColor: color,
          boxShadow: isActive ? `0 0 18px ${glow}` : `0 0 10px ${glow}`,
          backdropFilter: "blur(2.25px)",
        }}
      >
        <span
          className="absolute inset-0 rounded-full border-4 blur-[5.5px]"
          style={{ borderColor: color, opacity: 0.9 }}
        />
        <Image
          src={icon}
          alt=""
          width={40}
          height={40}
          className="relative z-10 h-10 w-10 object-contain"
        />
      </span>

      <span className="hud-card rounded-[12px] px-4 py-2">
        <span className="block font-[family:var(--font-display)] text-[16px] uppercase leading-none tracking-[-0.01em] text-white">
          {title}
        </span>
        <span className="mt-1 block text-[12px] leading-none text-[var(--muted)]">
          {subtitle}
        </span>
      </span>
    </button>
  );
}
