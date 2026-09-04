import Reveal from './Reveal'

const skillCategories = [
  {
    icon: 'code',
    accent: 'primary-fixed',
    title: 'Programming',
    desc: 'Fundamental logic scripting and algorithmic syntax.',
    items: [
      { name: 'Python', tag: 'Core & Logic', tagColor: 'text-primary' },
      { name: 'C Language', tag: 'Structured', tagColor: 'text-on-surface-variant' },
    ],
    footer: 'Modular &bull; Procedural',
    type: 'list',
  },
  {
    icon: 'shield',
    accent: 'secondary-fixed',
    title: 'Technical Strengths',
    desc: 'Architecture, querying, and defensive security.',
    chips: [
      { name: 'Web App Security', featured: true },
      { name: 'Information Security', featured: true },
      { name: 'DBMS & SQL', featured: false },
      { name: 'Data Analysis', featured: false },
      { name: 'Web Technologies', featured: false },
    ],
    footer: 'Data Integrity & Defense',
    type: 'chips',
  },
  {
    icon: 'construction',
    accent: 'primary-fixed',
    title: 'Tools & Software',
    desc: 'Version management and productivity suites.',
    tools: ['Git', 'GitHub', 'MySQL', 'MS Excel', 'MS Word', 'PowerPoint'],
    footer: 'Reliable Toolchains',
    type: 'grid',
  },
  {
    icon: 'handshake',
    accent: 'secondary-fixed',
    title: 'Soft Skills',
    desc: 'Harmonious team execution and analytical delivery.',
    softSkills: [
      'Research & Behavioral Analysis',
      'Critical Problem Solving',
      'Multilingual Communication',
      'Paced Time Management',
      'Project Coordination',
    ],
    footer: 'Empathy &bull; Precision',
    type: 'checks',
  },
]

export default function Skills() {
  return (
    <section className="w-full bg-surface-container py-12 sm:py-18 scroll-mt-20" id="skills">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <Reveal animation="up" className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="font-label-lg text-[13px] uppercase tracking-[0.08em] text-primary font-semibold">Choreography of Disciplines</span>
          <h2 className="font-headline-lg text-[30px] leading-[38px] sm:text-[44px] sm:leading-[52px] tracking-[-0.015em] text-on-surface mt-1">Technical Repertoire &amp; Tooling</h2>
          <p className="font-body-md text-[15px] leading-[24px] text-on-surface-variant mt-2">
            Each language and tool forms an essential gesture in the choreographic score of modern, resilient digital engineering.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <Reveal key={i} animation="up" delay={i * 120} className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className={`w-10 h-10 rounded-full bg-${cat.accent}/40 flex items-center justify-center text-${cat.accent === 'primary-fixed' ? 'primary' : 'secondary'} mb-4`}>
                  <span className="material-symbols-outlined text-[20px]">{cat.icon}</span>
                </div>
                <h3 className="font-headline-sm text-2xl text-on-surface mb-1">{cat.title}</h3>
                <p className="font-body-sm text-[13px] leading-[20px] text-on-surface-variant mb-4">{cat.desc}</p>

                {cat.type === 'list' && (
                  <div className="flex flex-col gap-2">
                    {cat.items.map((item, j) => (
                      <div key={j} className="p-2 bg-surface-container-low rounded-lg flex items-center justify-between">
                        <span className="font-label-lg text-[13px] text-on-surface font-semibold">{item.name}</span>
                        <span className={`font-label-sm text-[10px] ${item.tagColor} uppercase`}>{item.tag}</span>
                      </div>
                    ))}
                  </div>
                )}

                {cat.type === 'chips' && (
                  <div className="flex flex-wrap gap-1">
                    {cat.chips.map((chip, j) => (
                      <span key={j} className={`px-3 py-1 rounded-full ${chip.featured ? 'bg-primary-fixed/30 text-primary font-label-md text-[11px] font-semibold' : 'bg-surface-container-high text-on-surface font-body-sm text-[13px]'}`}>
                        {chip.name}
                      </span>
                    ))}
                  </div>
                )}

                {cat.type === 'grid' && (
                  <div className="grid grid-cols-2 gap-2">
                    {cat.tools.map((tool, j) => (
                      <div key={j} className="p-2 bg-surface-container-low rounded-lg text-center">
                        <span className="font-label-md text-[11px] text-on-surface font-semibold">{tool}</span>
                      </div>
                    ))}
                  </div>
                )}

                {cat.type === 'checks' && (
                  <div className="flex flex-col gap-2">
                    {cat.softSkills.map((skill, j) => (
                      <div key={j} className="flex items-center gap-2 text-on-surface font-body-sm text-[13px]">
                        <span className="material-symbols-outlined text-[16px] text-primary-container">check_circle</span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-2 bg-surface-container-high/40 p-2 rounded-lg text-center font-label-sm text-[10px] text-on-surface-variant">
                {cat.footer}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
