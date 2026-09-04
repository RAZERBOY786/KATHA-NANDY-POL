import Reveal from './Reveal'

const metrics = [
  {
    label: 'Brainware University',
    icon: 'school',
    value: '8.38',
    sublabel: 'Cumulative GPA / 10.0',
    desc: 'Consistent top-tier academic rhythm across 5 semesters of BCA studies.',
    accent: 'primary-fixed',
  },
  {
    label: 'Applied Development',
    icon: 'terminal',
    value: '5+',
    sublabel: 'Python Apps Deployed',
    desc: 'From algorithmic data pipelines to interactive script suites at InternPe.',
    accent: 'secondary-fixed',
  },
  {
    label: 'Foundational Rigor',
    icon: 'verified',
    value: '90%',
    sublabel: 'Secondary Board (WBBSE)',
    desc: 'Graduated with Distinction, demonstrating enduring mathematical mastery.',
    accent: 'primary-fixed',
  },
  {
    label: 'Core Focus',
    icon: 'security',
    value: 'SecOps',
    sublabel: 'App & Info Security',
    desc: 'Proactive vulnerability awareness and structured mitigation protocols.',
    accent: 'secondary-fixed',
  },
]

export default function Metrics() {
  return (
    <section className="w-full bg-surface-container-low py-12">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="font-label-md text-[11px] uppercase tracking-[0.12em] text-primary font-semibold">Performance Measures</span>
            <h2 className="font-headline-sm text-2xl text-on-surface">The Tempo of Achievement</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-on-surface-variant font-label-sm text-[10px] uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px] text-primary-container">graphic_eq</span>
            <span>Constant Velocity</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <Reveal key={i} animation="up" delay={i * 120} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
              <div className={`absolute top-0 right-0 w-24 h-24 bg-${m.accent}/20 rounded-bl-full pointer-events-none`}></div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-label-sm text-[10px] uppercase tracking-wider text-secondary font-semibold">{m.label}</span>
                <span className="material-symbols-outlined text-primary-container text-[20px]">{m.icon}</span>
              </div>
              <div className="my-2">
                <div className="font-display-hero text-[44px] leading-[52px] text-on-surface font-medium">{m.value}</div>
                <div className="font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider">{m.sublabel}</div>
              </div>
              <p className="font-body-sm text-[13px] leading-[20px] text-on-surface-variant mt-2">
                {m.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
