import type { ReactNode } from 'react';

export interface SideNavigationItem {
  id: string;
  label: string;
  icon?: ReactNode;
}

export interface SideNavigationProps {
  brand?: ReactNode;
  items: SideNavigationItem[];
  activeId: string;
  onChange?: (id: string) => void;
  ariaLabel?: string;
}

export function SideNavigation({
  brand = 'Life OS',
  items,
  activeId,
  onChange,
  ariaLabel = 'Parent navigation',
}: SideNavigationProps) {
  return (
    <nav className="lo-side-nav" aria-label={ariaLabel}>
      <div className="lo-side-nav__brand">{brand}</div>
      {items.map((item) => (
        <button
          type="button"
          key={item.id}
          className="lo-side-nav__item"
          data-active={item.id === activeId}
          aria-current={item.id === activeId ? 'page' : undefined}
          onClick={() => onChange?.(item.id)}
        >
          {item.icon && <span className="lo-side-nav__icon" aria-hidden="true">{item.icon}</span>}
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
