<<<<<<< HEAD
import { useTheme } from '../contexts/ThemeContext';

export default function CTA() {
  const { isDark } = useTheme();
  
  return (
    <section className={`py-24 ${isDark ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`relative overflow-hidden rounded-3xl p-8 lg:p-16 ${
          isDark 
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700'
            : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
        }`}>
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Pronto para transformar seu marketing?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Junte-se a mais de 10.000 empresas que já aumentaram suas vendas com o FlowSync. 
              Comece grátis, sem cartão de crédito.
            </p>

            {/* Email Form */}
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-400 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
              >
                Começar agora
              </button>
            </form>

            <p className="text-sm text-slate-400">
              ✓ 14 dias grátis &nbsp;&nbsp; ✓ Sem cartão de crédito &nbsp;&nbsp; ✓ Cancele quando quiser
            </p>
=======
import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert(`Thanks for signing up with ${email}!`);
    setEmail('');
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#0F172A] to-[#020617]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#22C55E]/10 via-[#0F172A] to-[#38BDF8]/10 rounded-3xl border border-[#1E293B] overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#22C55E]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#38BDF8]/10 rounded-full blur-3xl" />
          
          <div className="relative px-8 py-16 lg:px-16 lg:py-24">
            <div className="max-w-2xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full px-4 py-2 mb-8">
                <svg className="w-5 h-5 text-[#22C55E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-[#22C55E] text-sm font-medium">
                  Start your free 14-day trial
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl lg:text-5xl font-bold text-[#F9FAFB] mb-6 leading-tight">
                Ready to transform your marketing?
              </h2>
              <p className="text-lg text-[#9CA3AF] mb-10">
                Join thousands of companies using FlowSync to automate their marketing and grow faster. No credit card required.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-[#0F172A] border border-[#1E293B] rounded-full px-6 py-4 text-[#F9FAFB] placeholder-[#6B7280] focus:outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 transition-all"
                />
                <button
                  type="submit"
                  className="bg-[#22C55E] hover:bg-[#4ADE80] text-[#020617] px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-[#22C55E]/20 whitespace-nowrap"
                >
                  Get started
                </button>
              </form>

              {/* Trust note */}
              <p className="text-[#6B7280] text-sm mt-6 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-[#22C55E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                No credit card required • Free 14-day trial • Cancel anytime
              </p>
            </div>
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
          </div>
        </div>
      </div>
    </section>
  );
}
