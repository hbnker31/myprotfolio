'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';

const navLinks = [
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Projects',
    href: '#projects',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 border border-borderp right-0 z-10 bg-bgs bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 ">
        <Link
          href={'/'}
          className=" text-2xl md:text-5xl text-white font-semibold"
        >
          <Image src="/logo.png" alt="logo" width={80} height={80} />
        </Link>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white :hover:border-white"
            >
              <XMarkIcon className="h- w-5 " />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white :hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex gap-8  p-4 md:p-0 md:flex-row ">
            {navLinks.map((link) => {
              return (
                <li key={link.href}>
                  <NavLink href={link.href} title={link.title} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
}
