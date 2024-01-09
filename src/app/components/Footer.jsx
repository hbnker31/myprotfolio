import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer border border-top-borderp border-l-transparent text-white z-10">
      <div className="constainer p-12 flex justify-between items-center">
        <Image src="/logo.png" alt="logo" width={80} height={80} />
        <p className="text-slate-400">All rights reserved.</p>
      </div>
    </footer>
  );
}
