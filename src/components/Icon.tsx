import type { LucideIcon } from 'lucide-react';

export type IconSize = 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps {
  icon: LucideIcon;
  size?: IconSize;
  label?: string;
  mirrorInRtl?: boolean;
  strokeWidth?: number;
  className?: string;
}

/**
 * Functional icon primitive.
 *
 * Life OS uses Lucide for functional UI icons. Emojis remain welcome in expressive
 * storytelling/Visual World contexts, but navigation and controls should use this atom.
 */
export function Icon({
  icon: Glyph,
  size = 'md',
  label,
  mirrorInRtl = false,
  strokeWidth = 2,
  className = '',
}: IconProps) {
  const decorative = !label;
  return (
    <span
      className={`lo-icon lo-icon--${size} ${mirrorInRtl ? 'lo-icon--mirror-rtl' : ''} ${className}`.trim()}
      role={decorative ? undefined : 'img'}
      aria-label={label}
      aria-hidden={decorative || undefined}
    >
      <Glyph aria-hidden="true" focusable="false" strokeWidth={strokeWidth} />
    </span>
  );
}
