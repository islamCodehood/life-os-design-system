import type { ButtonHTMLAttributes } from 'react';

export interface ToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'onClick'> {
  checked: boolean;
  label: string;
  onCheckedChange?: (checked: boolean) => void;
}

export function Toggle({ checked, label, onCheckedChange, className = '', ...props }: ToggleProps) {
  return (
    <button
      {...props}
      type="button"
      role="switch"
      aria-checked={checked}
      className={`lo-toggle ${className}`.trim()}
      onClick={() => onCheckedChange?.(!checked)}
    >
      <span className="lo-toggle__track" aria-hidden="true"><span className="lo-toggle__thumb" /></span>
      <span>{label}</span>
    </button>
  );
}
