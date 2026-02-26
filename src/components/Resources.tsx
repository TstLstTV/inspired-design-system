import { useTheme } from '../contexts/ThemeContext';

export default function Resources() {
  const { isDark } = useTheme();
  
  const resources = [
    {
      category: 'Guia',
      title: 'Como criar automações de email que convertem',
      description: 'Aprenda os fundamentos de automação de email marketing e aumente suas conversões.',
      readTime: '8 min',
    },
    {
      category: 'Tutorial',
      title: 'Segmentação avançada: do básico ao avançado',
      description: 'Domine técnicas de segmentação para personalizar suas campanhas.',
      readTime: '12 min',
    },
    {
      category: 'Webinar',
      title: 'IA no Marketing: o futuro é agora',
      description: 'Descubra como usar inteligência artificial para escalar suas campanhas.',
      readTime: '45 min',
    },
  ];

  return (
    <section id="resources" className={`py-24 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 bg-green-500/10 text-green-500 text-sm font-medium rounded-full mb-4">
              Recursos
            </span>
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Aprenda com os melhores
            </h2>
            <p className={`text-lg max-w-2xl ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Guias, tutoriais e webinars para dominar o marketing digital.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-green-500 font-medium hover:text-green-400 transition-colors"
          >
            Ver todos os recursos
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href="#"
              className={`group block p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                isDark 
                  ? 'bg-slate-900/50 border-slate-800 hover:border-green-500/50'
                  : 'bg-white border-slate-200 hover:shadow-lg hover:shadow-slate-200/50 hover:border-green-500/50'
              }`}
            >
              {/* Image Placeholder */}
              <div className={`h-40 rounded-xl mb-4 flex items-center justify-center ${
                isDark ? 'bg-slate-800' : 'bg-slate-100'
              }`}>
                <svg className={`w-12 h-12 ${isDark ? 'text-slate-600' : 'text-slate-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-medium rounded-full">
                  {resource.category}
                </span>
                <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {resource.readTime}
                </span>
              </div>

              <h3 className={`text-lg font-semibold mb-2 group-hover:text-green-500 transition-colors ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {resource.title}
              </h3>
              <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                {resource.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
