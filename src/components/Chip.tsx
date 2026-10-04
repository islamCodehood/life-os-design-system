import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  icon?: ReactNode;
}

export function Chip({ selected = false, icon, children, className = '', type = 'button', ...props }: ChipProps) {
  return (
    <button
      {...props}
      type={type}
      className={`lo-chip ${className}`.trim()}
      data-selected={selected}
      aria-pressed={selected}
    >
      {icon}
      {children}
    </button>
  );
}
