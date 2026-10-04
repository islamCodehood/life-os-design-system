import type { ReactNode } from 'react';
import {
  SideNavigation,
  type SideNavigationItem,
} from '../components/SideNavigation';

export interface ParentScreenTemplateProps {
  brand?: ReactNode;
  navigation: SideNavigationItem[];
  activeNavigationId: string;
  header: ReactNode;
  children: ReactNode;
  className?: string;
}

export function ParentScreenTemplate({
  brand,
  navigation,
  activeNavigationId,
  header,
  children,
  className = '',
}: ParentScreenTemplateProps) {
  return (
    <div className={`lo-parent-template ${className}`.trim()}>
      <aside className="lo-parent-template__sidebar">
        <SideNavigation
          brand={brand}
          items={navigation}
          activeId={activeNavigationId}
        />
      </aside>
      <main className="lo-parent-template__main">
        <header className="lo-parent-template__header">{header}</header>
        <div className="lo-parent-template__content">{children}</div>
      </main>
    </div>
  );
}
