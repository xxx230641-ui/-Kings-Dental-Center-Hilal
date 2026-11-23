import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { MouseEvent } from 'react';

interface SculpturalTooth3DProps {
  title: string;
  subtitle: string;
}

/**
 * Lightweight interactive 3D-perspective dental emblem inspired by modern tactile dental interfaces.
 * Uses pure compositor transforms with pointer tilt and no heavy WebGL overhead.
 */
export function SculpturalTooth3D({ title, subtitle }: SculpturalTooth3DProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 180, damping: 22 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig);

  function handlePointerMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const normX = (event.clientX - rect.left) / rect.width - 0.5;
    const normY = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(normX);
    y.set(normY);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      style={{ perspective: 900 }}
      className="select-none"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="flex items-center gap-4 bg-[#241811]/92 backdrop-blur-md text-[#FAF7F2] px-5 py-4 rounded-2xl border border-[#E7D29A]/30 shadow-xl"
      >
        <div
          style={{ transform: 'translateZ(24px)' }}
          className="relative w-14 h-14 shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#3B281E] to-[#1A100B] border border-[#E7D29A]/35"
        >
          <svg
            viewBox="0 0 64 64"
            fill="none"
            className="w-10 h-10"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="goldSheen3D" x1="12" y1="8" x2="52" y2="56" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F4E4B8" />
                <stop offset="50%" stopColor="#C59B43" />
                <stop offset="100%" stopColor="#8E6720" />
              </linearGradient>
              <linearGradient id="enamel3D" x1="20" y1="18" x2="44" y2="54" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="65%" stopColor="#EFE7DA" />
                <stop offset="100%" stopColor="#D7C7B2" />
              </linearGradient>
            </defs>
            <path
              d="M20 19L24 11L32 16.5L40 11L44 19H20Z"
              fill="url(#goldSheen3D)"
            />
            <path
              d="M19 25.5C19 22.8 21.8 21.5 25.2 21.5C28.1 21.5 29.8 22.8 32 22.8C34.2 22.8 35.9 21.5 38.8 21.5C42.2 21.5 45 22.8 45 25.5C45 31.8 42.8 36.4 41.2 43.8C40.2 48.2 38.8 53 36.4 53C34.3 53 33.6 47 32 47C30.4 47 29.7 53 27.6 53C25.2 53 23.8 48.2 22.8 43.8C21.2 36.4 19 31.8 19 25.5Z"
              fill="url(#enamel3D)"
            />
            <path
              d="M25 28.5C27.5 30.2 30 30.8 32 30.8C34 30.8 36.5 30.2 39 28.5"
              stroke="url(#goldSheen3D)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div style={{ transform: 'translateZ(16px)' }} className="min-w-0">
          <p className="text-sm font-semibold text-[#E7D29A] whitespace-nowrap">
            {title}
          </p>
          <p className="text-xs text-[#FAF7F2]/85 mt-0.5 tabular-nums whitespace-nowrap">
            {subtitle}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
