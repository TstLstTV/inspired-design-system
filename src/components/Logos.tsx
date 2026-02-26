import { useTheme } from '../contexts/ThemeContext';

export default function Logos() {
  const { isDark } = useTheme();
  
  const logos = [
    'Spotify', 'Airbnb', 'Netflix', 'Uber', 'Slack', 'Figma', 'Notion', 'Discord'
  ];

  return (
    <section className={`py-16 border-y ${
      isDark 
        ? 'bg-slate-900/50 border-slate-800' 
        : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className={`text-center text-sm font-medium mb-8 ${
          isDark ? 'text-slate-400' : 'text-slate-500'
        }`}>
          Mais de 10.000 empresas confiam em nossa plataforma
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {logos.map((logo) => (
            <div
              key={logo}
              className={`text-2xl font-bold transition-colors ${
                isDark 
                  ? 'text-slate-600 hover:text-slate-400' 
                  : 'text-slate-300 hover:text-slate-500'
              }`}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
