import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function ProjectCard({
  imageUrl,
  title,
  description,
  git,
  preview,
  status,
}) {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl group relative "
        style={{ background: `url(${imageUrl})`, backgroundSize: 'cover' }}
      >
        {status ? (
          <div className="overlay  items-center justify-center absolute top-0 left-0 w-full h-full bg-bgp bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all  gap-10 duration-500">
            <></>
            <Link
              href={preview}
              className="h-14 w-14 border-2 relative flex items-center rounded-full border-gray group/link  hover:border-white"
            >
              <CodeBracketIcon className=" h-10 w-10 text-gray m-2  cursor-pointer group-hover/link:text-white" />
            </Link>
            <Link
              href={git}
              className="h-14 w-14 border-2 relative flex items-center rounded-full border-gray group/link  hover:border-white"
            >
              <EyeIcon className=" h-10 w-10 text-gray m-2  cursor-pointer group-hover/link:text-white" />
            </Link>
          </div>
        ) : (
          <div className="overlay  items-center justify-center absolute top-0 left-0 w-full h-full bg-bgp bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all  gap-10 duration-500 text-white text-3xl">
            Coming Soon
          </div>
        )}
      </div>
      <div className="text-white rounded-b-xl bg-bgp py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-gray">{description}</p>
      </div>
    </div>
  );
}
