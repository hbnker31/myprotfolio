'use client';
import React, { useState } from 'react';
import GithubIcon from '../../../public/images/github-icon.svg';
import LinkedInIcon from '../../../public/images/linkedin-icon.svg';
import Image from 'next/image';
import Link from 'next/link';
export default function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const postData = JSON.stringify(data);
    const endpoint = '/api/send';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: postData,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();
    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };
  return (
    <section
      className="grid md:grid-cols-2 my-12 py-24 gap-4 relative "
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my2">{`Let's Connect`}</h5>
        <p className="text-gray mb-4 max-w-md">
          {`Interested in collaborating or have an opportunity to discuss? Reach out to me via email – I'm always open to new and exciting ventures!`}
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="">
            <Image src={GithubIcon} alt="githubIcon" />
          </Link>
          <Link href="">
            <Image src={LinkedInIcon} alt="linkedIcon" />
          </Link>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex gap-2 flex-col">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              className="bg-bge border border-borderp placeholder-placeholder text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="email"
              name="email"
              id="email"
              required
              placeholder="xyz@email.com"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              className="bg-bge border border-borderp placeholder-placeholder text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="Just Saying Hi"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              className="bg-bge border border-borderp placeholder-placeholder text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="text"
              name="message"
              id="message"
              required
              placeholder="Let's talk about..."
              rows={8}
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent Successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
