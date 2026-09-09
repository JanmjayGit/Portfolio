import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { profile } from "./data/profile";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: profile.email,
  url: profile.siteUrl,
  sameAs: [profile.social.github, profile.social.linkedin, profile.social.leetcode].filter(Boolean),
};

function Layout() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <a
        href="#main"
        className="absolute left-4 top-[-120%] z-[60] bg-accent px-3 py-2 text-sm text-bg focus:top-4"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
