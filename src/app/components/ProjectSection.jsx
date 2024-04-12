'use client';

import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectData = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'My Portfolio: A Display of My Professional Projects and Achievements.',
    image: '/images/projects/portfolio.webp',
    tag: ['All', 'Web'],
    git: 'https://github.com/hbnker31/portfolio',
    preview: 'https://www.webdevbyhemant.com/',
    status: true,
  },
  {
    id: 2,
    title: 'Blogging Website',
    description:
      'A dynamic blogging platform showcasing a variety of engaging topics and thoughtful insights',
    image: '/images/projects/blog.webp',
    tag: ['All', 'Web'],
    git: 'https://github.com/hbnker31/myblog',
    preview: 'https://blogs.webdevbyhemant.com/',
    status: true,
  },
  {
    id: 3,
    title: 'AI SAAS Tools',
    description:
      'An AI SaaS tool that combines conversational intelligence with advanced image generation capabilities',
    image: '/images/projects/ai_saas.webp',
    tag: ['All', 'Web'],
    git: '/',
    preview: '/',
    status: false,
  },
];

export default function ProjectSection() {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section className="flex flex-col gap-10" id="projects">
      <h2 className="text-white text-4xl text-center font-bold ">
        My Projects
      </h2>
      <div className="text-white flex flex-row gap-6 items-center justify-center">
        <ProjectTag onClick={handleTagChange} name="All" tag={tag} />
        <ProjectTag onClick={handleTagChange} name="Web" tag={tag} />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12" ref={ref}>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={`${project.title}_${project.id} `}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              imageUrl={project.image}
              title={project.title}
              description={project.description}
              tags={project.tag}
              git={project.git}
              preview={project.preview}
              status={project.status}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
