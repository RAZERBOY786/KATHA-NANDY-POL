import Reveal from './Reveal'

const education = [
  {
    icon: 'workspace_premium',
    status: 'In Progress',
    statusColor: 'bg-primary-container text-on-primary',
    year: '2023 – 2027',
    title: 'Bachelor of Computer Applications (Honours)',
    institution: 'Brainware University • Kolkata, West Bengal',
    description: null,
    score: '8.38',
    scoreLabel: 'CGPA out of 10.0',
    scoreTitle: 'Standing',
    scoreColor: 'text-primary-container',
    courses: ['Web Application Security', 'Python Programming', 'Database Management (MySQL)', 'C Programming', 'Data Structures', 'Computer Networks'],
  },
  {
    icon: 'menu_book',
    status: 'Completed',
    statusColor: 'bg-surface-variant text-on-surface-variant',
    year: 'Year of Passing: 2023',
    title: 'Higher Secondary Examination (Class XII)',
    institution: 'West Bengal Board of Higher Secondary Education (WBCHSE)',
    description: 'Developed advanced analytical discipline, scientific reasoning, and mathematical logic leading to software orientation.',
    score: '68%',
    scoreLabel: 'Standard Merit',
    scoreTitle: 'Aggregate',
    scoreColor: 'text-on-surface',
    courses: [],
  },
  {
    icon: 'stars',
    status: 'Distinction Merit',
    statusColor: 'bg-primary-fixed-dim text-on-primary-fixed font-semibold',
    year: 'Year of Passing: 2021',
    title: 'Secondary Examination (Class X)',
    institution: 'West Bengal Board of Secondary Education (WBBSE)',
    description: 'Exceptional scholastic performance demonstrating rigorous attention to detail and analytical aptitude.',
    score: '90%',
    scoreLabel: 'Class Distinction',
    scoreTitle: 'Honor Mark',
    scoreColor: 'text-primary',
    courses: [],
  },
]

export default function Education() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 lg:px-8 py-12 sm:py-18 scroll-mt-20" id="education">
      <Reveal animation="up" className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
        <div>
          <span className="font-label-lg text-[13px] uppercase tracking-[0.08em] text-primary font-semibold">Academic Rhythm</span>
          <h2 className="font-headline-lg text-[30px] leading-[38px] sm:text-[44px] sm:leading-[52px] tracking-[-0.015em] text-on-surface mt-1">Educational Foundations &amp; Pedigree</h2>
        </div>
        <p className="font-body-md text-[15px] leading-[24px] text-on-surface-variant max-w-md mt-4 md:mt-0">
          Carefully choreographed academic steps: establishing mathematical foundations, building software synthesis, and refining cyber defense.
        </p>
      </Reveal>

      <div className="relative flex flex-col gap-6 sm:gap-8">
        {education.map((edu, i) => (
          <Reveal key={i} animation="up" delay={i * 120} className="bg-surface-container-low p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative">
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-full ${i === 0 ? 'bg-primary-fixed text-primary' : i === 1 ? 'bg-surface-container-high text-on-surface' : 'bg-primary-fixed text-primary-container'} flex items-center justify-center font-headline-sm shrink-0 shadow-inner`}>
                <span className="material-symbols-outlined">{edu.icon}</span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className={`px-3 py-1 rounded-full ${edu.statusColor} font-label-sm text-[10px] uppercase tracking-wider`}>{edu.status}</span>
                  <span className="font-label-md text-[11px] text-secondary font-medium tracking-wide">{edu.year}</span>
                </div>
                <h3 className="font-headline-sm text-xl sm:text-2xl text-on-surface leading-tight">{edu.title}</h3>
                <span className="font-body-md text-[14px] sm:text-[15px] leading-[24px] text-on-surface-variant font-medium">{edu.institution}</span>
                {edu.description && (
                  <p className="font-body-sm text-[13px] leading-[20px] text-on-surface-variant mt-2">{edu.description}</p>
                )}
                {edu.courses.length > 0 && (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="font-label-sm text-[10px] text-on-surface-variant mr-1 font-semibold uppercase tracking-wider">Curriculum Focus:</span>
                    {edu.courses.map((c, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface font-body-sm text-[13px] leading-[20px] shadow-sm">{c}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex lg:flex-col items-center lg:items-end justify-between bg-surface-container-lowest px-6 py-4 rounded-xl shadow-sm shrink-0">
              <span className="font-label-sm text-[10px] uppercase tracking-[0.14em] text-on-surface-variant">{edu.scoreTitle}</span>
              <span className={`font-display-hero text-[48px] leading-[56px] sm:text-[64px] sm:leading-[72px] tracking-[-0.02em] font-bold ${edu.scoreColor}`}>{edu.score}</span>
              <span className="font-label-md text-[11px] text-secondary font-semibold">{edu.scoreLabel}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
