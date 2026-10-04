import type { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> { label: string }

export function Checkbox({ label, className = '', ...props }: CheckboxProps) {
  return (
    <label className={`lo-checkbox ${className}`.trim()}>
      <input className="lo-checkbox__input" type="checkbox" {...props} />
      <span>{label}</span>
    </label>
  );
}
