import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Mountain } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: '#home' },
    { label: 'About', id: '#about' },
    { label: 'Dashboard', id: '#dashboard' },
    { label: 'Timeline', id: '#timeline' },
    { label: 'Treks', id: '#treks' },
    { label: 'Gallery', id: '#gallery' },
    { label: 'Stories', id: '#stories' },
    { label: 'Fitness', id: '#fitness' },
    { label: 'Future', id: '#future' },
    { label: 'Contact', id: '#contact' },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass py-3 shadow-lg'
          : 'bg-[#111111]/30 backdrop-blur-sm py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => scrollToSection('#home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#1b4332] border border-[#6f4e37]/40 flex items-center justify-center text-[#f8f5f0] group-hover:bg-[#6f4e37] transition-all duration-300">
              <Mountain className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-extrabold text-base tracking-tighter text-[#f8f5f0] block uppercase">
                MONOJ KUMAR B K<span className="text-[#2d6a4f] ml-0.5">.</span>
              </span>
              <span className="font-mono text-[8px] text-gray-400 uppercase tracking-widest block leading-none mt-0.5">
                Trek Expedition Specialist
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id.replace('#', '');
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-md font-subdisplay text-xs tracking-wide transition-all duration-200 uppercase font-medium ${
                    isActive
                      ? 'text-[#f8f5f0] bg-[#1b4332] border border-[#6f4e37]/40 font-semibold'
                      : 'text-[#495057] hover:text-[#f8f5f0] hover:bg-[#1b4332]/20'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Call to action */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-4 py-2 border border-[#6f4e37] text-xs font-mono text-[#f8f5f0] uppercase tracking-wider rounded-lg bg-[#6f4e37]/20 hover:bg-[#6f4e37] transition-all duration-300 shadow-md shadow-black/45"
            >
              Recruit Monoj
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#f8f5f0] p-1.5 focus:outline-none bg-[#111111]/40 border border-[#1b4332]/30 rounded-lg"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-[64px] right-0 w-full md:w-80 h-[calc(100vh-64px)] glass transition-all duration-300 z-40 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-2 p-6 h-full justify-between">
          <div className="space-y-1">
            <span className="block font-mono text-[10px] text-[#2d6a4f] uppercase tracking-widest mb-4">
              Expedition Directory
            </span>
            {navItems.map((item) => {
              const isActive = activeSection === item.id.replace('#', '');
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center w-full px-4 py-3 rounded-xl font-subdisplay text-sm tracking-wide text-left transition-all ${
                    isActive
                      ? 'text-[#f8f5f0] bg-[#1b4332] border border-[#6f4e37]/30 font-semibold shadow-inner'
                      : 'text-[#495057] hover:text-[#f8f5f0] hover:bg-[#1b4332]/10'
                  }`}
                >
                  <Compass className={`w-4 h-4 mr-3 ${isActive ? 'text-[#e9c46a]' : 'text-[#495057]'}`} />
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#1b4332]/30 pb-12">
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full py-3 bg-[#6f4e37] hover:bg-[#5a3e2b] rounded-xl text-[#f8f5f0] font-mono text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#111] duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
