<<<<<<< HEAD
import { useTheme } from '../contexts/ThemeContext';

export default function Testimonials() {
  const { isDark } = useTheme();
  
  const testimonials = [
    {
      quote: 'O FlowSync transformou completamente nossa estratégia de marketing. Aumentamos nossa receita em 180% em apenas 6 meses.',
      author: 'Ana Silva',
      role: 'CEO, TechStore',
      avatar: 'AS',
    },
    {
      quote: 'A automação com IA economiza horas do nosso time todos os dias. É como ter um especialista em marketing trabalhando 24/7.',
      author: 'Carlos Santos',
      role: 'Diretor de Marketing, ModaBrasil',
      avatar: 'CS',
    },
    {
      quote: 'Finalmente uma plataforma que integra tudo em um só lugar. Email, SMS, analytics - tudo funciona perfeitamente.',
      author: 'Mariana Costa',
      role: 'Growth Lead, StartupHub',
      avatar: 'MC',
    },
  ];

  const stats = [
    { value: '10K+', label: 'Empresas ativas' },
    { value: '500M+', label: 'Emails enviados/mês' },
    { value: '98%', label: 'Satisfação' },
    { value: '324%', label: 'ROI médio' },
  ];

  return (
    <section className={`py-24 ${isDark ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-500/10 text-green-500 text-sm font-medium rounded-full mb-4">
            Depoimentos
          </span>
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Amado por milhares de empresas
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Veja o que nossos clientes dizem sobre a transformação dos seus resultados.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                isDark 
                  ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:shadow-lg hover:shadow-slate-200/50'
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
=======
export default function Testimonials() {
  const testimonials = [
    {
      quote: "FlowSync transformed how we engage with customers. Our email open rates increased by 45% in just 3 months.",
      author: "Sarah Chen",
      role: "Head of Marketing",
      company: "TechFlow Inc.",
      avatar: "SC",
    },
    {
      quote: "The AI features are incredible. It's like having a data scientist on the team who never sleeps.",
      author: "Marcus Rodriguez",
      role: "CEO",
      company: "GrowthLab",
      avatar: "MR",
    },
    {
      quote: "We've tried many platforms, but nothing comes close to the automation capabilities here. Truly next-gen.",
      author: "Emma Williams",
      role: "Director of Operations",
      company: "Stellar Commerce",
      avatar: "EW",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#0F172A]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#22C55E] text-sm font-semibold uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#F9FAFB] mb-6 leading-tight">
            Loved by teams everywhere
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            See what industry leaders are saying about FlowSync.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#020617] border border-[#1E293B] rounded-2xl p-8 transition-all duration-300 hover:border-[#22C55E]/30 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-[#FBBF24]" fill="currentColor" viewBox="0 0 20 20">
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

<<<<<<< HEAD
              <p className={`mb-6 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-medium">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {testimonial.author}
                  </p>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {testimonial.role}
=======
              {/* Quote */}
              <blockquote className="text-[#F9FAFB] text-lg mb-8 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#22C55E] to-[#38BDF8] rounded-full flex items-center justify-center text-[#020617] font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-[#F9FAFB] font-semibold">{testimonial.author}</p>
                  <p className="text-[#6B7280] text-sm">
                    {testimonial.role} at {testimonial.company}
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Stats Bar */}
        <div className={`rounded-2xl border p-8 ${
          isDark 
            ? 'bg-slate-900/80 border-slate-800'
            : 'bg-white border-slate-200 shadow-lg shadow-slate-200/50'
        }`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className={`text-3xl lg:text-4xl font-bold mb-1 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {stat.value}
                </p>
                <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
=======
        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 bg-[#020617] border border-[#1E293B] rounded-2xl p-8 lg:p-12">
          {[
            { value: '12K+', label: 'Active users' },
            { value: '2.5M', label: 'Emails sent daily' },
            { value: '98%', label: 'Customer satisfaction' },
            { value: '150+', label: 'Countries served' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-[#22C55E] mb-2">{stat.value}</p>
              <p className="text-[#9CA3AF] text-sm">{stat.label}</p>
            </div>
          ))}
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
        </div>
      </div>
    </section>
  );
}
