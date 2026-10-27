import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rajneeshkumar.dev"),
  title: "Rajneesh Kumar | Full-Stack Software Engineer & Distributed Systems Developer",
  description:
    "Portfolio of Rajneesh Kumar, a Full-Stack Software Engineer specializing in scalable microservices, Next.js, NestJS, RabbitMQ, and PostgreSQL multi-tenant architectures.",
  keywords: [
    "Rajneesh Kumar",
    "Software Engineer",
    "Full Stack Developer",
    "Distributed Systems",
    "Next.js",
    "NestJS",
    "RabbitMQ",
    "PostgreSQL",
    "TypeScript",
    "CCET Chandigarh",
    "Zenmonk",
    "Vectrium Ventures",
    "LeetCode",
  ],
  authors: [{ name: "Rajneesh Kumar", url: "https://github.com/rajneesh-1304" }],
  creator: "Rajneesh Kumar",
  publisher: "Rajneesh Kumar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajneeshkumar.dev",
    title: "Rajneesh Kumar | Full-Stack Software Engineer",
    description:
      "Engineering resilient microservices, real-time architectures, and high-performance web applications with Next.js, NestJS, and PostgreSQL.",
    siteName: "Rajneesh Kumar Portfolio",
    images: [
      {
        url: "/bg.png",
        width: 1200,
        height: 630,
        alt: "Rajneesh Kumar - Full-Stack Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajneesh Kumar | Full-Stack Software Engineer",
    description:
      "Engineering resilient microservices, real-time architectures, and high-performance web applications.",
    images: ["/bg.png"],
  },
  alternates: {
    canonical: "https://rajneeshkumar.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rajneesh Kumar",
    jobTitle: "Full-Stack Software Engineer",
    url: "https://rajneeshkumar.dev",
    sameAs: [
      "https://github.com/rajneesh-1304",
      "https://www.linkedin.com/in/rajneesh-kumar-5202122ab",
      "https://leetcode.com/rajneesh1304",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Chandigarh College of Engineering and Technology (CCET)",
    },
    worksFor: {
      "@type": "Organization",
      name: "Zenmonk",
    },
    knowsAbout: [
      "Software Engineering",
      "Full-Stack Development",
      "Distributed Microservices",
      "NestJS",
      "Next.js",
      "RabbitMQ",
      "PostgreSQL",
      "TypeScript",
      "Docker",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
