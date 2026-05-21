"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
]

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-5 transition-all duration-400",
        scrolled && "bg-[var(--bg)]/85 backdrop-blur-xl border-b border-[var(--border)]"
      )}
    >
      <Link
        href="#hero"
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--accent)]/10 to-[var(--accent2)]/10 border border-[var(--accent)]/30 hover:border-[var(--accent)] hover:bg-[var(--accent)]/15 transition-all duration-300"
      >
        <div className="font-sans font-extrabold text-sm tracking-tight bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">
          Afeef Ahmad
        </div>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-9 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="relative font-sans text-[13px] font-medium tracking-widest uppercase text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:bg-[var(--accent)] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <Link
          href="#contact"
          className="hidden md:inline-flex font-sans text-[13px] font-semibold tracking-wider uppercase text-[var(--bg)] bg-[var(--accent)] px-6 py-2.5 rounded hover:translate-y-[-2px] hover:shadow-[0_8px_30px_var(--glow)] transition-all duration-200"
        >
          Hire Me
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-[var(--text)]" />
          ) : (
            <Menu className="w-6 h-6 text-[var(--text)]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[var(--bg)]/97 backdrop-blur-xl border-b border-[var(--border)] p-6 md:hidden">
          <ul className="flex flex-col gap-4 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-sans text-sm font-medium tracking-wider uppercase text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block font-sans text-[13px] font-semibold tracking-wider uppercase text-[var(--bg)] bg-[var(--accent)] px-6 py-2.5 rounded mt-2"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
