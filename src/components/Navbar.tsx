import { useState, useEffect } from 'react';
<<<<<<< HEAD
import { useTheme } from '../contexts/ThemeContext';
=======
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
<<<<<<< HEAD
  const { isDark, toggleTheme } = useTheme();
=======
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

<<<<<<< HEAD
  const navLinks = [
    { label: 'Produto', href: '#features' },
    { label: 'Soluções', href: '#solutions' },
    { label: 'Preços', href: '#pricing' },
    { label: 'Recursos', href: '#resources' },
    { label: 'Empresa', href: '#about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark 
            ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>FlowSync</span>
=======
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#020617]/95 backdrop-blur-md border-b border-[#1E293B]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#22C55E] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-[#020617]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-[#F9FAFB]">FlowSync</span>
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
<<<<<<< HEAD
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-green-500 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDark 
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            <a
              href="#"
              className={`text-sm font-medium transition-colors hover:text-green-500 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Entrar
            </a>
            <a
              href="#"
              className="px-5 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-full hover:bg-green-400 transition-colors"
            >
              Começar grátis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDark 
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
=======
            <a href="#features" className="text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#solutions" className="text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors text-sm font-medium">
              Solutions
            </a>
            <a href="#pricing" className="text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors text-sm font-medium">
              Pricing
            </a>
            <a href="#resources" className="text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors text-sm font-medium">
              Resources
            </a>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-[#F9FAFB] hover:text-[#22C55E] transition-colors text-sm font-medium">
              Log in
            </button>
            <button className="bg-[#22C55E] hover:bg-[#4ADE80] text-[#020617] px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#22C55E]/20">
              Get started free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#F9FAFB] p-2"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
<<<<<<< HEAD
          <div className={`lg:hidden py-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-green-500 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-slate-800">
                <a
                  href="#"
                  className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
                >
                  Entrar
                </a>
                <a
                  href="#"
                  className="px-5 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-full text-center hover:bg-green-400 transition-colors"
                >
                  Começar grátis
                </a>
              </div>
=======
          <div className="lg:hidden bg-[#0F172A] border border-[#1E293B] rounded-xl mt-2 p-4 absolute left-4 right-4">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors text-sm font-medium py-2">
                Features
              </a>
              <a href="#solutions" className="text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors text-sm font-medium py-2">
                Solutions
              </a>
              <a href="#pricing" className="text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors text-sm font-medium py-2">
                Pricing
              </a>
              <a href="#resources" className="text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors text-sm font-medium py-2">
                Resources
              </a>
              <hr className="border-[#1E293B]" />
              <button className="text-[#F9FAFB] hover:text-[#22C55E] transition-colors text-sm font-medium py-2 text-left">
                Log in
              </button>
              <button className="bg-[#22C55E] hover:bg-[#4ADE80] text-[#020617] px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 w-full">
                Get started free
              </button>
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
