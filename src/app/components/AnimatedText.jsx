'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function AnimatedText() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Hemant',
        1000,
        'Web Developer',
        1000,
        'UI/UX Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
}
