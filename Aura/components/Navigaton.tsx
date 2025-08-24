'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { ThemeToggle } from './ThemeToggle';
import { GithubIcon, ListMinus, TwitterIcon, Menu, X, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { NavLink } from './NavLink';
import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { name: 'Docs', href: '/docs' },
  { name: 'Projects', href: '/projects' },
] as const;

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/echomind',
    icon: GithubIcon,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/echomind',
    icon: TwitterIcon,
  },
] as const;

export default function Navigation() {
  const session = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="sticky top-0 z-50 py-4 w-full glass-effect border-b border-white/10 dark:border-white/5">
      <div className="flex h-14 items-center justify-between w-full mx-auto px-6">
        <div className="flex gap-6 items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-xl">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold gradient-text">
              EchoMind
            </h1>
          </Link>
          {session.data?.user ? (
            <nav className="hidden md:flex gap-2">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </nav>
          ) : null}
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex md:flex-row md:gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200 group"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            {session.data?.user ? (
              <button
                onClick={() => signOut()}
                className="btn-secondary text-sm px-4 py-2"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => signIn()}
                className="btn-primary text-sm px-4 py-2"
              >
                Login
              </button>
            )}
          </div>
          <ThemeToggle />
          <button
            className="md:hidden p-2 rounded-xl hover:bg-accent transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            ref={menuRef}
            className="fixed inset-y-0 right-0 w-80 bg-card/95 backdrop-blur-md shadow-large border-l border-border z-50 transform transition-transform duration-300 ease-in-out"
          >
            <div className="flex flex-col h-full p-6">
              <button
                className="self-end mb-6 p-2 rounded-xl hover:bg-accent transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="flex flex-col items-center flex-grow gap-6 mt-8">
                <nav className="flex flex-col gap-4 w-full">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lg py-3 px-4 rounded-xl hover:bg-accent transition-all duration-200"
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </nav>
                <div className="flex flex-col gap-4 w-full">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
                      aria-label={link.name}
                    >
                      <link.icon className="h-5 w-5" />
                      <span className="text-sm font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>
                <div className="w-full mt-4">
                  {session.data?.user ? (
                    <button
                      onClick={() => {
                        signOut();
                        setIsMenuOpen(false);
                      }}
                      className="w-full btn-secondary"
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        signIn();
                        setIsMenuOpen(false);
                      }}
                      className="w-full btn-primary"
                    >
                      Login
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
