import type { HTMLAttributes } from 'react'; export type CardVariant='default'|'soft'|'selected'; export interface CardProps extends HTMLAttributes<HTMLDivElement>{variant?:CardVariant}
export function Card({variant='default',className='',...props}:CardProps){return <div className={`lo-card lo-card--${variant} ${className}`.trim()} {...props}/>}
