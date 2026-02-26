<<<<<<< HEAD
import { useTheme } from '../contexts/ThemeContext';

export default function Hero() {
  const { isDark } = useTheme();
  
  return (
    <section className={`relative min-h-screen pt-20 overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950' 
        : 'bg-gradient-to-b from-slate-50 via-white to-slate-100'
    }`}>
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-3xl ${
          isDark ? 'bg-green-500/10' : 'bg-green-500/5'
        }`} />
        <div className={`absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full blur-3xl ${
          isDark ? 'bg-sky-500/10' : 'bg-sky-500/5'
        }`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-500">
                Automação de Marketing com IA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Transforme visitantes em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                clientes fiéis
              </span>
            </h1>

            {/* Subheadline */}
            <p className={`text-lg lg:text-xl mb-8 max-w-xl mx-auto lg:mx-0 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Plataforma unificada de automação de marketing, email e SMS. 
              Conecte-se com seus clientes no momento certo, com a mensagem certa.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#"
                className="px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-400 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
              >
                Começar gratuitamente
              </a>
              <a
                href="#"
                className={`px-8 py-4 font-semibold rounded-full border transition-all hover:scale-105 ${
                  isDark 
                    ? 'border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600'
                    : 'border-slate-300 text-slate-900 hover:bg-slate-100 hover:border-slate-400'
                }`}
              >
                Ver demonstração
              </a>
            </div>

            {/* Trust Badges */}
            <div className={`flex flex-wrap items-center gap-6 justify-center lg:justify-start ${
              isDark ? 'text-slate-500' : 'text-slate-400'
            }`}>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">14 dias grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Cancele quando quiser</span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative">
            {/* Main Dashboard Card */}
            <div className={`rounded-2xl p-6 border shadow-2xl ${
              isDark 
                ? 'bg-slate-900/80 border-slate-700 shadow-green-500/5'
                : 'bg-white border-slate-200 shadow-slate-200/50'
            }`}>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Visão Geral</h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Últimos 30 dias</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-medium rounded-full">
                    +24.5%
                  </span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Receita', value: 'R$ 124.5K', change: '+18%' },
                  { label: 'Conversões', value: '2,847', change: '+32%' },
                  { label: 'Taxa de Abertura', value: '68.4%', change: '+5%' },
                ].map((stat) => (
                  <div key={stat.label} className={`p-4 rounded-xl ${
                    isDark ? 'bg-slate-800/50' : 'bg-slate-50'
                  }`}>
                    <p className={`text-xs mb-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</p>
                    <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.value}</p>
                    <span className="text-xs text-green-500">{stat.change}</span>
                  </div>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className={`h-32 rounded-xl flex items-end justify-between gap-2 p-4 ${
                isDark ? 'bg-slate-800/50' : 'bg-slate-50'
              }`}>
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-green-500 to-green-400 rounded-t-sm"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Floating Cards */}
            <div className={`absolute -top-4 -right-4 p-4 rounded-xl border shadow-lg ${
              isDark 
                ? 'bg-slate-800 border-slate-700'
                : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Email enviado</p>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>2,847 destinatários</p>
                </div>
              </div>
            </div>

            <div className={`absolute -bottom-4 -left-4 p-4 rounded-xl border shadow-lg ${
              isDark 
                ? 'bg-slate-800 border-slate-700'
                : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-500/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Conversões</p>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>+32% este mês</p>
=======
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617] to-[#0F172A]" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#0F172A] border border-[#1E293B] rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
              <span className="text-[#4ADE80] text-sm font-medium uppercase tracking-wide">
                AI Marketing & Automation
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9FAFB] leading-[1.1] tracking-tight mb-6">
              Grow faster with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] to-[#4ADE80]">
                intelligent
              </span>{' '}
              automation
            </h1>
            
            {/* Description */}
            <p className="text-lg lg:text-xl text-[#9CA3AF] mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Connect with your audience at the perfect moment. Our AI-powered platform delivers personalized experiences that drive engagement and revenue.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="bg-[#22C55E] hover:bg-[#4ADE80] text-[#020617] px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-[#22C55E]/20 hover:-translate-y-0.5">
                Start free trial
              </button>
              <button className="border border-[#1E293B] hover:border-[#22C55E] text-[#F9FAFB] px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 hover:bg-[#0F172A] flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch demo
              </button>
            </div>
            
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-[#6B7280]">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#22C55E] to-[#38BDF8] border-2 border-[#020617]" />
                  ))}
                </div>
                <span>12k+ active users</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-[#FBBF24]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1">4.9/5 rating</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Main dashboard mockup */}
              <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#22C55E] to-[#4ADE80] rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#020617]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#F9FAFB] font-semibold">Campaign Performance</p>
                      <p className="text-[#6B7280] text-sm">Last 30 days</p>
                    </div>
                  </div>
                  <span className="bg-[#22C55E]/10 text-[#22C55E] px-3 py-1 rounded-full text-sm font-medium">
                    +24.5%
                  </span>
                </div>
                
                {/* Chart placeholder */}
                <div className="h-48 bg-gradient-to-t from-[#22C55E]/10 to-transparent rounded-xl flex items-end gap-2 p-4">
                  {[40, 65, 45, 80, 55, 90, 75, 95, 70, 85, 60, 100].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-[#22C55E] to-[#4ADE80] rounded-t-sm transition-all duration-300 hover:from-[#4ADE80] hover:to-[#22C55E]"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {[
                    { label: 'Emails Sent', value: '127.4K' },
                    { label: 'Open Rate', value: '68.2%' },
                    { label: 'Revenue', value: '$84.5K' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-[#F9FAFB] text-xl font-bold">{stat.value}</p>
                      <p className="text-[#6B7280] text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating card 1 */}
              <div className="absolute -left-4 top-1/4 bg-[#0F172A] border border-[#22C55E]/30 rounded-xl p-4 shadow-xl transform -translate-x-1/2 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#22C55E]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#22C55E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#F9FAFB] text-sm font-medium">Automation active</p>
                    <p className="text-[#6B7280] text-xs">12 flows running</p>
                  </div>
                </div>
              </div>
              
              {/* Floating card 2 */}
              <div className="absolute -right-4 bottom-1/4 bg-[#0F172A] border border-[#38BDF8]/30 rounded-xl p-4 shadow-xl transform translate-x-1/2 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#38BDF8]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#F9FAFB] text-sm font-medium">New lead!</p>
                    <p className="text-[#6B7280] text-xs">Just now</p>
                  </div>
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
