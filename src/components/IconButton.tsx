import type { ButtonHTMLAttributes, ReactNode } from 'react';
export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>,'children'>{label:string;icon:ReactNode;variant?:'secondary'|'quiet'|'primary'}
export function IconButton({label,icon,variant='secondary',className='',type='button',...props}:IconButtonProps){return <button type={type} aria-label={label} className={`lo-icon-button lo-icon-button--${variant} ${className}`.trim()} {...props}>{icon}</button>}
