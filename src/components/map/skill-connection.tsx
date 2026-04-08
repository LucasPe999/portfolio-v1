type SkillConnectionProps = {
  className: string;
  color: string;
};

export function SkillConnection({ className, color }: SkillConnectionProps) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute hidden h-px lg:block ${className}`}
      style={{
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        boxShadow: `0 0 14px ${color}`,
      }}
    />
  );
}
