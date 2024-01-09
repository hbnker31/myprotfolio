import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hemant Bhankhar | React Developer',
  description: 'Front-End Developer | React, TypeScript, Next.js, Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon and touch icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* Site manifest for theme color, and web app configuration */}
        <link rel="manifest" href="/site.webmanifest" />
        {/* Add any other tags that need to be included on every page here */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
