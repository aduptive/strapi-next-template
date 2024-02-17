"use client";

import React, { useState } from 'react';
import Link from 'next/link';

type MenuItem = {
  name: string;
  href: string;
  submenu: MenuItem[] | [];
  className?: string;
};

const NavMenu = ({ items, level = 0 }: { items: MenuItem[]; level?: number }) => {
  return (
    <ul>
      {items.map((item, index) => {
        const [isSubMenuVisible, setSubMenuVisible] = useState(false);
        
        const toggleSubMenu = () => {
          if (item.submenu) {
            setSubMenuVisible(!isSubMenuVisible);
          }
        };

        const hasSubmenu = Boolean(item.submenu.length > 0);
        const submenuClass = isSubMenuVisible ? 'menu-submenu-visible' : 'menu-submenu';

        return (
          <li key={index} className={item.className} aria-haspopup={hasSubmenu} aria-expanded={isSubMenuVisible}>
            {item.href ? (
              <Link href={item.href}>
                {item.name}
              </Link>
            ) : (
              <span>{item.name}</span>
            )}
            {hasSubmenu && (
              <button onClick={toggleSubMenu}>
                {isSubMenuVisible ? '▲' : '▼'}
              </button>
            )}
            {hasSubmenu && (
              <ul className={submenuClass}>
                <NavMenu items={item.submenu} level={level + 1} />
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavMenu;