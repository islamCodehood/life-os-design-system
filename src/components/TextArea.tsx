import type { TextareaHTMLAttributes, ReactNode } from 'react';
import { useId } from 'react';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  hint?: ReactNode;
  error?: ReactNode;
}

export function TextArea({ label, hint, error, id, className = '', ...props }: TextAreaProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const descId = `${inputId}-description`;
  return (
    <label className={`lo-field ${className}`.trim()} htmlFor={inputId}>
      <span className="lo-field__label">{label}</span>
      <textarea id={inputId} className="lo-field__control" aria-invalid={Boolean(error) || undefined} aria-describedby={(hint || error) ? descId : undefined} {...props} />
      {(hint || error) && <span id={descId} className="lo-field__hint" data-error={Boolean(error)}>{error ?? hint}</span>}
    </label>
  );
}
