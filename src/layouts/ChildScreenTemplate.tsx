import type { ReactNode } from 'react';
import {
  BottomNavigation,
  type BottomNavigationItem,
} from '../components/BottomNavigation';

export interface ChildScreenTemplateProps {
  header: ReactNode;
  children: ReactNode;
  navigation?: BottomNavigationItem[];
  activeNavigationId?: string;
  footer?: ReactNode;
  width?: 'standard' | 'wide';
  className?: string;
}

export function ChildScreenTemplate({
  header,
  children,
  navigation,
  activeNavigationId,
  footer,
  width = 'standard',
  className = '',
}: ChildScreenTemplateProps) {
  return (
    <div className="lo-template-stage">
      <main
        className={`lo-child-template lo-child-template--${width} ${className}`.trim()}
      >
        <header className="lo-child-template__header">{header}</header>
        <div className="lo-child-template__content">{children}</div>
        {footer && <footer className="lo-child-template__footer">{footer}</footer>}
        {navigation && activeNavigationId && (
          <div className="lo-child-template__navigation">
            <BottomNavigation
              items={navigation}
              activeId={activeNavigationId}
            />
          </div>
        )}
      </main>
    </div>
  );
}
