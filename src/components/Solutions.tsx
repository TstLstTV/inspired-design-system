import { useTheme } from '../contexts/ThemeContext';

export default function Solutions() {
  const { isDark } = useTheme();
  
  const solutions = [
    {
      badge: 'Automação',
      title: 'Fluxos de automação inteligentes',
      description: 'Crie jornadas personalizadas para cada etapa do funil. Desde boas-vindas até recuperação de carrinho, automatize tudo com nossa IA.',
      features: ['Triggers comportamentais', 'Ramificações condicionais', 'Testes A/B automáticos'],
      image: 'automation',
    },
    {
      badge: 'Personalização',
      title: 'Comunicação 1:1 em escala',
      description: 'Use dados de comportamento e preferências para criar mensagens únicas para cada cliente. Aumente engajamento em até 3x.',
      features: ['Conteúdo dinâmico', 'Recomendações por IA', 'Segmentação em tempo real'],
      image: 'personalization',
    },
    {
      badge: 'Analytics',
      title: 'Métricas que importam',
      description: 'Dashboards em tempo real com todas as métricas que você precisa. Atribuição multicanal e previsões baseadas em IA.',
      features: ['ROI por campanha', 'Cohort analysis', 'Previsões preditivas'],
      image: 'analytics',
    },
  ];

  const renderMockup = (type: string) => {
    if (type === 'automation') {
      return (
        <div className={`p-6 rounded-2xl border ${
          isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow-lg'
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Fluxo de Boas-Vindas</p>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Ativo • 2.4k leads</p>
            </div>
          </div>
          <div className="space-y-3">
            {['Trigger: Novo cadastro', 'Email: Bem-vindo!', 'Espera: 2 dias', 'Email: Desconto especial'].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
                }`}>
                  {i + 1}
                </div>
                <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>{step}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    if (type === 'personalization') {
      return (
        <div className={`p-6 rounded-2xl border ${
          isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow-lg'
        }`}>
          <div className={`p-4 rounded-xl mb-4 ${isDark ? 'bg-slate-800' : 'bg-slate-50'}`}>
            <p className={`text-sm mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Para: maria@email.com</p>
            <p className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Oi Maria! 👋</p>
            <p className={`text-sm mt-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Notamos que você deixou alguns itens no carrinho. Use o código <span className="text-green-500 font-medium">MARIA15</span> para 15% off!
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Taxa de abertura</span>
            <span className="text-green-500 font-semibold">78%</span>
          </div>
        </div>
      );
    }
    
    return (
      <div className={`p-6 rounded-2xl border ${
        isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow-lg'
      }`}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {[
            { label: 'Receita', value: 'R$ 847K' },
            { label: 'ROI', value: '324%' },
            { label: 'Conversões', value: '12.4K' },
            { label: 'LTV Médio', value: 'R$ 245' },
          ].map((stat) => (
            <div key={stat.label} className={`p-3 rounded-xl ${isDark ? 'bg-slate-800' : 'bg-slate-50'}`}>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</p>
              <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.value}</p>
            </div>
          ))}
        </div>
        <div className={`h-24 rounded-xl flex items-end justify-between gap-1 p-3 ${
          isDark ? 'bg-slate-800' : 'bg-slate-50'
        }`}>
          {[30, 45, 35, 60, 50, 75, 65, 80, 70, 90, 85, 95].map((h, i) => (
            <div key={i} className="flex-1 bg-gradient-to-t from-green-500 to-emerald-400 rounded-t" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="solutions" className={`py-24 ${isDark ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-500/10 text-green-500 text-sm font-medium rounded-full mb-4">
            Soluções
          </span>
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Potencialize seus resultados
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Descubra como nossa plataforma ajuda empresas a crescer mais rápido.
          </p>
        </div>

        {/* Solutions */}
        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <span className="inline-block px-3 py-1 bg-green-500/10 text-green-500 text-sm font-medium rounded-full mb-4">
                  {solution.badge}
                </span>
                <h3 className={`text-2xl lg:text-3xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {solution.title}
                </h3>
                <p className={`text-lg mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {solution.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="inline-flex items-center gap-2 text-green-500 font-medium hover:text-green-400 transition-colors">
                  Saiba mais
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                {renderMockup(solution.image)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
