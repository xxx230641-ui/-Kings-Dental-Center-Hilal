import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

interface CountUpNumberProps {
  value: number;
  decimals?: number;
  formatComma?: boolean;
  className?: string;
}

export function CountUpNumber({
  value,
  decimals = 0,
  formatComma = false,
  className = '',
}: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState<number>(value);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayValue(latest);
      },
    });

    return () => controls.stop();
  }, [isInView, prefersReducedMotion, value]);

  const formatted =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : formatComma
        ? new Intl.NumberFormat('en-US').format(Math.round(displayValue))
        : String(Math.round(displayValue));

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {formatted}
    </span>
  );
}
