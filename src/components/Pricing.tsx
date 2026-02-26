<<<<<<< HEAD
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
=======
export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '29',
      description: 'Perfect for small teams just getting started with automation.',
      features: [
        'Up to 1,000 contacts',
        'Email marketing',
        'Basic automation',
        'Analytics dashboard',
        'Email support',
      ],
      cta: 'Start free trial',
      popular: false,
    },
    {
      name: 'Growth',
      price: '79',
      description: 'For growing businesses that need more power and flexibility.',
      features: [
        'Up to 10,000 contacts',
        'Email & SMS marketing',
        'Advanced automation',
        'A/B testing',
        'Custom integrations',
        'Priority support',
      ],
      cta: 'Start free trial',
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
      popular: true,
    },
    {
      name: 'Enterprise',
<<<<<<< HEAD
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
=======
      price: 'Custom',
      description: 'For large organizations with complex requirements.',
      features: [
        'Unlimited contacts',
        'All channels',
        'Custom AI models',
        'Dedicated success manager',
        'SLA guarantee',
        'On-premise options',
      ],
      cta: 'Contact sales',
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
      popular: false,
    },
  ];

  return (
<<<<<<< HEAD
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
=======
    <section id="pricing" className="py-20 lg:py-32 bg-gradient-to-b from-[#020617] to-[#0F172A]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#22C55E] text-sm font-semibold uppercase tracking-wider mb-4">
            Pricing
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#F9FAFB] mb-6 leading-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            No hidden fees. No surprises. Choose the plan that works for you.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#0F172A] rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? 'border-[#22C55E] shadow-xl shadow-[#22C55E]/10'
                  : 'border-[#1E293B] hover:border-[#22C55E]/50'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#22C55E] text-[#020617] px-4 py-1.5 rounded-full text-sm font-semibold">
                    Most popular
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
                  </span>
                </div>
              )}

<<<<<<< HEAD
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
=======
              {/* Plan name */}
              <h3 className="text-xl font-semibold text-[#F9FAFB] mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-4">
                {plan.price !== 'Custom' ? (
                  <>
                    <span className="text-4xl font-bold text-[#F9FAFB]">${plan.price}</span>
                    <span className="text-[#6B7280]">/month</span>
                  </>
                ) : (
                  <span className="text-4xl font-bold text-[#F9FAFB]">{plan.price}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-[#9CA3AF] mb-6">
                {plan.description}
              </p>

              {/* CTA */}
              <button
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 mb-8 ${
                  plan.popular
                    ? 'bg-[#22C55E] hover:bg-[#4ADE80] text-[#020617]'
                    : 'border border-[#1E293B] hover:border-[#22C55E] text-[#F9FAFB] hover:bg-[#1E293B]'
                }`}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#9CA3AF]">
                    <svg className="w-5 h-5 text-[#22C55E] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ teaser */}
        <div className="text-center mt-16">
          <p className="text-[#9CA3AF]">
            Have questions?{' '}
            <a href="#" className="text-[#22C55E] hover:text-[#4ADE80] font-medium underline underline-offset-4">
              Check our FAQ
            </a>{' '}
            or{' '}
            <a href="#" className="text-[#22C55E] hover:text-[#4ADE80] font-medium underline underline-offset-4">
              contact our team
            </a>
          </p>
        </div>
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
      </div>
    </section>
  );
}
