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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
