import type { SelectHTMLAttributes, ReactNode } from 'react';
import { useId } from 'react';

export interface SelectOption { value: string; label: string; disabled?: boolean }
export interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  hint?: ReactNode;
  error?: ReactNode;
}

export function SelectField({ label, options, hint, error, id, className = '', ...props }: SelectFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const descId = `${inputId}-description`;
  return (
    <label className={`lo-field ${className}`.trim()} htmlFor={inputId}>
      <span className="lo-field__label">{label}</span>
      <select id={inputId} className="lo-field__control" aria-invalid={Boolean(error) || undefined} aria-describedby={(hint || error) ? descId : undefined} {...props}>
        {options.map(option => <option key={option.value} value={option.value} disabled={option.disabled}>{option.label}</option>)}
      </select>
      {(hint || error) && <span id={descId} className="lo-field__hint" data-error={Boolean(error)}>{error ?? hint}</span>}
    </label>
  );
}
