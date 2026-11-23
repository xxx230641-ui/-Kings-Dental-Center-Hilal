import { motion } from 'motion/react';

interface ClinicLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export function ClinicLogo({ variant = 'dark', size = 'md' }: ClinicLogoProps) {
  const dimensions =
    size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-14 h-14' : 'w-11 h-11';

  const frameStroke = variant === 'light' ? '#E7D29A' : '#B88B36';
  const fillPrimary = variant === 'light' ? '#FAF7F2' : '#241811';
  const goldAccent = variant === 'light' ? '#E7D29A' : '#B88B36';

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center shrink-0 ${dimensions}`}
      initial={{ opacity: 0.92 }}
      animate={{ opacity: [0.92, 1, 0.92] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect
          x="3"
          y="3"
          width="58"
          height="58"
          rx="14"
          stroke={frameStroke}
          strokeWidth="1.5"
          strokeOpacity="0.55"
        />
        {/* Royal 3-peak Crown */}
        <path
          d="M19 22L23 13L32 19L41 13L45 22H19Z"
          fill={goldAccent}
          stroke={goldAccent}
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <circle cx="23" cy="11.5" r="1.6" fill={goldAccent} />
        <circle cx="32" cy="10.5" r="1.8" fill={goldAccent} />
        <circle cx="41" cy="11.5" r="1.6" fill={goldAccent} />
        {/* Architectural Tooth Silhouette */}
        <path
          d="M21 26.5C21 24.5 23.2 23.5 26 23.5C28.4 23.5 30.1 24.6 32 24.6C33.9 24.6 35.6 23.5 38 23.5C40.8 23.5 43 24.5 43 26.5C43 31.8 41.2 35.6 39.8 42.2C39 46.2 37.8 50.5 35.8 50.5C34 50.5 33.4 45.2 32 45.2C30.6 45.2 30 50.5 28.2 50.5C26.2 50.5 25 46.2 24.2 42.2C22.8 35.6 21 31.8 21 26.5Z"
          stroke={fillPrimary}
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.5 29.5C27.5 30.8 30 31.3 32 31.3C34 31.3 36.5 30.8 38.5 29.5"
          stroke={goldAccent}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}
