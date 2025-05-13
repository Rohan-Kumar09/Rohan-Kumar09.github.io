import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rohan-kumar09.github.io"),
  title: "Rohan Kumar's Portfolio",
  description: 'Rohan Kumar is a software developer specializing in Python, C++ and JavaScript. View my portfolio, projects, and skills.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      '/favicon.ico'
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
    other: [
      { url: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/android-chrome-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
  },
  keywords: [
    'Rohan Kumar', 
    'Software Developer',
    'Web Development',
    'Software Engineer',
    'Computer Science',
    'Programming',
    'Coding',
    'Python',
    'C++',
    'Typescript',
    'Java',
    'JavaScript',
    'React',
    'Next.js',
    'Portfolio',
    'Projects',
    'Skills',
    'Resume',
    'GitHub',
    'LinkedIn',
  ],
  authors: [{ name: 'Rohan Kumar' }],
  creator: 'Rohan Kumar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rohan-kumar09.github.io',
    title: 'Rohan Kumar | Software Developer',
    description: 'Software Developer specializing in Python, C++ and JavaScript',
    siteName: 'Rohan Kumar Portfolio',
    images: [
      {
        url: '/rohan.jpeg',
        width: 200,
        height: 200,
        alt: 'Rohan Kumar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohan Kumar | Software Developer',
    description: 'Software Developer specializing in Python, C++ and JavaScript',
    images: ['/rohan.jpeg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
