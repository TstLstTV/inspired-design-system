<<<<<<< HEAD
import { useTheme } from '../contexts/ThemeContext';

export default function Features() {
  const { isDark } = useTheme();
  
=======
export default function Features() {
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<<<<<<< HEAD
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Marketing',
      description: 'Crie campanhas de email personalizadas com nosso editor drag-and-drop intuitivo.',
      color: 'green',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'SMS & WhatsApp',
      description: 'Alcance seus clientes onde eles estão com mensagens diretas e personalizadas.',
      color: 'sky',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Automação com IA',
      description: 'Deixe a IA criar e otimizar suas campanhas automaticamente.',
      color: 'purple',
=======
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI-Powered Insights',
      description: 'Leverage machine learning to understand customer behavior and predict their next move.',
      color: 'from-[#22C55E] to-[#4ADE80]',
      borderColor: 'border-[#22C55E]/30',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: 'Smart Automation',
      description: 'Create sophisticated flows that respond to user actions in real-time.',
      color: 'from-[#38BDF8] to-[#7DD3FC]',
      borderColor: 'border-[#38BDF8]/30',
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
<<<<<<< HEAD
      title: 'Analytics Avançado',
      description: 'Dashboards em tempo real para acompanhar todas as suas métricas.',
      color: 'amber',
=======
      title: 'Advanced Analytics',
      description: 'Deep dive into performance metrics with customizable dashboards and reports.',
      color: 'from-[#A78BFA] to-[#C4B5FD]',
      borderColor: 'border-[#A78BFA]/30',
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
<<<<<<< HEAD
      title: 'Segmentação',
      description: 'Crie segmentos dinâmicos baseados no comportamento dos seus clientes.',
      color: 'rose',
=======
      title: 'Audience Segmentation',
      description: 'Build dynamic segments based on behavior, preferences, and purchase history.',
      color: 'from-[#F472B6] to-[#F9A8D4]',
      borderColor: 'border-[#F472B6]/30',
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<<<<<<< HEAD
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: 'Integrações',
      description: 'Conecte com mais de 300 ferramentas que você já usa no dia a dia.',
      color: 'cyan',
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    green: { bg: 'bg-green-500/10', text: 'text-green-500', border: 'group-hover:border-green-500/50' },
    sky: { bg: 'bg-sky-500/10', text: 'text-sky-500', border: 'group-hover:border-sky-500/50' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-500', border: 'group-hover:border-purple-500/50' },
    amber: { bg: 'bg-amber-500/10', text: 'text-amber-500', border: 'group-hover:border-amber-500/50' },
    rose: { bg: 'bg-rose-500/10', text: 'text-rose-500', border: 'group-hover:border-rose-500/50' },
    cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-500', border: 'group-hover:border-cyan-500/50' },
  };

  return (
    <section id="features" className={`py-24 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-500/10 text-green-500 text-sm font-medium rounded-full mb-4">
            Recursos
          </span>
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Tudo que você precisa em uma plataforma
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Ferramentas poderosas para criar, automatizar e escalar suas campanhas de marketing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                isDark 
                  ? `bg-slate-900/50 border-slate-800 hover:bg-slate-900 ${colorClasses[feature.color].border}`
                  : `bg-white border-slate-200 hover:shadow-lg hover:shadow-slate-200/50 ${colorClasses[feature.color].border}`
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorClasses[feature.color].bg}`}>
                <span className={colorClasses[feature.color].text}>{feature.icon}</span>
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {feature.title}
              </h3>
              <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                {feature.description}
              </p>
=======
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Marketing',
      description: 'Craft beautiful emails with our drag-and-drop builder and AI content suggestions.',
      color: 'from-[#FBBF24] to-[#FCD34D]',
      borderColor: 'border-[#FBBF24]/30',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'SMS & Chat',
      description: 'Reach customers on their preferred channels with unified messaging.',
      color: 'from-[#FB7185] to-[#FDA4AF]',
      borderColor: 'border-[#FB7185]/30',
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-gradient-to-b from-[#0F172A] to-[#020617]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#22C55E] text-sm font-semibold uppercase tracking-wider mb-4">
            Features
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#F9FAFB] mb-6 leading-tight">
            Everything you need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] to-[#38BDF8]">
              scale your marketing
            </span>
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            Powerful tools designed to help you connect with customers, automate workflows, and grow your business.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-[#0F172A] border ${feature.borderColor} rounded-2xl p-8 transition-all duration-300 hover:border-opacity-60 hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-[#020617] mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#F9FAFB] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                {feature.description}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[#22C55E] mt-4 text-sm font-medium hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
