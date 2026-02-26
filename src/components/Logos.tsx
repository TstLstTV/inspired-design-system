<<<<<<< HEAD
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
=======
export default function Logos() {
  const logos = [
    { name: 'Acme Corp', width: 'w-24' },
    { name: 'Stellar', width: 'w-20' },
    { name: 'Quantum', width: 'w-28' },
    { name: 'Nexus', width: 'w-20' },
    { name: 'Vertex', width: 'w-24' },
    { name: 'Pulse', width: 'w-20' },
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#020617]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <p className="text-center text-[#6B7280] text-sm font-medium mb-10 uppercase tracking-wider">
          Trusted by innovative companies worldwide
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`${logo.width} h-8 flex items-center justify-center text-[#6B7280] hover:text-[#9CA3AF] transition-colors duration-300`}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#1E293B]" />
                <span className="font-semibold text-sm whitespace-nowrap">{logo.name}</span>
              </div>
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
