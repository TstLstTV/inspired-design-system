<<<<<<< HEAD
import { useTheme } from '../contexts/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();
  
  const footerLinks = {
    Produto: ['Recursos', 'Preços', 'Integrações', 'API', 'Roadmap'],
    Empresa: ['Sobre', 'Blog', 'Carreiras', 'Imprensa', 'Parceiros'],
    Recursos: ['Documentação', 'Guias', 'Webinars', 'Comunidade', 'Templates'],
    Legal: ['Privacidade', 'Termos', 'Segurança', 'Cookies', 'LGPD'],
  };

  const socialLinks = [
    { name: 'Twitter', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    )},
    { name: 'LinkedIn', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    )},
    { name: 'Instagram', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    )},
    { name: 'YouTube', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )},
  ];

  return (
    <footer className={`py-16 border-t ${
      isDark 
        ? 'bg-slate-950 border-slate-800' 
        : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>FlowSync</span>
            </a>
            <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Plataforma de automação de marketing que ajuda empresas a crescer mais rápido.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={`transition-colors ${
                    isDark 
                      ? 'text-slate-400 hover:text-white' 
                      : 'text-slate-400 hover:text-slate-900'
                  }`}
                  aria-label={social.name}
                >
                  {social.icon}
=======
export default function Footer() {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
    Resources: ['Documentation', 'Help Center', 'Community', 'Guides', 'Webinars'],
    Legal: ['Privacy', 'Terms', 'Security', 'Compliance', 'GDPR'],
  };

  return (
    <footer className="bg-[#020617] border-t border-[#1E293B]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#22C55E] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#020617]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-[#F9FAFB]">FlowSync</span>
            </a>
            <p className="text-[#6B7280] text-sm mb-6">
              AI-powered marketing automation for modern teams.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {[
                <svg key="twitter" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>,
                <svg key="linkedin" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>,
                <svg key="github" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>,
              ].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-[#6B7280] hover:text-[#22C55E] transition-colors"
                >
                  {icon}
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
                </a>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {category}
              </h4>
=======
          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[#F9FAFB] font-semibold mb-4">{category}</h4>
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
<<<<<<< HEAD
                      className={`text-sm transition-colors hover:text-green-500 ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
=======
                      className="text-[#6B7280] hover:text-[#22C55E] text-sm transition-colors"
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Bottom Bar */}
        <div className={`pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            © 2024 FlowSync. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className={`text-sm transition-colors hover:text-green-500 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Privacidade
            </a>
            <a href="#" className={`text-sm transition-colors hover:text-green-500 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Termos
            </a>
            <a href="#" className={`text-sm transition-colors hover:text-green-500 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
=======
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#6B7280] text-sm">
            © {new Date().getFullYear()} FlowSync. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#6B7280] hover:text-[#22C55E] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#6B7280] hover:text-[#22C55E] text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-[#6B7280] hover:text-[#22C55E] text-sm transition-colors">
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
