import Reveal from './Reveal'

const contributions = [
  {
    icon: 'psychology',
    accent: 'primary-fixed',
    title: 'User Behavior & Requirement Modeling',
    desc: 'Conducted comprehensive user behavior and requirement analysis to model financial tracking and expense-splitting usage patterns across diverse social and event contexts.',
  },
  {
    icon: 'account_tree',
    accent: 'secondary-fixed',
    title: 'Structured Data Interpretation Flows',
    desc: 'Analyzed expense-tracking use cases and designed structured data interpretation flows for seamless group financial management, reducing calculation friction to zero.',
  },
  {
    icon: 'groups',
    accent: 'primary-fixed',
    title: 'Multi-Functional Feasibility Engineering',
    desc: 'Collaborated within a multi-functional team to align technical feature feasibility with real-world financial activity patterns and application security requirements.',
  },
]

const flowSteps = [
  { num: '01', title: 'User Activity Capture', desc: 'Expense ingestion & user tagging', icon: 'input', color: 'bg-primary-container text-on-primary' },
  { num: '02', title: 'Behavioral Matrix Analysis', desc: 'Split optimization & grouping logic', icon: 'hub', color: 'bg-primary-fixed text-primary' },
  { num: '03', title: 'Secure Ledger Settlement', desc: 'MySQL reconciliation & reporting', icon: 'verified_user', color: 'bg-secondary text-on-secondary' },
]

export default function Projects() {
  return (
    <section className="w-full bg-surface-container-low py-12 sm:py-18 scroll-mt-20" id="projects">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <Reveal animation="up" className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div>
            <span className="font-label-lg text-[13px] uppercase tracking-[0.08em] text-primary font-semibold">Masterwork Showcase</span>
            <h2 className="font-headline-lg text-[30px] leading-[38px] sm:text-[44px] sm:leading-[52px] tracking-[-0.015em] text-on-surface mt-1">CashMate Platform Architecture</h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-2">
            <span className="px-4 py-1 rounded-full bg-primary-container text-on-primary font-label-sm text-[10px] uppercase tracking-wider shadow-sm">Featured Project</span>
            <span className="px-4 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-[10px] uppercase tracking-wider">Aug 2025 – Dec 2025</span>
          </div>
        </Reveal>

        <Reveal animation="zoom" delay={100} className="bg-surface-container-lowest p-6 sm:p-8 lg:p-12 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-secondary font-label-md text-[11px] uppercase tracking-wider font-semibold mb-1">
                  <span>Smart Financial &amp; Event Management Platform</span>
                </div>
                <h3 className="font-headline-lg text-[34px] leading-[42px] sm:text-[44px] sm:leading-[52px] tracking-[-0.015em] text-on-surface mb-4">CashMate</h3>
                <p className="font-body-lg text-[15px] leading-[24px] sm:text-[18px] sm:leading-[28px] text-on-surface-variant leading-relaxed mb-6">
                  A multifaceted financial choreography system architected to unify expense tracking, group split-settlements, and event budgetary pacing into an intuitive and secure environment.
                </p>

                <div className="flex flex-col gap-4 mb-6">
                  {contributions.map((c, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full bg-${c.accent}/40 flex items-center justify-center ${c.accent === 'primary-fixed' ? 'text-primary' : 'text-secondary'} shrink-0 mt-0.5`}>
                        <span className="material-symbols-outlined text-[18px]">{c.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-label-lg text-[13px] text-on-surface font-semibold">{c.title}</h4>
                        <p className="font-body-md text-[15px] leading-[24px] text-on-surface-variant mt-0.5">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-4 bg-surface-container-low px-4 py-3 rounded-xl">
                <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold mr-1">Stack:</span>
                {['Python', 'PHP', 'MySQL', 'Web Technologies'].map((tech, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full ${i === 0 ? 'bg-surface-container-lowest text-primary' : 'bg-surface-container-lowest text-on-surface'} font-label-md text-[11px] font-semibold shadow-sm`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-surface-container-high/60 p-6 rounded-xl shadow-inner flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-[10px] uppercase tracking-[0.14em] text-secondary font-semibold">Architectural Schema</span>
                  <span className="inline-flex items-center gap-1 text-primary font-label-sm text-[10px]">
                    <span className="material-symbols-outlined text-[14px]">query_stats</span>
                    <span>Data Ingestion Flow</span>
                  </span>
                </div>

                <div className="space-y-3">
                  {flowSteps.map((step, i) => (
                    <div key={i}>
                      <div className="bg-surface-container-lowest p-4 rounded-lg shadow-sm flex items-center justify-between gap-2">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`w-8 h-8 rounded-full ${step.color} flex items-center justify-center font-bold text-[12px] shrink-0`}>{step.num}</div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-lg text-[12px] sm:text-[13px] text-on-surface font-semibold">{step.title}</span>
                            <span className="font-body-sm text-[12px] sm:text-[13px] leading-[20px] text-on-surface-variant">{step.desc}</span>
                          </div>
                        </div>
                        <span className={`material-symbols-outlined text-${i === 1 ? 'secondary' : 'primary-container'} text-[20px] shrink-0`}>{step.icon}</span>
                      </div>
                      {i < flowSteps.length - 1 && (
                        <div className="flex justify-center -my-2 text-primary-container">
                          <span className="material-symbols-outlined text-[18px]">south</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-1 p-3 bg-primary-fixed/20 rounded-lg flex items-center justify-between">
                  <span className="font-body-sm text-[13px] leading-[20px] text-on-surface font-medium">Group Settlement Friction Reduction</span>
                  <span className="font-headline-sm text-2xl text-primary font-bold">~40%</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
