'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
  () => {
    return import('react-animated-numbers');
  },
  { ssr: false },
);

const achievementList = [
  { metric: 'Projects', value: '10', postfix: '+' },
  { metric: 'Users', value: '100000', prefix: '~' },
  { metric: 'Years', value: '5' },
];

export default function Achievements() {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-borderp border rounded-md py-8 px-16 flex flex-row items-center justify-between">
        {achievementList.map((ac) => (
          <div
            key={ac.metric}
            className="flex flex-col justify-center items-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {ac.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(ac.value)}
                locale="en-IN"
                className="text-white text-4xl font-bold"
                config={(_, index) => {
                  return {
                    mass: 1,
                    friction: 100,
                    tension: 140 * (index + 1),
                  };
                }}
              />
              {ac.postfix}
            </h2>
            <p className="text-gray text-base">{ac.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
