"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NovionLogo, SearchIcon, CloseIcon, MenuIcon, ArrowRightIcon } from "@/components/Icons";
import { searchNovion, SearchResult } from "@/utils/searchEngine";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll state for styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Instant client-side search with debounce
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timeoutId = setTimeout(() => {
      try {
        const results = searchNovion(searchQuery.trim());
        setSearchResults(results);
      } catch (err) {
        console.error("Search execution failed:", err);
      } finally {
        setIsSearching(false);
      }
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  // Close search dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleResultClick = (url: string) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setMobileMenuOpen(false);
    router.push(url);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Company", href: "/company" },
    { name: "Solutions", href: "/solutions" },
    { name: "Media", href: "/media" },
  ];

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none transition-all duration-300">
      <div
        className={`pointer-events-auto w-full rounded-2xl md:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 ${
          scrolled
            ? "floating-glass-nav"
            : "bg-[#0A0E17]/70 border border-white/10 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Top Left: Official Logo & Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group cursor-pointer shrink-0"
          >
            <NovionLogo className="w-9 h-9 sm:w-10 sm:h-10 group-hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black font-orbitron tracking-wider metallic-text flex items-center">
                NOVION
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 ml-1.5 shadow-[0_0_8px_#00d2ff]"></span>
              </span>
              <span className="text-[9px] uppercase font-bold tracking-widest text-cyan-400 -mt-0.5 font-mono">
                Predict. Prevent. Power.
              </span>
            </div>
          </Link>

          {/* Search Bar - Center */}
          <div className="relative flex-1 max-w-sm lg:max-w-md mx-4 lg:mx-8 hidden md:block" ref={searchContainerRef}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <SearchIcon className="w-4 h-4 text-cyan-400/80" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                placeholder="Search solutions, AI BMS, thermal forecasting..."
                className="w-full pl-10 pr-9 py-2 luxury-search-input rounded-full text-xs text-slate-100 placeholder-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSearchResults([]);
                  }}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <CloseIcon className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Live Search Dropdown */}
            {isSearchOpen && searchQuery.trim().length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-3 glass-panel border border-white/10 rounded-2xl shadow-2xl shadow-black/80 backdrop-blur-2xl overflow-hidden z-50 max-h-96 overflow-y-auto">
                <div className="p-3 border-b border-white/10 flex justify-between items-center text-xs text-slate-400">
                  <span>
                    {isSearching
                      ? "Searching Novion intelligence..."
                      : `Found ${searchResults.length} result${searchResults.length === 1 ? "" : "s"}`}
                  </span>
                  <span className="text-[10px] bg-cyan-500/10 border border-cyan-400/30 px-2 py-0.5 rounded text-cyan-300 font-mono">
                    Live API
                  </span>
                </div>

                {isSearching ? (
                  <div className="p-6 text-center text-slate-400 flex items-center justify-center gap-2 text-sm">
                    <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                    Querying backend...
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="divide-y divide-white/5">
                    {searchResults.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleResultClick(item.url)}
                        className="p-3.5 hover:bg-white/[0.05] cursor-pointer transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
                            {item.category}
                          </span>
                          <span className="text-[10px] text-slate-500 group-hover:text-cyan-300 flex items-center gap-1 font-mono transition-colors">
                            Navigate <ArrowRightIcon className="w-3 h-3" />
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-slate-100 group-hover:text-white mt-0.5 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                          {item.snippet}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center text-slate-400 text-sm">
                    No matching solutions or documentation found for &quot;{searchQuery}&quot;.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-1 font-orbitron text-xs tracking-wider">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-300 text-xs font-medium ${
                    isActive
                      ? "text-cyan-300 bg-white/[0.08] border border-cyan-400/40 shadow-[0_0_12px_rgba(0,210,255,0.2)]"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className={`ml-2 px-5 py-2 font-bold font-orbitron text-xs rounded-full transition-all duration-300 active:scale-95 shadow-md flex items-center justify-center ${
                pathname === "/contact"
                  ? "bg-cyan-400 text-slate-950 border border-white shadow-[0_0_15px_rgba(0,210,255,0.5)]"
                  : "btn-luxury-gradient"
              }`}
            >
              Contact Info
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <CloseIcon className="w-5 h-5 text-cyan-400" /> : <MenuIcon className="w-5 h-5 text-slate-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto mt-2 md:hidden glass-panel border border-white/10 p-4 space-y-4 backdrop-blur-2xl rounded-2xl shadow-2xl animate-fadeIn">
          {/* Mobile Search */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              placeholder="Search solutions & AI BMS..."
              className="w-full pl-9 pr-8 py-2.5 luxury-search-input rounded-xl text-xs text-slate-100 placeholder-slate-400"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <SearchIcon className="w-4 h-4 text-cyan-400" />
            </div>
          </div>

          {/* Mobile search results preview */}
          {searchQuery && searchResults.length > 0 && (
            <div className="bg-black/60 border border-white/10 rounded-xl p-2 max-h-48 overflow-y-auto divide-y divide-white/5">
              {searchResults.map((r) => (
                <div
                  key={r.id}
                  onClick={() => handleResultClick(r.url)}
                  className="p-2 cursor-pointer hover:bg-white/[0.05] rounded text-xs transition-colors"
                >
                  <div className="font-semibold text-cyan-400">{r.title}</div>
                  <div className="text-slate-400 truncate">{r.snippet}</div>
                </div>
              ))}
            </div>
          )}

          {/* Navigation Links */}
          <div className="flex flex-col space-y-1.5 pt-1 font-orbitron text-xs">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-cyan-300 bg-white/[0.08] border border-cyan-400/40"
                      : "text-slate-200 hover:bg-white/[0.04]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 text-center font-bold text-slate-950 btn-luxury-gradient rounded-xl shadow-lg mt-2"
            >
              Contact Info
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
