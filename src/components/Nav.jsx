import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile";
import { articles } from "../data/articles";

const MotionDiv = motion.div;

const links = [
  { to: "/#about", label: "About" },
  { to: "/#projects", label: "Work" },
  { to: "/#skills", label: "Skills" },
  { to: "/#open-source", label: "Open Source" },
  { to: "/#experience", label: "Experience" },
  ...(articles.length ? [{ to: "/#writing", label: "Writing" }] : []),
  { to: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-line bg-bg/85 backdrop-blur-md" : "border-transparent bg-bg/40 backdrop-blur-sm"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link to="/" className="font-mono text-sm text-accent">
          {profile.firstName.toLowerCase()}
          <span className="text-muted">.dev</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={profile.resumePath}
            download={profile.resumeFileName}
            className="ml-2 border border-accent/40 px-3 py-1.5 font-mono text-xs text-accent hover:bg-accent hover:text-bg"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="border border-line p-2 text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <MotionDiv
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-bg md:hidden"
          >
            <div className="flex flex-col px-4 py-3">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3 text-sm text-fg"
                >
                  {link.label}
                </NavLink>
              ))}
              <a href={profile.resumePath} download={profile.resumeFileName} onClick={() => setOpen(false)} className="py-3 font-mono text-sm text-accent">
                Download resume
              </a>
            </div>
          </MotionDiv>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
