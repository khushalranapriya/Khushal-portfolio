import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";

export const metadata = {
  title: "khushal Ranpariya - Web Developer",
  description:
    "khushal Ranpariya is a passionate web Developer specializing in C#,.net,Sql,Mysql,WebApi,Mvc modern web technologies. View my portfolio and projects.",
  keywords: [
    "khushal Ranpariya",
    "Web Developer",
  ],
  authors: [{ name: "khushal Ranpariya" }],
  creator: "khushal Ranpariya",
  publisher: "khushal Ranpariya",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jasmin-portfolio-next.vercel.app", // Replace with your actual domain
    siteName: "khushal Ranpariya Portfolio",
    title: "Jkhushal Ranpariya - Web Developer",
    description:
      "khushal Ranpariya is a passionate Web Developer specializing in C#,.net,Sql,Mysql,WebApi,Mvc and modern web technologies.",
    images: [
      {
        // url: "/images/jasmin-profile.JPG", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "khushal Ranpariya - Web Developer Portfolio",
      },
    ],
  },

  // Additional Meta Tags
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

  // Canonical URL
  alternates: {
    canonical: "https://jasmin-portfolio-next.vercel.app",
  },

  // Additional metadata
  category: "Technology",
  classification: "Portfolio Website",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jasmin Bhesaniya",
    jobTitle: "Frontend Developer",
    description:
      "Passionate frontend developer specializing in C#,.net,Sql,Mysql,WebApi,Mvc and modern web technologies.",
    url: "https://jasmin-portfolio-next.vercel.app",
    // image: "/images/jasmin-profile.JPG",
    sameAs: [
      "https://www.linkedin.com/in/khushal-ranapriya-a168861a6/",
      "https://github.com/jasminbhesaniyajb",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelancer",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "UI/UX Design",
      "Full Stack Development",
      "Web Development",
      "Mobile App Development",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "India",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-bg text-text transition-colors duration-300">
        <Header />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        {/* <ContactSection /> */}

        <Footer />
      </main>
    </>
  );
}
