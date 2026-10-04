import type { InputHTMLAttributes, ReactNode } from 'react';
import { useId } from 'react';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: ReactNode;
  error?: ReactNode;
}

export function TextField({ label, hint, error, id, className = '', ...props }: TextFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const descId = `${inputId}-description`;
  return (
    <label className={`lo-field ${className}`.trim()} htmlFor={inputId}>
      <span className="lo-field__label">{label}</span>
      <input id={inputId} className="lo-field__control" aria-invalid={Boolean(error) || undefined} aria-describedby={(hint || error) ? descId : undefined} {...props} />
      {(hint || error) && <span id={descId} className="lo-field__hint" data-error={Boolean(error)}>{error ?? hint}</span>}
    </label>
  );
}
