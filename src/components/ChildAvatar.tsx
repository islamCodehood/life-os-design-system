export type ChildAvatarSize = 'sm' | 'md' | 'lg';
export type ChildAvatarSkinTone = 'light' | 'medium' | 'tan' | 'deep';
export type ChildAvatarHair = 'short' | 'curly' | 'long' | 'coily';
export type ChildAvatarTop = 'sage' | 'sky' | 'clay' | 'lavender';
export type ChildAvatarAccessory = 'none' | 'glasses' | 'headband' | 'cap';

export interface ChildAvatarProps {
  name: string;
  size?: ChildAvatarSize;
  skinTone?: ChildAvatarSkinTone;
  hair?: ChildAvatarHair;
  top?: ChildAvatarTop;
  accessory?: ChildAvatarAccessory;
}

/**
 * Lightweight personal avatar for child-facing UI.
 *
 * It is deliberately not an inventory, reward, currency or progression system.
 * The owning application stores preferences; this component only renders them.
 */
export function ChildAvatar({
  name,
  size = 'md',
  skinTone = 'medium',
  hair = 'short',
  top = 'sage',
  accessory = 'none',
}: ChildAvatarProps) {
  return (
    <span
      className={`lo-child-avatar lo-child-avatar--${size}`}
      data-skin={skinTone}
      data-hair={hair}
      data-top={top}
      data-accessory={accessory}
      role="img"
      aria-label={`${name} avatar`}
    >
      <svg viewBox="0 0 96 96" aria-hidden="true" focusable="false">
        <circle className="lo-child-avatar__backdrop" cx="48" cy="48" r="46" />
        <path className="lo-child-avatar__top" d="M17 96 C19 75 30 66 48 66 C66 66 77 75 79 96 Z" />
        <rect className="lo-child-avatar__neck" x="40" y="58" width="16" height="16" rx="7" />
        <ellipse className="lo-child-avatar__ear" cx="29" cy="43" rx="6" ry="9" />
        <ellipse className="lo-child-avatar__ear" cx="67" cy="43" rx="6" ry="9" />
        <ellipse className="lo-child-avatar__face" cx="48" cy="42" rx="21" ry="25" />

        {hair === 'short' && (
          <path
            className="lo-child-avatar__hair"
            d="M27 38 C26 19 37 13 49 13 C63 13 72 23 69 40 C63 31 55 29 47 29 C39 29 33 32 27 38 Z"
          />
        )}
        {hair === 'curly' && (
          <g className="lo-child-avatar__hair">
            <circle cx="31" cy="28" r="10" />
            <circle cx="40" cy="20" r="11" />
            <circle cx="51" cy="19" r="11" />
            <circle cx="62" cy="24" r="11" />
            <circle cx="68" cy="34" r="9" />
            <circle cx="28" cy="38" r="8" />
          </g>
        )}
        {hair === 'long' && (
          <path
            className="lo-child-avatar__hair"
            d="M26 39 C23 18 35 11 49 11 C65 11 74 23 70 45 L68 69 C64 64 61 58 60 50 C67 34 58 27 48 27 C38 27 31 34 35 51 C33 59 30 65 25 69 Z"
          />
        )}
        {hair === 'coily' && (
          <g className="lo-child-avatar__hair">
            <circle cx="28" cy="33" r="10" />
            <circle cx="31" cy="23" r="10" />
            <circle cx="40" cy="17" r="10" />
            <circle cx="50" cy="16" r="10" />
            <circle cx="60" cy="20" r="10" />
            <circle cx="67" cy="29" r="10" />
            <circle cx="69" cy="39" r="8" />
          </g>
        )}

        <circle className="lo-child-avatar__eye" cx="40" cy="43" r="2.2" />
        <circle className="lo-child-avatar__eye" cx="56" cy="43" r="2.2" />
        <path className="lo-child-avatar__smile" d="M41 53 Q48 58 55 53" fill="none" />

        {accessory === 'glasses' && (
          <g className="lo-child-avatar__accessory" fill="none">
            <rect x="33" y="37" width="13" height="10" rx="4" />
            <rect x="50" y="37" width="13" height="10" rx="4" />
            <path d="M46 41 H50" />
          </g>
        )}
        {accessory === 'headband' && (
          <path className="lo-child-avatar__accessory-fill" d="M29 32 Q48 20 67 32 L65 37 Q48 26 31 37 Z" />
        )}
        {accessory === 'cap' && (
          <g className="lo-child-avatar__accessory-fill">
            <path d="M29 27 Q48 12 66 28 V34 H29 Z" />
            <path d="M62 31 Q75 31 78 37 Q68 38 60 35 Z" />
          </g>
        )}
      </svg>
    </span>
  );
}
