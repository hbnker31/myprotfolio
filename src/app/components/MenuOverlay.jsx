import React from 'react';
import NavLink from './NavLink';

export default function MenuOverlay({ links }) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link) => {
        return (
          <li key={link.href}>
            <NavLink href={link.href} title={link.title} />
          </li>
        );
      })}
    </ul>
  );
}
