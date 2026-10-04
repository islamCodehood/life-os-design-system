import type { CSSProperties, ReactNode } from 'react';

export interface BottomNavigationItem {
  id: string;
  label: string;
  icon?: ReactNode;
}

export interface BottomNavigationProps {
  items: BottomNavigationItem[];
  activeId: string;
  onChange?: (id: string) => void;
  ariaLabel?: string;
}

export function BottomNavigation({
  items,
  activeId,
  onChange,
  ariaLabel = 'Primary navigation',
}: BottomNavigationProps) {
  return (
    <nav
      className="lo-bottom-nav"
      aria-label={ariaLabel}
      style={{ '--lo-nav-count': items.length } as CSSProperties}
    >
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className="lo-bottom-nav__item"
          data-active={item.id === activeId}
          aria-current={item.id === activeId ? 'page' : undefined}
          onClick={() => onChange?.(item.id)}
        >
          {item.icon && <span className="lo-bottom-nav__icon" aria-hidden="true">{item.icon}</span>}
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
