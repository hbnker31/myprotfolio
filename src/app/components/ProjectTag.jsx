import React from 'react';

export default function ProjectTag({ name, onClick, tag }) {
  const buttonStyles =
    name === tag
      ? 'text-white bg-primary-500'
      : 'text-gray borrder-slate-600 hover:border-white';
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}
