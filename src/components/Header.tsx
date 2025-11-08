"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "NewHome", href: "/island" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-(--background)/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <Link
          to="/"
          className="font-semibold text-xl tracking-tight text-primary"
        >
          MyPortfolio
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant="default"
            className="bg-primary text-white hover:bg-(--primary)/90"
          >
            Get in Touch
          </Button>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col space-y-4 border-t border-border bg-background px-4 py-4 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="default"
              className="bg-primary text-white hover:bg-primary/90"
            >
              Get in Touch
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
