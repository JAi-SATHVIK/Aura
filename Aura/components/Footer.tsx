import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  year?: number;
  email?: string;
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Docs', href: '/docs' },
  { name: 'Projects', href: '/projects' },
] as const;

const Footer: React.FC<FooterProps> = ({
  year = new Date().getFullYear(),
  email = 'support@echomind.com',
}) => {
  return (
    <footer className="relative mt-20 py-16 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900/50 dark:to-neutral-800/50 border-t border-neutral-200/50 dark:border-neutral-700/30">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5"></div>
      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-xl">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">
                EchoMind
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The Ultimate Feedback Collection & Showcase Tool.
            </p>
            <p className="text-sm text-muted-foreground">
              © {year} EchoMind All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Pages</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://github.com/echomind"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 hover:from-neutral-200 hover:to-neutral-300 dark:hover:from-neutral-700 dark:hover:to-neutral-600 transition-all duration-200 group"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform duration-200" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://x.com/echomind"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 hover:from-neutral-200 hover:to-neutral-300 dark:hover:from-neutral-700 dark:hover:to-neutral-600 transition-all duration-200 group"
              >
                <Twitter size={20} className="group-hover:scale-110 transition-transform duration-200" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com/company/echomind"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 hover:from-neutral-200 hover:to-neutral-300 dark:hover:from-neutral-700 dark:hover:to-neutral-600 transition-all duration-200 group"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-200" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <div>
              <a
                href={`mailto:${email}`}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-2 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  {email}
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200/50 dark:border-neutral-700/30 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by EchoMind Team
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            EchoMind is a registered trademark of EchoMind, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
