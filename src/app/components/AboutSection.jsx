'use client';

import Image from 'next/image';
import React, { useEffect, useState, useTransition } from 'react';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: `
    JavaScript | ECMAScript | React.js | Next.js | TypeScript | HTML | CSS | Tailwind CSS | Material UI | Bootstrap | Webpack | Babel | Chrome DevTools | React Hooks | Node.js | REST API development | JSON | WebAPI | Git | GitHub | Node Package Manager | Figma | Zeplin | Amazon Web Services | S3 | IAM | Firebase | MongoDB | MySQL | PostgreSQL | Google Analytics | JIRA | Trello | Slack | Teams | Python`,
  },
  {
    title: 'Experience',
    id: 'experience',
    content: [
      {
        title: 'Frontend Developer',
        company: 'Payzli, Tampa,FL',
        duration: 'Dec 2023 - Present',
      },
      {
        title: 'Lead Full Stack Developer',
        company: 'Digipay Vault Fintech Pvt Ltd, Noida,India',
        duration: 'March 2023 - Oct 2023',
      },
      {
        title: 'Senior Software Engineer',
        company: 'Silverlabs India Pvt Ltd',
        duration: 'Oct 2022 - March 2023',
      },
      {
        title: 'Software Developer',
        company: 'Zelthy, Hyderabad,India',
        duration: 'Jul 2022 - Oct-2022',
      },
      {
        title: 'Intern / Software Developer',
        company: 'OkayGo, Gurugram,India',
        duration: 'Jan 2020 - June-2022',
      },
    ],
  },
  {
    title: 'Education',
    id: 'education',
    content: [
      {
        title: 'Bachelors of Technology: Computer Science & Technology',
        company: 'Indian Institute of Technology (ISM), Dhanbad',
        duration: 'Jul 2012 - Sept 2017',
      },
    ],
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState('skills');
  const [tabContent, setTabContent] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  useEffect(() => {
    const { content } = TAB_DATA.find((t) => t.id === tab);
    if (tab === 'skills') {
      setTabContent(content);
    } else {
      const data = (
        <ul className="flex gap-2 flex-col">
          {content.map((el) => {
            return (
              <li
                key={el.company}
                className="flex flex-col items-baseline justify-start flex-wrap"
              >
                {el.title}
                <span className="text-sm text-slate-500">{el.company}</span>
                <span className="text-xs text-slate-500">{`(${el.duration})`}</span>
              </li>
            );
          })}
        </ul>
      );
      setTabContent(data);
    }
  }, [tab]);
  return (
    <section className="text-white " id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={'/images/about-me.png'}
          alt="about me"
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg ">
            {`I'm a Full Stack Web Developer with a special affinity for frontend
            technologies. Over the past four years, I've immersed myself in
            creating responsive, user-focused web applications. My forte lies in
            the realms of React.js and Next.js, where I combine my expertise in
            JavaScript and TypeScript to craft engaging and visually striking
            interfaces. While my passion is centered on frontend development,
            I'm also skilled in backend technologies like Node.js and MySQL, and
            proficient in deploying applications using AWS. As a quick learner
            and a dedicated team player, I'm always excited about collaborative
            opportunities to innovate and push the boundaries of web
            development.`}
          </p>

          <div className="flex flex-row gap-3 mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('experience')}
              active={tab === 'experience'}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">{tabContent}</div>
        </div>
      </div>
    </section>
  );
}
