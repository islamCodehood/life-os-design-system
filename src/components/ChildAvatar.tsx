export type ChildAvatarSkinTone = 'light' | 'medium' | 'deep';
export type ChildAvatarHair = 'short' | 'waves' | 'curly';
export type ChildAvatarTopTone = 'sage' | 'sky' | 'clay' | 'lavender';
export type ChildAvatarAccessory = 'none' | 'glasses' | 'cap';

export interface ChildAvatarProps {
  name: string;
  skinTone?: ChildAvatarSkinTone;
  hair?: ChildAvatarHair;
  topTone?: ChildAvatarTopTone;
  accessory?: ChildAvatarAccessory;
  size?: 'sm' | 'md' | 'lg';
}

const skin = {
  light: '#E8B997',
  medium: '#C78962',
  deep: '#87563D',
} as const;

const hairColor = {
  light: '#4B352C',
  medium: '#332821',
  deep: '#241D19',
} as const;

const tops = {
  sage: '#788F6E',
  sky: '#779BAE',
  clay: '#B98269',
  lavender: '#9682AA',
} as const;

/**
 * Lightweight personal avatar. It represents ownership/presence only:
 * no inventory, rarity, score, shop, unlock, reward, or progression semantics.
 */
export function ChildAvatar({
  name,
  skinTone = 'medium',
  hair = 'waves',
  topTone = 'sage',
  accessory = 'none',
  size = 'md',
}: ChildAvatarProps) {
  const skinFill = skin[skinTone];
  const hairFill = hairColor[skinTone];

  return (
    <span className={`lo-child-avatar lo-child-avatar--${size}`} role="img" aria-label={name}>
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="58" fill="#F2EFE4" />
        <path d="M24 112 C29 86 42 78 60 78 C78 78 91 86 96 112 Z" fill={tops[topTone]} />
        <path d="M48 74 C49 87 71 87 72 74" fill={skinFill} />
        <ellipse cx="60" cy="55" rx="27" ry="31" fill={skinFill} />
        <path d="M36 51 C35 27 46 18 61 18 C79 18 88 30 85 51 C77 44 70 39 59 39 C49 39 43 43 36 51 Z" fill={hairFill} />
        {hair === 'short' && <path d="M38 42 C43 24 77 23 83 42 C72 36 50 36 38 42 Z" fill={hairFill} />}
        {hair === 'curly' && (
          <g fill={hairFill}>
            <circle cx="39" cy="35" r="10" /><circle cx="51" cy="26" r="11" /><circle cx="65" cy="25" r="11" />
            <circle cx="79" cy="35" r="10" /><circle cx="84" cy="47" r="8" />
          </g>
        )}
        <circle cx="50" cy="57" r="2.6" fill="#2B2A26" />
        <circle cx="70" cy="57" r="2.6" fill="#2B2A26" />
        <path d="M52 69 Q60 75 68 69" fill="none" stroke="#7A4C42" strokeWidth="2.6" strokeLinecap="round" />
        {accessory === 'glasses' && (
          <g fill="none" stroke="#53654D" strokeWidth="2.5">
            <rect x="41" y="49" width="17" height="14" rx="6" />
            <rect x="62" y="49" width="17" height="14" rx="6" />
            <path d="M58 55 H62" />
          </g>
        )}
        {accessory === 'cap' && (
          <g fill="#667B5E">
            <path d="M36 37 C42 20 76 18 85 36 L80 42 H40 Z" />
            <path d="M75 37 C88 37 94 40 98 44 C87 45 80 43 74 41 Z" />
          </g>
        )}
      </svg>
    </span>
  );
}
