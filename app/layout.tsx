import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolioData";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const { personal } = portfolioData;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${personal.name} | ${personal.designation}`,
  description: personal.tagline,
  keywords: [
    personal.name,
    personal.designation,
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
  ],
  authors: [{ name: personal.name, url: personal.socialLinks.github }],
  openGraph: {
    title: `${personal.name} | ${personal.designation}`,
    description: personal.tagline,
    url: personal.socialLinks.github,
    siteName: `${personal.name} Portfolio`,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} scroll-smooth [scroll-padding-top:64px]`}
    >
      <body className="min-h-screen text-primary font-sans antialiased flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
            const root = document.documentElement;
            let theme;
            try {
              const savedTheme = localStorage.getItem("portfolio-theme");
              if (savedTheme === "light" || savedTheme === "dark") {
                theme = savedTheme;
              }
            } catch (error) {
              console.warn("Unable to read the saved theme preference.", error);
            }
            if (!theme) {
              theme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
            }
            root.dataset.theme = theme;
          })();`}
        </Script>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
