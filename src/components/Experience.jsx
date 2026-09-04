import Reveal from './Reveal'

export default function Experience() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 lg:px-8 py-12 sm:py-18 scroll-mt-20" id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <Reveal animation="left" className="lg:col-span-4 flex flex-col">
          <span className="font-label-lg text-[13px] uppercase tracking-[0.08em] text-primary font-semibold">Performance in Residence</span>
          <h2 className="font-headline-lg text-[30px] leading-[38px] sm:text-[44px] sm:leading-[52px] tracking-[-0.015em] text-on-surface mt-1">Professional Apprenticeship</h2>
          <p className="font-body-md text-[15px] leading-[24px] text-on-surface-variant mt-4 leading-relaxed">
            Executing disciplined Python applications in a fast-paced development sprint, translating conceptual paradigms into maintainable code scripts.
          </p>

          <div className="mt-8 p-6 rounded-xl bg-surface-container-low shadow-sm">
            <span className="material-symbols-outlined text-primary-container text-[28px] mb-2 block">format_quote</span>
            <p className="font-body-md text-[15px] leading-[24px] text-on-surface-variant italic">
              &ldquo;Structured modular design is like choreography: every subroutine must enter with intention, sustain its balance, and exit seamlessly.&rdquo;
            </p>
            <span className="block mt-2 font-label-sm text-[10px] text-primary uppercase tracking-wider font-semibold">&mdash; Katha Nandy</span>
          </div>
        </Reveal>

        <Reveal animation="right" delay={150} className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-md relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-2 mb-4">
              <div>
                <span className="font-label-sm text-[10px] uppercase tracking-[0.14em] text-secondary font-semibold">Summer Residency</span>
                <h3 className="font-headline-sm text-xl sm:text-2xl text-on-surface">Python Developer Intern</h3>
                <span className="font-body-md text-[15px] leading-[24px] text-primary font-medium">InternPe &bull; Remote</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-surface-container-high text-on-surface font-label-md text-[11px] self-start sm:self-auto">
                <span className="material-symbols-outlined text-[16px] text-primary-container">calendar_today</span>
                <span>Jun 2025 – Jul 2025</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 my-4">
              {[
                { icon: 'developer_mode', accent: 'primary-fixed', text: <span>Developed and deployed <strong className="text-on-surface font-semibold">5+ practical, real-world Python applications</strong> focusing on core algorithms, data processing, and user interaction logic.</span> },
                { icon: 'clean_hands', accent: 'secondary-fixed', text: 'Applied clean coding practices, structured modular design, and efficient debugging techniques across all projects to ensure reliability and maintainability.' },
                { icon: 'speed', accent: 'primary-fixed', text: 'Utilized standard Python libraries to solve computational tasks and enhanced profound practical understanding of script automation and workflow pipelines.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full bg-${item.accent}/50 flex items-center justify-center ${i % 2 === 0 ? 'text-primary' : 'text-secondary'} shrink-0 mt-1`}>
                    <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                  </div>
                  <p className="font-body-md text-[15px] leading-[24px] text-on-surface-variant leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 mt-4 bg-surface-container-low px-4 py-3 rounded-lg flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="font-label-sm text-[10px] text-on-surface-variant font-semibold uppercase">Technologies:</span>
                <span className="font-label-md text-[11px] text-on-surface font-medium">Python 3.x &bull; OOP Architecture &bull; Standard Libs &bull; Git</span>
              </div>
              <span className="font-label-sm text-[10px] text-secondary font-semibold uppercase tracking-wider">Completed with Excellence</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
