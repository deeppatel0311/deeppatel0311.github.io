import "./globals.css";
import { Archivo_Black, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";
import { Cursor } from "@/components/Effects";
import { SITE } from "@/config/site";

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s — Deep Patel",
  },
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.title,
    title: SITE.title,
    description: SITE.description,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Deep Patel — Software Developer. Build. Ship. Scale.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml;base64," +
          btoa(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="20" fill="#CCFF00"/>
            <text x="50" y="65" font-family="Arial, sans-serif" font-size="36" font-weight="bold" text-anchor="middle" fill="#0A0A0A">DP</text>
          </svg>
        `),
        type: "image/svg+xml",
      },
    ],
  },
};

/* Structured data for search engines and AI assistants (Person + WebSite) */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  email: `mailto:${SITE.email}`,
  jobTitle: "Software Developer",
  description: SITE.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  sameAs: [SITE.github, SITE.linkedin],
  knowsAbout: [
    "AWS serverless architecture",
    "AWS Lambda",
    "AWS CDK",
    "Node.js",
    "TypeScript",
    "GraphQL",
    "DynamoDB",
    "React",
    "Android development",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.title,
  url: SITE.url,
  author: { "@type": "Person", name: SITE.name },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RX500WT96C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RX500WT96C');
          `}
        </Script>
      </head>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-sans noise`}
      >
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
