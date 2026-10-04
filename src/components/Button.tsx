import type { ButtonHTMLAttributes, ReactNode } from 'react';
export type ButtonVariant='primary'|'secondary'|'quiet'|'destructive'; export type ButtonSize='sm'|'md'|'lg';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{variant?:ButtonVariant;size?:ButtonSize;fullWidth?:boolean;leadingIcon?:ReactNode;trailingIcon?:ReactNode}
export function Button({variant='primary',size='md',fullWidth=false,leadingIcon,trailingIcon,className='',children,type='button',...props}:ButtonProps){return <button type={type} className={`lo-button lo-button--${variant} lo-button--${size} ${fullWidth?'lo-button--full':''} ${className}`.trim()} {...props}>{leadingIcon}<span>{children}</span>{trailingIcon}</button>}
