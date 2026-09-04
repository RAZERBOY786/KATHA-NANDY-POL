import Reveal from './Reveal'

const expressions = [
  {
    icon: 'music_note',
    accent: 'primary-fixed',
    label: 'The Rhythmic Heart',
    title: 'Dance & Choreography',
    desc: 'Practitioner of classical and contemporary creative dance. The discipline of tala (rhythm), mudra (gesture), and stage coordination directly informs clean software design.',
    footer: 'Spatial Precision & Stamina',
    footerIcon: 'accessibility_new',
  },
  {
    icon: 'troubleshoot',
    accent: 'secondary-fixed',
    label: 'Analytical Synthesis',
    title: 'Behavioral Research',
    desc: 'Successfully performed requirement gathering and behavioral study across academic group projects, translating abstract user inclinations into rigorous technical architecture.',
    footer: 'Technical Documentation',
    footerIcon: 'description',
  },
  {
    icon: 'palette',
    accent: 'primary-fixed',
    label: 'Cultural Breadth',
    title: 'Arts & Multilingualism',
    desc: <>Fluent in <strong className="text-on-surface">English, Hindi, and Bengali</strong>. Avid visual enthusiast engaged in sketching, creative illustration, photography, and event planning.</>,
    footer: 'Trilingual Communication',
    footerIcon: 'translate',
  },
]

export default function CreativeExpressions() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 lg:px-8 py-12 sm:py-18">
      <Reveal animation="up" className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <span className="font-label-lg text-[13px] uppercase tracking-[0.08em] text-primary font-semibold">Dual Passions: Art &amp; Logic</span>
        <h2 className="font-headline-lg text-[30px] leading-[38px] sm:text-[44px] sm:leading-[52px] tracking-[-0.015em] text-on-surface mt-1">Creative Expressions &amp; Nuances</h2>
        <p className="font-body-md text-[15px] leading-[24px] text-on-surface-variant mt-2">
          Engineering thrives when informed by aesthetics, spatial balance, and multilingual articulation.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expressions.map((expr, i) => (
          <Reveal key={i} animation="up" delay={i * 130} className="bg-surface-container-low p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className={`w-12 h-12 rounded-full bg-${expr.accent}/50 flex items-center justify-center text-${expr.accent === 'primary-fixed' ? 'primary-container' : 'secondary'} mb-4`}>
                <span className="material-symbols-outlined text-[24px]">{expr.icon}</span>
              </div>
              <span className="font-label-sm text-[10px] uppercase tracking-[0.14em] text-secondary font-semibold">{expr.label}</span>
              <h3 className="font-headline-sm text-xl sm:text-2xl text-on-surface mt-1 mb-1">{expr.title}</h3>
              <p className="font-body-md text-[15px] leading-[24px] text-on-surface-variant leading-relaxed mb-4">{expr.desc}</p>
            </div>
            <div className="pt-2 bg-surface-container-high/40 p-2 rounded-lg flex items-center gap-2 text-primary font-label-sm text-[10px] uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">{expr.footerIcon}</span>
              <span>{expr.footer}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
