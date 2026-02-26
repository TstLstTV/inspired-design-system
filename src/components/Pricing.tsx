import { useTheme } from '../contexts/ThemeContext';

export default function Pricing() {
  const { isDark } = useTheme();
  
  const plans = [
    {
      name: 'Starter',
      price: 'R$ 97',
      period: '/mês',
      description: 'Ideal para pequenos negócios começando com automação.',
      features: [
        'Até 2.500 contatos',
        'Email marketing ilimitado',
        'Automações básicas',
        '1 usuário',
        'Suporte por email',
      ],
      cta: 'Começar grátis',
      popular: false,
    },
    {
      name: 'Pro',
      price: 'R$ 297',
      period: '/mês',
      description: 'Para empresas em crescimento que precisam de mais poder.',
      features: [
        'Até 25.000 contatos',
        'Email + SMS marketing',
        'Automações avançadas',
        'Até 5 usuários',
        'Suporte prioritário',
        'Analytics avançado',
        'Integrações premium',
      ],
      cta: 'Começar grátis',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Personalizado',
      period: '',
      description: 'Para grandes operações com necessidades específicas.',
      features: [
        'Contatos ilimitados',
        'Todos os canais',
        'Automações com IA',
        'Usuários ilimitados',
        'Gerente de sucesso',
        'SLA garantido',
        'API dedicada',
        'Treinamento personalizado',
      ],
      cta: 'Falar com vendas',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className={`py-24 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-500/10 text-green-500 text-sm font-medium rounded-full mb-4">
            Preços
          </span>
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Planos para cada fase do seu negócio
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Comece grátis por 14 dias. Sem cartão de crédito necessário.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? 'border-green-500 shadow-lg shadow-green-500/10'
                  : isDark 
                    ? 'border-slate-800 hover:border-slate-700'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-lg'
              } ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-green-500 text-white text-sm font-medium rounded-full">
                    Mais popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block w-full py-3 px-6 text-center font-semibold rounded-full transition-all ${
                  plan.popular
                    ? 'bg-green-500 text-white hover:bg-green-400'
                    : isDark
                      ? 'bg-slate-800 text-white hover:bg-slate-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
