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
          </div>
        </div>
      </div>
    </section>
  );
}
